import express from 'express';
const provaRouter = require('./src/routes/provaRouter');
const app = express();
app.use(provaRouter);
app.listen({ port: 3000 }, () => {
  console.log('il servizio è su');
});
