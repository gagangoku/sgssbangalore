# Inspired by https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:18-slim

# Install dependencies
#RUN apk add --update python3 pkgconfig make g++ && rm -rf /var/cache/apk/*

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

# Build the nextjs static files
RUN npm run build
RUN npm run build-ssr

EXPOSE 8095
CMD [ "npm", "run", "start"]
