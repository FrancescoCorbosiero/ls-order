export function removeArrayElementByIndex(array, index){
    array.splice(index, 1);
}

export function removeArrayElement(array, elementToRemove){
    let index = array.indexOf(elementToRemove);
    
    if (index === -1) {
        console.error(`Impossibile rimuove l'elemento ${elementToRemove} nell'array ${array}`);
    }

    array.splice(index, 1);
}

export function isArrayEmpty(array){
   return array.lenght == 0 ? true : false;
}