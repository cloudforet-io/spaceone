# Version 1.5.1

## Release Notes


### PowerScheduler 서비스 추가(beta)

- 사용자의 업무 패턴에 맞게, Cloud Server의 Power State를 관리 해주는 PowerScheduler 서비스를 신규로 추가 하였습니다! 
- 지정한 서버 그룹을 스케쥴 기반 자동으로 Stop/Start 관리가 가능합니다. 

 
### Main Dashboard 기능개선

- SpaceOne Main Dashboard 가 리뉴얼 되었습니다.
- Compute/Database/Storage/Billing 분류에 따라 전체 서비스 사용 현황을 편리하게 확인 가능합니다.
- 즐겨찾기로 등록한 Project/Cloud Service 로 편리한 이동이 가능합니다. 
- 지역별 분산되어있는 Cloud Resource 현황을 한눈에 확인 가능합니다. 
- Project 별 Cloud Resource 사용량을 더 신속하게 확인 가능합니다.
- 사용자의 운영 편의를 위한 다양한 widget을 지속적으로 개발해 나갈 예정입니다.    

| **중요**: 통계 데이터 수집을 위한 쿼리 변경으로, 기존 수집 중이었던 EC2 및 Cloud Service 일별 데이터가 리셋 됩니다.|
| --- |


### SpaceOne Console 다국어 지원 

- 해외 사용자를 위한 Console 다국어 지원 추가(ko/en/jp)
- Profile의 언어 설정 변경으로 가능합니다. 


### 즐겨찾기 기능 추가

- Project와 Cloud Service 에 즐겨찾기 설정이 가능합니다. 
- 사용자별 자주 찾아보는 Project와 Cloud Service를 등록하여, 신속한 리소스 현황 파악이 가능합니다.

### Cloud Service Category 분류 세분화

- Cloud Service의 분류 체계를 Major/Minor 서비스로 세분화 하였습니다.
- 각 Cloud Resource별 가장 핵심이 되는 자원들을 뻐르게 찾아볼 수 있습니다.


### Plugin 확장/기능개선

- google-cloud-service plugin 추가
- Cloud SQL, Instance Group, Instance Template, Machine Image 서비스 수집이 가능합니다.
- azure compute plugin 추가
- azure의 Virtual Machine 정보를 수집할 수 있습니다. 
- (power-scheduler 전용) aws-power-state/google-cloud-power-state plugin 추가 
- 기타 plugin의 버그 패치 


### 버그픽스

- Collector의 세부 정보 탭에서 Last Collected/Created 정보 누략
- 기타 minor한 UI bug


## Plugin 호환 버전 
SpaceOne v1.5.1 에 호환되는 플러그인 버전을 안내 드립니다. 
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

|plugin 종류|Provider|플러그인 이름|버전|
|---|:---:|:---:|:---:|
|inventory.Collector|aws|aws-ec2|v1.4|
|inventory.Collector|aws|aws-cloud-service|v1.2|
|inventory.Collector|aws|plugin-aws-power-state|v1.2|
|inventory.Collector|google cloud|google-cloud-compute|v1.1|
|inventory.Collector|google cloud|google-cloud-services|v1.0|
|inventory.Collector|google cloud|plugin-google-cloud-power-state|v1.0|
|inventory.Collector|Azure|azure-vm|v1.1|
|monitoring.DataSource|aws|aws-cloudwatch|v1.0|
|monitoring.DataSource|aws|aws-health|v1.0|
|monitoring.DataSource|aws|google-cloud-stackdriver|v1.0.1|
|power_scheduler.Controller|aws|plugin-aws-power-scheduler-controller|v1.0|
|power_scheduler.Controller|google cloud|plugin-google-cloud-power-scheduler-controller|v1.0|

## Hotfix Update




