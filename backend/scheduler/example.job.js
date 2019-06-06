const schedule = require('node-schedule');
const exampleService = require('../services/example.service');

const j = schedule.scheduleJob('*/30 * * * * *', function(){
  console.log('I run every 30 seconds!');
  exampleService.exampleMethod();
});