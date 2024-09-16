const imageContainer = document.getElementById('imageContainer');

function hideImage() {
	imageContainer.style.display = 'none';
}

// Add event listeners to detect key presses for 'a', 'd', 'ArrowLeft', and 'ArrowRight' keys
window.addEventListener('keydown', function (event) {
	const key = event.key;
	if (key === 'a' || key === 'd' || key === 'ArrowLeft' || key === 'ArrowRight') {
		hideImage();
	}
});