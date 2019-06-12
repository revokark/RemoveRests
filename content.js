// Add input box
setTimeout(function() {
	document.querySelectorAll('.bngWaJ')[0].innerHTML += "<input style='margin-right:10px' id='restToRemove' type='text' name='restToRemove'><button style='margin-right:10px; border-radius:5px;color:gray;border:1px solid lightgray;' onclick='localStorage.setItem(document.getElementById(\"restToRemove\").value.split(\" \").join(\"\"), \"true\");document.getElementById(\"restToRemove\").value = \"\";'>הסר מסעדה</button>"
}, 5000);

window.onscroll = function() {main()};
function main() {
	var globalWidth = document.querySelectorAll('.ewCxPp')[1].offsetWidth + "px";
	var globalHeight = document.querySelectorAll('.ewCxPp')[1].offsetHeight + "px";
	var allRests = document.querySelectorAll('.hKuQiS');
	
	for (var rest=0; rest<allRests.length; rest++) {
		if (localStorage.getItem(allRests[rest].innerText.split(' ').join('')) == "true") {
			if (allRests[rest].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display == 'none') {
				{};
			}
			else {
				allRests[rest].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
				allRests[rest].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML += "<img style='border-radius:5px;' src=\"http://i68.tinypic.com/1567ps1.jpg\" height=" + globalHeight + " width=" + globalWidth + ">"
			}
		}
	}
}