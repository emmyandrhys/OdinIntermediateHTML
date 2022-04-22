	const submit = document.getElementById('submit');
	const formInfo = [
		{
			field: document.getElementById('first-name'),
			started:false,
			valid: false
		}, {
			field: document.getElementById('last-name'),
			started:false,
			valid:false
		},{
			field: document.getElementById('email'),
			started:false,
			valid:false
		},{
			field: document.getElementById('phone'),
			started:false,
			valid:false
		},{
			field: document.getElementById('password'),
			started:false,
			valid:false
		},{
			field: document.getElementById('confirm-pass'),
			started:false,
			valid:false
		}]
function removeError(elem){
	if (elem.classList.contains('error')){
		elem.classList.remove('error');
	}
}
function addError(elem){
	if (!elem.classList.contains('error')){
		elem.classList.add('error');
	}
}
	function checkInput(q){
		//chekc only if started
		if(formInfo[q].started){
		//first and last name
		if (q<2){
			if(formInfo[q].field.value.length >1 ){
				formInfo[q].valid=true;
				removeError(formInfo[q].field)
			} else {formInfo[q].valid=false; 
			addError(formInfo[q].field)}
		}//email
		if(q==2){
			var emailID = formInfo[2].field.value;
			atpos = emailID.indexOf("@");
			dotpos = emailID.lastIndexOf('.');
			if (atpos < 1 || (dotpos - atpos < 2)){
				formInfo[q].valid=false;
				addError(formInfo[q].field);
			} else{ formInfo[q].valid=true;
			removeError(formInfo[q].field)}
		}//phone
		if(q==3){
			let num=0;
			let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
			if(regex.test(formInfo[3].field.value)){
				formInfo[3].valid==true;
				removeError(formInfo[3].field)
			} else {addError(formInfo[3].field);
			formInfo[3].valid=false;
			}
		}//password
		if(q==4){
			if (formInfo[4].field.value.length>7){
				formInfo[4].valid==true;
				removeError(formInfo[4].field)
			} else {addError(formInfo[4].field);
			formInfo[4].valid=false;}
		}//confirm password
		if(q==5) {
			if (formInfo[5].field.value === formInfo[4].field.value) {
				formInfo[5].valid==true;
				removeError(formInfo[5].field)
			} else {addError(formInfo[5].field);
			formInfo[5].valid=false;}
		};}}


	function allowSubmit(){
		checkInput(0);
		checkInput(1);
		checkInput(2);
		checkInput(3);
		checkInput(4);
		checkInput(5);
		for (item of formInfo){ 
			if(!item.valid){
				submit.classList.add('error');
				return false;
			} 
		} submit.classList.remove('error')
		return false;
	}
	function getField(e){
		for(let q=0; q<formInfo.length; q++){
			if(formInfo[q].field === document.activeElement){
				formInfo[q].started=true;
			} else checkInput(q)
	}}
	
	formInfo.forEach(item => item.field.addEventListener("input",getField));