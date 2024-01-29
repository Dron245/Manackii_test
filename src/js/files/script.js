// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const course = 89.54654654654;
let temp = false;
let temp01 = false;
document.addEventListener('click' , documentactions)

function documentactions(e) {
	const target = e.target;
	// console.log(target);
	
	// console.log(temp);
	const currency =document.querySelectorAll('.cost-part__currency');
	const cost =document.querySelectorAll('.cost-part__number');
	const date =document.querySelectorAll('.cost-part__date');

	if(target.closest('.cost-part__currency')){
		if(!temp){
			temp = true;
			currency.forEach(el => {
				el.textContent = "₽";
			});
			cost.forEach(el => {
			el.textContent = el.textContent * course;
			let qwe = el.textContent;
			let asd = Number(qwe);
			let zxc = Math.round(asd);
			el.textContent = zxc
			}); return;
		}
		if (temp){
			temp = false;
			currency.forEach(el => {
				el.textContent = "$";
			});
			cost.forEach(el => {
			el.textContent = el.textContent / course;
			let qwe = el.textContent;
			let asd = Number(qwe);
			let zxc = Math.round(asd);
			el.textContent = zxc
			}); return;
		}
	}
	

	if(target.closest('.cost-part__date')){
		if(!temp01){
			temp01 = true;
			date.forEach(el => {
				el.textContent = "/Day";
			});
			cost.forEach(el => {
			el.textContent = el.textContent / 30;
			// console.log(e);
			let qwe = el.textContent;
			let asd = Number(qwe);
			let zxc = Math.round(asd * 10) / 10;
			el.textContent = zxc
			}); return;
		}
		if (temp01){
			temp01 = false;
			date.forEach(el => {
				el.textContent = "/Months";
			});
			cost.forEach(el => {
			el.textContent = el.textContent * 30;
			// let qwe = el.textContent;
			// let asd = Number(qwe);
			// let zxc = Math.round(asd);
			// el.textContent = zxc
			}); return;
		}
	}
}
