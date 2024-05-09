import { ADDRESS_TEXTFIELD_ID, POSTALCODE_TEXTFIELD_ID, CITY_TEXTFIELD_ID, COMPANY_TEXTFIELD_ID, EMAIL_TEXTFIELD_ID, REGISTRATION_FORM_ID, PENDING_FORM_ID, PHONE_TEXTFIELD_ID, PROVINCE_TEXTFIELD_ID, START_FORM_ID, CONFIRM_DATA_FORM_ID as CONFIRM_DATA_FORM_ID, REGISTRATION_EMAIL_SENT_FORM_ID, HOURGLASS_EMPTY_ICON, BOUCE_IN_RIGHT_ANIMATION_CLASS, ORDER_FORM_ID, PACKAGE_QUANTITY_TEXTFIELD_ID, EPAL_QUANTITY_TEXTFIELD_ID, PACKAGE_WEIGHT_TEXTFIELD_ID, PACKAGE_VOLUME_TEXTFIELD_ID, PALLET_DATA_DIALOG_ID, PALLET_OPEN_DIALOG_BUTTON_ID, BUTTON_ROUNDED, PALLET_LIST_DIV_ID, DELIVERY_DOCUMENT_TEXTFIELD_ID, PALLET_OVERALL_WEIGTH_ID, PALLET_OVERALL_VOLUME_ID, ORDER_NOTES_TEXTAREA_ID, RECIPIENT_FORM_ID, ORDER_EMAIL_SENT_FORM_ID, BUTTON_STANDARD, SERVICE_OPEN_DROPDOWN_TYPE_BUTTON_ID, SERVICE_DROPDOWN_ID, SERVICE_TYPE_ATTRIBUTE_ID } from "../../constant/costant.js";
import { language } from "../../constant/language-messages.js";
import { MAIL_SVG } from "../../constant/svg.js";
import { openPalletDialog, openSelectableDropdown } from "../../function/component-handler.js";
import { createFunctionButton } from "./button-component.js";
import { createPalletDialog } from "./dialog-components.js";
import { createFormTitleDiv } from "./div-component.js";
import { createServiceDropdownMenu } from "./dropdown-component.js";
import { createAnimatedSvgIcon, createIcon } from "./icon-component.js";
import { createList } from "./list-components.js";
import { createFormTitleText, createOverallStatsText, createOverallUnitText, createText, createTextArea } from "./text-component.js";
import { createFormNumericTextField, createFormTextField, createTextField } from "./text-field-component.js";


export function getStartRegistrationFormHtml(){
    return `<div id="${START_FORM_ID}" >
                ${createFormTitleDiv(language.emailFormText)}

                <div class="p-3 row justify-content-md-center">
                    <div class="col">
                        <!-- TEXT-FIELD -->
                        ${createTextField(EMAIL_TEXTFIELD_ID, language.emailPlaceHolder, 75)}
                        </div>
                </div>
            </div>
            `;
}

export function getPendingRegistrationFormHtml(){
    return `<div id="${PENDING_FORM_ID}" >
                ${createFormTitleDiv(language.pendingFormText)}

                <div class="p-3 row justify-content-md-center">
                    ${createIcon(HOURGLASS_EMPTY_ICON)}
                </div>
            </div>
            `;
}

export function getConfirmDataFormHtml(){
    return `<div id="${CONFIRM_DATA_FORM_ID}" >
                ${createFormTitleDiv(language.confirmDataFormText)}
            </div>`;
}

export function getRegistrationEmailSentFormHtml(){
    return getEmailSentFormHtml(REGISTRATION_EMAIL_SENT_FORM_ID, language.registrationEmailSentFormText);
}

export function getOrderEmailSentFormHtml(){
    return getEmailSentFormHtml(ORDER_EMAIL_SENT_FORM_ID, language.orderEmailSentFormText);
}

export function getEmailSentFormHtml(id, text){
    return `<div id="${id}" >
                ${createFormTitleDiv(text)}
                
                <div class="p-5 row justify-content-md-center">
                    ${createAnimatedSvgIcon(MAIL_SVG, BOUCE_IN_RIGHT_ANIMATION_CLASS)}
                </div>
            </div>
            `;
}

export function getNewRegistrationFormHtml(){
    return `<div id="${REGISTRATION_FORM_ID}" >
                ${createFormTitleDiv(language.registrationFormText)}

                ${getUserDataFormHtml()}
            </div>
            `;
}

