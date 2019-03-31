const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const localServer = "http://localhost:8080/api/parse-rss";

describe("app", () => {
  it("returns error for invalid url", async () => {
    const requestData = { url: "something else" };
    let response = { status: 200 };
    try {
      await axios.post(localServer, requestData);
    } catch (e) {
      response = e.response;
    }
    expect(response.status).toBe(400);
    expect(response.statusText).toBe("Bad Request");
  });

  it("returns xml for valid url", async () => {
    const requestData = { url: "https://rss.acast.com/varvet" };
    const response = await axios.post(localServer, requestData);
    expect(response.data).toEqual({ hello: "xml" });
  });
});
