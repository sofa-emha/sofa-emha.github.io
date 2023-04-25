import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";
import { Container } from "@/components/Container";

async function Content() {
	let resource = []
	const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })
	const getProject = await octokit.request("GET /users/sofaemha/repos")
	const Project = (getProject.status === 200) ? getProject.data : ['']
	Project.map((data) => {
		resource.push({id: data.id, name: data.name, description: data.description, pages: data.has_pages})
	})
	return resource
}

export default function Index() {
	const [data, setData] = useState([])

	useEffect(() => {
		Content().then(data => {
			setData(data)
		})
	},[])

  return (
		<>
			<Container className="mt-16 sm:mt-32">
				<div className="max-w-2xl">
						<h1 className="text-4xl mb-20 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
							GitHub Projects.
						</h1>
				</div>
			</Container>
			
      <Container className="mt-5">
        <div className="grid max-w-xl gap-4 sm:grid-cols-2 lg:max-w-none">
					{
						data.map((item) => (
							<div key={item.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700">
								<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
								<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
								{
									item.pages && (
										<a href={`https://github.sofa.my.id/${item.name}`} className="inline-flex py-2 px-5 mr-2 border border-zinc-700 rounded-md bg-zinc-700 items-center text-white">
											Preview
										</a>
									)
								}
								<a href={`https://github.com/sofaemha/${item.name}`} className="inline-flex py-2 px-5 border border-zinc-700 rounded-md bg-zinc-700 items-center text-white">
									Repository
								</a>
							</div>
						))
					}
				</div>
			</Container>
		</>
  )
}
