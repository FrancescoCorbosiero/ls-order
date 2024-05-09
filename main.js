import { initMdComponents } from "./js/components/data/component-data.js";
import { CLICK, NEXT_STEP_BUTTON_ID, PREV_STEP_BUTTON_ID } from "./js/constant/costant.js";
import { nextStep, prevStep } from "./js/function/state-machine.js";
import { initPageUI, updateNavigationButtonsUI } from "./js/function/ui-handler.js";

//LISTENERS

//INIT COMPONENTS
document.addEventListener("DOMContentLoaded", function(event) {
    updateNavigationButtonsUI();
    initPageUI();
    initMdComponents();
});


document.getElementById(NEXT_STEP_BUTTON_ID).addEventListener(CLICK, nextStep);
document.getElementById(PREV_STEP_BUTTON_ID).addEventListener(CLICK, prevStep);