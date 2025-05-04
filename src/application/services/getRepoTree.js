import { clientAxios } from "../../infrastructure/api/clientAxios.js";

export const getRepoTree = async (treeUrl) => {
  try {
    const tree = await clientAxios.get(treeUrl);
    return tree.data.tree;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
