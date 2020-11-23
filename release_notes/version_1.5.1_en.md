# Version 1.5.1

## Release Notes


### PowerScheduler service (beta)

- PowerScheduler service to manages the Cloud Server's Power State according to the user's work pattern!
- Schedule-based automatic stop/start management of the specified server group is possible.

 
### Main Dashboard 기능개선

- SpaceOne Main Dashboard 가 리뉴얼 되었습니다.
- Compute/Database/Storage/Billing 분류에 따라 전체 서비스 사용 현황을 편리하게 확인 가능합니다.
- 즐겨찾기로 등록한 Project/Cloud Service 로 편리한 이동이 가능합니다. 
- 지역별 분산되어있는 Cloud Resource 현황을 한눈에 확인 가능합니다. 
- Project 별 Cloud Resource 사용량을 더 신속하게 확인 가능합니다.
- 사용자의 운영 편의를 위한 다양한 widget을 지속적으로 개발해 나갈 예정입니다.    

| **중요**: 통계 데이터 수집을 위한 쿼리 변경으로, 기존 수집 중이었던 EC2 및 Cloud Service 일별 데이터가 리셋 됩니다.|
| --- |


### Multi-Language support on Space One Console

- Multi language support for overseas users on Console (ko/en/jp)
- You can change your language setting on user profile. 


### Bookmark functionality

- Bookmark function is available for favorites Project and Cloud Service. 
- Bookmark function for frequently access projects and cloud services per user to help to find resource status.

### Cloud Service Category 분류 세분화

- Cloud Service의 분류 체계를 Major/Minor 서비스로 세분화 하였습니다.
- 각 Cloud Resource별 가장 핵심이 되는 자원들을 뻐르게 찾아볼 수 있습니다.


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
|inventory.Collector|google cloud|plugin-google-cloud-power-state|v1.0|
|inventory.Collector|Azure|azure-vm|v1.1|
|monitoring.DataSource|aws|aws-cloudwatch|v1.0.2|
|monitoring.DataSource|aws|aws-health|v1.0.2|
|monitoring.DataSource|aws|google-cloud-stackdriver|v1.0.1|
|power_scheduler.Controller|aws|plugin-aws-power-scheduler-controller|v1.0|
|power_scheduler.Controller|google cloud|plugin-google-cloud-power-scheduler-controller|v1.0|

## Hotfix Update




