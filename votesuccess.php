<?php
  file_put_contents('voteResult.txt', $_POST['voter']." => ".$_POST['Candidate']."\n", FILE_APPEND);
 ?>


<!doctype html>
<html>
  <head>
    <title>투표완료</title>
  </head>
    <body style = "background-color: black; color: white;">
    <h1>투표가 완료되었습니다.</h1>
    <a href="mafia.php">홈으로 돌아가기</a>
  </body>

</html>
