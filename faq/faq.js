// script.js
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
// script.js

document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");
    const tabs = document.querySelectorAll(".tab");
    const faqItems = document.querySelectorAll(".faq-item");

    // Toggle answer visibility when question is clicked
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
            question.classList.toggle("open");
        });
    });

    // Filter FAQ items based on selected tab
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and add to the selected one
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Get the category from the selected tab
            const category = tab.getAttribute("data-category");

            // Show/hide FAQ items based on category
            faqItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");
                if (category === "faq" || itemCategory === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Trigger click on the first tab to show FAQ by default
    tabs[0].click();
});
