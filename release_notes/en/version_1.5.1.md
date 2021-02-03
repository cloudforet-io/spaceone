# Version 1.5.1

## Release Notes


### PowerScheduler service (beta)

- PowerScheduler service to manages the Cloud Server's Power State according to the user's work pattern!
- Auto on/off scheduler to manage server resources cost within certain user customized group.

 
### Main Dashboard improvement

- Brand new SpaceOne Main Dashboard!
- Categorized View for Compute/Database/Storage/Billing services.  
- Move to your favorite Project/Cloud Service with one click on the bookmark.
- Check the status of Cloud Resources distributed by region at a glance.
- Check the Cloud Resource usage by project more quickly.
- New various widgets for user to boost operation convenience is upcoming soon. 

| **Note**: the previous EC2 and Cloud Service daily data will be reset due to changing in query to collect statistical data.|
| --- |


### Multi-Language support on Space One Console

- Multi language support for overseas users on Console (ko/en/jp)
- You can change your language setting on user profile. 


### Bookmark functionality

- Bookmark function is available for favorites Project and Cloud Service. 
- Bookmark function for frequently access projects and cloud services per user to help to find resource status.

### Reorganized Category in Cloud Services

- The classification for Cloud Service has been subdivided into Major & Minor services.
- You access to the most core resources quickly for each Cloud services.


### Plugin Expansion/function improvement

- Cloud SQL, Instance Group, Instance Template, Machine Image service collectors are available.
- Azure compute plugin is now available (Azure). 
- View for azure's Virtual Machine information.
- (Power-Scheduler only) added aws-power-state/google-cloud-power-state plugin
- Other plugin bug fixes


### Bug fix

- Last Collected/Created information is missing in Collector's details tab
- Other minor UI bugs


## Plugin compatible version
Plugins compatible version info for SpaceOne v1.5.1. 
Updates may requires with following versions if service doesn't work as necessary.

|plugin Type|Provider|Plugin name|Version|
|---|:---:|:---:|:---:|
|inventory.Collector|aws|aws-ec2|v1.4|
|inventory.Collector|aws|aws-cloud-service|v1.2|
|inventory.Collector|aws|plugin-aws-power-state|v1.2|
|inventory.Collector|google cloud|google-cloud-compute|v1.1|
|inventory.Collector|google cloud|google-cloud-services|v1.0.2|
|inventory.Collector|google cloud|google-cloud-power-state|v1.0|
|inventory.Collector|Azure|azure-vm|v1.1|
|monitoring.DataSource|aws|aws-cloudwatch|v1.0.2|
|monitoring.DataSource|aws|aws-health|v1.0.2|
|monitoring.DataSource|aws|google-cloud-stackdriver|v1.0.1|
|power_scheduler.Controller|aws|aws-power-controller|v1.0|
|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.0|

## Hotfix Update
|Date|Micro Service|Version|Fixed Issue|
|---|:---:|:---:|:---:|
|2020.11.24|console|1.5.1.2|query filter missing fixed|
|2020.11.25|inventory|1.5.1.3|garbage collection issue fixed|
|2020.11.25|console-api|1.5.1.4|dashboard loading latency decreased|



