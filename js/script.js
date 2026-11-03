
"use strict";

// Демонстрационные формы.
// Данные не отправляются на сервер и не сохраняются.

document.querySelectorAll(".demo-form").forEach((form) => {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const alertId = form.dataset.feedback;
        const alertElement = document.getElementById(alertId);

        if (alertElement) {
            alertElement.classList.remove("d-none");
        }

        form.reset();

    });

});
