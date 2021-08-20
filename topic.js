const { Kafka } = require("kafkajs");
const MAC_NAME = "192.168.1.13";

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "mynodeapp",
      brokers: [`${MAC_NAME}:9092`],
    });

    const admin = kafka.admin();
    console.log("Connecting to Kafka....");
    await admin.connect();
    console.log("Connected!");

    console.log("Creating TOPIC: ");
    await admin.createTopics({
      topics: [
        {
          topic: "Users",
          numPartitions: 2,
        },
      ],
    });
    console.log("TOPICS created.");
    await admin.disconnect();
  } catch (ex) {
    console.error("Something went wrong", ex);
  } finally {
    process.exit(0);
  }
}
run();
