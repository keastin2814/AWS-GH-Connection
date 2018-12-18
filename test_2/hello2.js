'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is the second script...Did I brake anything? Am I still here in one piece?',
      input: event,
    }),
  };
};
