import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function conectDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`Conectado ao banco de dados`);
    }
    catch (err) {
        console.error(`Erro ao conectar ao banco de dados`, err);
    }

}
export default conectDatabase;