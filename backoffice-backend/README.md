# WET BAT - Backend

## Setup
### Development
Execute docker compose to create required services
```bash
docker-compose -p "wetbat" up -d
```

Install dependencies
```bash
npm install
```

Run database migrations
```bash
npm run typeorm:run-migrations
```

Seed database
```bash
npm run db:seed
```

And finally, execute application in development mode
```bash
npm run start:dev
```

## Production
First, we need to build the docker image
```bash
docker build . -t wetbat-backoffice-backend
```

Run container with builted image
```bash
docker run --name wetbat-backoffice-backend -p 3000:3000 -e NODE_ENV=production wetbat-backoffice-backend
```

Your app will be available in `http://localhost:3000`


# Configuration
## Env files
The application load *.env* file based on **NODE_ENV** environment variable.  
In that case, you need to update production.env file according your environment.

Allowed values for *NODE_ENV* variable are:
* development
* production

_You don't need to set NODE_ENV variable locally because it's *development* by default_