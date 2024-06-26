import "./globals.css";
import Header from "./Components/Header";

export const metadata = {
	title: "Pathfinder Character Sheet",
	description:
		"Pathfinder character sheet, for managing features like weapons, items, etc. Developed by Kevin Havn as a passion project.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-slate-900">
				<Header></Header>
				<main>{children}</main>
			</body>
		</html>
	);
}
