// ===== Mobile Navigation =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// ===== Smooth Scroll Navigation =====
const navItems = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

navItems.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navLinks.style.display = "none";
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// ===== Portfolio Filter =====
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
            const itemCategory = item.getAttribute("data-category");

            if (filterValue === "all" || itemCategory === filterValue) {
                item.style.display = "block";
                item.style.animation = "none";
                // Trigger reflow to restart animation
                void item.offsetWidth;
                item.style.animation = "scaleUp 0.6s ease-out";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// ===== Contact Form =====
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector("textarea").value;

    // Simple validation
    if (name && email && message) {
        // Show success message
        const submitBtn = contactForm.querySelector("button");
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "✓ تم إرسال رسالتك بنجاح!";
        submitBtn.style.background = "linear-gradient(135deg, #43e97b, #38f9d7)";

        // Reset form
        contactForm.reset();

        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = "";
        }, 3000);

        // Log form data (in real app, send to backend)
        console.log("Form submitted:", { name, email, message });
    } else {
        alert("الرجاء ملء جميع الحقول");
    }
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || "fadeInUp 0.6s ease-out both";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll(".skill-card, .stat, .info-card").forEach((el) => {
    el.dataset.animation = "fadeInUp 0.6s ease-out both";
    observer.observe(el);
});

// ===== Parallax Effect =====
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");

    if (hero) {
        const shapes = hero.querySelectorAll(".shape");
        shapes.forEach((shape, index) => {
            shape.style.transform = `translateY(${scrolled * 0.5 * (index + 1)}px)`;
        });
    }
});

// ===== Create Floating Stars Animation =====
function createFloatingObjects() {
    const hero = document.querySelector(".stars");

    // Create multiple stars/particles
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("div");
        star.style.position = "absolute";
        star.style.width = "2px";
        star.style.height = "2px";
        star.style.background = "white";
        star.style.borderRadius = "50%";
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";

        // Add animation
        const duration = Math.random() * 20 + 20;
        const delay = Math.random() * 5;

        star.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        hero.appendChild(star);
    }
}

createFloatingObjects();

// ===== Cursor Follow Effect on Hero =====
const heroSection = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {
    if (!heroSection) return;

    const isInHero = e.clientY < heroSection.offsetHeight;

    if (isInHero) {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / heroSection.offsetHeight) * 2 - 1;

        const shapes = heroSection.querySelectorAll(".shape");
        shapes.forEach((shape, index) => {
            const intensity = (index + 1) * 10;
            shape.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
        });
    }
});

// ===== Add smooth reveal on scroll =====
const revealElements = document.querySelectorAll("section");

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach((section) => {
    revealOnScroll.observe(section);
});

// ===== Add typing animation to title =====
function typeAnimation(element, text, speed = 50) {
    let index = 0;
    element.textContent = "";

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Apply typing animation to hero title after page load
window.addEventListener("load", () => {
    // Optional: you can uncomment to add typing animation
    // const heroTitle = document.querySelector('.hero-title');
    // const titleText = heroTitle.textContent;
    // typeAnimation(heroTitle, titleText);
});

// ===== Add Page Load Animation =====
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ===== Smooth scroll for mobile =====
if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
}

// ===== Add pulse animation to buttons on hover =====
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});

// ===== Create animated background gradient =====
function animateBackground() {
    let hue = 0;

    setInterval(() => {
        hue += 0.5;
        // Optional: uncomment to add dynamic background animation
        // document.body.style.background = `hsl(${hue}, 100%, 50%)`;
    }, 50);
}

// animateBackground(); // Uncomment if you want dynamic background

// ===== Add scroll progress indicator =====
window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const scrollPercent = (scrolled / scrollHeight) * 100;

    // You can use this for a progress bar at the top
    // document.querySelector('.progress-bar').style.width = scrollPercent + '%';
});

console.log("✨ Website loaded successfully! Enjoy the animations ✨");
