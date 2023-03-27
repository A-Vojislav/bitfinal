import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


function Header() {
	

	return (
		<div className={styles.header}>
			<Link  to="/" >Home page</Link>

		</div>
	);
}

export default Header;
