import Link from 'next/link'
import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";
import { Container } from "@/components/Container";

function Skeleton() {
	return (
		<>
			{
				Array(6).fill(0).map(index => (
					<div key={`dummy${index}`} className="p-6 rounded-lg shadow bg-zinc-800 border-zinc-700 animate-pulse">
						<div className="mb-2 h-2.5 w-48 rounded-full bg-zinc-100"></div>
						<p className="mb-3">
							<div className="mb-2.5 h-2 w-full max-w-[360px] rounded-full bg-gray-400/90"></div>
							<div className="mb-2.5 h-2 w-[80%] rounded-full bg-gray-400/90"></div>
							<div className="mb-2.5 h-2 w-[50%] max-w-[330px] rounded-full bg-gray-400/90"></div>
						</p>
						
						<a className="inline-flex py-2 px-5 border border-zinc-700 rounded-md bg-zinc-700 items-center">
							<div className="h-2 w-48 rounded-full bg-zinc-100"></div>
						</a>
					</div>
				))
			}
		</>
	)
}
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
								<div key={item.id} className="p-6 rounded-lg shadow bg-zinc-800 border-zinc-700">
									<h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{item.name}</h5>
									<p className="mb-3 font-normal text-gray-400">{item.description}</p>
									{
										item.pages && (
											<Link href={`/${item.name}`} replace className="inline-flex py-2 px-5 mr-2 border border-zinc-700 rounded-md bg-zinc-700 items-center text-white">
												Preview
											</Link>
										)
									}
									<Link href={`https://github.com/sofaemha/${item.name}`} replace className="inline-flex py-2 px-5 border border-zinc-700 rounded-md bg-zinc-700 items-center text-white">
										Repository
									</Link>
								</div>
							))
						)
					}
				</div>
			</Container>
		</>
  )
}
