This template provides a scaffold for backend projects built with Node.js and TypeScript. It is designed to facilitate rapid development with a well-organized structure.

## Template basic requirements

The project dependencies must be installed using `npm` instead of using `yarn` because project already has a package-lock.json.

```
npm install
```

To run the project

```
npm start
```

### Environment variables

- LIMITER_TIME: time in miliseconds in which a max number of request are allowed.
- LIMITER_MAX_REQUESTS: max request allowed in a time period.
- DB_HOST
- DB_USER
- DB_PASSWORD
- DB_DATABASE
- DB_PORT
- DATABASE_URL: Only required if the connection with the DB is done using this configuration method.
- UI_URL: url for the frontend. Used for CORS. If it is not defined, the default value is `*`

## Template structure

The following sections outline the key aspects of the template.

### Express

The template is based on the `Express` framework for creating HTTP APIs. It includes examples of authentication middleware using JWT (JSON Web Tokens) and IP rate limiting middleware to restrict the number of requests from the same IP within a specific timeframe. The `express-rate-limit` library is used for implementing the rate limiting.

Additionally, the template provides an example of defining a GET endpoint and its associated controller.

https://expressjs.com/


CORS is managed in the proyect through `cors` library. The configuration for this template is only allow request from a specific-url. This url is set through env variables.


### PostgresSQL

The template is designed for use with a relational database, specifically PostgreSQL. In the db folder, there is a `connectionDb` file where all connection parameters are imported from the .env file. The database connection can be configured either through a single `DATABASE_URL` or by specifying individual parameters. The `pg` library is used to manage database connections.

https://github.com/brianc/node-postgres/tree/master/packages/pg


To streamline database management, a `docker-compose` file is included, allowing easy setup of a PostgreSQL database in a Docker container. Each time a new container is run, the SQL queries defined in `database.sql` are executed within the container, initializing the database structure. Importantly, data persists across sessions by storing it in a Docker volume named `postgres_data`, which is automatically created.

The docker-compose file also spins up a pgAdmin instance, accessible at `localhost:80` in any browser, providing a user-friendly UI for database management and configuration. This setup allows for efficient development and simplified database handling.


### Websockets

The template also included a websocket simple server which allows handle client connections and messages. It the intial point to build a more complex websocket server. For this feature, the `ws` library is used.

### Prettier

The template has a basic prettier configuration to format code. This configuration could be easily changed in `.prettierc.json` file.