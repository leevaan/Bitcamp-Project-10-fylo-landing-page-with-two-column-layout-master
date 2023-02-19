"use strict"

const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const submit = document.querySelectorAll(".section-up-submit");
const mail = document.querySelectorAll(".section-up-emale");
const subText = document.querySelectorAll(".mail-subtext");

for( let i = 0; i < 2; i++ ){
  submit[i].addEventListener("click", function(){
    if(mail[i].value.match(regEx)){
      mail[i].style.border = "0.625px solid #07043B";
      subText[i].innerText = " ";
      return true;
    }else{
      mail[i].style.border = "0.625px solid #EF4877";
      subText[i].innerText = "Please check your email";
      return false;
    }
  });
}
