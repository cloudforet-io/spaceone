# Version 1.8.3
이번 업데이트는 Minor Release로 Console/Console-api Service는 Release 하지 않고, Backend 서비스만 Release 합니다. 

## 신규 추가/개선 기능

### Plugin Autoupdate 
- 이제, 모든 Microservice의 Plugin이 최신버전으로 자동 업데이트 됩니다.
  - 모든 Domain 관리자는 Collector 혹은 Webhook plugin의 버전을 항상 최신으로 유지할 수 있습니다. 
  - 모든 Plugin의 버전 관리를 각 Core Service에서 수행하므로, System 관리자는 각 Microservice별 Plugin을 관리할 필요가 없습니다.  
  
## Plugin 
 
### 기존 Plugin 지원 Resource 추가

Plugin의 주요 Update List 입니다.
 
- azure-cloud-services
    - Azure Database for MySQL

### 호환 플러그인 리스트

SpaceONE v1.8.3 에 호환되는 플러그인 버전을 안내 드립니다.
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

|추가여부|plugin 종류|Provider|플러그인 이름| plugin_id | version |
|:---:|---|:---:|:---:|:---:|:---:|
|Updated|identity.Auth|keycloak|Keycloak Identity Auth Plugin|plugin-keycloak-identity-auth|v1.2|
|-|identity.Auth|oAuth|google-oauth2|plugin-e6b1b0bbacc6|v1.1|
|-|inventory.Collector|aws|aws-trusted-advisor|plugin-eb120a41bb8d|v1.4|
|-|inventory.Collector|aws|aws-ec2|plugin-49f224ef6d36|v1.12|
|-|inventory.Collector|aws|aws-cloud-service|plugin-54487559e402|v1.11.8|
|-|inventory.Collector|aws|aws-power-state|plugin-516babd3637c|v1.6|
|-|inventory.Collector|aws|aws-personal-health-dashboard|plugin-986155af217b|v1.4|
|-|inventory.Collector|google cloud|google-cloud-compute|plugin-13c3051967ce|v1.2.7|
|Updated|inventory.Collector|google cloud|google-cloud-services|plugin-87dc35ecb550|v1.2.9|
|-|inventory.Collector|google cloud|google-cloud-power-state|plugin-11f322fa4106|v1.1.3|
|-|inventory.Collector|azure|azure-vm|plugin-c1104066ca52|v1.2.12|
|Updated|inventory.Collector|azure|azure-cloud-services|plugin-6fec638f139c|v1.2.7|
|Updated|inventory.Collector|azure|azure-power-state|plugin-d7a1d8670488|v1.0.3|
|-|inventory.Collector|oracle|oracle-cloud-services| N/A | |
|-|inventory.Collector|alibaba|alibaba-cloud-ecs| N/A | |
|Updated|inventory.Collector|spaceone|monitoring-metric-collector|plugin-023782c156cf|v1.2.4|
|Updated|monitoring.DataSource|aws|aws-cloudwatch|plugin-41782f6158bb|v1.1.4|
|Updated|monitoring.DataSource|google cloud|google-cloud-stackdriver|plugin-57773973639a|v1.0.7|
|Updated|monitoring.DataSource|azure|azure-monitor|plugin-c6c14566298c|v1.0.4|
|Updated|power_scheduler.Controller|aws|aws-power-controller|plugin-5cd621a04f04|v1.4.4|
|-|power_scheduler.Controller|google cloud|google-cloud-power-controller|plugin-982ca2693f39|v1.1.4|
|-|power_scheduler.Controller|azure|azure-power-controller| N/A |v1.0.1|
|-|billing.DataSource|hyperbilling|aws-hyperbilling|plugin-b60505e70f9d|v1.0.2|
|-|monitoring.Webhook|-|AWS SNS Webhook|plugin-aws-sns-monitoring-webhook|v1.1|
|-|monitoring.Webhook|-| Amore Pacific Webhook |plugin-amorepacific-monitoring-webhook|v1.0.2|
|-|monitoring.Webhook|-| Grafana Webhook | plugin-grafana-monitoring-webhook |v1.0.2|
|New|monitoring.Webhook|-| Zabbix Webhook | plugin-zabbix-mon-webhook |v1.0|
|-|notification.Protocol|-| Megazone SMS Notification Protocol | plugin-sms-notification-protocol |v1.0.1|
|-|notification.Protocol|-| Megazone Voicecall Notification Protocol | plugin-voicecall-notification-protocol |v1.0.4|
|-|notification.Protocol|-| Slack Notification Protocol | slack-notification-protocol |v1.0.2|
|New|notification.Protocol|-| Telegram Notification Protocol | plugin-telegram-noti-protocol |v1.0.1|
|New|notification.Protocol|-| Email Notification Protocol | plugin-email-noti-protocol |v1.0|



## Hotfix Update
|일자|Micro Service|Version|변경사항|
|---|:---:|:---:|:---:|
|-|-|-| - |


