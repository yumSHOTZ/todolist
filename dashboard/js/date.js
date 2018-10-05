function currentDate(){
	var d = new Date();

	var today = d.getDay();
	var month = d.getMonth();
	var year = d.getFullYear();
	var date = d.getDate();

	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

	var n_month = months[month];
	var n_day = days[today];

	var completeDate = n_day + ", " + n_month + " " + date + " " + year;

	document.getElementById('date').innerHTML = completeDate;


}