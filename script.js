class Slider {
    constructor(selector, options) {

        this.options = {
            ...options,
            autoplay: options.autoplay || false,
            autoplaySpeed: options.autoplaySpeed || 2000,
        }

        this.time = options.time
        this.slider = document.getElementById(selector)
        this.sliderrItems = this.slider.querySelectorAll('img')
        this.getTemplate()
        this.autoplay(options.autoplaySpeed)
        this.listener()
        this.currentIndex = 0
        this.slider.querySelectorAll('img')[this.currentIndex].classList.add('show')
    }

    listener() {
        this.nextSlide = this.nextSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)

        this.slider.addEventListener('click', this.nextSlide)
        this.slider.addEventListener('click', this.prevSlide)
    }
    getTemplate() {

        this.slider.innerHTML += `
        <div class="tabs">
            <button id="first-slider__prev" data-type="prev">prev</button>
            <button id="first-slider__next" data-type="next">next</button>
        </div>
    `
    }
    currentSlide(index) {
        if (index >= this.sliderrItems.length) this.currentIndex = 0
        else if (index < 0) this.currentIndex = this.sliderrItems.length - 1
        else this.currentIndex = index
    }
    nextSlide(event) {
        if (event.target.dataset.type === 'next') {
            this.removectiveClass(this.currentIndex)
            this.currentSlide(this.currentIndex + 1)
            this.addActiveClass(this.currentIndex)
        }
    }
    prevSlide(event) {
        if (event.target.dataset.type === 'prev') {
            this.removectiveClass(this.currentIndex)
            this.currentSlide(this.currentIndex - 1)
            this.addActiveClass(this.currentIndex)
        }
    }
    addActiveClass(index) {
        this.slider.querySelectorAll('img')[index].classList.add('show')
    }
    removectiveClass(index) {
        this.slider.querySelectorAll('img')[index].classList.remove('show')
    }

    autoplay(timer) {
        setInterval(() => {
            this.removectiveClass(this.currentIndex)
            this.currentSlide(this.currentIndex + 1)
            this.addActiveClass(this.currentIndex)
        }, timer)
    }

}

let slider = new Slider('slider-opacity', {
    autoplay: true,
    autoplaySpeed: 5000
})