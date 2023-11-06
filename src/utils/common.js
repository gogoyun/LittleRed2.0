import { ref } from 'vue';
//文字過長替換...
export function overReplace(text, num) {
	if(text.length>num){
		return text.substring(0, num)+'...';
	}else{
		return text;
	}
}
//ion-model breakpoints
export function IORegister(number) {
	const sheetModal = document.querySelector('ion-modal');
	const logo = document.querySelector('.logo');
	const register = document.getElementById('register');
	const registerBtn = document.querySelector(".registerBtn");
	const login = document.getElementById('login');
	const grid = register.querySelector("ion-grid");
	if(number>0.5){
		logo.classList.add("mT80Out");
		logo.classList.remove("mT80In");
		register.querySelectorAll(".hidePlace").forEach(hide => {
			hide.classList.remove('ion-hide');
		});
		login.querySelectorAll(".hidePlace").forEach(hide => {
			hide.classList.add('ion-hide');
		});
		grid.removeAttribute("style");
		registerBtn.classList.add("ion-hide");
	}else{
		logo.classList.add("mT80In");
		logo.classList.remove("mT80Out");
		register.querySelectorAll(".hidePlace").forEach(hide => {
			hide.classList.add('ion-hide');
		});
		login.querySelectorAll(".hidePlace").forEach(hide => {
			hide.classList.remove('ion-hide');
		});
		//hide SIGN UP title
		grid.setAttribute("style","padding-top:30px");
		//show register button
		registerBtn.classList.remove("ion-hide");
		
	}
	sheetModal.setCurrentBreakpoint(number)
}
// share modal open status
export const isOpen = ref(false);
export const isOpenElse = ref(false);
export const setOpen = (target, bool) => {
	if(target=='isOpen') isOpen.value = bool;
	if(target=='isOpenElse') isOpenElse.value = bool;
}
