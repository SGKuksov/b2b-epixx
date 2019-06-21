/* eslint-disable import/no-extraneous-dependencies */
const ghPages = require('gh-pages');
const config = require('./config');
const path = require('path');

// const publish = () => {
//   ghpages.publish(
//     config.output,
//     {
//       user: {
//         name: 'Sergei Kuksov',
//         email: 'avvey2009@gmail.com'
//       }
//     },
//     err => {
//       console.log(err);
//     }
//   );
// };

// exports.publish = publish;

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './dist'), cb);
}
exports.deploy = deploy;
