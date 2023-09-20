
window.addEventListener('resize', function(){
	const itemContainer = document.querySelector('.item-container');
	const nextBtn = document.querySelector('.nxt-button');
	const preBtn = document.querySelector('.pre-button');

	let currenIndex = 0;


	if (window.innerWidth >= 992){

		function showItems() {
			const items = itemContainer.querySelectorAll('.item');

			items.forEach((currentItem,index) =>{
				if(index===currenIndex || index===currenIndex+1){
					currentItem.style.display = 'block';
				}
				else{
					currentItem.style.display = 'none';
				}
			})
		}

		function nextItem(){
			const items = itemContainer.querySelectorAll('.item');
			if(currenIndex+2 < items.length){
				currenIndex+=1;
				showItems();
			}
		}

		function preItems(){
			if(currenIndex>0){
				currenIndex-=1;
				showItems();
			}
		}

		showItems();
		nextBtn.addEventListener('click',nextItem);
		preBtn.addEventListener('click',preItems);
	}
});
	
