export default
{
  "type": "mysql",
  "host": "localhost",
  "database": "surveys-users",
  "username": process.env.MYSQL_USER_NAME,
  "password": process.env.MYSQL_PASS,
  "port": 3307,
  "migrations": ["./src/database/migrations/**.ts"],
  "entities": ["./src/models/**.ts"],
  "logging": true,
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
  
} 