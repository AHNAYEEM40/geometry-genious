function CalclutionTriangleArea(){
 const triangleBaseInput =document.getElementById('triangle-base');
 const triangleBaseText =triangleBaseInput.value;
 const base =parseInt(triangleBaseText)
//  console.log(base)
 

const triangleHeight =document.getElementById('triangle-height');
const triangleHeightText =triangleHeight.value;
const height = parseFloat(triangleHeightText)
console.log(height);

// calclute the triangle
const area =0.5 * base * height;
console.log('area of the thirangle is',area);

// disply triangle area
const triangleAreaSpan =document.getElementById('triangle-area');
triangleAreaSpan.innerText =area;
 
}

function CalclutionRectangleArea(){
    const ReactangleBaseInput =document.getElementById('rectangle-base');
    const ReactangleBaseText =ReactangleBaseInput.value;
    const bas = parseFloat (ReactangleBaseText)
    console.log(bas)

    const ReactangleHeight =document.getElementById('rectangle-height');
    const ReactangleHeightText =ReactangleHeight.value;
    const height2 = parseFloat(ReactangleHeightText)
    console.log(height2);

    const aarea =bas*height2;
    console.log(aarea);

    const reactanglearea =document.getElementById('reactangle-area');
    reactanglearea.innerText =aarea;
}