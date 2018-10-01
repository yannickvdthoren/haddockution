var boutonInsulte = document.getElementById('boutonInsulte');
boutonInsulte.addEventListener("click", insulte);
function insulte(){
	var req = new XMLHttpRequest();
	req.responseType = 'json';
	req.open('GET', "haddock.json", true);
	req.onload  = function() {
	   var jsonResponse = req.response;

	   var num = Math.floor(Math.random() * Math.floor(415));
	   var insulteTexte = jsonResponse[num].Expression;
	   var insulteZone = document.getElementById('insulte');
	   insulteZone.innerHTML = insulteTexte;
	};
	req.send(null)
};

var boutonListe = document.getElementById('boutonListe');
boutonListe.addEventListener("click", liste);
function liste(){
	document.getElementById('panel').style.display = "flex";
	var req = new XMLHttpRequest();
	req.responseType = 'json';
	req.open('GET', "haddock.json", true);
	req.onload  = function() {
	   var jsonResponse = req.response;
	   var i = 0;
	   var listeInsulte = document.getElementById('listeInsulte');
	   for(i = 0; i < jsonResponse.length; i++){
	   		var li = document.createElement('li');

    		listeInsulte.appendChild(li);
    		li.innerHTML=li.innerHTML + jsonResponse[i].Expression;
	   };
	};
	req.send(null)
};

var trier = document.getElementById('trier').getElementsByTagName('button');
for(i=0; i < trier.length; i++){
	trier[i].addEventListener("click", tri);
		function tri(){
			var listeInsulte = document.getElementById('listeInsulte');
			listeInsulte.innerHTML = "";
			var letterTri = this.innerText;
			var req = new XMLHttpRequest();
			req.responseType = 'json';
			req.open('GET', "haddock.json", true);
			req.onload  = function() {
			   var jsonResponse = req.response;
	   			var i = 0;
	   			for(i = 0; i < jsonResponse.length; i++){
	   				var firstLetter = jsonResponse[i].Expression[0].toUpperCase();
	   				if (letterTri === firstLetter){
			   			var li = document.createElement('li');
		    			listeInsulte.appendChild(li);
		    			li.innerHTML=li.innerHTML + jsonResponse[i].Expression;
		    		}
			   };
			};
			req.send(null)

	};
};

var close = document.getElementById('close');
close.addEventListener('click', closePanel);
function closePanel(){
	document.getElementById('panel').style.display = "none";
}