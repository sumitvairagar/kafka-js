const { Kafka } = require("kafkajs");
const MAC_NAME = "192.168.1.13";

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "mynodeapp",
      brokers: [`${MAC_NAME}:9092`],
    });

    const consumer = kafka.consumer({ groupId: "test" });
    console.log("Consumer Connecting to Kafka....");
    await consumer.connect();
    console.log("Consumer Connected!");

    await consumer.subscribe({
      topic: "Users",
      fromBeginning: true,
    });

    consumer.run({
      eachMessage: async (result) =>
        console.log(
          `Received message: ${result.message.value} on partition ${result.partition}`
        ),
    });
  } catch (ex) {
    console.error("Something went wrong", ex);
  } finally {
  }
}
run();
