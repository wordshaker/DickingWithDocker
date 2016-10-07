FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/eventsubscriber
WORKDIR /usr/src/eventsubscriber

# Install app dependencies
COPY package.json /usr/src/eventsubscriber
RUN npm install

# Bundle app source
COPY . /usr/src/eventsubscriber

EXPOSE 80
CMD ["npm", "start"]