exports.register = async (server, options, next) => {
  console.log('Plugin 2: Doing async task for 2000ms')
  setTimeout(() => {
    console.log('Plugin 2: Calling Next')
    next();
  }, 2000)
};

exports.register.attributes = {
  name: 'async-plugin2'
};
