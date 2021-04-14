# Version 1.6.7


## 신규 추가/개선 기능

각 MicroService에 대한 기능 안정화 BugFix 적용

|서비스|버전   |
|---   |---    |
| console     		| 1.6.7-rc3    |
| console-api     	| 1.6.7-rc1    |
| identity     		| 1.6.7-rc1    |
| secret     		| 1.6.7-rc1    |
| repository     	| 1.6.7-rc1    |
| plugin     		| 1.6.7-rc1    |
| config     		| 1.6.7-rc1    |
| inventory     	| 1.6.7-rc1    |
| monitoring     	| 1.6.7-rc2    |
| statistics     	| 1.6.7-rc1    |
| billing     		| 1.6.7-rc1    |
| power-scheduler   | 1.6.7-rc1    |
| supervisor     	| 1.6.7-rc1    |
| cost-saving     	| 1.6.7-rc2    |
| spot-automation   | 1.6.7-rc2    |

## Plugin 
SpaceONE v1.6.7 에 호환되는 플러그인 버전을 안내 드립니다. 
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

### 호환 플러그인 리스트

|추가여부|plugin 종류|Provider|플러그인 이름|버전|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|-|inventory.Collector|aws|aws-trusted-advisor|v1.3|
|Updated|inventory.Collector|aws|aws-ec2|v1.12|
|Updated|inventory.Collector|aws|aws-cloud-service|v1.9.3|
|Updated|inventory.Collector|aws|aws-power-state|v1.6|
|Updated|inventory.Collector|aws|aws-personal-health-dashboard|v1.3|
|Updated|inventory.Collector|google cloud|google-cloud-compute|v1.2.5|
|Updated|inventory.Collector|google cloud|google-cloud-services|v1.2.3|
|Updated|inventory.Collector|google cloud|google-cloud-power-state|v1.1.3|
|Updated|inventory.Collector|azure|azure-vm|v1.2.2|
|Updated|inventory.Collector|azure|azure-cloud-services|v1.1.2|
|Updated|inventory.Collector|azure|azure-power-state|v1.0.1|
|Updated|monitoring.DataSource|oracle|oracle-cloud-services|v1.0|
|Updated|monitoring.DataSource|alibaba|alibaba-cloud-ecs|v1.0|
|Updated|inventory.Collector|spaceone|monitoring-metric-collector|v1.1.1|
|Updated|monitoring.DataSource|aws|aws-cloudwatch|v1.1.1|
|Updated|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.4|
|Updated|monitoring.DataSource|aws|azure-monitor|v1.0.2|
|-|power_scheduler.Controller|aws|aws-power-scheduler-controller|v1.4.4|
|-|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.1.3|
|-|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|


