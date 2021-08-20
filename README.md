# Simple Kafka example using Kafkajs

## Command to the run the docker container

`docker-compose up -d`

OR run each container seperately

## Command to run the ZooKeeper

`docker run --name zookeeper -p 2181:2181 zookeeper`

## Command to run the broker

`docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=YOUR_COMPUTER_NAME:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://YOUR_COMPUTER_NAME:9092 -e KAFKA_OFFSETS_TOPICS_REPLICATION_FACTOR=1 confluentinc/cp-kafka`

## Step 1

- Create "Users" topic.js using the command

  `node topic.js`

## Step 2

- Create messages using the producer.js

  `node producer.js Sumit`

  `node producer.js Michelle`

  `node producer.js Abigail`

## Step 3

- Consume the messages using the consumer.js

  `node consumer.js`

## Contact

Created by [@sumitvairagar](https://www.linkedin.com/in/sumit-vairagar-719a4558/) - feel free to contact me!
