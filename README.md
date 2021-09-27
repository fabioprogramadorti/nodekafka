# Nodekafka
Simple Project With Node and Kafka

- Using Kafka;
- Using Node;

# Application Flow

- Main API (Station)
- Certificate Generaton

# Flow

- Main API sends a message to the certificate service to generate the certificate;
- Certificate micro-service returns a response (synchronous/asynchronous);

If you get synchronous/asynchronous:

- Receive an asynchronous response when the email with the certificate was sent;

# What do we know?

- REST (Latency);
- Redis / RabbitMQ / **Kafka**

- Nubank, Uber, Paypal, Netflix;