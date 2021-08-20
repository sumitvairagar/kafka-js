const { Kafka } = require("kafkajs");
const MAC_NAME = "192.168.1.13";

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "mynodeapp",
      brokers: [`${MAC_NAME}:9092`],
    });

    const producer = kafka.producer();
    console.log("Producer Connecting to Kafka....");
    await producer.connect();
    console.log("Producer Connected!");
    console.log("Sending a message");

    const userName = process.argv[2];
    const partition = userName[0] < "N" ? 0 : 1;
    const result = await producer.send({
      topic: "Users",
      messages: [
        {
          value: userName,
          partition: partition,
        },
      ],
    });
    console.log("Message sent.", JSON.stringify(result));
    await producer.disconnect();
  } catch (ex) {
    console.error("Something went wrong", ex);
  } finally {
    process.exit(0);
  }
}
run();
