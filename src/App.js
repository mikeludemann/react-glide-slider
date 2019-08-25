import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GlideSlider, Controls, SliderContainer, SliderElement, Dots } from './components/glide';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<GlideSlider 
					id="slider"
					options={{
						type: 'slider',
						width: 400,
						autoheight: true,
						startAt: 0,
						autoplay: 2500,
						breakpoints: {
							576: {
								perView: 1
							},
							768: {
								perView: 2
							},
							992: { 
								perView: 3
							},
							1200: { 
								perView: 3
							}
						}
					}}
				>
					<SliderContainer>
						<SliderElement>
							<div className="custom--slide">
								My name is ...
							</div>
						</SliderElement>
						<SliderElement>
							<div className="custom--slide">
								1 - 1
							</div>
						</SliderElement>
						<SliderElement>
							<div className="custom--slide">
								2 - 1
							</div>
						</SliderElement>
					</SliderContainer>
					<Controls></Controls>
					<Dots></Dots>
				</GlideSlider>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
