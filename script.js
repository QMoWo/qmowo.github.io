document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("theme-toggle");
    const body = document.body;

    // Prüfe, ob der Dark Mode bereits aktiviert wurde
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    // Event Listener für den Toggle-Switch
    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});