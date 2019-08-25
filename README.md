# React-Glide-Slider

A component with React and Glide.js Framework

## Prerequisite

### Global

* node
* npm
* yarn

### Install dependencies (node_modules)

(sudo) npm install

## Example

```JS
import { GlideSlider, Controls, SliderContainer, SliderElement, Dots } from './components/glide';

Constructor:

this.state = {
  id: "slider",
  options: {
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
  }
}

Render: 

<GlideSlider 
  id={this.state.id}
  options={this.state.options}
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
```