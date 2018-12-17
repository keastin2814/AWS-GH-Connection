'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Can this text be pulled by AWS?....Let\'s find out.',
      input: event,
    }),
  };
};
