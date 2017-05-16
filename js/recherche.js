/* ©COPYRIGHT didjecte.byethost8.com 2015
Script made by: didjecte.byethost8.com Staff
WARNING: You may NOT use, duplicate or modify this script for commercial use.
However, you are free to use this script for study. */


//========== BASICS/VARIABLES ======//

var recherche = document.getElementById('recherche');
var rechercheAAA = document.getElementById('recherche-a');
var rechercheDvp = document.getElementById('recherche-deroule');
var resultats_affiches = false;

var timerA;
var rWidth = 0;
var opacite1 = 0;
var opacite2 = 1;
var compteurA = 1;
var vitesse = new Array;
var somme = 0, somme1 = 0;

var rWidthBack, opacite1Back, opacite2Back;

//--paramètres modifiables---

var tempsA = 0.5; //temps total pour un aller, en secondes (s)
var intervaleTemps = 10; //ms

var rWidthMax = 237; //px (230px)
var vMax = 500; //nombre réduit par la suite

var sepTemps = 0.2*tempsA; //modifier uniquement le coeff (<= 1)

//---calculs---

var compteurMax = tempsA*(1000/intervaleTemps);
var compteurSep = sepTemps*(1000/intervaleTemps);
var diffOpacite = 1/(compteurSep - compteurA);
var diffOpacite1 = 1/(compteurMax - compteurSep);
var diffOpacite2 = 1/compteurSep;

//============ FUNCTIONS ===========//

function clickRecherche()
{
	rechercheAAA.setAttribute('onclick','none');
	timerA = clearInterval(timerA);
	
	//reset
	compteurA = 1;
	rWidth = 0; //px
	opacite2 = 1;
	opacite1 = 0;

	somme = 0;
	somme1 = 0;
	
	for(var j=1; j<=compteurMax; j++)
	{
		vitesse[j] = (vMax/2)*Math.cos((2*Math.PI/compteurMax)*j+Math.PI)+(vMax/2);
		somme += vitesse[j];
	}
		
	for(var i=1; i<=compteurMax; i++)
	{
		vitesse[i] = ((vMax/2)*Math.cos((2*Math.PI/compteurMax)*i+Math.PI)+(vMax/2))*(rWidthMax/somme);
		somme1 += vitesse[i];
	}
	
	rechercheDvp.style.display = 'block';
	rechercheDvp.style.opacity = opacite1;
	document.getElementById('gsc-i-id1').focus();
	document.getElementById('gsc-i-id1').setAttribute('title','Vous cherchez...?');
	timerA = self.setInterval('derouleRecherche()',intervaleTemps);
}

function fermeRecherche()
{
	timerA = clearInterval(timerA);
	
	//reset
	compteurA = 1;	
	
	opacite2 = opacite2Back;
	opacite1 = opacite1Back;
		
	somme = 0;
	somme1 = 0;
	

	for(var j=1; j<=compteurMax; j++)
	{
		vitesse[j] = (vMax/2)*Math.cos((2*Math.PI/compteurMax)*j+Math.PI)+(vMax/2);
		somme += vitesse[j];
	}
	
	for(var i=1; i<=compteurMax; i++)
	{
		vitesse[i] = ((vMax/2)*Math.cos((2*Math.PI/compteurMax)*i+Math.PI)+(vMax/2))*(rWidthMax/somme);
		somme1 += vitesse[i];
	}
	
	opacite1 = 1;
	rWidth = rWidthBack;
	timerA = self.setInterval('enrouleRecherche()',intervaleTemps);
}

function derouleRecherche()
{	
	if(compteurA <= compteurMax)
	{
		if(compteurA < compteurSep)
		{
			recherche.style.opacity = opacite2;
			opacite2 -= diffOpacite;
			opacite2Back = opacite2;
		}
		else
		{
			if(compteurA == compteurSep)
			{
				
				recherche.style.opacity = opacite2;
				recherche.style.display = 'none';
				
				opacite1 = 0;	
				opacite2 = 0;
				
				opacite1Back = opacite1;
				opacite2Back = opacite2;
			}
			else
			{
				if(compteurA >= compteurSep)
				{
					rechercheDvp.style.opacity = opacite1;
					opacite1 += diffOpacite;
					opacite1Back = opacite1;
				}
				
				rWidthBack = rWidth;
				rechercheDvp.style.width = rWidth + 'px';
				rWidth += vitesse[compteurA];
			}
		}
	}
	else
	{
		document.getElementById('gsc-i-id1').setAttribute('onblur','if(document.getElementsByClassName(\'gsc-results-wrapper-visible\').length == 0){fermeRecherche()}');
		document.getElementsByClassName("gsc-modal-background-image gsc-modal-background-image-visible")[0].addEventListener("click", fermeRecherche);
		document.getElementsByClassName("gsc-results-close-btn gsc-results-close-btn-visible")[0].addEventListener("click", fermeRecherche);
		timerA = clearInterval(timerA);
		
		//stop
		return 0;
	}
	
	compteurA += 1;
}

function enrouleRecherche()
{
	if(compteurA <= compteurMax)
	{
		if(compteurA < (compteurMax - compteurSep))
		{
			rechercheDvp.style.opacity = opacite1;
			opacite1 -= diffOpacite1;
		
			rWidth -= vitesse[compteurA]*(rWidthBack/rWidthMax);
			rechercheDvp.style.width = rWidth + 'px';
		}
		else
		{
			if(compteurA == (compteurMax - compteurSep))
			{
				opacite2 = 1;
				recherche.style.opacity = opacite2;
				
				rechercheDvp.style.display = 'none';
				recherche.style.display = 'block';
				
				opacite1 = 0;
			}
			
			recherche.style.opacity = opacite2/2;
			opacite2 += diffOpacite2;
		}
	}
	else
	{
		opacite1 = 0;
	
		timerA = clearInterval(timerA);
		rechercheAAA.setAttribute('onclick','clickRecherche()');
		recherche.style.display = 'block';
		
		//stop
		return 0;
	}
	
	compteurA += 1;
}