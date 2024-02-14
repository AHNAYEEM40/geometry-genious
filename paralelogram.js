
function calcluteParallelogram(){
    const base =getInputValueById ('paralelogram-base');
    const height =getInputValueById('paralelogram-height')
    const area =base*height;
    console.log('area of the parallelogram is ',area);
    setInnerTextById ('paralelogram-area',area);
}


function getInputValueById(inputFieldId){
    const inputField =document.getElementById(inputFieldId);
    const inputValueText =inputField.value;
    const inputValue =parseFloat(inputValueText);
    return inputValue;

}
 function setInnerTextById(elementId,area){
    const element =document.getElementById(elementId);
    element.innerText =area;

 }