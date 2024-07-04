const GRID_SIZE = prompt("Please, enter grid size");

const GRID_WIDTH_PX = 480;
const GRID_HEIGHT_PX = 480;

const container = document.querySelector(".container");

function createGridElement()
{
    const div = document.createElement("div");
    div.setAttribute("class","grid-element");
    
    div.style.height = `${GRID_HEIGHT_PX / parseInt(GRID_SIZE)}px`;
    div.style.width = `${GRID_WIDTH_PX / parseInt(GRID_SIZE)}px`;

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

for(let i = 0; i < GRID_SIZE * GRID_SIZE ; i++)
    {
        const element = createGridElement();
        container.appendChild(element);
    }