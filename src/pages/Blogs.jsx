import React, { Component } from "react";
import Blog from "../components/Blog/Blog";
import Loader from "../components/Loader/Loader";

class Blogs extends Component {
	state = {
		blogs: [],
	};

	componentDidMount = async () => {
		try {
			let data = await fetch(
				"https://heroku-json-data-server.herokuapp.com/blogs"
			);
			let blogs = await data.json();

			this.setState({
				blogs: [...blogs],
			});
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return this.state.blogs.length === 0 ? (
			<Loader />
		) : (
			<>
				<Blog blogs={this.state.blogs} />
			</>
		);
	}
}

export default Blogs;
