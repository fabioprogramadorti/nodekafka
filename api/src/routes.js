import { express } from 'express';


const routes = express.Router();

routes.post('certifications', async (req, res) =>{
    const message = {
        user: {id: 1, name: 'Marcos França'},
        couser: 'Kafka com Node.Js',
        grade: 5
    }
    await req.producer.send({
        topic : "issue-crtificate",
        messages: [
            { value: JSON.stringify(message)}
        ],
        
    })

    //Criar micro serviço 
    return res.json({ ok:true });
});