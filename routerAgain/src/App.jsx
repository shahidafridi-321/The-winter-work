import { Link, Outlet, NavLink } from "react-router-dom";
import "./index.css";
import { ContactContextProvider } from "./ContactContext";

function App() {
	return (
		<div>
			<nav>
				<ul className="nav">
					<li className="listItem">
						<NavLink
							to="/home"
							end
							className={({ isActive }) =>
								isActive ? "active-link" : "inactive-link"
							}
						>
							Home
						</NavLink>
					</li>
					<li className="listItem">
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? "active-link" : "inactive-link"
							}
						>
							About
						</NavLink>
					</li>
					<li className="listItem">
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? "active-link" : "inactive-link"
							}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
			<ContactContextProvider>
				<Outlet />
			</ContactContextProvider>
		</div>
	);
}

export default App;
