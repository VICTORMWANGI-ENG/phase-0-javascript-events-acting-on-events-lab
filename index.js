// Your code here
const moveDodgerLeft = () => {
	let dodger = document.getElementById("dodger");
	let left = parseInt(dodger.style.left) || 0; // Parse integer value, default to 0 if NaN


	if (left > 0) {
		dodger.style.left = `${left -1}px`;
  }
  else{dodger.style.left = `${left - 2}px`;}
};


moveDodgerLeft();

const moveDodgerRight = () => {
	let dodger = document.getElementById("dodger");
	let left= parseInt(dodger.style.left || 0); // Parse integer value, default to 0 if NaN

	
	if (left > 0) {
		dodger.style.left = `${left +1}px`;
  }
  
};

document.addEventListener('keydown', (e) => { if (e.key==='ArrowLeft') {moveDodgerLeft
  
}})
