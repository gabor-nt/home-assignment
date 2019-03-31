const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");

describe("app", () => {
  it("returns hello tests", async () => {
    const requestData = { url: "https://rss.acast.com/varvet" };
    const response = await axios.post("http://localhost:8080/parse-rss", requestData);
    expect(response.data).toEqual({ hello: requestData.url });
  });
});
