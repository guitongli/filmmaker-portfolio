import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPxlugin } from "gsap/MotionPathPlugin.js";
import { TweenMax, Power3 } from "gsap";
// gsap.registerPlugin(PixiPlugin, MotionPathPlugin)
import Nav from "./nav";
import { Link, Router } from "react-router-dom";
import ScrollMagic, {Controller, Scene} from 'scroll-magic';

import AnchorLink from "react-anchor-link-smooth-scroll";
import { interpolate } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);

function App() {
	const menu = useRef();
	const hamburger = useRef();
	const nav = useRef();
	const menuNav = useRef();
	const navLink = useRef();
	const navItem = useRef([]);
	var showMenu = false;
	const video = useRef();
	const producer = useRef();

	function toggleMenu() {
		if (!showMenu) {
			hamburger.current.className = "menu-btn__burger open";
			nav.current.className = "nav open";
			menuNav.current.className = "menu-nav open";
			// 			for (var i =0; i<=4; i++){
			// navLink.current[i].className = "menu-nav__link open";
			// 			}
			for (var j = 0; j <= 4; j++) {
				navItem.current[j].className = "menu-nav__item active open";
			}
			// navItem.current.className="menu-nav__item active open"
			showMenu = true;
		} else {
			hamburger.current.className = "menu-btn__burger";
			nav.current.className = "nav";
			menuNav.current.className = "menu-nav";
			navLink.current.className = "menu-nav__link";
			for (var i = 0; i <= 4; i++) {
				navItem.current[i].className = "menu-nav__item active";
			}

			showMenu = false;
		}
	}

	const controller = Controller();
	const scene = Scene({
		duration:1000,
		triggerElement: interpolate
	})
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
				<div className="menu-btn" ref={menu} onClick={toggleMenu}>
					<span className="menu-btn__burger" ref={hamburger}></span>
				</div>
				<nav className="nav" ref={nav}>
					<ul className="nav__menu-nav" ref={menuNav}>
						<li
							className="menu-nav__item active"
							ref={(el) => navItem.current.push(el)}
						>
							<AnchorLink
								offset="200"
								href="#banner"
								className="menu-nav__link"
								// ref={el=>navLink.current.push(el)}
								ref={navLink}
							>
								Home
							</AnchorLink>
						</li>
						<li
							className="menu-nav__item active"
							ref={(el) => navItem.current.push(el)}
						>
							<AnchorLink
								offset="200"
								href="#reel"
								className="menu-nav__link"
								// ref={el=>navLink.current.push(el)}
								ref={navLink}
							>
								Commercials Producer
							</AnchorLink>
						</li>
						<li
							className="menu-nav__item active"
							ref={(el) => navItem.current.push(el)}
						>
							<AnchorLink
								offset="200"
								href="#grading"
								className="menu-nav__link"
								// ref={el=>navLink.current.push(el)}
								ref={navLink}
							>
								Colorist
							</AnchorLink>
						</li>
						<li
							className="menu-nav__item active"
							ref={(el) => navItem.current.push(el)}
						>
							<AnchorLink
								offset="200"
								href="#lighting"
								className="menu-nav__link"
								// ref={el=>navLink.current.push(el)}
								ref={navLink}
							>
								Gaffer
							</AnchorLink>
						</li>
						<li
							className="menu-nav__item active"
							ref={(el) => navItem.current.push(el)}
						>
							<AnchorLink
								offset="200"
								href="#contact"
								className="menu-nav__link"
								// ref={el=>navLink.current.push(el)}
								ref={navLink}
							>
								MV Director
							</AnchorLink>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section id = 'home' className="home">
					<h1>Jan Ost</h1>
					<h1 ref ={producer}>Producer/Director </h1>
					
					
					<video className='home__video' src = 'shortfilm.mp4' ref ={video}></video>
				</section>
				<section className="reel">
					<h1>Producer/Director </h1>
				</section>
				<section className="pane">
					<h1>Producer/Director </h1>
				</section>
				<section className="bio">
					<h1>Producer/Director </h1>
				</section>
				<section className="contact">
					<h1>Producer/Director </h1>
				</section>
				<section className="social">
					 
					<a href="http://www.twitter.com">
						<i className="fab fa-twitter fa-2x"></i>
					</a>
					<a href="http://www.instagram.com">
						<i className="fab fa-instagram fa-2x"></i>
					</a>
					<a href="http://www.vimeo.com">
						<i className="fab fa-vimeo fa-2x"></i>
					</a>
				</section>
			</main>
			<footer>&copy; Copyright 2021 Jan Ostkaemper</footer>
		</>
	);
}

export default App;
