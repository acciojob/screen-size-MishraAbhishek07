//your JS code here. If required.
// Function to update the size information
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeText = document.getElementById('sizeText');
    sizeText.textContent = `Width: ${width} and Height: ${height}`;
}

// Add an event listener for the window resize event
window.addEventListener('resize', updateSize);

// Initial call to set the size on page load
updateSize();
