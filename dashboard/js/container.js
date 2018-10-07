function resPonse(){
	var w = window.innerWidth;

	if(w >= 1200){
		document.getElementById('left').setAttribute('style','width: 49%;');
		document.getElementById('right').setAttribute('style','width: 49%;');
	}

	else{
		document.getElementById('left').setAttribute('style','width: 100%;');
		document.getElementById('right').setAttribute('style','width: 100%;');
	}
}