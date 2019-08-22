import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';

export default class GlideSlider extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount(){
    var Slider = new Glide('#' + this.props.id, {
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
    })

    Slider.mount();

  }

  render() {
		return (
			<div className="glide" id={this.props.id}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div className="custom--slide">
                My name is ...
              </div>
            </li>
            <li className="glide__slide">1</li>
            <li className="glide__slide">2</li>
            <li className="glide__slide">3</li>
            <li className="glide__slide">4</li>
            <li className="glide__slide">5</li>
            <li className="glide__slide">6</li>
            <li className="glide__slide">7</li>
            <li className="glide__slide">8</li>
          </ul>
        </div>
        <div data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&larr;</button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&rarr;</button>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
          <button className="glide__bullet" data-glide-dir="=3"></button>
          <button className="glide__bullet" data-glide-dir="=4"></button>
          <button className="glide__bullet" data-glide-dir="=5"></button>
          <button className="glide__bullet" data-glide-dir="=6"></button>
          <button className="glide__bullet" data-glide-dir="=7"></button>
          <button className="glide__bullet" data-glide-dir="=8"></button>
        </div>
      </div>
		);
	}

}

GlideSlider.propTypes = {
	id: PropTypes.string.isRequired
}