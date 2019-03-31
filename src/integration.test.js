const axios = require("axios");
axios.defaults.adapter = require('axios/lib/adapters/http')

describe("app", () => {
  it("returns hello tests", async () => {
    const response = await axios.get("http://localhost:8080/");
    expect(response.data).toEqual({"hello": "test"});
  });
});
