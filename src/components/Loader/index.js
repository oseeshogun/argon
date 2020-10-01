import React, { memo } from "react";
import "./loader.css";
// import { BoxLoading, TransverseLoading, BlockLoading } from 'react-loadingg';


export default memo(function Loader() {
	return (
		<div id="loader-wrapper">
			<div id="loader"></div>
			<div className="loader-section section-left"></div>
			<div className="loader-section section-right"></div>
		</div>
	);
});
