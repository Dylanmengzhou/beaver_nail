// A list of all possible colors
const COLORS = ["rgb(245, 220, 253)", "rgba(79, 15, 96,0.2)", "rgb(168, 61, 249)", "#cd9cf2", "rgba(179, 102, 221, 0.8)", "rgb(131, 92, 240)"];
// Defines the particle number
const PARTICLES_NUMBER = 20;

function createParticle(x, y) {
	const element = document.createElement("div");
	element.style.width = "10px";
	element.style.height = "10px";
	


	element.style.boxShadow = "3 2 3px white";


	element.style.borderRadius = "100px";
	// The elements are in absolute position
	element.style.position = "absolute";
	element.style.top = `${y}px`;
	element.style.left = `${x}px`;
	// We want our cursor to be centered in the square
	element.style.transform = "translate(-50%, -50%)";
	// Get a color randomly
	element.style.backgroundColor =
		COLORS[Math.floor(Math.random() * COLORS.length)];

	const animation = element.animate(
		[
			{
				// Math.random() - 0.5 returns integer between -0.5 and 0.5
				transform: `translate(${(Math.random() - 0.5) * 500}px, ${(Math.random() - 0.5) * 500
					}px) rotate(${Math.random() * 520}deg)`,
				// We want to reduce the opacity until 0
				opacity: 0
			}
		],
		1200
	);

	// Remove the particle at the end of animation
	animation.finished.then(() => element.remove());

	document.body.appendChild(element);
}

var month = document.getElementById("next");
month.addEventListener("click", (e) => {
	// Get the random position
	const x = Math.random() * window.innerWidth;
	const y = Math.random() * window.innerHeight;
	
	


	// Create multiple particles
	for (let i = 0; i < PARTICLES_NUMBER*5; i++) {
		createParticle(x, y);
	}
});
