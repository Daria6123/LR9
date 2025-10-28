const style = document.createElement('style');
    style.textContent = `
      body {
        text-align: center;
        background-color: #f0f0f0;
      }
      .img{
            width: 200px;
            height: 300px;
      }
      .area {
        display: inline-block;
        margin: 20px;
      }
      .card {
        width: 100px;
        height: 40px;
        border: 2px solid #333;
        border-radius: 8px;
        box-shadow: 2px 2px 5px gray;
        margin: 10px auto;
        font-size: 24px;
        background-color: white;
      }
      #rounds {
        font-size: 20px;
        margin: 20px;
      }
      button {
        padding: 10px 20px;
        font-size: 18px;
      }
  @media (max-width: 768px) {
    .area {
      display: block;
      margin: 20px auto;
      width: 90%;
    }
    .card {
      font-size: 20px;
      width: 80px;
      height: 36px;
    }
    button {
      width: 80%;
      font-size: 16px;
    }
    #rounds {
      font-size: 18px;
    }
  }
  @media (max-width: 480px) {
    .img {
      max-width: 150px;
    }
    .card {
      font-size: 18px;
      width: 70px;
      height: 32px;
    }
    button {
      font-size: 16px;
      padding: 10px 20px;
    }
    #rounds {
      font-size: 16px;
    }
  }
`;
    document.head.appendChild(style);
const cards = [
      { name: '6', value: 6, img: 'images/six_h.webp' }, { name: '7', value: 7, img: 'images/seven_h.webp' },
      { name: '8', value: 8, img: 'images/eight_h.webp' },{ name: '9', value: 9, img: 'images/nine_h.webp' },
      { name: '10', value: 10, img: 'images/ten_h.webp' }, { name: 'Валет', value: 2, img: 'images/jack_h.webp' },
      { name: 'Дама', value: 3, img: 'images/queen_h.webp' },{ name: 'Король', value: 4, img: 'images/king_h.webp' },
      { name: 'Туз', value: 11, img: 'images/ace_h.webp' },{ name: '6', value: 6, img: 'images/six_d.webp' },
      { name: '7', value: 7, img: 'images/seven_d.webp' },{ name: '8', value: 8, img: 'images/eight_d.webp' },
      { name: '9', value: 9, img: 'images/nine_d.webp' },{ name: '10', value: 10, img: 'images/ten_d.webp' },
      { name: 'Валет', value: 2, img: 'images/jack_d.webp' },{ name: 'Дама', value: 3, img: 'images/queen_d.webp' },
      { name: 'Король', value: 4, img: 'images/king_d.webp' },{ name: 'Туз', value: 11, img: 'images/ace_d.webp' },
      { name: '6', value: 6, img: 'images/six_c.webp' },{ name: '7', value: 7, img: 'seven_c.webp' },
      { name: '8', value: 8, img: 'images/eight_c.webp' },{ name: '9', value: 9, img: 'images/nine_c.webp' },
      { name: '10', value: 10, img: 'images/ten_c.webp' },{ name: 'Валет', value: 2, img: 'images/jack_c.webp' },
      { name: 'Дама', value: 3, img: 'images/queen_c.webp' },{ name: 'Король', value: 4, img: 'images/king_c.webp' },
      { name: 'Туз', value: 11, img: 'images/ace_c.webp' },{ name: '6', value: 6, img: 'images/six_s.webp' },
      { name: '7', value: 7, img: 'images/seven_s.webp' },{ name: '8', value: 8, img: 'images/eight_s.webp' },
      { name: '9', value: 9, img: 'images/nine_s.webp' },{ name: '10', value: 10, img: 'images/ten_s.webp' },
      { name: 'Валет', value: 2, img: 'images/jack_s.webp' },{ name: 'Дама', value: 3, img: 'images/queen_s.webp' },
      { name: 'Король', value: 4, img: 'images/king_s.webp' },{ name: 'Туз', value: 11, img: 'images/ace_s.webp' }
    ];
let username=prompt("Введіть ім'я");
if(!username||username.trim()==="") username="Гравець";
document.getElementById("userName").innerHTML=username;
let round = 1;
let userScore=0;
let computerScore = 0;
let userTotalScore=0;
let computerTotalScore = 0;
document.getElementById("btn").onclick= function(){
      const userCard=cards[Math.floor(Math.random()*cards.length)];
      const computerCard=cards[Math.floor(Math.random()*cards.length)];
      document.getElementById("userCard").textContent=userCard.name;
      document.getElementById("computerCard").textContent=computerCard.name;
      document.getElementById("userImg").src = userCard.img;
  document.getElementById("computerImg").src = computerCard.img;
  if (userCard.img) {
  userImg.src = userCard.img;
  userImg.style.display = "inline";
}
if (computerCard.img) {
  computerImg.src = computerCard.img;
  computerImg.style.display = "inline";
}
      userScore=userCard.value;
      computerScore=computerCard.value;
      userTotalScore+=userScore;
      computerTotalScore+=computerScore;
      document.getElementById("userScore").textContent=userScore;
      document.getElementById("computerScore").textContent=computerScore;
      document.getElementById("userTotalScore").innerHTML = userTotalScore;
  document.getElementById("computerTotalScore").innerHTML = computerTotalScore;
      document.getElementById("rounds").innerHTML="Спроба " + round + " з 3";
      round++;
       if (round > 3) {
    let result = "";
    if (userTotalScore > computerTotalScore) {
      result = "Переміг користувач: " + username + " з кількість очок: " + userTotalScore;
    } else if (userTotalScore < computerTotalScore) {
      result = "Переміг комп'ютер з кількість очок: " + computerTotalScore;
    } else {
      result = "Нічия! Обидва мають" + userTotalScore + " очок";
    }
    alert(result);
  return;
}}
