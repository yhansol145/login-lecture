"use strict";

class UserStorage {
    static #users = { // # -> 자바 private
        id: ["hansol", "유한솔", "홍길동"],
        psword: ["1234", "1234", "123456"],
        name: ["자바", "파이썬", "스위프트"]
    };

    static getUser(...fileds) {
        const users = this.#users;
        const newUsers = fileds.reduce((newUsers, filed) => {
            if(users.hasOwnProperty(filed)) { // users에 해당하는 key 값이 있는지 체크
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;