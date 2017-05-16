/* ©COPYRIGHT didjecte.byethost8.com 2015
Script made by: didjecte.byethost8.com Staff
WARNING: You may NOT use, duplicate or modify this script for commercial use.
However, you are free to use this script for study. */


//======= PRE-REQUIS ============//

var gallery = document.getElementById('gallery');
var calque = document.getElementById('calque');
var galleryImg = document.getElementById('gallery_img');

//------ flash-info ------//

var flashInfo = document.getElementsByClassName('flash-info');

//======== MAIN SCRIPT ==========//
		
var compteur = 0;
var temps = 0.6; //seconde(s)
var timer1;
var nbreImgMax = 4;
var numeroImg = 1; // 1ère image à afficher
var opacite = 0; //ne pas changer
var diff_opacite;

var intervale_temps = 10; //10

var temps_reel = 0;

function nextImg()
{
	timer1 = self.setInterval('changerImgN()',intervale_temps);
	diff_opacite = 1/(50*temps);
	
	gallery.style.visibility = 'hidden';
}

function prevImg()
{
	timer1 = self.setInterval('changerImgP()',intervale_temps);
	diff_opacite = 1/(50*temps);
	
	gallery.style.visibility = 'hidden';
}

function changerImgN()
{
	if(compteur <= temps*100)
	{	
		if(compteur < (temps*100)/2)
		{
			calque.style.backgroundColor = 'rgba(0,0,0,'+opacite+')';
			opacite += diff_opacite;
		}
		else
		{
			//flash-info
			flashInfo[numeroImg - 1].setAttribute('class','flash-info');
			
			//prgm principal
			if(compteur == parseInt((temps*100)/2))
			{
				if(numeroImg < nbreImgMax)
				{
					numeroImg += 1;
				}
				else
				{
					numeroImg = 1;
				}
				galleryImg.setAttribute('src','wallpapers/wallpaper_'+numeroImg+'.png');
			}
			else
			{
				opacite -= diff_opacite;
				calque.style.backgroundColor = 'rgba(0,0,0,'+opacite+')';
			}
		}
		compteur += 1;
	}
	else
	{
		timer1 = window.clearInterval(timer1);
		compteur = 0;
		gallery.style.visibility = 'visible';
		
		//flash-info
		flashInfo[numeroImg - 1].setAttribute('class','flash-info show');
	}
}

function changerImgP()
{
	if(compteur <= temps*100)
	{	
		if(compteur < (temps*100)/2)
		{
			calque.style.backgroundColor = 'rgba(0,0,0,'+opacite+')';
			opacite += diff_opacite;
		}
		else
		{
			//flash-info
			flashInfo[numeroImg - 1].setAttribute('class','flash-info');
			
			//prgm principal
			if(compteur == parseInt((temps*100)/2))
			{
				if(numeroImg >= 2)
				{
					numeroImg -= 1;
				}
				else
				{
					numeroImg = nbreImgMax;
				}
				galleryImg.setAttribute('src','wallpapers/wallpaper_'+numeroImg+'.png');
			}
			else
			{
				opacite -= diff_opacite;
				calque.style.backgroundColor = 'rgba(0,0,0,'+opacite+')';
			}
		}
			compteur += 1;
	}
	else
	{
		timer1 = window.clearInterval(timer1);
		compteur = 0;
		gallery.style.visibility = 'visible';
		
		//flash-info
		flashInfo[numeroImg - 1].setAttribute('class','flash-info show');
	}
}