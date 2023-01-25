"use strict";

const UserStorage = require("../../models/UserStorage");

const {debug} = require("nodemon/lib/utils");
const output = {
    home: function (req, res){
        res.render("home/index");
    },

    login: function(req, res){
        res.render("home/login")
    },
}
const process = {
    login: function (req, res) {
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUser("id", "psword");

        const response = {};
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다."
        return res.json(response);
    }
}

module.exports = {
    output,
    process
};