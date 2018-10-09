document.getElementById('body').onload = function() { currentDate() };

function currentDate() {
    var d = new Date();

    var today = d.getDay();
    var month = d.getMonth();
    var year = d.getFullYear();
    var date = d.getDate();

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var n_month = months[month];
    var n_day = days[today];

    var completeDate = n_day + ", " + n_month + " " + date + " " + year;

    document.getElementById('dateToday').innerHTML = completeDate;
    month += 1;
    newDate = date.toString();
    newMonth = month.toString();
    if (month < 10){
    	if (date < 10) {
    		document.getElementById('date').setAttribute('min', year + "-" + newMonth.padStart(2, '0') + "-0" + newDate.padStart(2, '0'));
    		document.getElementById('date').value = year + "-" + newMonth.padStart(2, '0') + "-" + newDate.padStart(2, '0');
    	}
    	else
   			document.getElementById('date').setAttribute('min', year + "-" + newMonth.padStart(2, '0') + "-" + newDate.padStart(2, '0'));
    		document.getElementById('date').value = year + "-" + newMonth.padStart(2, '0') + "-" + newDate.padStart(2, '0');
   	}

   	else{
   		if(date < 10){
   			document.getElementById('date').setAttribute('min', year + "-" + newMonth.padStart(2, '0') + "-" + newDate.padStart(2, '0'));
    		document.getElementById('date').value = year + "-" + newMonth.padStart(2, '0') + "-" + newDate.padStart(2, '0');
   		}
   		else	
   			document.getElementById('date').setAttribute('min', year + "-" + newMonth.padStart(2, '0') + "-" + newDate.padStart(2, '0'));
    		document.getElementById('date').value = year + "-" + newMonth.padStart(2, '0') + "-" + newDate.padStart(2, '0');
   	}
}