AVServer
============== URL 정보 ==============
1. 로그인 페이지 : /
 -> 리턴정보 : {title}
2. 로그인 결과 : /login.av
 -> 입력값 : id, password
 -> 리턴정보정상 : {auth} -> Session Info {USER_NM, USER_ID}
 -> 리턴정보에러 : {errCode(String), errName(String)}
3. 게시판 리스트 : /AvBoard/list.av
4. 게시판 글쓰기 : /AvBoard/write.av
5. 게시판 글삭제 : /AvBoard/delete.av
6. 게시판 글수정 : /AvBoard/update.av
7. 게시판 업로드 : /AvBoard/uploading.av

이렇게 하고싶은데 ..... 안되려나