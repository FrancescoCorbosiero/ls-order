import { APP_ID, BUTTON_STANDARD, DIALOG_COMPONENT_TYPE, ERROR_DIALOG_TITLE_ID, PALLET_CONFIRM_DIALOG_BUTTON_ID, PALLET_DIALOG_TITLE_ID, PALLET_HEIGHT_TEXTFIELD_ID, PALLET_LENGHT_TEXTFIELD_ID, PALLET_OPEN_DROPDOWN_TYPE_BUTTON_ID, PALLET_QUANTITY_TEXTFIELD_ID, PALLET_TYPE_DROPDOWN_ID, PALLET_WEIGHT_TEXTFIELD_ID, PALLET_WIDTH_TEXTFIELD_ID } from "../../constant/costant.js";
import { language } from "../../constant/language-messages.js";
import { openPalletTypeDropdown, savePalletData } from "../../function/component-handler.js";
import { isPalletDialogBoxFormValid } from "../../function/form-validator.js";
import { addMdComponentToInit } from "../data/component-data.js";
import { createFunctionButton } from "./button-component.js";
import { createPalletDropdownMenu } from "./dropdown-component.js";
import { createRadioButton } from "./radiobutton-component.js";
import { createTextField } from "./text-field-component.js";

export function appendDialog(dialog){
    let app = document.getElementById(APP_ID);

    app.insertAdjacentHTML('beforeend', dialog);
}

export function createPalletDialog(id, title){
    let dialog = `
        <div class="mdc-dialog" id=${id}>
            <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="my-dialog-title"
                aria-describedby="my-dialog-content">
                <!-- TITLE -->
                <h2 class="mdc-dialog__title" id="${PALLET_DIALOG_TITLE_ID}">${title}</h2>
                <!-- CONTENT -->
                <div class="mdc-dialog__content" id="my-dialog-content">
                    <div class="container text-center">
                        <div class="p-1 row">
                            ${createFunctionButton(
                                {
                                    id: PALLET_OPEN_DROPDOWN_TYPE_BUTTON_ID, 
                                    text: language.palletOpenDropdownTypeText, 
                                    type: BUTTON_STANDARD, 
                                    functionToCall: () => openPalletTypeDropdown(PALLET_TYPE_DROPDOWN_ID)
                                }
                            )}
                            ${createPalletDropdownMenu(PALLET_TYPE_DROPDOWN_ID)}
                        </div>
                        <div class="p-1 row">
                            ${createTextField(PALLET_HEIGHT_TEXTFIELD_ID, language.palletHeightPlaceHolder)}
                        </div>
                        <div class="p-1 row">
                            ${createTextField(PALLET_LENGHT_TEXTFIELD_ID, language.palletLenghtPlaceHolder)}
                        </div>
                        <div class="p-1 row">
                            ${createTextField(PALLET_WIDTH_TEXTFIELD_ID, language.palletWidhtPlaceHolder)}
                        </div>
                        <div class="p-1 row">
                            ${createTextField(PALLET_WEIGHT_TEXTFIELD_ID, language.palletWeightPlaceHolder)}
                        </div>
                        <div class="p-1 row">
                            ${createTextField(PALLET_QUANTITY_TEXTFIELD_ID, language.palletQuantityPlaceHolder)}
                        </div>
                    </div>
                    
                </div>
                <div class="mdc-dialog__actions">
                    <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="cancel">
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label">${language.dialogCancel}</span>
                    </button>
                    ${createFunctionButton(
                        {
                            id: PALLET_CONFIRM_DIALOG_BUTTON_ID, 
                            text: language.dialogConfirm, 
                            type: BUTTON_STANDARD, 
                            functionToCall: savePalletData
                        }
                    )}
                </div>
            </div>
            </div>
            <div class="mdc-dialog__scrim"></div>
        </div>
    `;

    createDialogComponent(id, dialog);
}

export function createErrorDialog(id){
    let dialog = `
        <div class="mdc-dialog" id=${id}>
            <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="my-dialog-title"
                aria-describedby="my-dialog-content">
                <!-- TITLE -->
                <h2 class="mdc-dialog__title" id="${ERROR_DIALOG_TITLE_ID}">${language.errorDialogTitle}</h2>
                <!-- CONTENT -->
                <div class="mdc-dialog__content" id="my-dialog-content">
                    <p>${language.errorDialogText}</p>
                </div>
                <div class="mdc-dialog__actions">
                    <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="cancel">
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label">${language.dialogClose}</span>
                    </button>
                </div>
            </div>
            </div>
            <div class="mdc-dialog__scrim"></div>
        </div>
    `;

    createDialogComponent(id, dialog);
}

function createDialogComponent(id, dialog){
    initDialog(id);
    appendDialog(dialog);
}

function initDialog(id){
    addMdComponentToInit(id, DIALOG_COMPONENT_TYPE);
}