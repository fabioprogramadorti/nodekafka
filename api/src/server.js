import express from 'express';
import { kafka } from 'kafkajs'
import routes from './routes'

const app = express();


// Faz conexão com o kafka
const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
    retry: {
      initialRetryTome: 300,
      retries: 10 
    }
  })

  const producer = kafka.producer()


  
//   Disponibiliza o producer para todas as rotas
  app.use((rqp, res, next) => {
    req.producer = producer;

    return next();
  });

//   Cadastra as rodas da aplicação
  app.use(routes);

async function run(){
    await producer.connect()
        
    app.listen(3333);
}

run().catch(console.error)

const producer = kafka.producer()



app.listen(3333);