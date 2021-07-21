# Version 1.7.4


## 신규 추가/개선 기능

### Alert Manager 서비스 추가 (Beta)
- 통합 이벤트 관리 기능인 Alert Manager가 Beta 오픈 되었습니다. Console내 Monitoring 메뉴를 통해 확인 가능합니다.
  - Alert Dashboard/Project Dashboard를 통해 수신된 이벤트를 통합 관리 가능합니다.
    - 지원 가능한 모니터링 시스템은 하단 Plugin 을 참고해주세요.
  - 수신된 Alarm에 대하여 알림 정책을 설정하여, 다양한 매체로 전송 가능합니다.
    - 지원 가능한 알림 매체는 하단 Plugin을 참고해주세요.


### Bugfix
- 각 MicroService에 대한 기능 안정화 BugFix 적용


## Plugin 

### 신규 Plugin 추가

Notification 서비스 지원을 위해 플러그인이 추가 되었습니다. 
- monitoring.Webhook 타입 플러그인 
    - aws-sns-webhook
    - amorepacific-monitoring-webhook
    - grafana-monitoring-webhook
- notification.Protocol 타입 플러그인
    - megazone-sms-notification-protocol
    - megazone-voicecall-notification-protocol
    - slack-notification-protocol
    
### 기존 Plugin 지원 Resource 추가

Plugin의 주요 Update List 입니다.
 
- azure-cloud-services
    - NAT Gateways/Network Security Group

### 호환 플러그인 리스트

SpaceONE v1.7.4 에 호환되는 플러그인 버전을 안내 드립니다.
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

|추가여부|plugin 종류|Provider|플러그인 이름|버전|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|keycloak|plugin-keycloak-oidc|v1.1|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|-|inventory.Collector|aws|aws-trusted-advisor|v1.4|
|-|inventory.Collector|aws|aws-ec2|v1.12|
|Updated|inventory.Collector|aws|aws-cloud-service|v1.11.8|
|-|inventory.Collector|aws|aws-power-state|v1.6|
|-|inventory.Collector|aws|aws-personal-health-dashboard|v1.4|
|-|inventory.Collector|google cloud|google-cloud-compute|v1.2.7|
|-|inventory.Collector|google cloud|google-cloud-services|v1.2.６|
|-|inventory.Collector|google cloud|google-cloud-power-state|v1.1.3|
|Updated|inventory.Collector|azure|azure-vm|v1.2.12|
|Updated|inventory.Collector|azure|azure-cloud-services|v1.2.4|
|-|inventory.Collector|azure|azure-power-state|v1.0.2|
|-|inventory.Collector|oracle|oracle-cloud-services|v1.0|
|-|inventory.Collector|alibaba|alibaba-cloud-ecs|v1.0|
|-|inventory.Collector|spaceone|monitoring-metric-collector|v1.2.2|
|-|monitoring.DataSource|aws|aws-cloudwatch|v1.1.3|
|-|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.6|
|-|monitoring.DataSource|azure|azure-monitor|v1.0.3|
|-|power_scheduler.Controller|aws|aws-power-controller|v1.3.1|
|-|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.1.4|
|-|power_scheduler.Controller|azure|azure-power-controller|v1.0.1|
|-|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|
|New|monitoring.Webhook|-|aws-sns-webhook|v1.0|
|New|monitoring.Webhook|-|amorepacific-monitoring-webhook|v1.0.2|
|New|monitoring.Webhook|-|grafana-monitoring-webhook|v1.0|
|New|notification.Protocol|-|megazone-sms-notification-protocol|v1.0.1|
|New|notification.Protocol|-|megazone-voicecall-notification-protocol|v1.0.1|
|New|notification.Protocol|-|slack-notification-protocol|v1.0.1|



## Hotfix Update
|일자|Micro Service|Version|변경사항|
|---|:---:|:---:|:---:|
|-|-|-| - |
|-|-|-| - |


