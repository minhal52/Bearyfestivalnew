// menu toggle

function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    let hamburger = document.querySelector(".hamburger");

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
}
// scroll navbar
    window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Add background on scroll
    } else {
        navbar.classList.remove("scrolled"); // Remove background when at the top
    }
});

  // HERO SECTION LOAD
  workObserver.observe(workSection);
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
            document.querySelector(".hero").classList.add("show");
        }, 500);
    });


    document.addEventListener("wheel", function(event) {
        event.preventDefault();
        window.scrollBy({
            top: event.deltaY * 1, 
            behavior: "smooth"
        });
    }, { passive: false });
    
    // WHATSAPP MESSAGE
    function sendWhatsAppMessage(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let category = document.getElementById("category").value;
        let message = document.getElementById("message").value;

        // WhatsApp number (without + sign)
        let whatsappNumber = "9632781673";


        // Properly formatted prefilled WhatsApp message
        let whatsappMessage = `Hello, I am ${name}. \nEmail: ${email}\nPhone: ${phone}\nCategory: ${category}\n\nMessage:\n${message}`;

        // Encode the message for URL
        let encodedMessage = encodeURIComponent(whatsappMessage);

        // Open WhatsApp link
        let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    }

// scrollwrapper

     document.addEventListener("DOMContentLoaded", function () {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const scrollSection = document.querySelector(".scroll-section");

    // Duplicate the content to create an infinite loop
    const duplicateSection = scrollSection.cloneNode(true);
    scrollWrapper.appendChild(duplicateSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const scrollSection = document.querySelector(".scroll-section");

    // Duplicate the content to create an infinite loop
    const duplicateSection = scrollSection.cloneNode(true);
    scrollWrapper.appendChild(duplicateSection);
});


// sponsorform whatspp
function openSponsorForm() {
    document.getElementById("sponsor-form").style.display = "block";
}

function closeSponsorForm() {
    document.getElementById("sponsor-form").style.display = "none";
}

function sendWhatsApp() {
    let name = document.getElementById("sponsor-name").value;
    let phone = document.getElementById("sponsor-phone").value;
    let email = document.getElementById("sponsor-email").value;
    let message = document.getElementById("sponsor-message").value;

    let whatsappMessage = `Hello, I am interested in sponsoring Karnataka Beary Festival 2025.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`;

    let whatsappURL = `https://wa.me/9632781673?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
}

// scroll reveal animations
document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal(".hero-logo img", {
        origin: "top",
        distance: "30px",
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: "ease-in-out"
    });

    ScrollReveal().reveal(".hero-title img", {
        scale: 0.85,
        duration: 1000,
        delay: 400,
        opacity: 0,
        easing: "ease-in-out"
    });

    ScrollReveal().reveal(".hero-subtitle", {
        origin: "bottom",
        distance: "20px",
        duration: 1000,
        delay: 600,
        opacity: 0,
        easing: "ease-in-out"
    });

    ScrollReveal().reveal(".hero-date img", {
        origin: "bottom",
        distance: "20px",
        duration: 1000,
        delay: 800,
        opacity: 0,
        easing: "ease-in-out"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Title Animation
    ScrollReveal().reveal(".guests-title", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: "ease-in-out"
    });

    // Guest Cards Animation
    ScrollReveal().reveal(".guest", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 400,
        opacity: 0,
        easing: "ease-in-out",
        interval: 300 // Stagger effect
    });

    // Guest Names Animation
    ScrollReveal().reveal(".guest h3", {
        origin: "bottom",
        distance: "20px",
        duration: 800,
        delay: 500,
        opacity: 0,
        easing: "ease-in-out"
    });

    // Guest Description Animation
    ScrollReveal().reveal(".guest p", {
        origin: "bottom",
        distance: "20px",
        duration: 800,
        delay: 600,
        opacity: 0,
        easing: "ease-in-out"
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Image Animation (Slide from Left)
    ScrollReveal().reveal(".about-img", {
        origin: "left",
        distance: "50px",
        duration: 1000,
        delay: 300,
        opacity: 0,
        easing: "ease-in-out"
    });

    // Text Content Animation (Slide from Right)
    ScrollReveal().reveal(".about-content", {
        origin: "right",
        distance: "50px",
        duration: 1000,
        delay: 500,
        opacity: 0,
        easing: "ease-in-out"
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Title Animation (Slide-up)
    ScrollReveal().reveal(".founders-title", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: "ease-in-out"
    });

    // Founder Cards Animation (Zoom-in One by One)
    ScrollReveal().reveal(".founder", {
        scale: 0.85,
        duration: 1000,
        delay: 300,
        opacity: 0,
        easing: "ease-in-out",
        interval: 200 // Creates a slight delay for each founder
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Title Animation (Slide-up)
    ScrollReveal().reveal(".team-title", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: "ease-in-out"
    });

    // Team Card Animation (Zoom-in)
    ScrollReveal().reveal(".team-card", {
        scale: 0.85,
        duration: 1000,
        delay: 300,
        opacity: 0,
        easing: "ease-in-out"
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Title & Description Animation (Slide-up)
    ScrollReveal().reveal(".kbf-layout h2, .kbf-layout p", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: "ease-in-out"
    });

    // Layout Image Animation (Zoom-in)
    ScrollReveal().reveal(".layout-container img", {
        scale: 0.85,
        duration: 1000,
        delay: 300,
        opacity: 0,
        easing: "ease-in-out"
    });

    // Sponsor CTA & Button Animation (Slide-up)
    ScrollReveal().reveal(".sponsor-cta h2, .sponsor-cta p, .sponsor-btn", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 400,
        opacity: 0,
        easing: "ease-in-out"
    });


});
document.addEventListener("DOMContentLoaded", function () {
    // Title Animation (Slide-up)
    ScrollReveal().reveal(".gallery-title", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: "ease-in-out"
    });

    // Gallery Images Animation (Zoom-in with Staggered Effect)
    ScrollReveal().reveal(".gallery-item", {
        scale: 0.85,
        duration: 800,
        delay: 200,
        opacity: 0,
        easing: "ease-in-out",
        interval: 150 // Stagger effect for each image
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Festival Description Animation
    ScrollReveal().reveal(".festival-description", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 300,
        opacity: 0,
        easing: "ease-in-out"
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Contact Section Animation
    ScrollReveal().reveal(".contact-section", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 300,
        scale: 0.95,
        opacity: 0,
        easing: "ease-in-out"
    });
});
