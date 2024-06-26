import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-slate-700 mx-10 mt-6 p-7 rounded-tr rounded-tl">
			<div className="flex justify-between items-center">
				<h1 className="text-white text-2xl">Pathsheet</h1>
				<nav className="flex-grow ml-10">
					<ul className="flex justify-around space-x-10 text-white">
						<li>
							<Link href="/items" replace>
								Items
							</Link>
						</li>
						<li>
							<Link href="/weapons" replace>
								Weapons
							</Link>
						</li>
						<li>
							<Link href="/actions" replace>
								Actions
							</Link>
						</li>
						<li>
							<Link href="/misc" replace>
								Misc.
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
