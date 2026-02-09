

const MAX_SIZE = 5;
const fixedArray = new Array(MAX_SIZE);
let currentSize = 0


function addItem(item){
    if(currentSize >= MAX_SIZE){
        console.log("Array is full ");
        return
    }

    fixedArray[currentSize] = item;
    currentSize++;
    console.log("Added:", item);
    
}

function removeItem(item){
    if(currentSize === 0){
        console.log("Array is empty");
        return; 
    }

    currentSize--;
    fixedArray[currentSize] = undefined;
    console.log("Removed Last item");
    
}


function viewArray(){
    console.log("Arrray", fixedArray);
    console.log("Used slot:", currentSize + "/" + MAX_SIZE);    
}


addItem("A");
addItem("B");
addItem("C");
addItem("D");
addItem("E");
addItem("F");


viewArray();


removeItem();
viewArray();