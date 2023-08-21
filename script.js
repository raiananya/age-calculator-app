document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate");
    const resultElements = document.querySelectorAll("#result .data");

    calculateButton.addEventListener("click", function() {
        const dayInput = parseInt(document.getElementById("dateInput").value, 10);
        const monthInput = parseInt(document.getElementById("monthInput").value, 10);
        const yearInput = parseInt(document.getElementById("yearInput").value, 10);
        const today = new Date();

        const validDate = dayInput >= 1 && dayInput <= 31;
        const validMonth = monthInput >= 1 && monthInput <= 12;
        const validYear = yearInput >= 1900 && yearInput <= today.getFullYear();

        const dayInputElem = document.getElementById("dateInput");
        const monthInputElem = document.getElementById("monthInput");
        const yearInputElem = document.getElementById("yearInput");

        const errorDate = document.getElementById("errorDate");
        const errorMonth = document.getElementById("errorMonth");
        const errorYear = document.getElementById("errorYear");

        dayInputElem.classList.remove("invalid");
        monthInputElem.classList.remove("invalid");
        yearInputElem.classList.remove("invalid");

        errorDate.style.display = "none";
        errorMonth.style.display = "none";
        errorYear.style.display = "none";

        if (!validDate) {
            errorDate.style.display = "block";
            dayInputElem.classList.add("invalid");
        }

        if (!validMonth) {
            errorMonth.style.display = "block";
            monthInputElem.classList.add("invalid");
           
        }

        if (!validYear) {
            errorYear.style.display = "block";
            yearInputElem.classList.add("invalid");
            
        }

        if (!validDate || !validMonth || !validYear) {
            return; 
        }

        const birthDate = new Date(`${monthInput}/${dayInput}/${yearInput}`);
        const ageInMilliseconds = today - birthDate;
        const ageInSeconds = ageInMilliseconds / 1000;
        const ageInMinutes = ageInSeconds / 60;
        const ageInHours = ageInMinutes / 60;
        const ageInDays = ageInHours / 24;
        const ageInMonths = ageInDays / 30.44;
        const ageInYears = ageInMonths / 12;

        const remainingMonths = ageInMonths - Math.floor(ageInYears) * 12;
        const remainingDays = ageInDays - Math.floor(ageInMonths) * 30.44;

        resultElements[0].textContent = `${Math.floor(ageInYears)}`;
        resultElements[1].textContent = `${Math.floor(remainingMonths)}`;
        resultElements[2].textContent = `${Math.floor(remainingDays)}`;
    });
});

