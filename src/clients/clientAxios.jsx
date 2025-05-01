import axios from "axios";

const ACCES_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

if (!ACCES_TOKEN) throw new Error(`ACESS TOKEN : ${ACCES_TOKEN}.`);

const clientAxios = axios.create({
  headers: {Authorization: `token ${ACCES_TOKEN}`}
},)

export const getRepoDefaultBranch = async (repoUrl) => {
  try {
      const branch = await clientAxios.get(repoUrl);
      return branch.data.default_branch;
  } catch (error) {
      throw new Error(`Error: ${error}`);
  }
};

export const getRepoTree = async (treeUrl) => {
  try {
      const tree = await clientAxios.get(treeUrl);
      return tree.data.tree
  } catch (error) {
      throw new Error(`Error: ${error}`);
  }
}
