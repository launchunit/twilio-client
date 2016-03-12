
const test = require('ava');

// Init Things
var twilio;

test.serial('Client Inits', t => {

  const opts = {
    sid: process.env.TWILIO_SID,
    token: process.env.TWILIO_TOKEN,
    from: process.env.TWILIO_FROM
  };

  twilio = require('../')(opts);
  t.ok(typeof twilio === 'function');
});

test.serial('Send a SMS', t => {

  return twilio({
    to: '904-226-6513',
    body: 'Hello World'
  })
  .then(function(res) {
    t.ok(res.uri);
    t.ok(res.body)
  })
  .catch(function(e) {
    // console.log(e);
    t.is(e, undefined);
  });
});
