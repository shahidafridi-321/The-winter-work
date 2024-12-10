import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const styles = {
	height: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
};

export const MainLayout = () => {
	return (
		<div style={styles}>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};
