const user = require('./user').user;
const handler = function (event, context, callback) {
  user.login(username, password)
    .then((success) => {
      //success
    })
    .catch(() => {
      //error
    });
};

exports.handler = handler;
