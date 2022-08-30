FROM  node:current-alpine3.16
WORKDIR /app
COPY . .
RUN npm install yarn --location=global && yarn
CMD  [  "npm", "run",  "prod"  ]
