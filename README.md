# How to run

## Prerequisites

- git
- docker-compose
- node and npm

<br/>

### Step 1:

clone the project and `cd` into it

<br/>

### Step 2:

Run below command

```
docker-compose up -d
```

<br/>

### Step 3:

create a topic named "test" with below command

```
docker exec -it kafka1 kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
```

<br/>

### Step 4:

Start producer

```
npm run start:producer
```

<br/>

### Step 5:

Start consumer

```
npm run start:consumer
```

<br/>

Now we can check the consumer logs to get the messages sent by the producer.

<br/>

Do not forget to run the `docker-compose down` command to stop and remove kafka and zookeeper containers.
