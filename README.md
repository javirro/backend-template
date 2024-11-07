This template provides a scaffold for backend projects built with Node.js and TypeScript. It is designed to facilitate rapid development with a well-organized structure.

The following sections outline the key aspects of the template.

# Template structure

### Express

The template is based on the `Express` framework for creating HTTP APIs. It includes examples of authentication middleware using JWT (JSON Web Tokens) and IP rate limiting middleware to restrict the number of requests from the same IP within a specific timeframe. The `express-rate-limit` library is used for implementing the rate limiting.

Additionally, the template provides an example of defining a GET endpoint and its associated controller.

https://expressjs.com/



### PostgresSQL

The template is designed for use with a relational database, specifically PostgreSQL. In the db folder, there is a `connectionDb` file where all connection parameters are imported from the .env file. The database connection can be configured either through a single `DATABASE_URL` or by specifying individual parameters. The `pg` library is used to manage database connections.

https://github.com/brianc/node-postgres/tree/master/packages/pg


To streamline database management, a `docker-compose` file is included, allowing easy setup of a PostgreSQL database in a Docker container. Each time a new container is run, the SQL queries defined in `database.sql` are executed within the container, initializing the database structure. Importantly, data persists across sessions by storing it in a Docker volume named `postgres_data`, which is automatically created.

The docker-compose file also spins up a pgAdmin instance, accessible at `localhost:80` in any browser, providing a user-friendly UI for database management and configuration. This setup allows for efficient development and simplified database handling.

