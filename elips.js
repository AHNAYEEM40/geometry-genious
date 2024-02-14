function ellipsCall(){
 const base =EllipsCalBy('elips-base');
 const height= EllipsCalBy('elips-height');
 const area =3.1416*base*height;
 console.log('ellips of the area',area);
 SetInnerTextEllips('elips-area',area);
}

function EllipsCalBy(ellipsCalInput){
const ellipsInput =document.getElementById(ellipsCalInput);
const ellipsCalInputText =ellipsInput.value;
const ellipsValue =parseFloat(ellipsCalInputText);
return ellipsValue;
}

function SetInnerTextEllips(element,area){
    const EllipsCallBYID =document.getElementById(element);
    EllipsCallBYID.innerText =area;

}


