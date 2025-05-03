import { getRepoDefaultBranch } from "../requests/getRepoDefaultBranch.js";
import { getRepoTree } from "../requests/getRepoTree.js";
import { TYPE_BLOB, TYPE_TREE } from "../constants/constants.js";
import { getFileExtension } from "../utils/utils.js";
export const useAxios = () => {
  const files = [];
  const recurseRepoTree = async (treeUrl) => {
    try {
      const tree = await getRepoTree(treeUrl);
      for (const item of tree) {
        if (item.type === TYPE_BLOB) {
          const ext = getFileExtension(item);
          !!ext && files.push(ext);
        } else if (item.type === TYPE_TREE) {
          await recurseRepoTree(item.url);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRepoData = async (repoUrl) => {
    const branch = await getRepoDefaultBranch(repoUrl);
    await recurseRepoTree(`${repoUrl}/git/trees/${branch}`);
    return files;
  };

  return {
    getRepoData,
  };
};
