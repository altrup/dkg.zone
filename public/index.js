
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to match the circle's dimensions
const circleImg = new Image();
circleImg.onload = function() {
	const scale = 1.3; // Adjust the scale factor as needed
	canvas.width = circleImg.width * scale;
	canvas.height = circleImg.height * scale;

	// Initial position of the circle with an offset
	let circleX = canvas.width / 2 - 500; // Adjust the offset as needed
	let circleY = canvas.height / 2 + 150; // Adjust the offset as needed

	// Initial angle of rotation for the circle
	let circleAngle = 0;

	// Array to hold house images
	const houseImages = [];
	houseImages[0] = new Image();
	houseImages[0].src = 'images/spencer.png'; // Provide the path to the first house image
	houseImages[1] = new Image();
	houseImages[1].src = 'images/brady.png'; // Provide the path to the second house image
	houseImages[2] = new Image();
	houseImages[2].src = 'images/james.png'; // Provide the path to the third house image
	houseImages[3] = new Image();
	houseImages[3].src = 'images/eric.png'; // Provide the path to the fourth house image
	houseImages[4] = new Image();
	houseImages[4].src = 'images/spencer.png'; // Provide the path to the fifth house image

// Function to draw the circle and houses
function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas on each frame
ctx.save();
ctx.translate(circleX, circleY);
ctx.rotate(circleAngle);
ctx.drawImage(circleImg, -circleImg.width * scale / 2, -circleImg.height * scale / 2, circleImg.width * scale, circleImg.height * scale);
ctx.restore();

// Draw each house
for (let i = 0; i < houseImages.length; i++) {
	const orbitRadius = 240; // Increase the radius for each house
	const houseAngle = (Math.PI * 2 / houseImages.length) * i + circleAngle; // Calculate the angle for this house
	const houseX = circleX + Math.cos(houseAngle) * orbitRadius;
	const houseY = circleY + Math.sin(houseAngle) * orbitRadius;

	// Draw the house image
	ctx.save(); // Save the current transformation state
	ctx.translate(houseX, houseY); // Translate to the center of the house
	ctx.rotate(houseAngle); // Rotate the house based on the circle's rotation
	ctx.drawImage(houseImages[i], -50, -150, 700, 700); // Draw the house image centered at (0, 0)
	ctx.restore(); // Restore the saved transformation state

	// Draw the clickable area for the link in blue
	const linkRadius = orbitRadius + 350; // Increase the radius for the links
	const linkX = circleX + Math.cos(houseAngle) * linkRadius;
	const linkY = circleY + Math.sin(houseAngle) * linkRadius;
	const clickableRadius = 250; // Radius of the clickable area
	ctx.fillStyle = 'blue';
	ctx.beginPath();
	ctx.arc(linkX, linkY, clickableRadius, 0, Math.PI * 2); // Draw a circle as the clickable area
	//ctx.fill();
}
}

// Add event listener to detect clicks within the clickable areas
canvas.addEventListener('click', function(event) {
const rect = canvas.getBoundingClientRect();
const mouseX = event.clientX - rect.left;
const mouseY = event.clientY - rect.top;

// Check if the click is within any of the clickable areas
for (let i = 0; i < houseImages.length; i++) {
	const orbitRadius = 220; // Increase the radius for each house
	const houseAngle = (Math.PI * 2 / houseImages.length) * i + circleAngle; // Calculate the angle for this house
	const linkRadius = orbitRadius + 350 //ase the radius for the links
	const linkX = circleX + Math.cos(houseAngle) * linkRadius;
	const linkY = circleY + Math.sin(houseAngle) * linkRadius;

	// Check if the click is within the clickable area for this link
	const distance = Math.sqrt((mouseX - linkX) ** 2 + (mouseY - linkY) ** 2);
	const clickableRadius = 250; // Radius of the clickable area
	if (distance <= clickableRadius) {
		const linkUrl = ['spencer', 'brady', 'james', 'https://altrup.dkg.zone', 'url5'][i]; // Example: replace with your actual URLs
		window.open(linkUrl, '_blank'); // Open the link in a new tab
		break; // Exit the loop if a link is clicked
	}
}
});

// Function to handle key events for rotating the circle
const keyState = {};
window.addEventListener('keydown', function(e) {
keyState[e.key || e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
keyState[e.key || e.keyCode] = false;
});
function handleKeys() {
if (keyState['ArrowLeft'] || keyState['a']) {
	circleAngle -= Math.PI / 115; // Rotate left
}
if (keyState['ArrowRight'] || keyState['d']) {
	circleAngle += Math.PI / 90; // Rotate right
}
}

// Animation loop
function animate() {

// Rotate the circle slowly counterclockwise
circleAngle -= Math.PI / 1500; // Adjust the rotation speed as needed

handleKeys(); // Handle key events for rotating the circle
draw(); // Draw the circle and houses
requestAnimationFrame(animate); // Request the next frame of the animation
//tih
}

// Start the animation loop
animate();
};

// Set the source of the circle image
circleImg.src = 'images/Untitled.png'; // Provide the path to your texture image