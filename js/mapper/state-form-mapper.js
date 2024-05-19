import { getConfirmDataFormHtml, getEmailSentFormHtml, getEmailConfirmationSentFormHtml, getNewRegistrationFormHtml, getOrderEmailSentFormHtml, getOrderFormHtml, getPendingRegistrationFormHtml, getRecipientFormHtml, getRegistrationEmailSentFormHtml, getStartRegistrationFormHtml } from "../components/types/form-components.js";
import { REGISTRATION_FORM_ID, REGISTRATION_STEP, START_STEP, START_FORM_ID, PENDING_STEP, PENDING_FORM_ID, ORDER_STEP, ORDER_FORM_ID, CONFIRM_REGISTRATION_STEP, CONFIRM_DATA_FORM_ID as CONFIRM_DATA_FORM_ID, REGISTRATION_EMAIL_SENT_FORM_ID, REGISTRATION_EMAIL_SENT_STEP, RECIPIENT_FORM_ID, RECIPIENT_STEP, CONFIRM_ORDER_STEP, ORDER_EMAIL_SENT_STEP, ORDER_EMAIL_SENT_FORM_ID } from "../constant/costant.js";

export const formIdByStateMap = new Map([
    //[MACHINE_STATE, FORM_ID]
    [START_STEP, START_FORM_ID],
    [REGISTRATION_STEP, REGISTRATION_FORM_ID],
    [PENDING_STEP, PENDING_FORM_ID],
    [ORDER_STEP, ORDER_FORM_ID],
    [RECIPIENT_STEP, RECIPIENT_FORM_ID],
    [CONFIRM_ORDER_STEP, CONFIRM_DATA_FORM_ID],
    [CONFIRM_REGISTRATION_STEP, CONFIRM_DATA_FORM_ID],
    [REGISTRATION_EMAIL_SENT_STEP, REGISTRATION_EMAIL_SENT_FORM_ID],
    [ORDER_EMAIL_SENT_STEP, ORDER_EMAIL_SENT_FORM_ID]
]);

export const htmlFormByFormIdMap = new Map([
    //[FORM_ID, html]
    [START_FORM_ID, getStartRegistrationFormHtml],
    [REGISTRATION_FORM_ID, getNewRegistrationFormHtml],
    [PENDING_FORM_ID, getPendingRegistrationFormHtml],
    [ORDER_FORM_ID, getOrderFormHtml],
    [RECIPIENT_FORM_ID, getRecipientFormHtml],
    [CONFIRM_DATA_FORM_ID, getConfirmDataFormHtml],
    [REGISTRATION_EMAIL_SENT_FORM_ID, getRegistrationEmailSentFormHtml],
    [ORDER_EMAIL_SENT_FORM_ID, getOrderEmailSentFormHtml]
]);