function adjustContainerHeight(dropdown) {
  const container = dropdown.closest(".dropdown-container");
  const expandedHeight = dropdown.offsetHeight + 4; // Add some extra pixels for spacing

  // Adjust the container height to accommodate the expanded dropdown
  container.style.height = expandedHeight + "px";
}

// Set initial heights when the page loads
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => adjustContainerHeight(dropdown));
