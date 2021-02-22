	//jQuery Smooth Scrolling
	$('.navbar a').on('click', function (e) {
		if (this.hash !== '') {
			e.preventDefault();

			const hash = this.hash;
	
			$('html, body')
			.animate({
				scrollTop: $(hash).offset().top
			},800);
		}
	});
	// Essa função faz com que o scroll seja "suave", mas não sei explicar bem exatamente o que cada coisa faz pq achei bem complexo



	//get the modal element
	var modal = document.getElementById('simple_modal');
	//get open modal modal_button
	var modal_button = document.getElementById('modal_button');
	//get close close_button
	var close_button =  document.getElementsByClassName('close_button')[0];

	//listen for open click
	modal_button.addEventListener('click', open_modal);
	//listen for close click
	close_button.addEventListener('click', close_modal);
	//liste outside click
	window.addEventListener('click', outside_click);

	//function open_modal
	function open_modal(){
		modal.style.display = 'block';
	}
	//function close_modal
	function close_modal(){
		modal.style.display = 'none';
	}
	//function to close modal if outside click
	function outside_click(e){
		if(e.target == modal){
			modal.style.display = 'none';
		}
	}




	var modal2 = document.getElementById('simple_modal2');
	//get open modal modal_button
	var modal_button2 = document.getElementById('modal_button2');
	//get close close_button
	var close_button2 =  document.getElementsByClassName('close_button2')[0];

	//listen for open click
	modal_button2.addEventListener('click', open_modal2);
	//listen for close click
	close_button2.addEventListener('click', close_modal2);
	//liste outside click
	window.addEventListener('click', outside_click2);

	//function open_modal
	function open_modal2(){
		modal.style.display = 'block';
	}
	//function close_modal
	function close_modal2(){
		modal.style.display = 'none';
	}
	//function to close modal if outside click
	function outside_click2(e){
		if(e.target == modal){
			modal.style.display = 'none';
		}
	}

	var modal3 = document.getElementById('simple_modal3');
	//get open modal modal_button
	var modal_button3 = document.getElementById('modal_button3');
	//get close close_button
	var close_button3 =  document.getElementsByClassName('close_button3')[0];

	//listen for open click
	modal_button3.addEventListener('click', open_modal3);
	//listen for close click
	close_button3.addEventListener('click', close_modal3);
	//liste outside click
	window.addEventListener('click', outside_click3);

	//function open_modal
	function open_modal3(){
		modal.style.display = 'block';
	}
	//function close_modal
	function close_modal3(){
		modal.style.display = 'none';
	}
	//function to close modal if outside click
	function outside_click3(e){
		if(e.target == modal){
			modal.style.display = 'none';
		}
	}



	var modal4 = document.getElementById('simple_modal4');
	//get open modal modal_button
	var modal_button4 = document.getElementById('modal_button4');
	//get close close_button
	var close_button4 =  document.getElementsByClassName('close_button4')[0];

	//listen for open click
	modal_button4.addEventListener('click', open_modal4);
	//listen for close click
	close_button4.addEventListener('click', close_modal4);
	//liste outside click
	window.addEventListener('click', outside_click4);

	//function open_modal
	function open_modal4(){
		modal.style.display = 'block';
	}
	//function close_modal
	function close_modal4(){
		modal.style.display = 'none';
	}
	//function to close modal if outside click
	function outside_click4(e){
		if(e.target == modal){
			modal.style.display = 'none';
		}
	}



	var modal5 = document.getElementById('simple_modal5');
	//get open modal modal_button
	var modal_button5 = document.getElementById('modal_button5');
	//get close close_button
	var close_button5 =  document.getElementsByClassName('close_button5')[0];

	//listen for open click
	modal_button5.addEventListener('click', open_modal5);
	//listen for close click
	close_button5.addEventListener('click', close_modal5);
	//liste outside click
	window.addEventListener('click', outside_click5);

	//function open_modal
	function open_modal5(){
		modal.style.display = 'block';
	}
	//function close_modal
	function close_modal5(){
		modal.style.display = 'none';
	}
	//function to close modal if outside click
	function outside_click5(e){
		if(e.target == modal){
			modal.style.display = 'none';
		}
	}



	var modal6 = document.getElementById('simple_modal6');
	//get open modal modal_button
	var modal_button6 = document.getElementById('modal_button6');
	//get close close_button
	var close_button6 =  document.getElementsByClassName('close_button6')[0];

	//listen for open click
	modal_button6.addEventListener('click', open_modal6);
	//listen for close click
	close_button6.addEventListener('click', close_modal6);
	//liste outside click
	window.addEventListener('click', outside_click6);

	//function open_modal
	function open_modal6(){
		modal.style.display = 'block';
	}
	//function close_modal
	function close_modal6(){
		modal.style.display = 'none';
	}	
	//function to close modal if outside click
	function outside_click6(e){
		if(e.target == modal){
			modal.style.display = 'none';
		}
	}
