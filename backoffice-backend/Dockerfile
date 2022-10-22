FROM node:16-alpine

# Create the application directory
WORKDIR /usr/src/app

# Copy package to install dependencies
COPY package*.json ./

# Install dependencies for production
RUN npm install

# Copy the whole code
COPY . .

# Install rimraf package
RUN npm install -g rimraf

# Build nestjs app
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
