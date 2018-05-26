var oClose = document.querySelector('.close');
var oTop = document.querySelector('.top');
oClose.onclick = function(){
    oTop.style.display = "none";
}
var oCh = document.querySelector('#ch');
var oUrben = document.querySelector('.urben');
oCh.onmouseover =open;
oCh.onmouseout = close;
oUrben.onmouseout = close;
 function close(){
    oUrben.style.display = "none";
    oCh.style='';
}
oUrben.onmouseover = open;
function open(){
    oCh.style.backgroundColor = '#fff';
    oCh.style.border='2px solid #ddd';
    oCh.style.borderBottom='0px';
    oUrben.style.display = "block";
}
var oJd = document.querySelector('#jd');
var oMy =   document.querySelector('.my');
oJd.onmouseover = function(){
    oJd.style.backgroundColor = '#fff';
    oJd.style.border='2px solid #ddd';
    oJd.style.borderBottom='0px';
    oMy.style.display = 'block';
}
oJd.onmouseout = function(){
    oMy.style.display = "none";
    oJd.style='';
}
window.onload = function ()
{
	var oSub = document.getElementsByClassName("sub");
    var oRow = document.getElementsByClassName("sub-row");
	for(var i = 0; i < oSub.length; i++)
	{
		oSub[i].index = i;
        oSub[i].onmouseover = function(){
            oRow[this.index].style.display = 'block';
        }
        oSub[i].onmouseout = function(){
            oRow[this.index].style.display = 'none';
        }
    }
}

