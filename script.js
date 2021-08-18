function getTemplate() {
    return `
      <div class="tabs">
          <button id="first-slider__prev" data-type="prev">prev</button>
          <button id="first-slider__next" data-type="next">next</button>
      </div>
  `
}

class Slider {
    constructor(selector, options) {
        this.slider = document.getElementById(selector)
        this.sliderrItems = this.slider.querySelectorAll('img')
        this.render()
    }
    render() {
        this.slider.innerHTML += getTemplate()
    }
}

let slider = new Slider('slider-opacity', {})