export function getRecipientFormHtml(){
    return `<div id="${RECIPIENT_FORM_ID}" >
                ${createFormTitleDiv(language.recipientFormText)}

                ${getUserDataFormHtml()}
            </div>
            `;
}

function getUserDataFormHtml(){
    return `
        <div class="p-1 row justify-content-center">
            <div class="col align-self-center">
                ${createFormTextField(COMPANY_TEXTFIELD_ID, language.companyPlaceHolder)}
            </div>
        </div>

        <div class="p-1 row justify-content-center">
            <div class="col align-self-center">
                ${createFormTextField(ADDRESS_TEXTFIELD_ID, language.addressPlaceHolder)}
            </div>
        </div>

        <div class="p-1 row justify-content-center">
            <div class="col align-self-center">
                ${createFormTextField(PROVINCE_TEXTFIELD_ID, language.provincePlaceHolder)}
            </div>
        </div>

        <div class="p-1 row justify-content-center">
            <div class="col align-self-center">
                ${createFormTextField(CITY_TEXTFIELD_ID, language.cityPlaceHolder)}
            </div>
        </div>

        <div class="p-1 row justify-content-center">
            <div class="col align-self-center">
                ${createFormNumericTextField(POSTALCODE_TEXTFIELD_ID, language.postalCodePlaceHolder)}
            </div>
        </div>

        <div class="p-1 mb-3 row justify-content-center">
            <div class="col align-self-center">
                ${createFormNumericTextField(PHONE_TEXTFIELD_ID, language.phoneNumberPlaceHolder)}
            </div>
        </div>`;
}

export function getOrderFormHtml(){
    createPalletDialog(PALLET_DATA_DIALOG_ID, language.palletDialogDataTitle);

    return `<div id="${ORDER_FORM_ID}" >
                ${createFormTitleDiv(language.orderFormText)}

                <div class="p-1 row justify-content-center">
                    <div class="col align-self-center">
                        ${createFormTextField(DELIVERY_DOCUMENT_TEXTFIELD_ID, language.deliveryDocumentPlaceHolder)}
                    </div>
                </div>

                <div class="p-1 row justify-content-center">
                    <div class="col align-self-center">
                        ${createFormTextField(PACKAGE_QUANTITY_TEXTFIELD_ID, language.packageQuantityPlaceHolder)}
                    </div>
                </div>

                <div class="p-1 row justify-content-center">
                    <div class="col align-self-center">
                        ${createFormTextField(ORDER_NOTES_TEXTAREA_ID, language.orderNotesPlaceHolder)}
                    </div>
                </div>

                <div class="p-1 row justify-content-center">
                    <div class="col align-self-center">
                        <div id="demo-menu" class="mdc-menu-surface--anchor">
                            ${createFunctionButton(
                                {
                                    id: SERVICE_OPEN_DROPDOWN_TYPE_BUTTON_ID, 
                                    text: language.serviceOpenDropdownText, 
                                    type: BUTTON_STANDARD, 
                                    functionToCall: () => openSelectableDropdown(SERVICE_OPEN_DROPDOWN_TYPE_BUTTON_ID, SERVICE_DROPDOWN_ID, SERVICE_TYPE_ATTRIBUTE_ID),
                                    weight: "w-75"
                                }
                            )}
                            ${createServiceDropdownMenu(SERVICE_DROPDOWN_ID)}
                        </div>
                    </div>
                </div>

                <div class="mt-4 row justify-content-center">
                    <div class="col align-self-center">
                        <span class="overall">${language.overall}</span>
                        <br>
                        ${createOverallStatsText(PALLET_OVERALL_WEIGTH_ID, "0")}
                        ${createOverallUnitText(language.weightUnit)}
                        <!-- SPACING -->
                        <span class="ms-3"></span>
                        ${createOverallStatsText(PALLET_OVERALL_VOLUME_ID, "0")}
                        ${createOverallUnitText(language.volumeUnit)}
                    </div>
                </div>

                <!-- PALLET CARDS LIST -->
                <div class="p-1 row justify-content-center">
                    <div class="col-md-3">
                        <div id="${PALLET_LIST_DIV_ID}"></div>
                    </div>
                </div>

                <!-- ADD BUTTON -->
                <div class="p-3 mb-3 row justify-content-center">
                    <div class="col-md-2">
                        ${createFunctionButton(
                            {
                                id: PALLET_OPEN_DIALOG_BUTTON_ID, 
                                text: language.palletOpenDialogButtonText, 
                                type: BUTTON_ROUNDED, 
                                functionToCall: openPalletDialog
                            }
                        )}
                    </div>
                </div>

            </div>
            `;
}