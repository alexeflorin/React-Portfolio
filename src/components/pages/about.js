import React from "react";
import '../styles/style.css';
import profilePicture from "../assets/profile_picture.png"


function About () {
	return (
		<section id="about-me-page" className="about-me-section">
		<div className="about-page">
			<h1 id="about" className="section-title"> About me </h1>
		</div>
		<div>
			<img src={profilePicture}  alt = "profile"
			style={{width:"75%"}}/>
		</div>

			<div>
				<p>My name is Florin! I am 39 years old and I want to become a web developer and create amazing and useful things for people. I like to play soccer and listen electronic music.</p>
			</div>
		</section>
	);
}

export default About;

