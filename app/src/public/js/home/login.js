"use strict";

// DOM -> Document Object Model 자바스크립트에서 html데이터를 제어 할 수 있다.

const id = document.querySelector("#id"),  //질의 선택자
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    });
}