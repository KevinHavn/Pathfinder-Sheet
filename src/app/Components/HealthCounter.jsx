"use client";
import { useState } from "react";

/**
 * Represents a health tracker component.
 * @component
 */
const HealthTracker = () => {
	const [maxHealth, setMaxHealth] = useState(8);
	const [currentHealth, setCurrentHealth] = useState(8);

	const handleMaxHealthChange = (e) => {
		const newMax = parseInt(e.target.value, 10) || 0;
		setMaxHealth(newMax);
		if (currentHealth > newMax) {
			setCurrentHealth(newMax);
		}
	};

	const handleCurrentHealthChange = (e) => {
		const newCurrent = parseInt(e.target.value, 10) || 0;
		setCurrentHealth(newCurrent > maxHealth ? maxHealth : newCurrent);
	};

	return (
		<div className="flex justify-between">
			<label className="block mb-2 text-sm font-bold text-white">
				Max Health:
				<input
					type="number"
					value={maxHealth}
					onChange={handleMaxHealthChange}
					className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
				/>
			</label>
			<label className="block mb-2 text-sm font-bold text-white">
				Current Health:
				<input
					type="number"
					value={currentHealth}
					onChange={handleCurrentHealthChange}
					className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
				/>
			</label>
		</div>
	);
};

export default HealthTracker;
