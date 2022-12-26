const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  setInterval(async () => {
    producer.send({
      topic: "test",
      messages: [
        {
          value: "hello consumer",
        },
      ],
    });
  }, 1000);
};

run().catch(console.error);
