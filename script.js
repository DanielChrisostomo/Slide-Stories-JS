class Slide {
  constructor() {
    this.slideItems = document.querySelector(".slide-items");
    this.slideImgs = [...this.slideItems.children];
    this.timeDiv = document.querySelector(".slide-time");
    this.index = 0;
    this.init();
    this.activeItems(0);
  }
  activeItems(index) {
    this.index = index;
    this.slideImgs.forEach((img) => img.classList.remove("active"));
    this.slideImgs[index].classList.add("active");
    [...this.timeDiv.children].forEach((span) =>
      span.classList.remove("active"),
    );
    this.timeDiv.children[index].classList.add("active");
    this.timeStorie();
  }
  btnEvents() {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    prevBtn.addEventListener("click", this.previous);
    nextBtn.addEventListener("click", this.next);
  }
  previous() {
    if (this.index > 0) {
      this.activeItems(this.index - 1);
    } else {
      this.activeItems(this.slideImgs.length - 1);
    }
  }
  next() {
    if (this.index < this.slideImgs.length - 1) {
      this.activeItems(this.index + 1);
    } else {
      this.activeItems(0);
    }
  }
  addTimeitems() {
    this.slideImgs.forEach((item) => {
      this.timeDiv.innerHTML += `<span></span>`;
    });
  }
  timeStorie() {
    clearInterval(this.setTimeStorie);
    this.setTimeStorie = setTimeout(this.next, 4000);
  }
  init() {
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.addTimeitems();
    this.btnEvents();
  }
}

new Slide();
