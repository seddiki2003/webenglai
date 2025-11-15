// Hédha el code elli bch y7arrek el slider

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Na5tar el taswer el kol
    const slides = document.querySelectorAll(".slide");
    
    // 2. Na3mlou compteur
    let currentSlide = 0;

    function showNextSlide() {
        // 3. Na5fi el taswira el 9dima
        slides[currentSlide].classList.remove("active");

        // 4. Nemchi lel taswira el jèya
        currentSlide = (currentSlide + 1) % slides.length; // (El % bch ki noueslou lel l5er, narj3ou lel 0)

        // 5. Nodh'her el taswira el jdida
        slides[currentSlide].classList.add("active");
    }

    // 6. N5alli el 7araka ta3mel wa7adha kol 5 thwèni (5000 ms)
    setInterval(showNextSlide, 5000); 
});