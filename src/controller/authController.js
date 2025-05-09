import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

const login = async (req, res) => {
    const {email, password} = req.body;

    try{

        const authUser = await User.findOne({ email });
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

const signup = async (req, res) => {
    const { nome, email, password } = req.body;
    console.log(req.body)

    try {

        const userExist = await User.findOne({ email });
        if (userExist){
            return res.status(400).json({ message: "Email ja cadastrados"});
        }

        const newUser = new User ({
            nome: nome,
            email,
            password:  await bcrypt.hash(password, 10)
        });

        await newUser.save();
        return res.status(201).json({ message: "Usuario cadastrado com sucesso!"});
    }

    catch(err){
        console.error(`Erro ao gravar dados de usuario`, err);
    }
}

export default { login, signup };