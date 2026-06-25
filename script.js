function toggleMenu(){
    document.getElementById("mobilehidden").classList.toggle("hidden");
}
  const slider = document.getElementById("slider");
    const slides = slider.children;
    let index = 0;

    function autoSlide() {
      index++;

      if (index >= slides.length) {
        index = 0;
      }

      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(autoSlide, 3000);
 
    