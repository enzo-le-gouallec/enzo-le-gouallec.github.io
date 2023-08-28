
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
      imageUrl: 'img/locus-screen.png',
      linkUrl: 'https://www.example.com/link1',
      description: 'Description de l\'image 1'
    },
    {
      imageUrl: 'image2.jpg',
      linkUrl: 'https://www.example.com/link2',
      description: 'Description de l\'image 2'
    },
    {
        imageUrl: 'image3.jpg',
        linkUrl: 'https://www.example.com/link2',
        description: 'Description de l\'image 3'
    }
    
    ,
    // Ajoute d'autres objets de slider ici
  ];
  
  let currentSlideIndex = 0;
  
  const sliderImage = document.querySelector('.site-slider');
  const sliderDescription = document.querySelector('.description-site');
  const prevButton = document.querySelector('.left');
  const nextButton = document.querySelector('.right');
  
  function updateSlide(index) {
    if (index < 0) {
      currentSlideIndex = sliderData.length - 1;
    } else if (index >= sliderData.length) {
      currentSlideIndex = 0;
    }
  
    const currentSlide = sliderData[currentSlideIndex];
    sliderImage.src = currentSlide.imageUrl;
    sliderImage.alt = currentSlide.description;
    sliderDescription.textContent = currentSlide.description;
  }
  
  prevButton.addEventListener('click', () => {
    updateSlide(currentSlideIndex --);
  });
  
  nextButton.addEventListener('click', () => {
    console.log("ok")
    updateSlide(currentSlideIndex ++);
    
  });
  
  // Initialisation avec le premier élément
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









    



