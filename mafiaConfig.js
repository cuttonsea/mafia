const players = 13; //플레이어 수
const mafia = ["김정현", "김민지", "허준영"]; //여기 이름을 적습니다.
const police = ["정규현"]; //여기 지정어를 적습니다.
const doctor = ["이나연"];
const couple = ["최태윤", "한동석"];
const noble = ["강윤진"];
const word = "제시어"

document.write("<h2 style = \"color:powderblue\">플레이어 수: ", players, "<br>마피아: ", mafia.length, "<br>경찰: ", police.length, "<br>의사: ", doctor.length, "<br>커플: ", couple.length, "(", couple.length/2, "쌍)<br>귀족: ", noble.length, "<br>시민: ", players - mafia.length - police.length - doctor.length - couple.length - noble.length, "</h2>");

function findingArray(nameArray, name) {
  var nonname = [];
  for (i = 0; i <nameArray.length; i++) {
    if (nameArray[i] != name) {
      nonname.push(nameArray[i]);
    }
  }
  return nonname;
}
function mafiaconfig() {
  while (true) {
    var value = window.prompt("자신의 이름 세글자를 적어주세요! 취소를 원하면 취소 버튼 클릭");
    if (value == null) break;
    else if (value == "") {
      alert("빈칸입니다.");
      continue;
    }
      if (confirm("당신의 이름이 \""+value+"\"이(가) 맞습니까? 아니면, 취소를 눌러주시고, 맞으면, 확인을 눌러주세요")) {
        if (mafia.includes(value)) {
          alert("당신은 마피아입니다. 당신의 동료 마피아는 " +findingArray(mafia, value).toString()+" 입니다. 제시어는 \"" +word+"\" 입니다.");
          break;
        }
        else if (police.includes(value)){
          alert("당신은 경찰입니다. 마피아 없는 세상을 만들어 주세요!");
          break;
        }
        else if (doctor.includes(value)){
          alert("당신은 의사입니다. 사람을 살리는 사람이 되어주세요!");
          break;
        }
        else if (couple.includes(value)){
          alert("당신은 커플입니다. 당신의 짝은 " +findingArray(couple, value).toString()+" 입니다. 예쁜 사랑하세요!");
          break;
        }
        else if (noble.includes(value)){
          alert("당신은 귀족입니다.");
          break;
        }
        else {
          alert("당신은 시민입니다. 재밌게 게임하세요!");
          break;
        }
      } else{
        alert("이름을 다시 입력해주세요.");
      }
    }
  }
