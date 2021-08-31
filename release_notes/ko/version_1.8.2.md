# Version 1.8.2

## 신규 추가/개선 기능

### Alert Manager(Beta) 
- Event Rule 기능 추가
  - Event Pattern에 따라 Alert 관리를 자동화 할 수 있습니다.
- Webhook 플러그인 지원 추가
  - 이제 Zabbix, AWS, Grafana의 Event 통합 관리가 가능합니다.
- Notification 플러그인 지원 추가
  - 이제 SMS, Voicecall, Email, Slack, Telegram을 통한 Alarm 발송이 가능합니다.


### SpaceONE Project Site
- SpaceONE 프로젝트를 소개하기 위한 Project Site를 오픈하게 되었습니다. (https://www.spaceone.org)
  - Documentation : SpaceONE 설치, 사용법 및 Plugin 개발 Guide와 Integration 방안을 안내 합니다. 
  - Community : Cloud를 이용하시는 다양한 엔지니어 및 개발자들과 교류하기 위한 채널을 운영 합니다.

### Bugfix
- Alert Manager 서비스 기능 안정화.

## Plugin 

### 신규 Plugin 추가

Alert Manager 서비스를 위한 플러그인이 추가 되었습니다. 
- monitoring.Webhook 타입 플러그인 
    - zabbix-webhook
- notification.Protocol 타입 플러그인
    - telegram-notification-protocol
    - email-protocol
    
### 기존 Plugin 지원 Resource 추가

Plugin의 주요 Update List 입니다.
 
- azure-cloud-services
    - KeyVaults

### 호환 플러그인 리스트

SpaceONE v1.8.2 에 호환되는 플러그인 버전을 안내 드립니다.
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

|추가여부|plugin 종류|Provider|플러그인 이름|버전|
|:---:|---|:---:|:---:|:---:|
|-|identity.Auth|keycloak|plugin-keycloak-oidc|v1.1|
|-|identity.Auth|oAuth|google-oauth2|v1.1|
|-|inventory.Collector|aws|aws-trusted-advisor|v1.4|
|-|inventory.Collector|aws|aws-ec2|v1.12|
|-|inventory.Collector|aws|aws-cloud-service|v1.11.8|
|-|inventory.Collector|aws|aws-power-state|v1.6|
|-|inventory.Collector|aws|aws-personal-health-dashboard|v1.4|
|-|inventory.Collector|google cloud|google-cloud-compute|v1.2.7|
|-|inventory.Collector|google cloud|google-cloud-services|v1.2.６|
|-|inventory.Collector|google cloud|google-cloud-power-state|v1.1.3|
|-|inventory.Collector|azure|azure-vm|v1.2.12|
|Updated|inventory.Collector|azure|azure-cloud-services|v1.2.7|
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
|-|monitoring.Webhook|-|aws-sns-webhook|v1.0|
|-|monitoring.Webhook|-|amorepacific-monitoring-webhook|v1.0.2|
|-|monitoring.Webhook|-|grafana-monitoring-webhook|v1.0.2|
|New|monitoring.Webhook|-|zabbix-monitoring-webhook|v1.0|
|-|notification.Protocol|-|megazone-sms-notification-protocol|v1.0.1|
|-|notification.Protocol|-|megazone-voicecall-notification-protocol|v1.0.1|
|-|notification.Protocol|-|slack-notification-protocol|v1.0.1|
|New|notification.Protocol|-|telegram-notification-protocol|v1.0.1|
|New|notification.Protocol|-|email-notification-protocol|v1.0|



## Hotfix Update
|일자|Micro Service|Version|변경사항|
|---|:---:|:---:|:---:|
|-|-|-| - |


