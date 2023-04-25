import { Octokit } from "@octokit/core";

function createObject(resource) {
  if (!resource) {
    return [];
  }
  return resource.map(data => {
    const newObject = {
      name: data.path.split('/').pop(),
      type: data.type,
      url: data.url
    };
    if (data.type === 'tree') {
      const subArray = resource.filter(item => item.path.startsWith(data.path));
      newObject.tree = createObject(subArray);
    }
    return newObject;
  });
}

async function initialization() {
  var resource = [], directory = []
  const octokit = new Octokit({ auth: `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` })
  const getRepository = await octokit.request("GET /users/sofaemha/repos")
  const Repository = (getRepository.status === 200) ? getRepository.data : ['']
  const regexBranch = /\/repos\/sofaemha\/[^]+\/branches/
  Repository.map((data) => {
    resource.push({id: data.id, name: data.name, branch: data.branches_url.match(regexBranch)[0]})
  })
  resource.map( async (data) => {
    const Branch = await octokit.request(`GET ${data.branch}/master`)
    const Data = (Branch.status === 200) ? Branch.data : 500
    const getContent = await octokit.request(`GET /repos/sofaemha/${data.name}/git/trees/${Data.commit.sha}`, {recursive: true})
    const Content = (getContent.status === 200) ? getContent.data : 500
    directory.push(
      {
        id: data.id,
        name: data.name,
        content: Content.tree
      }
    )
  })
  return directory
}


export default function GitHub() {
  var directory = []
  const data = initialization()
  directory.push(createObject(data.tree))
  console.log(directory);
  return directory
}