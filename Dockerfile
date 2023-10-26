FROM node:18
# Create app directory
WORKDIR /app/
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./node ./node

WORKDIR /app/node/
RUN npm install
RUN ls

# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
# COPY . .

EXPOSE 1900
CMD [ "node", "index.js" ]