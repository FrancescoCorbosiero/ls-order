import { initMdComponents } from "../components/data/component-data.js";
import { CONFIRM_REGISTRATION_STEP, REGISTRATION_EMAIL_SENT_STEP, NEW_STATUS, ORDER_STEP, PENDING_STEP, PENDING_STATUS, REGISTERED_STATUS, REGISTRATION_STEP, START_STEP, PALLET_DATA_DIALOG_ID, RECIPIENT_STEP, CONFIRM_ORDER_STEP, ORDER_EMAIL_SENT_STEP } from "../constant/costant.js";
import { getCustomerStatus, getOrderDropdownData, sendCustomer, sendOrder } from "../rest/rest-caller.js";
import { saveEmail, saveOrderData, saveRecipientData, saveRegistrationData } from "./data-handler.js";
import { isEmailFormValid, isOrderFormValid, isRecipientFormValid, isRegistrationFormValid as isRegistrationFormValid } from "./form-validator.js";
import { setNavigationButtonsToLoadState, setNextButtonToLoadState, setNextButtonToReadyState, showError, updateNavigationButtonsUI, updateRegistrationFormUI } from "./ui-handler.js";

export let currentState = START_STEP;

export function nextStep(){ 
    setNextButtonToLoadState()
    setNavigationButtonsToLoadState();

    evaluateNextStep();

    setNextButtonToReadyState();
}

export function prevStep(){ 
    setNavigationButtonsToLoadState();

    evaluatePrevStep();
}

function evaluatePrevStep(){
    switch(currentState){
        case PENDING_STEP: case REGISTRATION_STEP: case ORDER_STEP:
            updateState(START_STEP);
            
            break;
    //ORDER
        case RECIPIENT_STEP:
            updateState(ORDER_STEP);

            break;
        case CONFIRM_ORDER_STEP:
            updateState(RECIPIENT_STEP);

            break;
        case ORDER_EMAIL_SENT_STEP:
            updateState(CONFIRM_ORDER_STEP);

            break;
    //REGISTRATION
        case CONFIRM_REGISTRATION_STEP:
            updateState(REGISTRATION_STEP);

            break;
        case REGISTRATION_EMAIL_SENT_STEP:
            updateState(CONFIRM_REGISTRATION_STEP);

            break;
        default:
            console.error(`machine state not valid: ${currentState}`);

            break;
    }
}

async function evaluateNextStep(){
    try {
        let formNotValid = false;

        switch(currentState){
            case START_STEP:
                formNotValid = !isEmailFormValid();
    
                if(formNotValid){
                    break;
                }
    
                saveEmail();
    
                //CALL EMAIL REGISTRATION CHECK
                let registrationState = await getCustomerStatus();
    
                evaluateRegistrationState(registrationState);
                
                break;
        //ORDER
            case ORDER_STEP:
                formNotValid = !isOrderFormValid();
    
                if(formNotValid){
                    break;
                }
    
                saveOrderData();
    
                updateState(RECIPIENT_STEP);
    
                break;
            case RECIPIENT_STEP:
                formNotValid = !isRecipientFormValid();
    
                if(formNotValid) {
                    break;
                }
    
                //Save Data
                saveRecipientData();
    
                updateState(CONFIRM_ORDER_STEP);
                
                break;
            case CONFIRM_ORDER_STEP:
                await sendOrder();
    
                updateState(ORDER_EMAIL_SENT_STEP);
                
                break;
        //REGISTRATION
            case REGISTRATION_STEP:
                formNotValid = !isRegistrationFormValid();
    
                if(formNotValid) {
                    break;
                }
    
                saveRegistrationData();
    
                updateState(CONFIRM_REGISTRATION_STEP);
    
                break;
            case CONFIRM_REGISTRATION_STEP:
                await sendCustomer();
    
                updateState(REGISTRATION_EMAIL_SENT_STEP);
                break;
            default:
                console.error(`machine state not valid: ${currentState}`);
    
                break;
        }
    
        if(formNotValid){
            updateNavigationButtonsUI();
        }

    } catch(error) {
        console.error(error);
        showError();
    }
}

async function evaluateRegistrationState(registrationState){
    switch(registrationState){
        case REGISTERED_STATUS:
            await getOrderDropdownData();

            updateState(ORDER_STEP);

            break;
        case PENDING_STATUS:
            updateState(PENDING_STEP);

            break;
        case NEW_STATUS:
            updateState(REGISTRATION_STEP);

            break;
        default:
            console.error(`registration state not valid: ${registrationState}`);
            showError();

            break;
    }
}

async function updateState(nextState){
    await updateRegistrationFormUI(nextState);
    
    currentState = nextState;

    updateNavigationButtonsUI();
    initMdComponents();
}