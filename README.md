
## hosts
put these lines in /etc/hosts.

```
127.0.0.1	broker
127.0.0.1	connect
127.0.0.1	control-center
127.0.0.1	ksql-datagen
127.0.0.1	ksqldb-cli
127.0.0.1	ksqldb-server
127.0.0.1	rest-proxy
127.0.0.1	schema-registry
127.0.0.1	zookeeper
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# docker-compose
$ docker-compose up -d

# development
$ yarn run start user
$ yarn run start

# watch mode
$ yarn run start:dev user
$ yarn run start:dev

# production mode
$ yarn run start:prod user
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
