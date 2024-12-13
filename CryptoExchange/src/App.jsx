import React from "react";
import { Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<Link to="/">Home</Link>
					<Link to="/exchanges">Exchanges</Link>
					<Link to="/cryptocurrencies">Cryptocurrencies</Link>
					<Link to="/crypto/:coinId">Crypto Details</Link>
					<Link to="/news">News</Link>
				</Layout>
			</div>
			<div className="footer"></div>
		</div>
	);
}

export default App;
