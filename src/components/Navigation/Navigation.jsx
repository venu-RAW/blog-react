import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import rawLogo from "../../images/raweng.png";

function Navigation() {
	return (
		<nav className={styles.nav_bar}>
			<div className={styles.nav_bar__content}>
				{/* <h3 className="nav-logo"> */}
				<img src={rawLogo} alt="raw-logo" />
				{/* </h3> */}
				<ul className={styles.nav_links}>
					<li>
						<Link to="/" className={styles.nav_item}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/blogs" className={styles.nav_item}>
							Blogs
						</Link>
					</li>
				</ul>
				<div className={styles.hamburger}>
					<span className={styles.hamLine1}></span>
					<span className={styles.hamLine2}></span>
					<span className={styles.hamLine3}></span>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
