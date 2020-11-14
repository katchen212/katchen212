function calculateTip () {

	var billAmount = document.getElementById('billAmount').value;
	var Tip = document.getElementById('Tip').value;

	if (billAmount === "" || Tip == 0) {
		window.alert("Please enter some values to run this");
		return; 
	}

	var total = (billAmount * Tip )
	total = Math.round(total * 100)/100
	total= total.toFixed(2)

	document.getElementById('totalTip').style.display =" block"
	document.getElementById('tip').innerHTML = total;

}
document.getElementById("totalTip").style.display = "none";

document.getElementById("calculate").onclick = function () { calculateTip();
}
