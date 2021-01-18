import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer/Footer";
import BlogById from "./components/BlogById/BlogById";
// import Blog from "./components/Blog";

function App() {
	return (
		<Router>
			<Navigation />
			<main className="main-content">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/blogs" exact component={Blogs} />
					<Route path="/blogs/:blogid" exact component={BlogById} />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
