# Version 1.7.2


## 신규 추가/개선 기능

### API key 관리 기능 추가
- 이제 Console 에서 사용자별 API Key 를 관리 할 수 있습니다. 
- API 연동이나 spacectl 사용시 활용할 수 있습니다.

### Console Handbook 기능 추가
- 서비스에 대한 소개 및 사용방안에 대한 안내를 Console 내에서 편하게 확인할 수 있습니다. 
- Console 내의 여러 기능들을 편리하게 사용하실 수 있도록 지속적으로 확대 예정입니다. 

### spacectl 사용 가능
- spaceone의 cli tool인 spacectl을 사용 가능 합니다.
- 상세 사용 방안은 spacectl github 을 참고해주세요.(https://github.com/spaceone-dev/spacectl)

### Bugfix
- 각 MicroService에 대한 기능 안정화 BugFix 적용


## Plugin 


### 호환 플러그인 리스트

SpaceONE v1.7.2 에 호환되는 플러그인 버전을 안내 드립니다.
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

|추가여부|plugin 종류|Provider|플러그인 이름|버전|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|keycloak|plugin-keycloak-oidc|v1.1|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|-|inventory.Collector|aws|aws-trusted-advisor|v1.4|
|-|inventory.Collector|aws|aws-ec2|v1.12|
|Updated|inventory.Collector|aws|aws-cloud-service|v1.10.1|
|-|inventory.Collector|aws|aws-power-state|v1.6|
|-|inventory.Collector|aws|aws-personal-health-dashboard|v1.4|
|-|inventory.Collector|google cloud|google-cloud-compute|v1.2.7|
|-|inventory.Collector|google cloud|google-cloud-services|v1.2.６|
|-|inventory.Collector|google cloud|google-cloud-power-state|v1.1.3|
|Updated|inventory.Collector|azure|azure-vm|v1.2.11|
|-|inventory.Collector|azure|azure-cloud-services|v1.1.10|
|-|inventory.Collector|azure|azure-power-state|v1.0.2|
|-|inventory.Collector|oracle|oracle-cloud-services|v1.0|
|-|inventory.Collector|alibaba|alibaba-cloud-ecs|v1.0|
|-|inventory.Collector|spaceone|monitoring-metric-collector|v1.2.2|
|-|monitoring.DataSource|aws|aws-cloudwatch|v1.1.3|
|-|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.6|
|-|monitoring.DataSource|azure|azure-monitor|v1.0.3|
|-|power_scheduler.Controller|aws|aws-power-scheduler-controller|v1.4.4|
|-|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.1.4|
|-|power_scheduler.Controller|azure|azure-power-controller|v1.0.1|
|-|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|


## Hotfix Update
|일자|Micro Service|Version|변경사항|
|---|:---:|:---:|:---:|
|-|-|-|-|


