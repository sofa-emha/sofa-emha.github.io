import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";
import { Container } from "@/components/Container";
import { Skeleton, Repository } from "@/components/Index";

async function Content() {
	let resource = []
	const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN }),
				getProject = await octokit.request("GET /users/sofaemha/repos"),
				Project = (getProject.status === 200) ? getProject.data : ['']
	Project.map((data) => {
		resource.push({id: data.id, name: data.name, description: data.description, pages: data.has_pages})
	})
	return resource
}

export default function Index() {
	const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

	useEffect(() => {
		Content().then(data => {
			setData(data)
      setLoading(false)
		})
	},[])

  return (
		<>
			<Container className="mt-16 sm:mt-32">
				<div className="max-w-2xl">
						<h1 className="text-4xl mb-20 font-bold tracking-tight text-zinc-100 sm:text-5xl">
							GitHub Projects.
						</h1>
				</div>
			</Container>
      <Container className="mt-5">
        <div className="grid max-w-xl gap-4 sm:grid-cols-2 lg:max-w-none">
					{ (loading) ? (
							<>
								<Skeleton/>
							</>
						) : (
							data.map((item) => (
								<>
									<Repository key={item.name} itemId={item.id} itemName={item.name} itemPages={item.pages} itemDesc={item.description}
									/>
								</>
							))
						)
					}
				</div>
			</Container>
		</>
  )
}
