import { getRepoDefaultBranch, getRepoTree } from "../clients/clientAxios";

export const useAxios = () => {
  const files = [];
  const TYPE_BLOB = "blob";
  const TYPE_TREE = "tree";
  
  const recurseRepoTree = async (treeUrl) => {
    try {
      const tree = await getRepoTree(treeUrl);
      for (const item of tree) {
        if (item.type === TYPE_BLOB) {
          const ext = item.path.split(".").pop();
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
