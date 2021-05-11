# Version 1.7.1


## 신규 추가/개선 기능

### Excel Export 기능 대폭 개선

- 이제 Console 에서 Region/Project 별 전체 Cloud Resource 추출이 가능 합니다.

### Custom Table 기능 추가

- 드디어 Cloud Resource 조회시 보고 싶은 항목을 선택 가능 합니다. 

### Project 기능 개선

- 이제 설정된 Project를 다른 Project Group으로 이동할 수 있습니다.

### Monitoring 기능 개선

- Monitoring Tab 클릭시 메트릭 조회 속도가 향상 되었습니다.
- 지원하는 Metric Source를 자동으로 Sensing 하여 보여줍니다. 
- 신규 Graph Framework도입으로 Metric UI의 가독성이 향상 되었습니다.

### Bugfix

- 각 MicroService에 대한 기능 안정화 BugFix 적용


## Plugin 

### 신규 Plugin 추가
- 신규 Power Scheduler Controller가 추가 되었습니다.
  - azure-power-controller 
 

### 호환 플러그인 리스트

SpaceONE v1.7.1 에 호환되는 플러그인 버전을 안내 드립니다.
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

|추가여부|plugin 종류|Provider|플러그인 이름|버전|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|keycloak|plugin-keycloak-oidc|v1.1|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|Updated|inventory.Collector|aws|aws-trusted-advisor|v1.4|
|-|inventory.Collector|aws|aws-ec2|v1.12|
|Updated|inventory.Collector|aws|aws-cloud-service|v1.10.0|
|-|inventory.Collector|aws|aws-power-state|v1.6|
|Updated|inventory.Collector|aws|aws-personal-health-dashboard|v1.4|
|Updated|inventory.Collector|google cloud|google-cloud-compute|v1.2.7|
|Updated|inventory.Collector|google cloud|google-cloud-services|v1.2.６|
|-|inventory.Collector|google cloud|google-cloud-power-state|v1.1.3|
|-|inventory.Collector|azure|azure-vm|v1.2.4|
|Updated|inventory.Collector|azure|azure-cloud-services|v1.1.10|
|-|inventory.Collector|azure|azure-power-state|v1.0.2|
|-|inventory.Collector|oracle|oracle-cloud-services|v1.0|
|-|inventory.Collector|alibaba|alibaba-cloud-ecs|v1.0|
|Updated|inventory.Collector|spaceone|monitoring-metric-collector|v1.2.2|
|Updated|monitoring.DataSource|aws|aws-cloudwatch|v1.1.3|
|Updated|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.6|
|Updated|monitoring.DataSource|azure|azure-monitor|v1.0.3|
|-|power_scheduler.Controller|aws|aws-power-scheduler-controller|v1.4.4|
|Updated|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.1.4|
|New|power_scheduler.Controller|azure|azure-power-controller|v1.0.1|
|-|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|


## Hotfix Update
|일자|Micro Service|Version|변경사항|
|---|:---:|:---:|:---:|
|-|-|-|-|

