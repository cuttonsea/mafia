<!doctype html>
<html>
  <head>
    <title>투표결과</title>
  </head>
  <body>
    <?php
      echo nl2br(file_get_contents("voteResult.txt"));
     ?>
  </body>
  <p>
    <a href="mafia.php">홈으로</a>
  </p>
</html>
