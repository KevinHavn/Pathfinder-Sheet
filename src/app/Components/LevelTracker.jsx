const LevelTracker = () => {
	const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

	return (
		<div className="flex items-center justify-center">
			<select className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
				{numbers.map((number) => (
					<option key={number} value={number}>
						{number}
					</option>
				))}
			</select>
		</div>
	);
};

export default LevelTracker;
