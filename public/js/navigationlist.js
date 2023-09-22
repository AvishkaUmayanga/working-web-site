document.addEventListener('DOMContentLoaded', function(){

	const navigationbarIcon = document.querySelector('#navbars-icon');
	const navigationList = document.querySelector('.nav-list');

	const closeButton = document.querySelector('close-icon');

	navigationbarIcon.addEventListener('click', function(){
		if(navigationList.style.display === 'none'){
			navigationList.style.display = 'block';
		}
		else{
			navigationList.style.display = 'none';
		}
	});


	closeButton.addEventListener('click', function(){
		navigationList.style.display = 'none';
	});
});