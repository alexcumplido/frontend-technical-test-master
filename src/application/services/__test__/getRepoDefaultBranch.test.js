import { getRepoDefaultBranch } from "../getRepoDefaultBranch";
import { clientAxios } from "../../../infrastructure/api/clientAxios";

jest.mock("../../../infrastructure/api/clientAxios.js");

describe("getRepoDefaultBranch", () => {
  it("should return the default branch when the request is successful", async () => {
    const mockBranchData = { default_branch: "main" };
    clientAxios.get.mockResolvedValue({ data: mockBranchData });

    const result = await getRepoDefaultBranch(
      "https://api.github.com/repos/alexcumplido/yoga-api",
    );

    expect(result).toBe("main");
    expect(clientAxios.get).toHaveBeenCalledWith(
      "https://api.github.com/repos/alexcumplido/yoga-api",
    );
  });

  it("should return null when the request fails with no response", async () => {
    clientAxios.get.mockRejectedValue({ response: null });

    const result = await getRepoDefaultBranch(
      "https://api.github.com/repos/alex/yoga-api",
    );

    expect(result).toBeNull();
  });

  it("should return 404 when the request fails with a 404 status code", async () => {
    clientAxios.get.mockRejectedValue({ response: { status: 404 } });

    const result = await getRepoDefaultBranch(
      "https://api.github.com/repos/alex/yoga-api",
    );

    expect(result).toBe(404);
  });
});
