// Add input box
setTimeout(function() {
	document.querySelectorAll('.bngWaJ')[0].innerHTML += "<input style='margin-right:10px' id='restToRemove' type='text' name='restToRemove'><button style='margin-right:10px; border-radius:5px;color:gray;border:1px solid lightgray;' onclick='if(document.getElementById(\"restToRemove\").value==\"\"){}else{var x=JSON.parse(localStorage.getItem(\"restsToRemove\"));x.push(document.getElementById(\"restToRemove\").value.split(\" \").join(\"\"));localStorage.setItem(\"restsToRemove\",JSON.stringify(x));document.getElementById(\"restToRemove\").value = \"\";}'>הסר מסעדה</button>"
}, 5000);

// Check if list in local storage
var restsToRemoveString = "restsToRemove";
if (window.localStorage.getItem(restsToRemoveString) === null)
{
	var restsToRemoveList = [];
	window.localStorage.setItem(restsToRemoveString, JSON.stringify(restsToRemoveList));
}

window.onscroll = function() {main()};
function main() {
	var globalWidth = document.querySelectorAll('.ewCxPp')[1].offsetWidth + "px";
	var globalHeight = document.querySelectorAll('.ewCxPp')[1].offsetHeight + "px";
	var allRests = document.querySelectorAll('.hKuQiS');
	var restsToRemoveFromLocalStorage=JSON.parse(localStorage.getItem("restsToRemove"));

	for (var rest=0; rest<allRests.length; rest++) {
		if (restsToRemoveFromLocalStorage.indexOf(allRests[rest].innerText.split(' ').join('')) != -1)
		{
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