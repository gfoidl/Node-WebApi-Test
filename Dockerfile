FROM mhart/alpine-node:8.9.0

WORKDIR /opt/app
COPY    package.json .
RUN     npm install --only=production
COPY    . .

EXPOSE  8080

CMD     [ "npm", "start" ]
