const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');

const login = async (req, red) => {
    const {email, password} = req.body;

    try{

    const authUser = await user.findOne({ email });
    if(!authUser){
        return res.status(403).json({ message: "Usuario não encontrado!"});
    }

    const caomparePassword = await bcrypt.compare(password, authUser.password);
    if(!caomparePassword){
        return res.status(403).json({ message: "Senha incorreta!"});
    }

    //Aqui vai o token JWT
} catch(err){
    console.error("Erro ao verificar login", err)
}

}