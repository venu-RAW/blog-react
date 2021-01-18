import React from "react";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_content}>
				<p>Copyright 2020. All Rights Reserved.</p>
				<ul className={styles.social_icons}>
					<li>
						<a href="https://www.twitter.com">
							<i
								style={{ fontSize: "2rem", color: "white" }}
								className="fa fa-twitter"
								aria-hidden="true"
							></i>
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com">
							<i
								style={{ fontSize: "2rem", color: "white" }}
								className="fa fa-facebook"
								aria-hidden="true"
							></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com">
							<i
								style={{ fontSize: "2rem", color: "white" }}
								className="fa fa-linkedin"
								aria-hidden="true"
							></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
