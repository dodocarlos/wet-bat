# Wet Bat

## Setup and run

All required steps to configure are included in specific subfolder

- [Backend](backoffice-backend/README.md)
- [Frontend](backoffice-frontend/README.md)

# Demo

You can access demo on: http://wetbat.devemloop.com.br

# Notes

## Backend

- You can access the swagger http://wetbat.devemloop.com.br:3000/api-docs
- I prefer to use NestJS framework because it has some features that help a lot on development and in a great and stable framework
- For database orquestration TypeOrm was used
- For future a plan is to add a cache (redis) feature and a logging service, like a elasticsearch (currently it uses the NestJS logger)

## Frontend

- Frontend has built using Material UI (MUI) framework
- I prefer to use react-query for data fetching because it has some cool features like caching and retrying. Another point is because it reduces unnecessary calls of useEffect hook
- Most of things are component approach, and you can reuse where you need
