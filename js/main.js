	window.onload = ()=>{
		this.sessionStorage.setItem('username', 'coding');
		this.sessionStorage.setItem('password', 'coding1234');
	}
	let input = document.getElementsByTagName('input');
	let div = document.getElementsByTagName('div');
	let button = document.querySelector('button');
	let form = document.querySelector('form');
	form.onsubmit = ()=>{return false;}
	let n = 0;
	button.onclick = ()=>{

		if (input[0].value == ''){
		 	input[0].nextElementSibling.textContent = "Please write the Your Username";
		 	hide(0);
		 }

		if (input[0].value != '' && input[0].value != sessionStorage.getItem('username')){
		 	input[0].nextElementSibling.textContent = "Username NOT Match";
		 	hide(0);
		 }

		if (input[0].value == sessionStorage.getItem('username') && input[0].value != ''){
		 	n++;
		 	div[0].style.left = '-110%';
			div[1].style.left = 'auto';
			button.innerText = 'Sign In';
			document.getElementById('user-email').innerText = sessionStorage.getItem('username') + '@mail.com';
		 }


		if (input[1].value == '' && (n>1)){
		 	input[1].nextElementSibling.textContent = "Please write the Your Password";
		 	hide(1);
		 }

		if (input[1].value != '' && input[1].value != sessionStorage.getItem('password') && (n>1)){
		 	input[1].nextElementSibling.textContent = "Password NOT Match";
		 	hide(1);
		 }
		if (input[1].value == sessionStorage.getItem('password') && input[1].value != '' && (n>1)){
		 	form.onsubmit = ()=>{return true;}
		 }
	}

	function hide(n) {
		setTimeout(()=>{
			input[n].nextElementSibling.textContent = "";
		}, 2000);
		
	}