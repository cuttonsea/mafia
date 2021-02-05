<!doctype html>
<html>
  <head>
    <title>투표</title>
  </head>

    <body style = "background-color: black; color:white">
    <span style="color:white"><h1>투표할 사람의 이름을 정확하게 기입하시오.</h1>
    **기명투표입니다.</span>
    <br><br>
      <form action="votesuccess.php" method="post">
        <p>
          <input type="text" placeholder="Your Name" name="voter">
        </p>
          <textarea placeholder="Vote Candidate" name="Candidate"></textarea>
        <p>
          <input type="submit" value="투표하기">
        </p>
      </form>
      <a href="mafia.php">돌아가기</a>
  </body>

</html>
