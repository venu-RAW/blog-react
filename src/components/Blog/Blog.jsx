import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";

function Blog(props) {
	return (
		<div className={styles.blog_container}>
			{props.blogs.map((blog) => {
				return (
					<div className={styles.blog_card} key={blog.id}>
						<div className={styles.blog_image}>
							<img src={blog.imageUrl} alt="" />
						</div>
						<div className={styles.blog_content}>
							<p id={blog.id} className={styles.blog_author}>
								<Link
									to={{
										pathname: `/blogs/${blog.id}`,
									}}
									className={styles.blog_author__link}
								>
									{blog.author}
								</Link>
							</p>
							<p className={styles.blog_title}>{blog.title}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Blog;
