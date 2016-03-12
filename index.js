
'use strict';
var INSTANCE;

/**
 * @params {String} Opts.sid (Required)
 * @params {String} Opts.token (Required)
 * @params {String} Opts.from (Required) // +16518889999
 * @public
 */
module.exports = Opts => {

  if (! (Opts && Opts.sid && Opts.token && Opts.from))
    throw new Error('sid, token and from is required.');

  if (INSTANCE) return INSTANCE;

  const Client = new require('twilio')(Opts.sid, Opts.token);

  // Cleanup opts.from
  Opts.from = Opts.from.replace(/[^\d]/g, '');


  // Create New Instance
  INSTANCE = opts => {

    /**
     * @params {String} opts.to (Required)
     * @params {String} opts.body (Required)
     *
     * @return {Promise}
     * @public
     */
    return new Promise((resolve, reject) => {

      Client.sendMessage({
        to: `+1${opts.to.replace(/[^\d]/g, '')}`,
        from: Opts.from,
        body: opts.body
      }, (err, res) => { //this function is executed when a response is received from Twilio

        if (err) return reject(err);
        return resolve(res);
      });
    });
  };

  return INSTANCE;
};
