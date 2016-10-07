FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app/dickingwithdocker
WORKDIR /usr/src/app/dickingwithdocker

# Install app dependencies
COPY package.json /usr/src/app/dickingwithdocker
RUN npm install -g npm@latest
RUN npm install

# Bundle app source
COPY . /usr/src/app/dickingwithdocker

EXPOSE 8000
CMD ["npm", "start"]