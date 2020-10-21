// app.js

//set start count
let count = 0;

// value & buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
	btn.addEventListener('click', function(e){
		const styles = e.currentTarget.classList;
		if(styles.contains('decrease')){
			count--;
		}
		else if(styles.contains('increase')){
			count++;
		}
		else {
			count = 0;
		}

		if(count > 0){
		  value.style.color = "#29ac25"; //green 
		}
		if(count < 0){
			value.style.color = "#ff4000"; //red
		}
		if(count === 0)
			value.style.color = "black";
		value.textContent = count;
	})
});
