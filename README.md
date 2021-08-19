#Command to run the ZooKeeper
docker run --name zookeeper -p 2181:2181 zookeeper

#Command to run the broker
docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=C02SK05SG8WL.local:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://C02SK05SG8WL.local:9092 -e KAFKA_OFFSETS_TOPICS_REPLICATION_FACTOR=1 confluentinc/cp-kafka

#Step 1

- Create "Users" topic.js using the command
  node topic.js

#Step 2

- Create messages using the producer.js
  node producer.js Sumit
  node producer.js Michelle
  node producer.js Abigail

#Step 3

- Consume the messages using the consumer.js
  node consumer.js