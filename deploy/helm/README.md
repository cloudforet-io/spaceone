# Pre-condition

* AWS API Key for secret service

## Certificates

* certificate for TLS (using AWS Certificate Manager)

Define your SpaceONE domain.
In this example, we assume **cloudeco.io**

**Request a certificate**, with
- *.console.cloudeco.io
- *.cloudeco.io

Prepare your ARN of certificate
~~~
arn:aws:acm:us-west-1:111111111111:certificate/214b530c-bd15-4ab6-a1eb-2222222222
~~~

# Update configuration

## create namespace

We needs two namespaces.

* spaceone is for spaceone-core services.
* root-supervisor is for plugins like ec2-collector

~~~bash
kubectl create ns spaceone
kubectl create ns root-supervisor
kubectl config set-context --current --namespace=spaceone
~~~

## Prepare pre-conditions

Prepare your mongo-shard.pem (Ask your database engineer or infrastructure engineer).

TODO: update mongos-conf.yaml for your environment.

~~~
cd pre-condition
kubectl create secret generic mongo-shard-key --from-file=mongo-shard.pem
kubectl apply -f mongos-conf.yaml
kubectl apply -f shared.yaml
~~~

## Update value files

* values.yaml
* config/database.yaml
* config/nlb.yaml

* Update credentials for secret service

  - aws_access_key_id
  - aws_secret_access_key
  - region_name

File: values.yaml

~~~
secret:
    enabled: true

    application:
        CONNECTORS:
            AWSSecretManagerConnector:
                aws_access_key_id: aaaaaaaaa
                aws_secret_access_key: bbbbbbbbbbbbbbbb
                region_name: ap-northeast-1

repository:
    application:
        CONNECTORS:
            RegistryConnector:
                host: https://257706363616.dkr.ecr.ap-northeast-2.amazonaws.com
                verify_ssl: False
                api_version: 2
                username: AWS

~~~

## Update certificate

### Option A. ALB

* Update certificate for ALB

FILE: config/alb.yaml

* console.console_api
* ingress/annotations.alb.ingress.kubernetes.io/certificate-arn
* endpoint

~~~
console:
    console_api: https://console-api.cloudeco.io
    service:
        type: NodePort


console-api:
    service:
        type: NodePort

ingress:
    enabled: true
    name: ingress
    annotations:
        kubernetes.io/ingress.class: alb
        alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS":443}]'
        alb.ingress.kubernetes.io/actions.ssl-redirect: '{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}'
        alb.ingress.kubernetes.io/inbound-cidrs: 0.0.0.0/0 
        alb.ingress.kubernetes.io/scheme: "internet-facing"
        alb.ingress.kubernetes.io/target-type: instance 
        alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:us-west-1:257706363616:certificate/214b530c-bd15-4ab6-a1eb-b6ea1fca6510"

    endpoint:
        console: "console.cloudeco.io"
        console_api: "console-api.cloudeco.io"
~~~

### Option B. NLB

* Update certificate for NLB

FILE: config/nlb.yaml

- console_api : https://console-api.<Your domain>
- service.beta.kubernetes.io/aws-load-balancer-ssl-cert: < Your Certificate ARN>

~~~
console:
    console_api: https://console-api.cloudeco.io
    service:
        type: LoadBalancer
        annotations:
            service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
            service.beta.kubernetes.io/aws-load-balancer-ssl-cert: "arn:aws:acm:us-west-1:111111111111:certificate/214b530c-bd15-4ab6-a1eb-2222222222"
            service.beta.kubernetes.io/aws-load-balancer-ssl-ports: "443"


console-api:
    service:
        type: LoadBalancer
        annotations:
            service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
            service.beta.kubernetes.io/aws-load-balancer-ssl-cert: "arn:aws:acm:us-west-1:111111111111:certificate/214b530c-bd15-4ab6-a1eb-2222222222"
            service.beta.kubernetes.io/aws-load-balancer-ssl-ports: "443"

ingress:
    enabled: false

~~~

## Update CORS

File: charts/console-api/config/production.json

~~~
"https://*.console.<YOUR DOMAIN>" 
~~~
# Install SpaceONE

~~~bash
# Option A. ALB
helm install sp -f values.yaml -f config/version.yaml -f config/database.yaml -f config/sidecar.yaml -f config/alb.yaml .

# Option B. NLB
# helm install sp -f values.yaml -f config/version.yaml -f config/database.yaml -f config/sidecar.yaml -f config/nlb.yaml . 

# For developer (not using mongodb shard)
# helm install sp -f value.yaml -f config/nlb.yaml . 
~~~

# Update your Route53

## Option A. ALB

check your ingress

~~~bash
root@helm-dev-kubectl:~/installer# kubectl get ingress
NAME          HOSTS                                           ADDRESS                                                                  PORTS   AGE
alb-ingress   *.console.cloudeco.io,console-api.cloudeco.io   k8s-spaceone-albingre-447ee5d316-677870787.us-west-1.elb.amazonaws.com   80      101m
~~~

## Option B. NLB

check your svc

~~~bash
root@helm-dev-kubectl:~/installer# k get svc
NAME              TYPE           CLUSTER-IP       EXTERNAL-IP                                                                     PORT(S)                      AGE
billing           ClusterIP      172.20.85.130    <none>                                                                          50051/TCP                    23m
config            ClusterIP      172.20.149.180   <none>                                                                          50051/TCP                    23m
console           LoadBalancer   172.20.44.3      a44e44238369c4677b1c1b6d1e9ff79c-16a4eafdb3b340af.elb.us-west-1.amazonaws.com   80:31258/TCP,443:30846/TCP   23m
console-api       LoadBalancer   172.20.100.74    a58fd0184d7cf4e44b25b86ae6d9f9b9-e644013644f905ca.elb.us-west-1.amazonaws.com   80:31190/TCP,443:31039/TCP   23m
~~~

create records in your hostzone 

* *.console.cloudeco.io  (alias console)
* console-api.cloudeco.io (alias console-api)


# Create User Domain

It is highly recommended to create user domain instead of using root domain.

charts/domain-initialzer is a tool for user domain

Update charts/domain-initialzer/values.yaml

* domain_name
* domain_owner_password
* username
* password

~~~
    var:
      domain_name: your_domain_name
      domain_owner: admin
      domain_owner_password: Admin1234567890
      username: user1@example.com
      password: User1234!
 
~~~

Create 

~~~
cd charts/domain-initialzer/
helm install domain .
~~~

You can access **https://<domain_name>.<console domain>**

like https://your_domain_name.console.cloudeco.io


