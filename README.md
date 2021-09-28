# 실시간 정밀 대기 지도 및 클린 네비게이션

## 설계

### DB Table

![db_구조](/uploads/e4629fc56ce9d714b8528a417154436f/db_구조.png)


### Prototype
- 카카오 오븐을 이용한 프로토 타입 제작 : [🔗](https://ovenapp.io/view/LGhBB9GDisMnOU3D5bXHVU273RrKQfjD/)


## Commit Message Style

#### 타입

| 태그이름 | 설명                                                  |
| -------- | ----------------------------------------------------- |
| Feat     | 새로운 기능을 추가할 경우                             |
| Fix      | 버그를 고친 경우                                      |
| Design   | CSS 등 사용자 UI 디자인 변경                          |
| Style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| Refactor | 프로덕션 코드 리팩토링                                |
| Comment  | 필요한 주석 추가 및 변경                              |
| Docs     | 문서를 수정한 경우                                    |
| Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |
| Remove   | 파일을 삭제하는 작업만 수행한 경우                    |



#### 이슈

- Board 에서 드래그 해서 닫아도 됨 [여기](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues) 참고
- `commit -m` 으로 닫는 경우 **이슈 키워드**
  - Close, Closes, Closed, Closing, close, closes, closed, closing
  - Fix, Fixes, Fixed, Fixing, fix, fixes, fixed, fixing
  - Resolve, Resolves, Resolved, Resolving, resolve, resolves, resolved, resolving
  - Implement, Implements, Implemented, Implementing, implement, implements, implemented, implementing



#### 메세지

- 영어로 작성하는 경우
  - 첫 글자는 대문자
  - "Fix", "Add", "Change"의 명령어로 시작
- 한글로 작성하는 경우
  - "고침", "추가", "변경"의 명령어로 시작

```html
Feat: 추가 get data api 함수 - [이슈키워드] #이슈번호
```

## 확장 프로그램
- 자체 제작 API에 도메인을 부여하지 않아 생기는 오류 해결을 위한 크롬 확장 프로그램 설치 권장. 
(Error Message : No 'Access-Control-Allow-Origin' header is present on the requested resource.)
- [🔗](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
- 설치 후 해당 프로그램을 on하고 프로젝트를 실행하면 에러가 해결됩니다.