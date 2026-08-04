console.log("Portfolio Loaded Successfully");


// =========================================================
// PORTFOLIO FUNCTIONS
// =========================================================

document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // DARK MODE TOGGLE
    // =====================================================

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                themeToggle.textContent = "☀️";

            } else {

                themeToggle.textContent = "🌙";

            }

        });

    }


    // =====================================================
    // MOBILE NAVIGATION
    // =====================================================

    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {

        navToggle.addEventListener("click", function () {

            navToggle.classList.toggle("open");
            navMenu.classList.toggle("active");

        });


        // Close menu after clicking a link

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navToggle.classList.remove("open");
                navMenu.classList.remove("active");

            });

        });

    }


    // =====================================================
    // FOOTER YEAR
    // =====================================================

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

});