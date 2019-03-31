const acastParse = require("./acastParser").create(url => {
  return url === "xyz" ? 123 : 234;
});

describe("acastParser", () => {
  it("x", async () => {
    const expectedOutput = [
      { title: "Episode 1 - abc", checksum: 123, url: "xyz" },
      { title: "Episode 2 - abc", checksum: 234, url: "qwe" }
    ];
    const dummyAcastRss =
      "<rss>" +
      "<channel>" +
      '<item><title>Episode 1 - abc</title><enclosure url="xyz" length="42" type="audio/mpeg"/></item>' +
      '<item><title>Episode 2 - abc</title><enclosure url="qwe" length="42" type="audio/mpeg"/></item>' +
      "</channel>" +
      "</rss>";
    await expect(acastParse(dummyAcastRss)).resolves.toEqual(expectedOutput);
  });

  it("can handle non xml input", async () => {
    await expect(acastParse("")).rejects.toEqual("Unexpected rss format");
  });
});
