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
        this.__render()
        this.__listener()
        this.currentIndex = 0
    }
    __render() {
        this.slider.innerHTML += getTemplate()
    }
    __listener() {
        this.nextSlide = this.nextSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)

        this.slider.addEventListener('click', this.nextSlide)
        this.slider.addEventListener('click', this.prevSlide)
    }
    currentSlide(index) {
        switch (index) {
            case (index > this.sliderrItems.length):
                this.currentIndex = 0
                break
            case (index < this.sliderrItems.length):
                this.currentIndex = this.sliderrItems.length
                break
            default:
                this.currentIndex = index
        }
        console.log(index)
    }
    nextSlide(event) {
        if (event.target.dataset.type === 'next') {
            this.currentSlide(this.currentIndex + 1)
        }
    }
    prevSlide(event) {
        if (event.target.dataset.type === 'prev') {
            this.currentSlide(this.currentIndex - 1)
        }
    }

}

let slider = new Slider('slider-opacity', {})