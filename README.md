# twilio-client
Nodejs client for https://twilio.com

----

## Usage

```js
/**
 * @params {String} opts.sid (Required)
 * @params {String} opts.token (Required)
 * @params {String} opts.from (Required) // +16518889999
 * @public
 */
const twilio = require('../')({
  sid: 'some-string',
  toke: 'some-string',
  from: '+16518889999'
});

/**
 * @params {String} opts.to (Required)
 * @params {String} opts.body (Required)
 *
 * @return {Promise}
 * @public
 */
twilio({
  to: '904-226-5413'
  body: 'Hello World!'
})
.then(function(res) {
  console.log(res);
})
.catch(function(e) {
  console.log(e);
});
```


#### Run Tests

```bash
$ npm test

# OR for continuous testing
$ nodemon --exec "npm test"
```
