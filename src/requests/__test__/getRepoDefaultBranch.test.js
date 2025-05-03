import { getRepoDefaultBranch } from "../getRepoDefaultBranch";
import { clientAxios } from "../clientAxios";

jest.mock("../clientAxios");

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

  it("should throw an error when the request fails", async () => {
    clientAxios.get.mockRejectedValue(new Error("Request failed"));

    await expect(
      getRepoDefaultBranch(
        "https://api.github.com/repos/alexcumplido/yoga-api",
      ),
    ).rejects.toThrow("Error: Error: Request failed");
  });
});
