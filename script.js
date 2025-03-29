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


let currentImages = [];
let currentIndex = 0;

function openModal(images) {
    currentImages = images;
    currentIndex = 0;
    updateModalImage();
    document.getElementById("imageModal").style.display = "flex";
}

function updateModalImage() {
    document.getElementById("modalImage").src = currentImages[currentIndex];
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateModalImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateModalImage();
}

// Schließen des Pop-ups, wenn außerhalb geklickt wird
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
};