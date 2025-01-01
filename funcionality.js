function changeSlides() {
  const slidesData = [
    {
      title: "Протеини",
      images: `
        <img src="images/protein1.jpg" alt="Хранителна добавка">
        <img src="images/protein2.jpg" alt="Хранителна добавка">
        <img src="images/protein3.jpg" alt="Хранителна добавка">
        <img src="images/protein4.jpg" alt="Хранителна добавка">
      `,
    },
    {
      title: "Креатини",
      images: `
        <img src="images/kreatin1.jpg" alt="Хранителна добавка">
        <img src="images/kreatin2.jpg" alt="Хранителна добавка">
        <img src="images/kreatin3.jpg" alt="Хранителна добавка">
        <img src="images/kreatin4.jpg" alt="Хранителна добавка">
      `,
    },
    {
      title: "Аминокиселини",
      images: `
        <img src="images/bcaa1.jpg" alt="Хранителна добавка">
        <img src="images/bcaa2.png" alt="Хранителна добавка">
        <img src="images/bcaa3.jpeg" alt="Хранителна добавка">
        <img src="images/bcaa4.jpg" alt="Хранителна добавка">
      `,
    },
  ];

  let currentIndex = 0;

  function showSlide(index) {
    const { title, images } = slidesData[index];
    const numbertext = document.querySelector(".numbertext");
    const slideshowImages = document.querySelector(".slideshow-images");

    // Скриване на текущия слайд (плавно)
    slideshowImages.style.opacity = 0;

    setTimeout(() => {
      numbertext.innerText = title;
      slideshowImages.innerHTML = images;

      // Показване на новия слайд (плавно)
      slideshowImages.style.opacity = 1;
    }, 500); // Синхронизиране с продължителността на `transition`
  }

  // Показване на първоначалния слайд
  showSlide(currentIndex);

  // Настройка на интервала за сменяне на слайдовете
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slidesData.length;
    showSlide(currentIndex);
  }, 3000);
}

// Изпълнение на функцията при зареждане
changeSlides();