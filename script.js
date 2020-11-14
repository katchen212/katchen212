function calculateTip ( ) {

	var billAmount = document.getElementById('billAmount').value;
	var realTip = document.getElementById('realTip').value;

	if (billAmount === "" || realTip == 0) {
		window.alert("Please enter some values to run this");
		return; 
	}

	var total = (billAmount * realTip )
	total = Math.round(total * 100 )/100
	total= total.toFixed(2)

	document.getElementById('totalTip').style.display =" block"
	document.getElementById('tip').innerHTML = total;


}
document.getElementById("totalTip").style.display = "none";

document.getElementById("calculate").onclick = function () { calculateTip();};
