# Use node from official repo
FROM node:11.7.0-alpine

# set working directory
RUN mkdir /etc/app
WORKDIR /etc/app

# Install app dependencie
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# This allows us to take advantage of cached Docker layers.
COPY package.json package.json
RUN npm install --loglevel error
RUN npm cache clean --force 

# Copy source codenpm
COPY . .

ENTRYPOINT [ "npm", "run", "start" ]