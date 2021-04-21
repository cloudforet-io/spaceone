# Version 1.6.7


## 신규 추가/개선 기능

### Project Group 기능 개선

- 이제 설정된 Project Group을 다른 Tree로 이동할 수 있습니다.

### 관리자 기능 개선

- 이제 Domain의 관리자가 멤버의 Profile을 변경할 수 있습니다. Member의 PW 분실시 관리자 권한으로 변경이 가능합니다. 

### Bugfix
- 각 MicroService에 대한 기능 안정화 BugFix 적용


## Plugin 

### 신규 Plugin 추가
- 신규 Inventory Collector가 추가 되었습니다.
  - Oracle Cloud Infrastructure(OCI) 
  - Alibaba Cloud
    
### 호환 플러그인 리스트

SpaceONE v1.6.7 에 호환되는 플러그인 버전을 안내 드립니다.
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

|추가여부|plugin 종류|Provider|플러그인 이름|버전|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|-|inventory.Collector|aws|aws-trusted-advisor|v1.3|
|Updated|inventory.Collector|aws|aws-ec2|v1.12|
|Updated|inventory.Collector|aws|aws-cloud-service|v1.9.6|
|Updated|inventory.Collector|aws|aws-power-state|v1.6|
|Updated|inventory.Collector|aws|aws-personal-health-dashboard|v1.3|
|Updated|inventory.Collector|google cloud|google-cloud-compute|v1.2.6|
|Updated|inventory.Collector|google cloud|google-cloud-services|v1.2.4|
|Updated|inventory.Collector|google cloud|google-cloud-power-state|v1.1.3|
|Updated|inventory.Collector|azure|azure-vm|v1.2.4|
|Updated|inventory.Collector|azure|azure-cloud-services|v1.1.3|
|Updated|inventory.Collector|azure|azure-power-state|v1.0.2|
|New|inventory.Collector|oracle|oracle-cloud-services|v1.0|
|New|inventory.Collector|alibaba|alibaba-cloud-ecs|v1.0|
|Updated|inventory.Collector|spaceone|monitoring-metric-collector|v1.2.1|
|Updated|monitoring.DataSource|aws|aws-cloudwatch|v1.1.2|
|Updated|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.5|
|Updated|monitoring.DataSource|aws|azure-monitor|v1.0.3|
|Updated|power_scheduler.Controller|aws|aws-power-scheduler-controller|v1.4.4|
|Updated|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.1.3|
|-|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|


## Hotfix Update
|일자|Micro Service|Version|변경사항|
|---|:---:|:---:|:---:|
|-|-|-|-|

