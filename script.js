// ===== Smooth Navigation Scroll =====
const navLinks = document.querySelectorAll(".nav-link");
const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.querySelector(".nav-links");

navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        // Remove active class from all links
        navLinks.forEach((l) => l.classList.remove("active"));
        // Add active class to clicked link
        this.classList.add("active");
        // Close mobile menu
        if (navLinksContainer.classList.contains("active")) {
            navLinksContainer.classList.remove("active");
        }
    });
});

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
});

// Update active nav link on scroll
window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

// ===== Scroll to Section =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

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

        // Filter portfolio items with animation
        portfolioItems.forEach((item) => {
            const category = item.getAttribute("data-category");

            if (filterValue === "all" || category === filterValue) {
                item.classList.remove("hidden");
                item.style.animation = "fadeInUp 0.6s ease-out";
            } else {
                item.classList.add("hidden");
            }
        });
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const projectType = this.querySelector("select").value;
        const message = this.querySelector("textarea").value;

        // Basic validation
        if (name && email && projectType && message) {
            // Show success message
            showSuccessMessage();

            // Reset form
            this.reset();

            // Simulate sending email (in real scenario, you'd send to your backend)
            console.log("Form submitted:", {
                name,
                email,
                projectType,
                message,
            });
        } else {
            showErrorMessage();
        }
    });
}

// ===== Success/Error Messages =====
function showSuccessMessage() {
    const message = document.createElement("div");
    message.className = "success-message";
    message.textContent = "✓ تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.";
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        animation: slideDown 0.5s ease-out;
        z-index: 10000;
    `;
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = "slideUp 0.5s ease-out";
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function showErrorMessage() {
    const message = document.createElement("div");
    message.textContent = "⚠ الرجاء ملء جميع الحقول المطلوبة";
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #f5576c, #ff9a56);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(245, 87, 108, 0.3);
        animation: slideDown 0.5s ease-out;
        z-index: 10000;
    `;
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = "slideUp 0.5s ease-out";
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

// ===== Animations =====
const style = document.createElement("style");
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 0.6s ease-out";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe portfolio items
portfolioItems.forEach((item) => {
    observer.observe(item);
});

// Observe about stats
const statBoxes = document.querySelectorAll(".stat-box");
statBoxes.forEach((box) => {
    observer.observe(box);
});

// ===== Counter Animation for Stats =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector(".stat-number");
            if (statNumber && !statNumber.dataset.animated) {
                const target = parseInt(statNumber.textContent);
                animateCounter(statNumber, target);
                statNumber.dataset.animated = "true";
            }
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

statBoxes.forEach((box) => {
    counterObserver.observe(box);
});

// ===== Floating Cards Interaction =====
const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1) rotate(5deg)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1) rotate(0deg)";
    });
});

// ===== Parallax Effect on Scroll =====
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".floating-card");

    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== Add hover effect to form inputs =====
const formInputs = document.querySelectorAll(".form-input");

formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
        this.parentElement.style.transform = "scale(1.02)";
    });

    input.addEventListener("blur", function () {
        this.parentElement.style.transform = "scale(1)";
    });
});

// Add transition to form groups
const formGroups = document.querySelectorAll(".form-group");
formGroups.forEach((group) => {
    group.style.transition = "all 0.3s ease";
});

// ===== Smooth Scroll Indicator =====
document.addEventListener("DOMContentLoaded", () => {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = "0";
                scrollIndicator.style.pointerEvents = "none";
            } else {
                scrollIndicator.style.opacity = "1";
                scrollIndicator.style.pointerEvents = "auto";
            }
        });
    }
});

// ===== Page Load Animation =====
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Initial opacity
document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.5s ease-out";
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});
