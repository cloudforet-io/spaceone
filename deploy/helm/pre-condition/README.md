This step is required before run spaceone-helm chart.

# Mongo Shard Cluster
If you use mongodb shard cluster, run
~~~
kubectl create secret generic mongo-shard-key --from-file=mongo-shard.pem -n spaceone
~~~

# Shared configuration

shared configmap is a configmap every service has.
