import express from 'express';
import { kafka } from 'kafkajs'

const app = express();

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['kafka:9092']
  })

async function run(){
    await producer.connect()
        
    app.listen(3333);
}

run().catch(console.error)

const producer = kafka.producer()

app.post('certifications', async (req, res) =>{
    

    //Criar micro serviço 
    return res.json({ ok:true });
});

app.listen(3333);