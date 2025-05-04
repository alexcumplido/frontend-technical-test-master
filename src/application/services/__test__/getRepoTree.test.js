import { getRepoTree } from "../getRepoTree";
import { clientAxios } from "../../../infrastructure/api/clientAxios";

jest.mock("../../../infrastructure/api/clientAxios.js");

describe("getRepoTree", () => {
  it("should return the tree data when the request is successful", async () => {
    const mockTreeData = { tree: [{ path: "file1.js" }, { path: "file2.js" }] };
    clientAxios.get.mockResolvedValue({ data: mockTreeData });

    const result = await getRepoTree(
      "https://api.github.com/repos/alexcumplido/yoga-api",
    );

    expect(result).toEqual(mockTreeData.tree);
    expect(clientAxios.get).toHaveBeenCalledWith(
      "https://api.github.com/repos/alexcumplido/yoga-api",
    );
  });

  it("should throw an error when the request fails", async () => {
    clientAxios.get.mockRejectedValue(new Error("Request failed"));

    await expect(
      getRepoTree("https://api.github.com/repos/alexcumplido/yoga-api"),
    ).rejects.toThrow("Error: Error: Request failed");
  });
});
