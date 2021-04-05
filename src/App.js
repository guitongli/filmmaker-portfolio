import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPxlugin } from "gsap/MotionPathPlugin.js";
import { TweenMax, Power3 } from "gsap";
// gsap.registerPlugin(PixiPlugin, MotionPathPlugin)
import Nav from "./nav";
import {Link, Router} from 'react-router-dom'

import AnchorLink from "react-anchor-link-smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

function App() {
	// useEffect(()=>{
	//   TweenMax.to(
	//     logoItem,
	//     1,
	//     {
	//       opacity: 0.3,
	//       y : -20,
	//       ease: Power3.easeOut
	//     }
	//   )
	// })

	// useEffect(()=>{
	//   TweenMax.to(
	//     pItem,
	//     1,
	//     {
	//       opacity: 0.3,
	//       y : 40,
	//       ease: Power3.easeOut,
	//       delay:.2
	//     }
	//   )
	// })
	return (
		<>
			<header>
				<div className="menu-btn">
					<span className="menu__burger"></span>
				</div>
				<nav className="nav">
					<ul className="menu-nav">
						<li className="menu-nav__item active">
							<AnchorLink
								offset="200"
								href="#banner"
								className="menu-nav__link"
							>
								Home
							</AnchorLink>
						</li>
						<li className="menu-nav__item active">
							<AnchorLink
								offset="200"
								href="#reel"
								className="menu-nav__link"
							>
								Commercials Producer
							</AnchorLink>
						</li>
						<li className="menu-nav__item active">
							<AnchorLink
								offset="200"
								href="#grading"
								className="menu-nav__link"
							>
								Colorist
							</AnchorLink>
						</li>
						<li className="menu-nav__item active">
							<AnchorLink
								offset="200"
								href="#lighting"
								className="menu-nav__link"
							>
								 Gaffer
							</AnchorLink>
							<AnchorLink
								offset="200"
								href="#contact"
								className="menu-nav__link"
							>
							 MV Director 
							</AnchorLink>
						</li>
					</ul>
           
				</nav>
			</header>
			<main>
				<section className="home">
					<h1>Producer/Director </h1>
				</section>
        <section className='contact'>		<a href = 'http://www.twitter.com'><i className="fab fa-twitter fa-2x"></i></a>
				<a href = 'http://www.instagram.com'><i className="fab fa-instagram fa-2x"></i></a>
			<a href = 'http://www.vimeo.com'><i className="fab fa-vimeo fa-2x"></i></a>	
        </section>
			</main>
			<footer>
			&copy; Copyright 2021 Jan Ostkaemper 
			</footer>
      
		</>
	);
}

export default App;
