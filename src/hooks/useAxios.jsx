import axios from 'axios';


export const useAxios = () => {
	const access_token = '...'

	const files = []

	const getRepoDefaultBranch = async (repoUrl) => {
		try {
			const branch = await axios.get(repoUrl, {
				headers: {
					'Authorization': `token ${access_token}`
				}
			});
			return branch.data.default_branch
		} catch ( error ) {
			console.log(error)
		}
	}

	const getRepoTree = async (treeUrl) => {
		try {
			const tree = await axios.get(treeUrl, {
				headers: {
					'Authorization': `token ${access_token}`
				}
			});
			for (const item of tree.data.tree) {
				const ext = item.path.split('.').pop()
				!!ext && files.push(ext)
			}
		} catch ( error ) {
			console.log(error)
		}
	}

	const getRepoData = async (repoUrl) => {
		const branch = await getRepoDefaultBranch(repoUrl)
		await getRepoTree(`${repoUrl}/git/trees/${branch}`)
		return files
	};

	return {
		getRepoData,
	};
};
