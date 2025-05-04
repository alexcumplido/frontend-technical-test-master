import { clientAxios } from "../../infrastructure/api/clientAxios.js";

export const getRepoDefaultBranch = async (repoUrl) => {
  try {
    const branch = await clientAxios.get(repoUrl);
    return branch.data.default_branch;
  } catch (error) {
    return error.response ? error.response.status : null;
  }
};
