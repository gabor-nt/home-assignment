const acastParserFactory = require("./acastParser");
const errors = require("../errors");

describe("acastParser", () => {
  it("can handle example", async () => {
    const parser = acastParserFactory.create(url => {
      return url === "xyz" ? 123 : 234;
    });
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
    await expect(parser.parse(dummyAcastRss)).resolves.toEqual(expectedOutput);
  });

  it("can handle non-xml input", async () => {
    const parser = acastParserFactory.create(() => {});
    await expect(parser.parse("")).rejects.toEqual(errors.createBadRssError());
  });

  it("can handle incomplete input", async () => {
    const parser = acastParserFactory.create(() => {});
    await expect(parser.parse("<rss/>")).rejects.toEqual(
      errors.createBadRssError()
    );
  });
});
