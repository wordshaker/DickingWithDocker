FROM node:argon
# Create app directory
RUN mkdir -p /usr/src/display
WORKDIR /usr/src/display
# Install app dependencies
COPY package.json /usr/src/display/
RUN npm install
# Bundle app source
COPY . /usr/src/display
EXPOSE 3005 3006
CMD [ "npm", "start" ]