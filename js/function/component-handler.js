import { CLICK, ERROR_DIALOG_ID, PALLET_CARD_ID, PALLET_DATA_DIALOG_ID, PALLET_DELETE_CARD_BUTTON_ID, PALLET_DIALOG_TITLE_ID, PALLET_LIST_DIV_ID, PALLET_OPEN_DIALOG_BUTTON_ID, PALLET_OPEN_DROPDOWN_TYPE_BUTTON_ID, PALLET_OVERALL_VOLUME_ID, PALLET_OVERALL_WEIGTH_ID, PALLET_TYPE_ATTRIBUTE_ID, PALLET_TYPE_DROPDOWN_ID, SERVICE_OPEN_DROPDOWN_TYPE_BUTTON_ID } from "../constant/costant.js";
import { getPalletData, updateOverallData } from "./data-handler.js";
import { isPalletDialogBoxFormValid } from "./form-validator.js";
import { getMdComponent } from "../components/data/component-data.js";
import { addPalletToUserData, userData } from "../components/data/user-data.js";
import { createPalleCard } from "../components/types/card-component.js";
import { appendHtmlInDiv, deleteElement, scroolOnElement } from "../utility/component-util.js";
import { removeArrayElement, removeArrayElementByIndex } from "../utility/array-util.js";
import { playShakeErrorAnimation } from "./ui-handler.js";

let typeSelected = false;

export function openPalletDialog(){
    //Get MD dialog
    let dialog = getMdComponent(PALLET_DATA_DIALOG_ID);

    dialog.open();
}

export function openServiceDialog(){
    //Get MD dialog
    let dialog = getMdComponent(PALLET_DATA_DIALOG_ID);

    dialog.open();
}

export function openErrorDialog(){
    //Get MD dialog
    let dialog = getMdComponent(ERROR_DIALOG_ID);

    dialog.open();
}

export function savePalletData(){
    //Validate data
    let formValid = isPalletDialogBoxFormValid();

    if(!typeSelected){
        playShakeErrorAnimation(PALLET_OPEN_DROPDOWN_TYPE_BUTTON_ID);
    }

    let dataNotValid = !formValid || !typeSelected;

    if(dataNotValid){
        return;
    }

    //Get data
    let palletData = getPalletData();

    //Save data
    addPalletToUserData(palletData);

    //Create card
    let palletIndex = userData.palletList.length - 1;

    let palletCardId = PALLET_CARD_ID + palletIndex;
    let deletePalletCardId = PALLET_DELETE_CARD_BUTTON_ID + palletIndex;

    let htmlCard = createPalleCard(palletCardId, deletePalletCardId, palletData);

    appendHtmlInDiv(PALLET_LIST_DIV_ID, htmlCard);

    //Create delete button event
    document.getElementById(deletePalletCardId).addEventListener(CLICK, () => deletePalletData(palletData, palletCardId));

    //Close dialog
    let palletDialog = getMdComponent(PALLET_DATA_DIALOG_ID);
    palletDialog.close();

    //Zoom on the added item
    let palletItem = document.getElementById(palletCardId);
    scroolOnElement(palletItem);
}

export function deletePalletData(palletData, palletCardId){
    updateOverallData(palletData);

    removeArrayElement(userData.palletList, palletData);

    deleteElement(palletCardId);
}

export function openPalletTypeDropdown(){
    let dropdownComponent = getMdComponent(PALLET_TYPE_DROPDOWN_ID);

    dropdownComponent.open = true;

    let menuItems = document.getElementById(PALLET_TYPE_DROPDOWN_ID).querySelectorAll('.mdc-list-item');

    menuItems.forEach(menuOption => {
        menuOption.addEventListener(CLICK, () => {
            let value = menuOption.textContent;

            //Change title text with the selected type
            let palletDialogTitle = document.getElementById(PALLET_DIALOG_TITLE_ID);
            palletDialogTitle.textContent = value;

            //Change button text with the selected type
            let buttonElement = document.getElementById(PALLET_OPEN_DROPDOWN_TYPE_BUTTON_ID);
            buttonElement.textContent = value;
            
            //Set in the button the palletIndex selected
            let palletIndex = menuOption.getAttribute(PALLET_TYPE_ATTRIBUTE_ID);
            buttonElement.setAttribute(PALLET_TYPE_ATTRIBUTE_ID, palletIndex);
            
            typeSelected = true;

            dropdownComponent.open = false;
        });
    });
}

export function openSelectableDropdown(buttonCallerId, dropdownId, attributeId){
    let dropdownComponent = getMdComponent(dropdownId);

    dropdownComponent.open = true;

    let menuItems = document.getElementById(dropdownId).querySelectorAll('.mdc-list-item');

    menuItems.forEach(menuOption => {
        menuOption.addEventListener(CLICK, () => {
            let value = menuOption.textContent;

            //Change button text with the selected type
            let buttonElement = document.getElementById(buttonCallerId);
            buttonElement.textContent = value;
            
            //Set in the button the item selected
            let itemIndex = menuOption.getAttribute(attributeId);
            buttonElement.setAttribute(attributeId, itemIndex);
            
            typeSelected = true;

            dropdownComponent.open = false;
        });
    });
}