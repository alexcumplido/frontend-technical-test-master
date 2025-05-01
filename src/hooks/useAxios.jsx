import axiosClient from "../services/axiosClient";

export const useAxios = () => {
  const TYPE_BLOB = "blob";
  const TYPE_TREE = "tree";
  const files = [];
  
  const getRepoDefaultBranch = async (repoUrl) => {
    try {
      const branch = await axiosClient.get(repoUrl);
      return branch.data.default_branch;
    } catch (error) {
      console.log(error);
    }
  };

  const getRepoTree = async (treeUrl) => {
    try {
      const tree = await axiosClient.get(treeUrl);
      for (const item of tree.data.tree) {
        if (item.type === TYPE_BLOB) {
          const ext = item.path.split(".").pop();
          !!ext && files.push(ext);
        } else if (item.type === TYPE_TREE) {
          await getRepoTree(item.url);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRepoData = async (repoUrl) => {
    const branch = await getRepoDefaultBranch(repoUrl);
    await getRepoTree(`${repoUrl}/git/trees/${branch}`);
    return files;
  };

  return {
    getRepoData,
  };
};
