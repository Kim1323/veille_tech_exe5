// on cible l'élément « path » que l'on veut animer 
			var triangle = document.querySelectorAll("#monSVG path")[0];
			var triangle2 = document.querySelectorAll("#monSVG path")[1];
			var carre = document.querySelectorAll("#monSVG path")[2];
			var forme1 = document.querySelectorAll("#monSVG path")[3];
			var forme2 = document.querySelectorAll("#monSVG path")[4];

			// la longueur du chemin «path»
			var longueur = triangle.getTotalLength();
			var longueur2 = triangle2.getTotalLength();
			var longueur3 = carre.getTotalLength();
			var longueur4 = forme1.getTotalLength();
			var longueur5 = forme2.getTotalLength();

			//console.log(longueur)

			// La longueur du tracé
			// https://developer.mozilla.org/en/docs/Web/SVG/Attribute/stroke-dasharray

			triangle.style.strokeDasharray = longueur;
			triangle2.style.strokeDasharray = longueur2;
			carre.style.strokeDasharray = longueur3;
			forme1.style.strokeDasharray = longueur4;
			forme2.style.strokeDasharray = longueur5;

			// On fait disparaître le tracé en appliquant la propriété css strokeDashoffset sur toute la longueur du chemin
			triangle.style.strokeDashoffset = longueur;
			triangle2.style.strokeDashoffset = longueur2;
			carre.style.strokeDashoffset = longueur3;
			forme1.style.strokeDashoffset = longueur4;
			forme2.style.strokeDashoffset = longueur5;

			// extraire la fraction du déplacement de la barre de défilement et  ajusté le tracé
			window.addEventListener("scroll", maTrace);

			function maTrace() {

				console.log('scrollTop de body = ' + document.body.scrollTop)
				console.log('scrollTop de documentElement = ' + document.documentElement.scrollTop)
				console.log('scrollHeight de documentElement = ' + document.documentElement.scrollHeight)	
				console.log('clientHeight de documentElement = ' + document.documentElement.clientHeight)			

		https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight

			  var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

			  var trace = longueur * fractionDuScroll;
			  var trace2 = longueur2 * fractionDuScroll;
			  var trace3 = longueur3 * fractionDuScroll;
			  var trace4 = longueur4 * fractionDuScroll;
			  var trace5 = longueur5 * fractionDuScroll;

			  // tracé selon la fraction de «scroll»
			  triangle.style.strokeDashoffset = longueur - trace ;
			  triangle2.style.strokeDashoffset = longueur2 - trace2 ;
			  carre.style.strokeDashoffset = longueur3 - trace3 ;
			  forme1.style.strokeDashoffset = longueur4 - trace4 ;
			  forme2.style.strokeDashoffset = longueur5 - trace5 ;
			}