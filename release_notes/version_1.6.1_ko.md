# Version 1.6.1


## 신규 추가/개선 기능

### 1. Cloud 비용 상세 History 위젯 추가

- Project Dashboard에서 Cloud 비용 History를 일별/월별로 상세 조회 가능합니다. 

### 2. Garbage Collection 동작 방식

- Cloud Resource의 변경 사항을 더 빠르게 업데이트 하기 위해 아래와 같은 방식으로 변경 되었습니다.

|SpaceONE 버전|GC 실행 주기|GC 동작 방식|
|:---:|:---:|:---:|
|~ v1.5.3|Everyday utc 00:00|<ul><li>24시간 동안 미수집 Disconnected</li><li>48시간 동안 미수집 Deleted</li></ul> |
|v1.6.1 ~|Collector 동작시 매번 수행|<ul><li>1회 수집 실패 Disconnected</li><li>2회 수집 실패 Deleted</li></ul>|

### 3. Cloud Resource 검색 기능 개선
- 수집된 Parameter 이외에 모니터링 데이터 및 Tag 검색 가능
- 모니터링 데이터 검색을 위해서는 Monitoring Collector 추가 필요

### 4. 기타 개선사항

- Console에서 복사 버튼 클릭시 'Copied' 메시지 안내
- User Page에서 'Assigned Role' 조회 가능(실제 RBAC 적용은 추후 예정)
- User 추가 후 'Pending State' 추가(최초 로그인 대기상태)
- Console내 언어변경 미지원 Component 추가 지원

## 버그픽스

- Server Multi Select 시 오류
- Job Page내 상태 조회 오류
- Service Account의 'Connect to Console'링크 오류
- User Page내 Role 조회 및 설정 관련 오류 개선
- 기타 Minor bugfix


## Plugin 
SpaceOne v1.6.1 에 호환되는 플러그인 버전을 안내 드립니다. 
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
|-|-|-|-|



