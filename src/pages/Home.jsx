import React from "react";
import blogImage from "../images/blogImage.png";
import styles from "./Home.module.css";

function Home() {
	return (
		<div className={styles.homeContainer}>
			<div className={styles.blogContainer}>
				<h1>Easy Blogging</h1>
				<p>
					Blog posts are great for generating search traffic, demonstrating
					your expertise in a given field, and communicating with your
					client base. A well written blog, backed with a sound strategy,
					should generate a number of potential leads for you and your
					business. Are you capturing them? If people aren’t exploring your
					site for more information, you need to do a better job of turning
					your blog post pages into landing pages.
				</p>
			</div>
			<img src={blogImage} alt="Blog" />
		</div>
	);
}

export default Home;
