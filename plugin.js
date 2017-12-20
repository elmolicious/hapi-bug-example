exports.register = async (server, options, next) => {
  console.log('Plugin 1: Doing async task for 1000ms.')
  setTimeout(() => {
    console.log('Plugin 1: Double Calling Next')
    next();
    next();
  }, 1000)
};

exports.register.attributes = {
  name: 'async-plugin'
};
