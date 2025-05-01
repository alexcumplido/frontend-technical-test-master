import axios from "axios";

export const useAxios = () => {
  const access_token = process.env.REACT_APP_GITHUB_TOKEN;

  const files = [];

  const getRepoDefaultBranch = async (repoUrl) => {
    try {
      const branch = await axios.get(repoUrl, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
      return branch.data.default_branch;
    } catch (error) {
      console.log(error);
    }
  };

  const getRepoTree = async (treeUrl) => {
    try {
      const tree = await axios.get(treeUrl, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
      for (const item of tree.data.tree) {
        if (item.type === "blob") {
          const ext = item.path.split(".").pop();
          !!ext && files.push(ext);
        } else if (item.type === "tree") {
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
