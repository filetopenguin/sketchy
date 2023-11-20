const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset');

reset.addEventListener("click",resetGrid);

function setGrid(size){
    for(let i=0; i< (size*size); i++){
        const box = document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
        grid.style.gridTemplateRows= `repeat(${size},1fr)`;
        grid.appendChild(box);
        box.classList.add('box');
    }
}

function resetGrid(){
    let newSize = prompt("choose the new size for the etchy");
    if(newSize==null || newSize>100 || newSize<1 || isNaN(newSize)){
        alert("pick a legal input");
    }

    else{
        resetBoxes();
        setGrid(newSize);
        const boxes = grid.querySelectorAll('.box');
        boxes.forEach(box => box.addEventListener('mouseover',()=>{
            box.style.background='black';
        }))
    }
}

function resetBoxes(){
    const boxes = grid.querySelectorAll('.box');
    boxes.forEach(box=> box.remove());
}

window.onload=() =>{
    setGrid(16);
    const boxes = grid.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover',()=>{
        box.style.background ='black';
    }))
}