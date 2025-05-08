const { configure } = require("./config/configure");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

async function logon(user, email, password) {
    try {
        const db = await configure();
        const collection = db.collection("usuarios")

        const newUser = new User ({ 
            user,
            email,
            password:  await bcrypt.hash(password, 10)
        });

        await collection.insertOne(newUser);
    }

    catch(err){
        console.error(`Erro ao gravar dados de usuario`, err)
    }
}

module.exports = { logon };