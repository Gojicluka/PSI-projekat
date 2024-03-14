
// Sample data for friends (picture and name)
const friends = [
    { name: "Friend 1", picture: "images/friend1.png" },
    { name: "Friend 2", picture: "images/friend1.png"  },
    { name: "Friend 3", picture: "images/friend1.png"  }
];

// Function to populate the dropdown with search results
function populateDropdown(results) {
    const dropdown = document.getElementById("searchDropdown");
    dropdown.innerHTML = "";
    results.forEach(friend => {
        const item = document.createElement("a");
        item.classList.add("dropdown-item");
        item.innerHTML = `<img src="${friend.picture}" alt="${friend.name}" width="30" height="30" class="mr-2">${friend.name}`;
        dropdown.appendChild(item);
    });
    if (results.length === 0) {
        const noResultItem = document.createElement("a");
        noResultItem.classList.add("dropdown-item", "disabled");
        noResultItem.innerText = "No results found";
        dropdown.appendChild(noResultItem);
    }
    dropdown.style.display = results.length ? "block" : "none";
}

const searchInput = document.getElementById("searchInput");
const searchDropdown = document.getElementById("searchDropdown");

// Function to handle search input
searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const filteredFriends = friends.filter(friend =>
        friend.name.toLowerCase().includes(searchText)
    );
    populateDropdown(filteredFriends);
    // const inputRect = this.getBoundingClientRect();
    // searchDropdown.style.top = inputRect.bottom + "px";
    // searchDropdown.style.left = inputRect.left + "px";
    // searchDropdown.style.width = inputRect.width + "px";
});

// Hide dropdown when clicking outside the search box
document.addEventListener("click", function (event) {
    if (event.target !== searchInput) {
        searchDropdown.style.display = "none";
    }
});

// Show dropdown when search box is clicked
searchInput.addEventListener("click", function () {
    populateDropdown(friends);
});
