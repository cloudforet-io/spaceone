# Version 1.8.7 

## 신규 추가/개선 기능

### Billing(Cost Management) Beta
- 이제, Billing 서비스를 통해 Cloud의 상세한 지출내역을 관리할 수 있습니다.
  - Billing Dashboard : Cloud Cost를 다양한 차트로 한눈에 확인할 수 있습니다.
  - Cost Analysis : Cost 지출 이력을 상세하게 분석할 수 있습니다.
  - Budget : Cloud 예산을 관리하고, 알람을 통해 초과지출을 방지할 수 있습니다.  

## Plugin

### 자원수집 안정성 개선
  - 자원수집간 발생하는 에러 메시지가 누락되지 않도록 에러 메시지 처리 방식이 개선되었습니다.  
  - 수집되는 각 리소스별 수집 실패원인에 대해 더 상세히 확인할 수 있습니다. 

### 선택적 자원수집 기능 추가
  - 아래의 플러그인은 수집하고자 하는 자원을 선택적으로 수집할 수 있습니다. 
  - 설정 방법에 대해서는 각 서비스의 Git Repo. 를 참고 해주세요.
    - [azure-cloud-services](https://github.com/spaceone-dev/plugin-azure-vm-inven-collector#readme)
    - [aws-cloud-service](https://github.com/spaceone-dev/plugin-azure-cloud-service-inven-collector#readme)
    - [google-cloud-services](https://github.com/spaceone-dev/plugin-google-cloud-service-inven-collector#readme)

### 자원 조회 속도 향상
  - 사용자들이 자주 검색하는 키워드에 대해서 최적화 작업을 통해 검색 속도를 향상 하였습니다. 

### 호환 플러그인 리스트

SpaceONE v1.8.7 에 호환되는 플러그인 버전을 안내 드립니다.
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

|  추가여부   | plugin 종류                  |   Provider   |                 플러그인 이름                  |               plugin_id                | version |
|:-------:|----------------------------|:------------:|:----------------------------------------:|:--------------------------------------:|:-------:|
|    -    | identity.Auth              |   keycloak   |      Keycloak Identity Auth Plugin       |     plugin-keycloak-identity-auth      |  v1.2   |
|    -    | identity.Auth              |    oAuth     |              google-oauth2               |          plugin-e6b1b0bbacc6           |  v1.1   |
|    -    | inventory.Collector        |     aws      |           aws-trusted-advisor            |          plugin-eb120a41bb8d           |  v1.4   |
| Updated | inventory.Collector        |     aws      |                 aws-ec2                  |          plugin-49f224ef6d36           |  v1.12  |
| Updated | inventory.Collector        |     aws      |            aws-cloud-service             |          plugin-54487559e402           |  v1.12  |
|    -    | inventory.Collector        |     aws      |             aws-power-state              |          plugin-516babd3637c           |  v1.6   |
|    -    | inventory.Collector        |     aws      |      aws-personal-health-dashboard       |          plugin-986155af217b           |  v1.4   |
| Updated | inventory.Collector        | google cloud |           google-cloud-compute           |          plugin-13c3051967ce           | v1.2.7  |
| Updated | inventory.Collector        | google cloud |          google-cloud-services           |          plugin-87dc35ecb550           | v1.2.9  |
|    -    | inventory.Collector        | google cloud |         google-cloud-power-state         |          plugin-11f322fa4106           | v1.1.3  |
| Updated | inventory.Collector        |    azure     |                 azure-vm                 |          plugin-c1104066ca52           | v1.2.4  |
| Updated | inventory.Collector        |    azure     |           azure-cloud-services           |          plugin-6fec638f139c           | v1.2.13 |
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


