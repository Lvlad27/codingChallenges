const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

// practic este vorba despre cum se schimba elementele de html/css pentru un event dat (e.g. 'click'). Se stabilesc niste proprietati default si niste proprietati pentru event-ul 'click'. Cand event-ul 'click' este prezent pe element, toate celelalte elemente iau proprietatile default. 