# Version 1.5.3


## 신규 추가 기능

### 1. Cloud 비용 관리기능(Billing Management Widget)

- 이제 사용중인 Cloud 자원 현황과 비용 현황을 SpaceONE 에서 통합 관리 가능합니다.(Megazone Hyperbilling Plugin 활성화가 필요)
- Multi Cloud와 계정별로 흩어져있는 비용 정보를 SpaceONE을 통해 손쉽게 관리 가능합니다.
 

### 2. Multi Cloud 리소스 통합관리/모니터링 기능

- Global Public Cloud 3사(AWS, Azure, Google Cloud)에 대한 통합 관리 기능을 완성 하였습니다. 
- 이제 각 회사에서 제공하는 Cloud Console에 로그인 하지 않아도, SpaceONE 통해 자원을 관리/모니터링 할 수 있습니다.       

#### 1) AWS
- 수집 가능 서비스 : EC2, ELB, VPC, S3, RDS, DocumentDB, DynamoDB, EKS, ECR, ECS, EFS, API Gateway, AutoScaling, CloudFront, CloudTrail, DirectConnect, Security Group, EIP, IAM, KMS, Lambda, Redshift, Route53, Secrets Manager, SNS, SQS, Personal Health Dashboard, Trusted Advisor
- 모니터링 연동 : cloudwatch

#### 2) Azure
- 수집 가능 서비스 : Server, Snapshot, Disk
- 모니터링 연동 : azure monitor

#### 3) Google Cloud
- 수집 가능 서비스 : Server, Instance Group, Instance Template, Machine Images
- 모니터링 연동 : google stackdriver

#### 4) 향후 예정사항
- Alibaba Cloud, Oracle Cloud, vSphere, Openstack, Naver Cloud, KT Cloud 등 국내외 주요 클라우드로 확장해 나갈 예정입니다.  


### 3. Dashboard Widget

#### 1) AWS Trusted Advisor Widget

- AWS의 비용/보안 최적화 관리기능인 Trusted Advisor를 SpaceONE을 통해 편리하게 활용할 수 있습니다. 
- Trusted Advisor가 제안하는 요소들을 한눈에 파악하고, 신속한 조치를 할 수 있도록 지원합니다. 


#### 2) AWS Personal Health Dashboard Widget

- AWS의 작업 및 장애 내역 및 이로인해 영향받는 Cloud 자원 리스트를 편리하게 확인할 수 있습니다.     



### 4. Role Based Access Control(RBAC, Alpha Release)

- 이제 도메인 구성원들을 역할별로 구분하여 관리 가능합니다. 
- 사용자를 Domain Admin, Project Admin, Project User 단계로 나누어 API 레벨의 기능/접근권한 관리가 가능합니다.
- 현재 Alpha Release로 지속적인 업데이트 중에 있습니다. 


### 5. Multi 인증 기능

- 복수의 인증 Backend 연동이 가능합니다. 
- ID/PW, oAuth2, KeyClock, ActiveDirectory 등 다양한 조합을 통해 유연한 협업 환경을 구성 해보세요.

### 6. Console Login Page 리뉴얼

- 사용자 로그인 페이지의 디자인 및 성능 & 안정성이 개선 되었습니다. 
- SSO 기능 제공(oAuth2 인증인 경우)

## 버그픽스

- API 인증 관련 마이너 버그 다수 개선
- PowerScheduler Console Bug 수정


## Plugin 
SpaceOne v1.5.3 에 호환되는 플러그인 버전을 안내 드립니다. 
기능에 이상이 있는 경우 아래의 버전으로 플러그인 최신 업데이트가 필요 합니다.

### 호환 플러그인 리스트

|plugin 종류|Provider|플러그인 이름|버전|
|---|:---:|:---:|:---:|
|identity.Auth|oAuth|google-oauth2|v1.1|
|inventory.Collector|aws|aws-trusted-advisor|v1.1|
|inventory.Collector|aws|aws-ec2|v1.7|
|inventory.Collector|aws|aws-cloud-service|v1.5|
|inventory.Collector|aws|plugin-aws-power-state|v1.3|
|inventory.Collector|aws|aws-personal-health-dashboard|v1.0|
|inventory.Collector|google cloud|google-cloud-compute|v1.2|
|inventory.Collector|google cloud|google-cloud-services|v1.1|
|inventory.Collector|google cloud|google-cloud-power-state|v1.0|
|inventory.Collector|azure|azure-vm|v1.2|
|inventory.Collector|azure|azure-cloud-services|v1.0|
|inventory.Collector|azure|azure-power-state|v1.0|
|inventory.Collector|spaceone|monitoring-metric-collector|v1.0|
|monitoring.DataSource|aws|aws-cloudwatch|v1.1|
|monitoring.DataSource|google cloud|google-cloud-stackdriver|v1.0.2|
|monitoring.DataSource|aws|azure-monitor|v1.0|
|power_scheduler.Controller|aws|aws-power-controller|v1.0|
|power_scheduler.Controller|google cloud|google-cloud-power-controller|v1.0.1|
|billing.DataSource|hyperbilling|aws-hyperbilling|v1.0.2|

### 지원 제외 플러그인
- 대상 플러그인은 aws-personal-health-dashboard 로 대체되어 기능 제공 됩니다
- 1.5.3 버전 설치시 삭제가 필요합니다. 

|plugin 종류|Provider|플러그인 이름|버전| 
|---|:---:|:---:|:---:|
|monitoring.DataSource|aws|aws-health|v1.0.2|

## Hotfix Update
|일자|Micro Service|Version|변경사항|
|---|:---:|:---:|:---:|
|-|-|-|-|


