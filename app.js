
//menu nav
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navbar.classList.toggle('show-nav');
        });
    })

}
toggleMenu();

//slider portfolio
const sliderData = [
    {
      imageUrl: "img/locus-screen.png",
      linkUrl: "https://www.example.com/link1",
      nameSite: "Locus",
      technoSite: "html, css, javascript"
    },
    {
      imageUrl: "img/wait-site.png",
      linkUrl: "#portfolio",
      nameSite: "Projets en cours",
      technoSite: "..."
    }
    // Ajoute d'autres objets de slider ici
  ];
  
  let currentSlideIndex = 0;
  
  const sliderImage = document.querySelector('.site-slider');
  const sliderNameSite = document.querySelector('.name-site');
  const sliderTechnoSite = document.querySelector('.techno-site');
  const prevButton = document.querySelector('.left');
  const nextButton = document.querySelector('.right');
  function updateSlide(index) {
    
    currentSlideIndex = (index + sliderData.length) % sliderData.length;
    
    
    const currentSlide = sliderData[currentSlideIndex];
    sliderImage.src = currentSlide.imageUrl;
    sliderImage.alt = currentSlide.description;
    sliderNameSite.textContent = currentSlide.nameSite;
    sliderTechnoSite.textContent = currentSlide.technoSite;
    


    setTimeout(() => {
        sliderImage.style.opacity = 1;
        sliderNameSite.style.transition = " 0.5s";
        sliderNameSite.style.opacity = 1;
        sliderTechnoSite.style.transition = " 0.5s";
        sliderTechnoSite.style.opacity = 1;
    }, 200);
  }
  
  prevButton.addEventListener('click', () => {
    sliderImage.style.opacity = 0;
    sliderNameSite.style.opacity = 0;
    sliderTechnoSite.style.opacity = 0;
    setTimeout(() => {
    
    updateSlide(currentSlideIndex - 1);
}, 400);
  });
  
  nextButton.addEventListener('click', () => {
    sliderImage.style.opacity = 0;
    sliderNameSite.style.opacity = 0;
    sliderTechnoSite.style.opacity = 0;
    setTimeout(() => {
    
    updateSlide(currentSlideIndex + 1);
}, 400);
  });
  
// Initialisation slider
  updateSlide(currentSlideIndex);


//scroll effect skills
const observerSkills = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('skill-container-reveal')
        }
    }
    }, {
        threshold : 0.5
    })

//scroll effect macbook Portfolio
const observerMacbook = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('macbook-reveal')
        }
    }
    },{
        
        threshold : 0.5
    })

//scroll effect loisirs
const observerLoisirs = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('loisir-reveal')
        }
    }
    }, {
        threshold : 0.4
    })


//scroll effect diplomes
    const observerDiplomes = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('diplomes-reveal')
        }
    }
    }, {
        threshold : 0.5
    })

//scroll effect form contact
const observerContactForm = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('form-reveal')
        }
    }
    }, {
        threshold : 0.2
    })

//scroll effect ia img contact
    const observerContactIa = new IntersectionObserver((entries) => {
        for(const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('shadow-scroll-reveal')
            }
        }
        }, {
            threshold : 0.5
        })

observerContactIa.observe(document.querySelector('.shadow-scroll'));
observerContactForm.observe(document.querySelector('.hide-form'));
observerLoisirs.observe(document.querySelector('.travel-container'));
observerLoisirs.observe(document.querySelector('.learn-container'));
observerLoisirs.observe(document.querySelector('.sport-container'));
observerLoisirs.observe(document.querySelector('.gaming-container'));
observerDiplomes.observe(document.querySelector('.diplomes-container'));
observerMacbook.observe(document.querySelector('.left'));
observerMacbook.observe(document.querySelector('.right'));
observerMacbook.observe(document.querySelector('.description-site'));
observerMacbook.observe(document.querySelector('.site-slider'));
observerMacbook.observe(document.querySelector('.macbook'));
observerSkills.observe(document.querySelectorAll('.skill-container').forEach((a) => {
observerSkills.observe(a)
}))









    



