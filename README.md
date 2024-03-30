# Description
SproutWeb is a responsive online shop application designed for gardening enthusiasts
to effortlessly purchase plants, soil, and pots. From a technical standpoint,
the application is built using a combination of React.js for the front-end and Spring Boot for the back-end.

# Environmental variables
## Frontend
To enable comunication between frontend and backend, in /sprount_app/src/api/axios.js replace existing BASE_URL with your own.

Example of configuration:
```
 BASE_URL = "http://{host}:{port}";
```

By default host is your localhost address. To change it add server.address in application.properties file located in /sprout/src/main/resources.
```
 server.address = x.x.x.x
```

## Backend
To connect to the database, create another .env file in /sprout/src/main/resources following .env.example variable format and input variables.
To generate key: https://asecuritysite.com/encryption/plain

Example of .env file:
```
DATABASE_URL="jdbc:postgresql://{host}:{port}/{database_name}"
DATABASE_LOGIN="postgres"
DATABASE_PASSWORD="password"

ENCRYPTION_KEY="{256-bit key}"
```

# How to run
## Frontend
to start frontend application navigate to **sprout_app** directory and run following command:
```
npm start
```

## Backend
to start backend navigate to **sprout** directory and run following command:
```
./mvnw spring-boot:run
```

# Progress Log
**30.03.2024** - store has a working plant ordering procedure, but is missing ground and pot items pages.
Orders are currently not stored in the dataabase due to possible issues with later implementation of more product types.
