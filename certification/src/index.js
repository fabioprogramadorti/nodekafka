// Receber mensagem do Kafka
import { kafka } from 'kafkajs'

const kafka = new Kafka({
    brokers: ['localhost:9092'],
    clientId: 'certificate'
})

const topic = 'issue-certificate'
const consumer = kafka.consumer()

const producer = kafka.producer();


async function run() {
    await consumer.connect()
    await consumer.subscribe({ topic })
    await consumer.run({
        eachMessage: async ({ topic, partition, message}) =>{
            const prefix  = `${topic}[${partition}|${message.offset}]/${message.timestamp}`
            console.log(`-${prefix} ${message.key}#${message.value}`)

            const payload = JSON.parse(message.value);

            setTimeout(() =>{
                producer.send({
                    topic: 'certification-response',
                    message: [
                        { value: `Certificado do usuário #${payload.user.name} do curso
                         ${payload.course}!` }
                    ]
                })
            }, 3000);
        },
    })
}


run().catch(console.error)