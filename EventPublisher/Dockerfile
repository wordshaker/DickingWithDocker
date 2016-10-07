FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/eventpublisher
WORKDIR /usr/src/eventpublisher

# Install app dependencies
COPY package.json /usr/src/eventpublisher
RUN npm install

# Bundle app source
COPY . /usr/src/eventpublisher

EXPOSE 80
CMD ["npm", "start"]