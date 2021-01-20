import React from "react";
import { Link } from "react-router-dom";
import styles from "./RelatedLinks.module.css";

const RelatedLinks = (props) => {
	return (
		<div className={styles.currentBlog__relatedLinks}>
			<h2>Related Links</h2>
			<ul>
				{props.links.map((link) => {
					return (
						<Link
							to={`/blogs/${link.id}`}
							className={styles.navLinks}
							key={link.id}
						>
							<li> {link.title}</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default RelatedLinks;
