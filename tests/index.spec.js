const timeout = 100000;
var lohp = require('./../pages/lohp');

describe('Home Page',() => {
    beforeAll(async () => {
      await lohp.login();
    }, timeout);

    it('should load without error', async () => {
      await lohp.verifyTitle();
    });
  },
  timeout,
);