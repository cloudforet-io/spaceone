# Version 1.3.2

## Release Notes

### Plugin 확장/기능개선
- aws trusted advisor collector가 추가 되었습니다.
 - Description Tab의 일부 데이터 누락 현상이 있습니다. known issue로 다음 반영때 개선하겠습니다.
- aws personal health dashboard 속도 개선(20초 내외 → 즉시)
 - Caching 로직 추가로 최초 로딩 후에는 즉시 데이터 조회 가능(Timeout 6시간)
- google stackdriver monitoring 추가
 - 이제 google compute 서버 타입인경우 monitoring 탭에서 stack driver 내역을 즉시 확인할 수 있습니다.

### 사용자 편의 기능 개선
- 검색창을 통해 Created at, Collected at 와 같은 시간 데이터에 대한 검색이 가능 합니다.
- Main/Project Dashboard 에서 Daily Update의 상세 내역을 제공합니다.
- Service Account(Google Cloud) 입력 기능이 개선 되었습니다.
 - Json 타입으로 Credential 정보 입력이 가능합니다.
- Collector의 Schedule 세부 설정 기능
 - 현재 정식 제공되지 않는 기능으로 조만간 업데이트 예정입니다.


## 버그픽스

- Inventory > Server , Inventory > Cloud Service 페이지에서 일부 field가 중복되어 보이는 현상이 해소 되었습니다.
- Console 로그인 페이지에서 로그인 실패시, 원인이 되는 메시지를 출력하지 않는 현상이 개선 되었습니다.
- Project 대쉬보드에서 Cloud Service > Region으로 검색시 필터가 누락되는 현상이 해소되었습니다.
- Cloud Service내 EBS Resource의 엑셀다운로드 실패 현상이 해소되었습니다.

## Hotfix Update

| Service      | Version    |  Description    |
| ---          | ---        | ---             |
| console      | 1.3.2.1    | Create User Button error fix |
| console-api  | 1.3.2.1    | Create User Button error fix |
| monitoring   | 1.3.2.1    | Fix data_source create       |
