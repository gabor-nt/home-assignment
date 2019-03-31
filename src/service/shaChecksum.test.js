const checksumCalc = require("./shaChecksum");

jest.setTimeout(60000);
describe("shaChecksumCalc", () => {
  it.skip("downloads blob and calculates hash", async () => {
    await expect(
      checksumCalc("https://media.acast.com/varvet/62klarazimmergren/media.mp3")
    ).resolves.toBe("7ac7b155ab846f25209f1366962a181d4aa30624");
  });

  it("skips slow files", async () => {
    await expect(
      checksumCalc("https://media.acast.com/varvet/62klarazimmergren/media.mp3")
    ).resolves.toBe("???");
  });
});
