const request = require("../js/requests");

global.fetch = require("jest-fetch-mock");
jest.mock('../js/requests');

describe("Test fetch requests to Trackify server", () => {
  beforeEach(() => { fetch.resetMocks() });

  describe("requestReg", () => {
    it("makes a fetch call to /auth/register", async () => {
      const e = {target: {
        "email":"test@example.com",
        "password":"password"
      }};
      await request.requestReg(e);
      expect(fetch).toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledWith('http://18.130.211.172:3000/auth/register');
    })
  })
})
