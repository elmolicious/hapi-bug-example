const Hapi = require('hapi');

const plugin = require('./plugin');
const plugin2 = require('./plugin2');
const plugin3 = require('./plugin3');

const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: '18000'
});

const start = async () => {
  console.log('Registering plugins ...');
  try{
    await server.register([plugin, plugin2, plugin3]);
  } catch(error) {
    return console.log('Plugin registration failed', error);
  }

  console.log('Registered plugins!');

  console.log('Starting server ...')
  await server.start();
  console.log('Startet server!')
};

start();
