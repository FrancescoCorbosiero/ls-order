import { initMdComponents as initMdComponents } from "../components/data/component-data.js";
import { createErrorDialog } from "../components/types/dialog-components.js";
import { getStartRegistrationFormHtml } from "../components/types/form-components.js";
import { BOOTSTRAP_DISPLAY_NONE_CLASS, FADE_IN_ANIMATION_CLASS, FADE_OUT_ANIMATION_CLASS, NEXT_STEP_BUTTON_ID, PREV_STEP_BUTTON_ID, FORM_DIV_ID, START_STEP, REGISTRATION_EMAIL_SENT_STEP, ORDER_EMAIL_SENT_STEP, PENDING_STEP, LOGO_ID, NEXT_STEP_BUTTON_ICON_ID, PREV_STEP_BUTTON_ICON_ID, ERROR_DIALOG_ID } from "../constant/costant.js";
import { language } from "../constant/language-messages.js";
import { ARROW_BACK_SVG, ARROW_FORWARD_SVG, LOGO_SVG, LOGO_SVG_WHITE } from "../constant/svg.js";
import { formIdByStateMap, htmlFormByFormIdMap } from "../mapper/state-form-mapper.js";
import { appendHtmlInDiv, disableButtonComponent, enableButtonComponent } from "../utility/component-util.js";
import { openErrorDialog } from "./component-handler.js";
import { currentState } from "./state-machine.js";

const prevStepButton = document.getElementById(PREV_STEP_BUTTON_ID);
const nextStepButton = document.getElementById(NEXT_STEP_BUTTON_ID);

export function updateNavigationButtonsUI(){
    switch(currentState){
        case START_STEP:
            disableButtonComponent(prevStepButton);
            enableButtonComponent(nextStepButton);

            break;
        case REGISTRATION_EMAIL_SENT_STEP: case ORDER_EMAIL_SENT_STEP: case PENDING_STEP:
            enableButtonComponent(prevStepButton);
            disableButtonComponent(nextStepButton);

            break;
        default:
            enableButtonComponent(prevStepButton);
            enableButtonComponent(nextStepButton);    

            break;
    }
}

export function showError() {
    openErrorDialog();
    updateNavigationButtonsUI();
}

export function setNavigationButtonsToLoadState(){
    disableButtonComponent(prevStepButton);
    disableButtonComponent(nextStepButton);
}

export function setNextButtonToLoadState(){
    nextStepButton.innerHTML = `
        <div>
            <svg class="circular">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
            </svg>
        </div>
    `;
}

export function setNextButtonToReadyState(){
    nextStepButton.innerHTML = `
        <div class="mdc-fab__ripple"></div>
        <span class="material-icons mdc-fab__icon">arrow_forward_ios</span>
    `;
}

//REGISTRATION FORM

export function initPageUI(){
    //Init form
    let registrationForm = document.getElementById(FORM_DIV_ID);
    let startRegistrationFormHtml = getStartRegistrationFormHtml();

    registrationForm.innerHTML = startRegistrationFormHtml;

    //Error Dialog
    createErrorDialog(ERROR_DIALOG_ID);

    //Nav buttons
    let nextStepIconButton = document.getElementById(NEXT_STEP_BUTTON_ICON_ID);
    nextStepIconButton.innerHTML = ARROW_FORWARD_SVG;

    let prevStepIconButton = document.getElementById(PREV_STEP_BUTTON_ICON_ID);
    prevStepIconButton.innerHTML = ARROW_BACK_SVG;

    //Init logo
    let logo = document.getElementById(LOGO_ID);
    logo.innerHTML = LOGO_SVG_WHITE;
}

export function updateRegistrationFormUI(nextStep){
    return new Promise((resolve) => {
        //get the current form
        let registrationForm = document.getElementById(FORM_DIV_ID);

        //add fade out animation to it
        registrationForm.classList.remove(FADE_IN_ANIMATION_CLASS);
        registrationForm.classList.add(FADE_OUT_ANIMATION_CLASS);

        let fadeOutAnimation = document.querySelector('.' + FADE_OUT_ANIMATION_CLASS);

        //when the animation end
        fadeOutAnimation.addEventListener('animationend', () => {
            //remove the animation class
            registrationForm.classList.remove(FADE_OUT_ANIMATION_CLASS);
            
            swapForm(nextStep);

            //fade in
            registrationForm.classList.add(FADE_IN_ANIMATION_CLASS);

            let fadeInAnimation = document.querySelector('.' + FADE_IN_ANIMATION_CLASS);

            fadeInAnimation.addEventListener('animationend', () => {
                resolve();
            }, { once: true }); 

        }, { once: true }); 
    });
}

function swapForm(nextStep){
    let formToHideId = formIdByStateMap.get(currentState);
    let formToDisplayId = formIdByStateMap.get(nextStep);

    //TODO handle errors

    let formToHide = document.getElementById(formToHideId);
    let formToDisplay = document.getElementById(formToDisplayId);

    if(!formToDisplay){
        let formHtmlFunction = htmlFormByFormIdMap.get(formToDisplayId);
        let htmlToAppend = formHtmlFunction();

        appendHtmlInDiv(FORM_DIV_ID, htmlToAppend);
        formToDisplay = document.getElementById(formToDisplayId);
    }

    formToHide.hidden = true;
    formToDisplay.hidden = false;
}

//TEXT FIELD


export function playShakeTextfieldErrorAnimation(mdcTextField, id){
    let textField = document.getElementById(id);

    textField.classList.add("shake");

    textField.style.animation = 'none';
    textField.offsetHeight;
    textField.style.animation = null;

    mdcTextField.valid = false;

    textField.addEventListener('animationend', () => {
        textField.classList.remove("shake");
    });
}

export function playShakeErrorAnimation(id){
    let element = document.getElementById(id);

    element.classList.add("shake");

    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = null;

    element.addEventListener('animationend', () => {
        element.classList.remove("shake");
    });
}