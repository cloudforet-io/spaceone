# Version 1.6.2


## 신규 추가/개선 기능

### 1. RBAC(Role Based Access Control) 적용

- 사용자 권한 체계가 아래와 같이 세분화 됩니다. 
  - Root Account 
  - Domain Admin
  - Project Admin
- 각각의 사용자 권한은 Domain Admin 이상의 권한에 할당된 Identity > User 메뉴에서 조정 가능합니다.

| **중요**: 통계 데이터에 대한 권한 관리 스펙 추가로, 기존 수집된 statistics history 데이터는 모두 리셋 됩니다. |
| --- |

### 2. UI/UX 개선
- Right Info. Panel 이 추가 되었습니다. 콘솔 기능에 대한 소개와 사용 안내를 지속적으로 추가 중입니다. 
 

## Plugin 
SpaceONE v1.6.2 에 호환되는 플러그인 버전을 안내 드립니다. 
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

### 호환 플러그인 리스트

|추가여부|plugin 종류|Provider|플러그인 이름|버전|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|Updated|inventory.Collector|aws|aws-trusted-advisor|v1.2|
|Updated|inventory.Collector|aws|aws-ec2|v1.8|
|Updated|inventory.Collector|aws|aws-cloud-service|v1.6|
|Updated|inventory.Collector|aws|plugin-aws-power-state|v1.3|
|Updated|inventory.Collector|aws|aws-personal-health-dashboard|v1.1|
|Updated|inventory.Collector|google cloud|google-cloud-compute|v1.2.1|
|Updated|inventory.Collector|google cloud|google-cloud-services|v1.1.2|
|-|inventory.Collector|google cloud|google-cloud-power-state|v1.0|
|Updated|inventory.Collector|azure|azure-vm|v1.2.1|
|Updated|inventory.Collector|azure|azure-cloud-services|v1.1|
|Updated|inventory.Collector|azure|azure-power-state|v1.3|
|-|inventory.Collector|spaceone|monitoring-metric-collector|v1.0|
|-|monitoring.DataSource|aws|aws-cloudwatch|v1.1|
|-|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.3|
|-|monitoring.DataSource|aws|azure-monitor|v1.0|
|-|power_scheduler.Controller|aws|aws-power-controller|v1.0|
|-|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.0.1|
|-|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|


## Hotfix Update
|일자|Micro Service|Version|변경사항|
|---|:---:|:---:|:---:|
|2021.02.09|config|1.6.2.1|RBAC related bug fixed|
|2021.02.09|console-client|1.6.2.1|RBAC related bug fixed|
|2021.02.16|identity|1.6.2.5|RBAC related bug fixed|
|2021.02.17|inventory|1.6.2.3|RBAC related bug fixed|
|2021.02.09|monitoring|1.6.2.1|RBAC related bug fixed|
|2021.02.09|repository|1.6.2.1|RBAC related bug fixed|
|2021.02.09|secret|1.6.2.1|RBAC related bug fixed|
|2021.02.16|statistics|1.6.2.1|RBAC related statistics topic modified|

