/* =========================================================
   AURA CURSOR
   ========================================================= */

const auraCursor = {
    x: -100,
    y: -100,

    targetX: -100,
    targetY: -100,

    visible: false,
    interactive: false,

    enabled:
        window.matchMedia &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
};

function initAuraCursor() {

    if (
        !auraCursor.enabled ||
        !els.auraCursor
    ) {
        return;
    }

    document.addEventListener(
        "pointermove",
        event => {

            auraCursor.targetX =
                event.clientX;

            auraCursor.targetY =
                event.clientY;

            if (!auraCursor.visible) {

                auraCursor.visible = true;

                els.auraCursor.classList.add(
                    "visible"
                );
            }

        },
        { passive: true }
    );

    document.addEventListener(
        "pointerdown",
        () => {

            els.auraCursor.classList.add(
                "clicking"
            );

        },
        { passive: true }
    );

    document.addEventListener(
        "pointerup",
        () => {

            els.auraCursor.classList.remove(
                "clicking"
            );

        },
        { passive: true }
    );

    document.addEventListener(
        "pointerover",
        event => {

            const target =
                event.target.closest(
                    "button, a, [role='button'], .orrery-planet, .rail-item"
                );

            auraCursor.interactive =
                Boolean(target);

            els.auraCursor.classList.toggle(
                "interactive",
                auraCursor.interactive
            );

        },
        { passive: true }
    );

    document.addEventListener(
        "pointerout",
        event => {

            const target =
                event.target.closest(
                    "button, a, [role='button'], .orrery-planet, .rail-item"
                );

            if (!target) {
                return;
            }

            const related =
                event.relatedTarget;

            if (
                related &&
                target.contains(related)
            ) {
                return;
            }

            auraCursor.interactive = false;

            els.auraCursor.classList.remove(
                "interactive"
            );

        },
        { passive: true }
    );

    requestAnimationFrame(
        animateAuraCursor
    );
}

function animateAuraCursor() {

    if (
        !els.auraCursor ||
        !auraCursor.enabled
    ) {
        return;
    }

    /*
     * Deliberately smooth rather than directly
     * locking the aura to the pointer.
     */

    auraCursor.x +=
        (auraCursor.targetX - auraCursor.x) *
        0.18;

    auraCursor.y +=
        (auraCursor.targetY - auraCursor.y) *
        0.18;

    els.auraCursor.style.transform =
        `translate3d(
            ${auraCursor.x}px,
            ${auraCursor.y}px,
            0
        ) translate3d(-50%, -50%, 0)`;

    requestAnimationFrame(
        animateAuraCursor
    );
}

function setAuraDragging(active) {

    if (!els.auraCursor) {
        return;
    }

    els.auraCursor.classList.toggle(
        "dragging",
        active
    );
}
