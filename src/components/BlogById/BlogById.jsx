import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RelatedLinks from "../RelatedLinks/RelatedLinks";
import Loader from "../Loader/Loader";
import styles from "./BlogById.module.css";

class BlogById extends Component {
	state = {
		blog: {},
	};

	componentDidMount = async () => {
		try {
			let data = await fetch(
				`https://heroku-json-data-server.herokuapp.com/blogs/${this.props.match.params.blogid}`
			);

			let getBlog = await data.json();

			this.setState({
				blog: { ...getBlog },
			});
		} catch (err) {
			console.log(err);
		}
	};

	// componentDidUpdate = async (prevProps, nextProps) => {
	// 	console.log("previous", prevProps, prevProps.match.params.blogid);
	// 	console.log("next", nextProps);

	// 	if (prevProps.match.params.blogid !== nextProps.id) {
	// 		try {
	// 			let data = await fetch(
	// 				`https://heroku-json-data-server.herokuapp.com/blogs/${nextProps.id}`
	// 			);

	// 			let getBlog = await data.json();

	// 			this.setState({
	// 				blog: { ...getBlog },
	// 			});
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	}
	// };

	render() {
		let { blog } = this.state;

		return this.state.blog.length === 0 ? (
			<Loader />
		) : (
			<div className={styles.currentBlog__container}>
				<div className={styles.currentBlog__left}>
					<img
						src={this.state.blog.imageUrl}
						alt={blog.author}
						className={styles.currentBlog__image}
					/>
					<div className={styles.currentBlog__details}>
						<h1 className={styles.currentBlog__author}>{blog.author}</h1>
						<p className={styles.currentBlog__content}>{blog.content}</p>
					</div>
				</div>
				{typeof blog.links === "undefined" ? (
					<Loader />
				) : (
					<RelatedLinks links={blog.links} />
				)}
			</div>
		);
	}
}

export default withRouter(BlogById);
