var form = document.forms[0];
form.elements.FIO.onchange = cha;
form.elements.phone.onchange = cha;
form.elements.vklink.onchange =cha;
function cha(){
	if ((this.value!="") && (this.value!="+7") && (this.value!="https://vk.com/")){
	this.classList.add('is-success');
}
	else{
	this.classList.remove('is-success');
	}
};

