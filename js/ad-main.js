(function(){
		
		function Login(){
			let form = document.querySelector('form');
			form.onsubmit = ()=>{return false;}
			let input = form.getElementsByTagName('input');
			let div = form.getElementsByTagName('div');
			let button = form.lastElementChild;
			let n = 0;
			
			this.run = function(){
				setUserDetail();
				eventListener();	
			}
			function setUserDetail(){
				sessionStorage.setItem('Username', 'coding');
				sessionStorage.setItem('Password', 'coding1234');
			}
			function eventListener(){
				button.onclick = goForward;
			}
			function goForward(){
				const user  = sessionStorage.key(1);
				const pass  = sessionStorage.key(0);
				const userValue  = sessionStorage.getItem('Username');
				const passValue  = sessionStorage.getItem('Password');
				
				if (input[0].value == ''){
				 	input[0].nextElementSibling.textContent = `Please write the Your ${user}`;
				 	hide(0);
				 }

				if (input[0].value != '' && input[0].value != userValue){
				 	input[0].nextElementSibling.textContent = `${user} NOT Match`;
				 	hide(0);
				 }

				if (input[0].value == userValue && input[0].value != ''){
				 	n++;
				 	div[0].style.left = '-110%';
					div[1].style.left = 'auto';
					button.innerText = 'Sign In';
					document.getElementById('user-email').innerText = userValue + '@mail.com';
				 }


				if (input[1].value == '' && (n>1)){
				 	input[1].nextElementSibling.textContent = `Please write the Your ${pass}`;
				 	hide(1);
				 }

				if (input[1].value != '' && input[1].value != passValue && (n>1)){
				 	input[1].nextElementSibling.textContent = `${pass} NOT Match`;
				 	hide(1);
				 }
				if (input[1].value == passValue && input[1].value != '' && (n>1)){
				 	form.onsubmit = ()=>{return true;}
				 }
			}
			function hide(n){
				setTimeout(()=>{
					input[n].nextElementSibling.textContent = "";
				}, 2000);
			}

		}
		let login = new Login();
		login.run();
	})();