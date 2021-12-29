# Version 1.9.0 

## 신규 추가/개선 기능

### Billing(Cost Management) Beta
- 비용 데이터를 주기적으로 Sync. 하기 위한 Scheduler가 추가 되었습니다.

### Inventory 통계 Alpha
- Console내의 모든 클라우드 자원 현황과 이력을 한눈에 볼 수 있는 위젯이 추가 되었습니다. 
- 현재 일부 자원에만 적용되었으며 지원범위를 점차 늘려가고 있습니다.  

###  접근권한 관리(Role Based Access Control)
- 이제 사용자는 다양한 역할별로 세분화된 접근 제어관리가 가능 합니다.  
- SpaceONE 팀에서 게시한 5종의 기본 정책 이외에, 회사내 관리자가 내부 방침에 따른 권한을 편집할 수 있습니다. 
- SpaceONE의 RBAC에 대한 문서는 아래의 문서를 참고해주세요.
  - https://www.spaceone.org/ko/docs/concepts/rbac/
  - https://www.spaceone.org/ko/docs/guides/spaceone_cli/managing_role_policy/examples/
  
### Bugfix
- Billing 서비스 안정화

### Plugin

### Inventory 통계 쿼리 추가
- Console내 Inventory 통계 기능을 지원하기 위한 코드가 추가 되었습니다. 

### 호환 플러그인 리스트

SpaceONE v1.9.0 에 호환되는 플러그인 버전을 안내 드립니다.
플러그인 버전은 자동으로 업데이트 가능합니다. 

|  추가여부   | plugin 종류                  |   Provider   |                 플러그인 이름                  |               plugin_id                | version |
|:-------:|----------------------------|:------------:|:----------------------------------------:|:--------------------------------------:|:-------:|
|    -    | identity.Auth              |   keycloak   |      Keycloak Identity Auth Plugin       |     plugin-keycloak-identity-auth      |  v1.2   |
|    -    | identity.Auth              |    oAuth     |              google-oauth2               |          plugin-e6b1b0bbacc6           |  v1.1   |
|    -    | inventory.Collector        |     aws      |           aws-trusted-advisor            |          plugin-eb120a41bb8d           |  v1.4   |
| Updated | inventory.Collector        |     aws      |                 aws-ec2                  |          plugin-49f224ef6d36           |  v1.13  |
| Updated | inventory.Collector        |     aws      |            aws-cloud-service             |          plugin-54487559e402           | v1.13.5 |
|    -    | inventory.Collector        |     aws      |             aws-power-state              |          plugin-516babd3637c           |  v1.6   |
|    -    | inventory.Collector        |     aws      |      aws-personal-health-dashboard       |          plugin-986155af217b           |  v1.4   |
| Updated | inventory.Collector        | google cloud |           google-cloud-compute           |          plugin-13c3051967ce           | v1.3.8  |
| Updated | inventory.Collector        | google cloud |          google-cloud-services           |          plugin-87dc35ecb550           | v1.3.5  |
|    -    | inventory.Collector        | google cloud |         google-cloud-power-state         |          plugin-11f322fa4106           | v1.1.3  |
| Updated | inventory.Collector        |    azure     |                 azure-vm                 |          plugin-c1104066ca52           | v1.2.13 |
| Updated | inventory.Collector        |    azure     |           azure-cloud-services           |          plugin-6fec638f139c           | v1.2.14 |
|    -    | inventory.Collector        |    azure     |            azure-power-state             |          plugin-d7a1d8670488           | v1.0.3  |
|    -    | inventory.Collector        |    oracle    |          oracle-cloud-services           |                  N/A                   |         |
|    -    | inventory.Collector        |   alibaba    |            alibaba-cloud-ecs             |                  N/A                   |         |
|    -    | inventory.Collector        |   spaceone   |       monitoring-metric-collector        |          plugin-023782c156cf           | v1.2.4  |
|    -    | monitoring.DataSource      |     aws      |              aws-cloudwatch              |          plugin-41782f6158bb           | v1.1.4  |
|    -    | monitoring.DataSource      | google cloud |         google-cloud-stackdriver         |          plugin-57773973639a           | v1.0.7  |
|    -    | monitoring.DataSource      |    azure     |              azure-monitor               |          plugin-c6c14566298c           | v1.0.4  |
|    -    | power_scheduler.Controller |     aws      |           aws-power-controller           |          plugin-5cd621a04f04           | v1.4.4  |
|    -    | power_scheduler.Controller | google cloud |      google-cloud-power-controller       |          plugin-982ca2693f39           | v1.1.4  |
|    -    | power_scheduler.Controller |    azure     |          azure-power-controller          |                  N/A                   | v1.0.1  |
|    -    | billing.DataSource         | hyperbilling |             aws-hyperbilling             |          plugin-b60505e70f9d           | v1.0.2  |
|    -    | monitoring.Webhook         |      -       |             AWS SNS Webhook              |   plugin-aws-sns-monitoring-webhook    |  v1.1   |
|    -    | monitoring.Webhook         |      -       |            Prometheus Webhook            |     plugin-prometheus-mon-webhook      | v1.0.2  |
|    -    | monitoring.Webhook         |      -       |          Amore Pacific Webhook           | plugin-amorepacific-monitoring-webhook | v1.1.1  |
|    -    | monitoring.Webhook         |      -       |             Grafana Webhook              |   plugin-grafana-monitoring-webhook    | v1.0.4  |
|    -    | monitoring.Webhook         |      -       |              Zabbix Webhook              |       plugin-zabbix-mon-webhook        |  v1.0   |
|    -    | notification.Protocol      |      -       |    Megazone SMS Notification Protocol    |    plugin-sms-notification-protocol    | v1.0.2  |
|    -    | notification.Protocol      |      -       | Megazone Voicecall Notification Protocol | plugin-voicecall-notification-protocol | v1.0.4  |
|    -    | notification.Protocol      |      -       |       Slack Notification Protocol        |      slack-notification-protocol       | v1.0.3  |
|    -    | notification.Protocol      |      -       |      Telegram Notification Protocol      |     plugin-telegram-noti-protocol      | v1.0.2  |
|    -    | notification.Protocol      |      -       |       Email Notification Protocol        |       plugin-email-noti-protocol       | v1.0.1  |




## Hotfix Update
|일자|Micro Service|Version|변경사항|
|---|:---:|:---:|:---:|
|-|-|-|-|


