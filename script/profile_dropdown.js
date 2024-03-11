// Show profile dropdown menu on profile picture hover
const profilePicture = document.getElementById("profilePicture");
const profileDropdown = document.getElementById("profileDropdown");

profilePicture.addEventListener("mouseenter", function () {
    profileDropdown.style.display = "block";
});

// Keep profile dropdown menu open while hovering over it
profileDropdown.addEventListener("mouseenter", function () {
    profileDropdown.style.display = "block";
});

// Hide profile dropdown menu on profile picture mouse leave
profilePicture.addEventListener("mouseleave", function () {
    profileDropdown.style.display = "none";
});

// Hide profile dropdown menu on profile dropdown menu mouse leave
profileDropdown.addEventListener("mouseleave", function () {
    profileDropdown.style.display = "none";
});