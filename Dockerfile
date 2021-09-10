# base image
FROM node:14-alpine

# set working directory
WORKDIR /app

RUN apk add bash

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./

# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true && \
    npm install -g npm@latest && \
    npm install @vue/cli@latest -g

RUN npm install

CMD ["tail", "-f", "/dev/null"]
# start app
#CMD ["npm", "run", "serve"]
