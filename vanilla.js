const btnLight=document.getElementsByClassName('btn-light')[0];
const btndark=document.getElementsByClassName('btn-dark')[0];
const container=document.getElementsByClassName('container')[0];
const card=document.getElementsByClassName('card')[0];

function darkTheme(){
	let containerBg=container.style.background='#333';
	let cardBg=card.style.background='#333';
	let cardColor=card.style.color='#fff';
	let newTheme=[containerBg,cardBg,cardColor];
	localStorage.setItem('mainTheme',newTheme);
}
function lightTheme(){
	localStorage.removeItem('mainTheme');
	container.style.background='#fff';
	card.style.background='#fff';
	card.style.color='#000';
}

btndark.addEventListener('click',darkTheme);
btnLight.addEventListener('click',lightTheme);

window.onload= ()=>{
	if(localStorage.getItem('mainTheme')===null){
		lightTheme();
	}
	else{
		darkTheme();
	}
}
