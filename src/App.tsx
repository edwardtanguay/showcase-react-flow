import { FlowArea1 } from "./flowareas/FlowArea1";
import { FlowArea2 } from "./flowareas/FlowArea2";

export default function App() {
	return (
		<>
			<header className=" bg-gray-600 px-2 pb-4 text-center text-gray-300 mb-6">
				<h1 className="m-0 p-0 text-[1rem] md:text-[1.6rem]" >React Flow Showcase</h1>
				<div className="text-[.6rem] md:text-[1.2rem]">
					<p className="text-center">
						Notes:{' '}
						<a
							className="underline"
							target="_blank"
							href="https://tanguay-eu.vercel.app/forays/320"
						>https://tanguay-eu.vercel.app/forays/320</a
						>
					</p>
					<p className="text-center">
						Repository:{' '}
						<a
							className="underline"
							target="_blank"
							href="https://github.com/edwardtanguay/showcase-react-flow"
						>https://github.com/edwardtanguay/showcase-react-flow</a
						>
					</p>
				</div>
				<div className="block md:hidden -mb-1 mt-3 bg-gray-800 text-yellow-200 italic">
					This site not yet optimized for mobile view.
				</div>
			</header>
			<div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '1rem', width: '100%', height: '80rem' }}>
				<FlowArea1 />
				<FlowArea2 />
			</div>
		</>
	);
}
