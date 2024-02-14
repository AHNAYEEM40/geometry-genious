function PentagonElementId(){
    const base =PentagonCall('pentagon-base');
    const height =PentagonCall('pentagon-height');
    const area=0.5*base*height;
    console.log('this is the area',area)
    setInnerTextById('pentagon-area', area)
}

function PentagonCall(pentagonInput){
    const PentagonInput =document.getElementById(pentagonInput);
    const PentagonText =PentagonInput.value;
    const PentagonValue =parseFloat(PentagonText);
    return PentagonValue;

}
function setInnerTextById(elementId,area){
   const PentagonCallElement =document.getElementById(elementId);
    PentagonCallElement.innerText=area;
}
