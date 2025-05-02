import { clientAxios } from "./clientAxios.js";

export const getRepoDefaultBranch = async (repoUrl) => {
  try {
    const branch = await clientAxios.get(repoUrl);
    return branch.data.default_branch;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
