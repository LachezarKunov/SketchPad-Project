const container = document.querySelector(".container");
const btnChange = document.querySelector("#btn-change");
const btnClear = document.querySelector("#btn-clear");

const INITIAL_GRID_SIZE = 16;
const GRID_WIDTH_PX = 480;
const GRID_HEIGHT_PX = 480;

let gridSize = INITIAL_GRID_SIZE;

function createGridElement()
{
    const div = document.createElement("div");
    div.setAttribute("class","grid-element");
    
    div.style.height = `${GRID_HEIGHT_PX / parseInt(gridSize)}px`;
    div.style.width = `${GRID_WIDTH_PX / parseInt(gridSize)}px`;

    div.addEventListener("mouseover", (event) => 
        {
            setColor(event.target)
        });

    return div;
}

function setColor(element)
{
    const red = Math.random()*255;
    const green = Math.random()*255;
    const blue = Math.random()*255;

    element.style.backgroundColor=`rgb(${red},${green},${blue})`;
}

function createGrid()
{
for(let i = 0; i < gridSize * gridSize ; i++)
    {
        const element = createGridElement();
        container.appendChild(element);
    }
}

function deleteGridElements()
{
    while(container.firstChild)
        {
            container.removeChild(container.firstChild);
        }
}

function clearGrid()
{
    const gridElements = container.querySelectorAll("div");
    for(let i = 0; i < gridSize * gridSize; i++)
        {
            gridElements.item(i).style.backgroundColor="rgb(155, 255, 255)";
        }
}

createGrid();

btnChange.addEventListener("click",() => {
    gridSize = parseInt(prompt("Please, specify the grid dimensions(size of \"pixels\"). Maximum: 100"));
    if(gridSize > 100)
        {
            gridSize = 100;
        }
    deleteGridElements();
    createGrid();
});

btnClear.addEventListener("click", clearGrid);


