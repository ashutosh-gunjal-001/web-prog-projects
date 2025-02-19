document.addEventListener("DOMContentLoaded", function () {
    const assignmentLinks = document.querySelectorAll('.assignment-link');
    const dashHeader = document.querySelector('.dash-header');
    const dashboardTopNav = document.querySelector('.dashboard-top-nav');
    const infoD = document.querySelector('.info-d');
    const infoP = document.querySelector('.info-p');
    const infoC = document.querySelector('.info-c');
    const dashboardGreeting = document.querySelector('.dashboard-greeting');
    const dashboardSubtitle = document.querySelector('.dashboard-subtitle');
    const dashSection = document.querySelector('.dash-section');
    const dashBox = document.querySelector('.dash-box');
    const boardSection = document.querySelector('.board-section');
    const boardTitle = document.querySelector('.board-title');
    const originalDashboardContent = document.querySelector(".dashboard-preview").innerHTML;

    // Dark mode toggle
    const toggleButton = document.querySelector(".theme-toggle");
    const body = document.body;

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    if (assignmentLinks && dashHeader && dashboardTopNav) {
        assignmentLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                
                const assignmentNumber = this.getAttribute("data-id");
                
                dashHeader.textContent = `~home > ${assignmentNumber} >`;
                dashboardTopNav.textContent = `Lab ${assignmentNumber}`;
                infoD.textContent = `Home`;

                if (infoP) infoP.remove();
                if (infoC) infoC.remove();
                if (dashboardGreeting) dashboardGreeting.remove();
                if (dashboardSubtitle) dashboardSubtitle.remove();
                if (dashSection) dashSection.remove();
                if (dashBox) dashBox.remove();
                if (boardTitle) boardTitle.remove();

                if (boardSection) {
                    boardSection.innerHTML = "";

                    let images;
                    if (assignmentNumber === "2") {
                        images = [
                            { src: "images/animation.webp", alt: "animation", link: "files/animated.html" },
                            { src: "images/form.png", alt: "form", link: "files/form2.html" },
                            { src: "images/coffee.png", alt: "coffee shop", link: "files/TheFullMoonCoffeeShop.html" }
                        ];
                    } else if (assignmentNumber === "3") {
                        images = [
                            { src: "images/q1.png", alt: "q1", link: "files/que1.html" },
                            { src: "images/q2.png", alt: "q2", link: "files/que2.html" },
                            { src: "images/q3.png", alt: "q3", link: "files/que3.html" },
                            { src: "images/q4.png", alt: "q4", link: "files/que4.html" },
                            { src: "images/q5.png", alt: "q5", link: "files/que5.html" },
                            { src: "images/q6.png", alt: "q6", link: "files/que6.html" }
                        ];
                    } else if (assignmentNumber === "4") {
                        images = [
                            { src: "images/css1.png", alt: "css1", link: "files/ques1.html" },
                            { src: "images/css2.png", alt: "css2", link: "files/ques2.html" },
                            { src: "images/css3.png", alt: "css3", link: "files/ques3.html" },
                            { src: "images/css4.png", alt: "css4", link: "files/ques4.html" }
                        ];
                    } else {
                        images = [
                            { src: "images/chess.png", alt: "pawn", link: "files/chess.html" },
                            { src: "images/letter.webp", alt: "leave", link: "files/leave_letter.html" },
                            { src: "images/table.png", alt: "grid", link: "files/table.html" }
                        ];
                    }

                    images.forEach(imageData => {
                        const img = document.createElement("img");
                        img.src = imageData.src;
                        img.alt = imageData.alt;
                        img.style.width = "150px";
                        img.style.height = "150px";
                        img.style.margin = "20px"; 
                        img.classList.add("center-logo");

                        img.addEventListener("click", function () {
                            window.open(imageData.link, "_blank"); 
                        });

                        boardSection.appendChild(img);
                    });
                }
            });
        });
    }

    infoD.addEventListener("click", function () {
        document.querySelector(".dashboard-preview").innerHTML = originalDashboardContent;
        location.reload(); 
    });
});
