"use strict";

class UserStorage {
    static #users = { // # -> 자바 private
        id: ["hansol", "유한솔", "홍길동"],
        psword: ["1234", "1234", "123456"],
        name: ["자바", "파이썬", "스위프트"]
    };

    static getUsers(...fileds) {
        const users = this.#users;
        const newUsers = fileds.reduce((newUsers, filed) => {
            if(users.hasOwnProperty(filed)) { // users에 해당하는 key 값이 있는지 체크
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;