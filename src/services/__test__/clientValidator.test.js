import { validate } from "../clientValidator";
import { GITHUB_API_REPO_URL } from "../../constants/constants";

describe("validate function", () => {
  it("should return true for a valid GitHub API repository URL", () => {
    const validUrl = `${GITHUB_API_REPO_URL}/owner/repo`;
    expect(validate(validUrl)).toBe(true);
  });

  it("should return false for a valid URL that is not a GitHub API repository URL", () => {
    const invalidUrl = "https://example.com/owner/repo";
    expect(validate(invalidUrl)).toBe(false);
  });

  it("should return false for an invalid URL", () => {
    const invalidUrl = "not-a-valid-url";
    expect(validate(invalidUrl)).toBe(false);
  });

  it("should return false for a GitHub API URL without https protocol", () => {
    const invalidUrl = `http://api.github.com/repos/owner/repo`;
    expect(validate(invalidUrl)).toBe(false);
  });
});