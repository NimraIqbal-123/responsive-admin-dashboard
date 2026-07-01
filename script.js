// ==============================
// Responsive Admin Dashboard
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // CHART.JS
    // ==========================

    const chartCanvas = document.getElementById("myChart");

    if (chartCanvas) {

        const ctx = chartCanvas.getContext("2d");

        new Chart(ctx, {

            type: "line",

            data: {

                labels: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],

                datasets: [

                    {

                        label: "Visitors",

                        data: [
                            15339,
                            21345,
                            18483,
                            24003,
                            23489,
                            24092,
                            12034
                        ],

                        borderColor: "#0d6efd",

                        backgroundColor: "rgba(13,110,253,0.15)",

                        fill: true,

                        borderWidth: 3,

                        tension: .4,

                        pointRadius: 5,

                        pointHoverRadius: 8,

                        pointBackgroundColor: "#0d6efd"

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: true,

                plugins: {

                    legend: {

                        display: true,

                        position: "top"

                    }

                },

                scales: {

                    y: {

                        beginAtZero: false

                    }

                }

            }

        });

    }

    // ==========================
    // SIDEBAR ACTIVE LINK
    // ==========================

    const sidebarLinks = document.querySelectorAll(".sidebar .nav-link");

    sidebarLinks.forEach(link => {

        link.addEventListener("click", function () {

            sidebarLinks.forEach(item => {

                item.classList.remove("active");

            });

            this.classList.add("active");

        });

    });

    // ==========================
    // MOBILE SIDEBAR ACTIVE
    // ==========================

    const mobileLinks = document.querySelectorAll(".offcanvas .nav-link");

    mobileLinks.forEach(link => {

        link.addEventListener("click", function () {

            mobileLinks.forEach(item => {

                item.classList.remove("active");

            });

            this.classList.add("active");

        });

    });

    // ==========================
    // TABLE ROW HOVER EFFECT
    // ==========================

    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {

        row.addEventListener("click", function () {

            this.style.backgroundColor = "#dbeafe";

            setTimeout(() => {

                this.style.backgroundColor = "";

            }, 300);

        });

    });

    // ==========================
    // SEARCH BAR
    // ==========================

    const search = document.querySelector(".form-control-dark");

    if (search) {

        search.addEventListener("focus", function () {

            this.placeholder = "Start typing...";

        });

        search.addEventListener("blur", function () {

            this.placeholder = "Search...";

        });

    }

    // ==========================
    // BUTTON ANIMATION
    // ==========================

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-3px)";

        });

        button.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px)";

        });

    });

    // ==========================
    // CARD ANIMATION
    // ==========================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-5px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px)";

        });

    });

    // ==========================
    // PAGE LOADED
    // ==========================

    console.log("Responsive Admin Dashboard Loaded Successfully!");

});