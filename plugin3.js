exports.register = async (server, options, next) => {
  console.log('Plugin 3: Doing async task for 2000ms.')
  setTimeout(() => {
    console.log('Plugin 3: Calling next with error.')
    next(new Error('Plugin 3 Error.'));
  }, 2000)
};

exports.register.attributes = {
  name: 'async-plugin3'
};
