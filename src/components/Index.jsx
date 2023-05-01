export function Skeleton() {
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

export function Repository({itemId, itemName, itemPages, itemDesc}) {
	return (
		<div key={itemId} className="p-6 rounded-lg shadow bg-zinc-800 border-zinc-700">
			<h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{itemName}</h5>
			<p className="mb-3 font-normal text-gray-400">{itemDesc}</p>
			{
				itemPages && (
					<a href={`https://github.sofa.my.id/${itemName}`} target="_blank" rel="noopener noreferrer" className="inline-flex py-2 px-5 mr-2 border border-zinc-700 rounded-md bg-zinc-700 items-center text-white">
						Preview
					</a>
				)
			}
			<a href={`https://github.com/sofaemha/${itemName}`} target="_blank" rel="noopener noreferrer" className="inline-flex py-2 px-5 border border-zinc-700 rounded-md bg-zinc-700 items-center text-white">
				Repository
			</a>
		</div>
	)
}