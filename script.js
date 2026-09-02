/* =========================================================
   SEB-SKIN INTERACTIVE ENGINEERING SHOWCASE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       OPERATING STATES
    ===================================================== */

    const states = {

        VENT: {
            title: "VENT",
            description:
                "Natural ventilation configuration under moderate temperature and low wind conditions.",
            condition:
                "Moderate temperature + low wind"
        },

        COOL: {
            title: "COOL",
            description:
                "Hot outdoor air is routed through indirect evaporative pre-cooling before entering the indoor space.",
            condition:
                "Hot temperature + low wind"
        },

        HOLD: {
            title: "HOLD",
            description:
                "Airflow is mechanically controlled under cold conditions to reduce unnecessary exposure to outdoor air.",
            condition:
                "Cold temperature + low wind"
        },

        PROTECT: {
            title: "PROTECT",
            description:
                "Wind-priority override moves the airflow system toward the protective configuration under strong wind.",
            condition:
                "High wind — any temperature"
        }

    };


    const buttons =
        document.querySelectorAll(".state-btn");

    const title =
        document.getElementById("stateTitle");

    const description =
        document.getElementById("stateDescription");

    const condition =
        document.getElementById("stateCondition");


    function changeState(stateName) {

        const state = states[stateName];

        if (!state) return;

        buttons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.state === stateName
            );

        });

        title.textContent =
            state.title;

        description.textContent =
            state.description;

        condition.textContent =
            state.condition;

    }


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            changeState(
                button.dataset.state
            );

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, .metric-card, .chart-card, .application-card, .flow-step, .limitations-list > div"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".nav a[href^='#']");

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       AIRFLOW ANIMATION
    ===================================================== */

    const lines =
        document.querySelectorAll(".air-line");


    function pulseAirflow() {

        lines.forEach((line, index) => {

            line.animate(
                [
                    {
                        opacity: 0.25
                    },
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0.25
                    }
                ],
                {
                    duration: 1300,
                    delay: index * 180,
                    iterations: 1
                }
            );

        });

    }


    setInterval(
        pulseAirflow,
        2800
    );


    /* =====================================================
       TEMPERATURE CHART POINT INTERACTION
    ===================================================== */

    const points =
        document.querySelectorAll(".data-point");


    points.forEach(point => {

        point.addEventListener("mouseenter", () => {

            point.setAttribute(
                "r",
                "9"
            );

        });

        point.addEventListener("mouseleave", () => {

            point.setAttribute(
                "r",
                "6"
            );

        });

    });


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    changeState("VENT");

});
