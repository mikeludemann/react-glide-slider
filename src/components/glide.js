import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';

import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

class GlideSlider extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount(){

		var Slider = new Glide('#' + this.props.id, this.props.options)

		Slider.mount();

  }

  render() {
		return (
			<div className="glide" id={this.props.id}>
				{this.props.children}
      </div>
		);
	}

}

GlideSlider.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.element
}

// ################################

class Controls extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

  render() {
		return (
			<div data-glide-el="controls">
				<button className="glide__arrow glide__arrow--left" data-glide-dir="<">&larr;</button>
				<button className="glide__arrow glide__arrow--right" data-glide-dir=">">&rarr;</button>
			</div>
		);
	}

}

Controls.propTypes = {}

// ################################

class SliderContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

  render() {
		return (
			<div className="glide__track" data-glide-el="track">
				<ul className="glide__slides">
					{this.props.children}
				</ul>
			</div>
		);
	}

}

SliderContainer.propTypes = {
	children: PropTypes.element.isRequired
}

// ################################

class SliderElement extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

  render() {
		return (
			<li className="glide__slide">
				{this.props.children}
			</li>
		);
	}

}

SliderElement.propTypes = {
	children: PropTypes.element.isRequired
}

// ################################

class Dots extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount(){

		function info(){

      var container = document.getElementsByClassName("glide__slides")[0];
      var element = container.getElementsByClassName("glide__slide").length;

      var dotsContainer = document.getElementsByClassName("glide__bullets")[0];

      for(var i = 0; i < element; i++){

        var button = document.createElement("button");
        button.setAttribute("class", "glide__bullet");
        button.setAttribute("data-glide-dir", "=" + i);

        dotsContainer.appendChild(button);

      }
      
    }
    
    document.addEventListener("DOMContentLoaded", info);

  }

  render() {
		return (
      <div className="glide__bullets" data-glide-el="controls[nav]"></div>
		);
	}

}

Dots.propTypes = {}

// ################################

export {
	GlideSlider,
	Controls,
	SliderContainer,
  SliderElement,
  Dots
}
