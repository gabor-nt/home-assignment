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
    expect(response.data).toBe("Failed to fetch from url: [something else]");
  });

  it("returns error for non rss url", async () => {
    const requestData = { url: "https://www.acast.com" };
    let response = { status: 200 };
    try {
      await axios.post(localServer, requestData);
    } catch (e) {
      response = e.response;
    }
    expect(response.status).toBe(400);
    expect(response.data).toBe("Unexpected rss format");
  });

  it("returns expected number of records for valid url", async () => {
    const requestData = { url: "https://rss.acast.com/varvet" };
    const response = await axios.post(localServer, requestData);
    expect(response.data.length).toBe(458);
    expect(response.data[42]).toEqual({
      checksum: "???",
      title: "RV18: Filip Hammar",
      url: "https://media.acast.com/varvet/rv18-filiphammar/media.mp3"
    });
  });
});
