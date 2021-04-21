# Version 1.5.3


## New additional features

### 1. Cloud cost management function (Billing Management Widget)

-Now, the status of cloud resources and cost status in use can be integrated and managed in SpaceONE. (Megazone Hyperbilling Plugin is required to be activated)
-You can easily manage multi-cloud and expense information scattered by account through SpaceONE.


### 2. Multi Cloud resource integrated management/monitoring function

-Provides integrated management function for 3 Global Public Cloud companies (AWS, Azure, Google Cloud).
-You can now manage/monitor resources through SpaceONE without logging in to the Cloud Console provided by each company.


### 3. Dashboard Widget

**AWS Trusted Advisor Widget**

-You can conveniently use Trusted Advisor, AWS' cost/security optimization management function through SpaceONE.
-We understand at a glance the factors suggested by Trusted Advisor and support you to take quick action


**AWS Personal Health Dashboard Widget**

-You can conveniently check the list of AWS operations and failures and cloud resources affected by this.



**Role Based Access Control(RBAC, Alpha Release)**

-Now you can manage domain members by classifying them by role.
-It is possible to manage API level functions/access rights by dividing users into Domain Admin, Project Admin, and Project User levels.
-We are continuing to update to Alpha Release.


### 5. Multi authentication function

-Multiple authentication backends can be linked.
-Create a flexible collaboration environment through various combinations such as ID/PW, oAuth2, KeyClock, and ActiveDirectory.

### 6. Console Login Page Renewal

-The design, performance & stability of the user login page have been improved.
-Provides SSO function (in case of oAuth2 authentication)

## Bug fixes

-Improved a number of minor bugs related to API authentication
-PowerScheduler Console Bug fix


## Cloud Service List that can be collected/monitored

### AWS
-Collectible services: EC2, ELB, VPC, S3, RDS, DocumentDB, DynamoDB, EKS, ECR, ECS, EFS, API Gateway, AutoScaling, CloudFront, CloudTrail, DirectConnect, Security Group, EIP, IAM, KMS, Lambda, Redshift , Route53, Secrets Manager, SNS, SQS, Personal Health Dashboard, Trusted Advisor
-Monitoring linkage: cloudwatch

### Azure
-Collectible services: Server, Snapshot, Disk
-Monitoring interlocking: azure monitor

### Google Cloud
-Collectible services: Server, Instance Group, Instance Template, Machine Images, Disk, Snapshot, Storage, Cloud SQL, VPC
-Monitoring integration: google stackdriver

### Future plans
-We plan to expand to major domestic and foreign clouds such as Alibaba Cloud, Oracle Cloud, vSphere, Openstack, Naver Cloud, and KT Cloud.


## Plugin
Introducing the plug-in version compatible with SpaceOne v1.5.3.
If there is something wrong with the function, the latest update of the plugin to the version below is required.

### Compatible plugin list

|whether added|plugin type|Provider|plug-in name|version|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|new|inventory.Collector|aws|aws-trusted-advisor|v1.1|
|-|inventory.Collector|aws|aws-ec2|v1.7|
|-|inventory.Collector|aws|aws-cloud-service|v1.5|
|-|inventory.Collector|aws|plugin-aws-power-state|v1.3|
|new|inventory.Collector|aws|aws-personal-health-dashboard|v1.0|
|-|inventory.Collector|google cloud|google-cloud-compute|v1.2|
|-|inventory.Collector|google cloud|google-cloud-services|v1.1|
|-|inventory.Collector|google cloud|google-cloud-power-state|v1.0|
|-|inventory.Collector|azure|azure-vm|v1.2|
|new|inventory.Collector|azure|azure-cloud-services|v1.0|
|new|inventory.Collector|azure|azure-power-state|v1.0|
|new|inventory.Collector|spaceone|monitoring-metric-collector|v1.0|
|-|monitoring.DataSource|aws|aws-cloudwatch|v1.1|
|-|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.2|
|new|monitoring.DataSource|aws|azure-monitor|v1.0|
|-|power_scheduler.Controller|aws|aws-power-controller|v1.0|
|-|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.0.1|
|new|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|


### Plug-ins not supported
-The target plugin is replaced by aws-personal-health-dashboard to provide a function.
-Uninstallation is required when installing version 1.5.3.

|plugin type|Provider|plug-in name|version|
|---|:---:|:---:|:---:|
|monitoring.DataSource|aws|aws-health|v1.0.2|

## Hotfix Update
|Date|Micro Service|Version|Changes|
|---|:---:|:---:|:---:|
|2020.12.30|inventory|1.5.3.5|modified resource collecting stability issue|
|2020.12.30|identity|1.5.3.1|fixed minor bug|
|2020.12.30|console-api|1.5.3.1|fixed minor bug|
|2020.12.30|repository|1.5.3.1|fixed minor bug|
|2020.01.04|console|1.5.3.1|fixed minor bug|
|2020.01.11|console|1.5.3.2|fix power-scheduler|
|2020.01.11|console-api|1.5.3.2|fix power-scheduler|

