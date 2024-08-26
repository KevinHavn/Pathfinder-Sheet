import "./globals.css";
import localFont from "next/font/local";
import Header from "./Components/Header";
import { CharacterProvider } from "./Components/CharacterContext";

const PathfinderFont = localFont({
	src: [{ path: "../../public/fonts/Pathfinder-Icons.ttf" }],
	variable: "--font-pathfinder-icons",
});

export const metadata = {
	title: "Pathfinder Character Sheet",
	description:
		"Pathfinder character sheet, for managing features like weapons, items, etc. Developed by Kevin Havn as a passion project.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${PathfinderFont.variable} bg-slate-900`}>
				<CharacterProvider>
					<Header></Header>
					<main>{children}</main>
				</CharacterProvider>
			</body>
		</html>
	);
}
