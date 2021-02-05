<!doctype html>
<html>
  <head>
    <title>마피아 사회자 페이지</title>
  </head>
    <body>
    <h1>마피아 사회자 페이지</h1>
    <p>
      <a href="mafia.php">홈으로 돌아가기</a><br>
      (사회자는 직접 URL을 입력하여 돌아와야 합니다.)
    </p>
    <form action="viewVoteResult.php" method="post">
      <input type="submit" value="투표결과보기">
    </form>
    <form action="resetVoteResult.php" method="post" onsubmit="return delconfirm()">
      <input type="submit" value="투표 초기화">
    </form>

  </body>
  <script>
    function delconfirm() {
      if(confirm("RESET?")) {
        alert("RESET SUCCEEDED");
        return true;
      } else {
        alert("CANCELED");
        return false;
      }
    }
    </script>
</html>
