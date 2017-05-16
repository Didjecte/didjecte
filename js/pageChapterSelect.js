/* ©COPYRIGHT didjecte.byethost8.com 2015
Script made by: didjecte.byethost8.com Staff
WARNING: You may NOT use, duplicate or modify this script for commercial use.
However, you are free to use this script for study. */


var ChpPage;

function pageChapterSelect(target)
{
	ChpPage = target.value;
	window.location.href = ChpPage + '.html';
}

var pageNumber, chapterNumber;

function quickChapterSelect()
{
	chapterNumber = document.getElementById('chapterNumber').value;
	window.location.href = 'chap/' + chapterNumber + '/' + chapterNumber + '_p1.html';
}

function quickPageSelect()
{
	chapterNumber = document.getElementById('chapterNumber').value;
	pageNumber = document.getElementById('pageNumber').value;
	
	window.location.href = chapterNumber + '_' + pageNumber + '.html';
}

function resetSelect(chp,p)
{
	document.getElementById('chapterNumber').value=chp;
	document.getElementById('pageNumber').value=p;
}

var pageNumberLength, chapterNumberLength;

function nextPage()
{
	pageNumber = '';
	chapterNumber = '';
	
	chapterNumberLength = document.getElementById('chapterNumber').value.length;
	for(var i=4; i<=chapterNumberLength; i++)
	{
		chapterNumber += document.getElementById('chapterNumber').value.charAt(i-1);
	}
	chapterNumber = parseInt(chapterNumber);
		
	pageNumberLength = document.getElementById('pageNumber').value.length;
	for(var j=2; j<=pageNumberLength; j++)
	{
		pageNumber += document.getElementById('pageNumber').value.charAt(j-1);
	}
	pageNumber = parseInt(pageNumber);
	
	if(pageNumber < chapterLastPage)
	{
		window.location.href = 'chp' + chapterNumber + '_p' + (pageNumber+1) + '.html';
	}
	else
	{
		if(chapterNumber < lastChapterNumber)
		{
			window.location.href = 'chp' + (chapterNumber+1) + '_p1.html';
		}
		else
		{
			if(confirm('Vous êtes arrivé(e) à la fin du dernier chapitre sorti. Voulez-vous retourner à la page d\'accueil?'))
			{
				window.location.href = 'index.html';
			}
		}
	}
}
		
function prevPage()
{
	pageNumber = '';
	chapterNumber = '';
	
	chapterNumberLength = document.getElementById('chapterNumber').value.length;
	for(var i=4; i<=chapterNumberLength; i++)
	{
		chapterNumber += document.getElementById('chapterNumber').value.charAt(i-1);
	}
	chapterNumber = parseInt(chapterNumber);

	pageNumberLength = document.getElementById('pageNumber').value.length;
	for(var j=2; j<=pageNumberLength; j++)
	{
		pageNumber += document.getElementById('pageNumber').value.charAt(j-1);
	}
	pageNumber = parseInt(pageNumber);

	if(pageNumber > 1)
	{
		window.location.href = 'chp' + chapterNumber + '_p' + (pageNumber-1) + '.html';
	}
	else
	{
		if(chapterNumber > 1)
		{
			window.location.href = 'chp' + (chapterNumber-1) + '_p' + prevChapterLastPage + '.html';
		}
		else
		{
			if(confirm('Vous êtes déjà au tout début du 1er chapitre. Voulez-vous retourner à la page "manga" ?'))
			{
				window.location.href = 'manga.html';
			}
		}
	}
}

// <![CDATA[
function omvKeyPressed(e) {
    var keyCode = 0;
    if (navigator.appName == "Microsoft Internet Explorer") {
        if (!e) {
            var e = window.event;
        }
        if (e.keyCode) {
            keyCode = e.keyCode;
            if ((keyCode == 37) || (keyCode == 39)) {
                window.event.keyCode = 0;
            }
        } else {
            keyCode = e.which;
        }
    } else {
        if (e.which) {
            keyCode = e.which;
        } else {
            keyCode = e.keyCode;
        }
    }
    switch (keyCode) {
    		case 37:
            prevPage();
            return false;
            
            case 39:
            nextPage();
            return false;
        
        default:
            return true;
    }
}
document.onkeydown = omvKeyPressed;
// ]]>