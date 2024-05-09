//STATE MACHINE STATES
    export const START_STEP = "START_STEP";
    //Pending
    export const PENDING_STEP = "PENDING_STEP";
    //Registration
    export const REGISTRATION_STEP = "REGISTRATION_STEP";
    export const CONFIRM_REGISTRATION_STEP = "CONFIRM_REGISTRATION_STEP";
    export const REGISTRATION_EMAIL_SENT_STEP = "REGISTRATION_EMAIL_SENT_STEP";
    //Order
    export const ORDER_STEP = "ORDER_STEP";
    export const RECIPIENT_STEP = "RECIPIENT_STEP";
    export const CONFIRM_ORDER_STEP = "CONFIRM_ORDER_STEP";
    export const ORDER_EMAIL_SENT_STEP = "ORDER_EMAIL_SENT_STEP";
    

//REGISTRATION STATES
    export const REGISTERED_STATUS = "REGISTERED";
    export const PENDING_STATUS = "PENDING";
    export const NEW_STATUS = "NEW";

//ICON NAMES
    export const HOURGLASS_EMPTY_ICON = "hourglass_empty";
    export const DELETE_ICON = "delete";

//REGEX
    export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    export const MOBILE_PHONE_REGEX = /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    export const POSTALCODE_REGEX = /^\d{5}$|^\d{5}-\d{4}$/;
    export const ONLY_NUMBERS_REGEX = /^\d+$/;

//CSS

    //BOOTSTRAP

    export const BOOTSTRAP_DISPLAY_NONE_CLASS = "d-none";

    //MDC

    export const MDC_TEXT_FIELD_CLASS = "mdc-text-field";
    export const DISABLE_ACTION_BUTTON_CLASS = "mdc-text-field--disabled";
    export const DISABLE_OPACITY_BUTTON_CLASS = "mdc-disabled-text-field-opacity";

    //ANIMATIONS
    export const FADE_OUT_ANIMATION_CLASS = "fade-out";
    export const FADE_IN_ANIMATION_CLASS = "fade-in";
    export const BOUCE_IN_RIGHT_ANIMATION_CLASS = "bounce-in-right";

//ID

    //APP
    export const APP_ID = "app-id";

    //DIV
    export const FORM_DIV_ID = "form-id";
    export const PALLET_LIST_DIV_ID = "pallet-list-id";

    //CARD
    export const PALLET_CARD_ID = "pallet-card-id";

    //LOGO
    export const LOGO_ID = "logo-id";
    
    //BUTTONS

        //NAV BUTTONS
        export const NEXT_STEP_BUTTON_ID = "next-step-button-id";
        export const PREV_STEP_BUTTON_ID = "prev-step-button-id";

        //NAV ICONS
        export const NEXT_STEP_BUTTON_ICON_ID = "next-step-button-icon-id";
        export const PREV_STEP_BUTTON_ICON_ID = "prev-step-button-icon-id";

        //DIALOG BUTTONS
        export const PALLET_OPEN_DIALOG_BUTTON_ID = "pallet-open-dialog-button-id";
        export const PALLET_CONFIRM_DIALOG_BUTTON_ID = "pallet-confirm-dialog-button-id";
        export const PALLET_DELETE_CARD_BUTTON_ID = "pallet-delete-card-button-id";

        //DROPDOWN BUTTONS
        export const PALLET_OPEN_DROPDOWN_TYPE_BUTTON_ID = "pallet-open-dropdown-type-button-id";
        export const SERVICE_OPEN_DROPDOWN_TYPE_BUTTON_ID = "service-open-dropdown-type-button-id";

        //SERVICE
        export const SERVICE_TYPE_ATTRIBUTE_ID = "serviceTypeId";

        //PALLET TYPE
        export const PALLET_TYPE_ATTRIBUTE_ID = "palletTypeId";
        export const GENERIC_PALLET_TYPE_ID = "0";
        export const EPAL_TYPE_ID = "1";
        export const GENERIC_PALLET_TYPE_VALUE = "PALLET";
        export const EPAL_TYPE_VALUE = "EPAL";

    //DIALOG
    export const PALLET_DATA_DIALOG_ID = "pallet-data-dialog-id";
    export const ERROR_DIALOG_ID = "error-dialog-id";

    //RADIOBUTTON
    export const PALLET_TYPE_DROPDOWN_ID = "pallet-type-dropdown-id";
    export const SERVICE_DROPDOWN_ID = "service-dropdown-id";
    
    //TEXT FIELD ID

        //USER
        export const EMAIL_TEXTFIELD_ID = "text-field-email-id";
        export const COMPANY_TEXTFIELD_ID = "text-field-company-id";
        export const ADDRESS_TEXTFIELD_ID = "text-field-address-id";
        export const PROVINCE_TEXTFIELD_ID = "text-field-province-id";
        export const CITY_TEXTFIELD_ID = "text-field-city-id";
        export const POSTALCODE_TEXTFIELD_ID = "text-field-postal-code-id";
        export const PHONE_TEXTFIELD_ID = "text-field-phone-id";
       
        //ORDER

            //PACKAGE
            export const PACKAGE_QUANTITY_TEXTFIELD_ID = "text-field-package-quantity-id";
            export const PACKAGE_WEIGHT_TEXTFIELD_ID = "text-field-package-weight-id";
            export const PACKAGE_VOLUME_TEXTFIELD_ID = "text-field-package-volume-id";
            //EPAL
            export const EPAL_QUANTITY_TEXTFIELD_ID = "text-field-epal-quantity-id";
            //PALLET
            export const PALLET_HEIGHT_TEXTFIELD_ID = "text-field-pallet-height-id";
            export const PALLET_WEIGHT_TEXTFIELD_ID = "text-field-pallet-weight-id";
            export const PALLET_LENGHT_TEXTFIELD_ID = "text-field-pallet-lenght-id";
            export const PALLET_WIDTH_TEXTFIELD_ID = "text-field-pallet-width-id";
            export const PALLET_QUANTITY_TEXTFIELD_ID = "text-field-pallet-quantity-id";
            //TRANSPORT
            export const DELIVERY_DOCUMENT_TEXTFIELD_ID = "text-field-delivery-document-id";
            export const ORDER_NOTES_TEXTAREA_ID = "text-area-order-notes-id";

    //TEXT

        //PALLET
        export const PALLET_DIALOG_TITLE_ID = "pallet-dialog-title-id";
        export const PALLET_OVERALL_WEIGTH_ID = "pallet-overall-weigth-id";
        export const PALLET_OVERALL_VOLUME_ID = "pallet-overall-volume-id";

        //ERROR
        export const ERROR_DIALOG_TITLE_ID = "error-dialog-title-id";



    //FORM

        //Start
        export const START_FORM_ID = "start-form-id";
        //Pending
        export const PENDING_FORM_ID = "pending-form-id";
        //Registration
        export const REGISTRATION_FORM_ID = "registration-form-id";
        export const CONFIRM_DATA_FORM_ID = "confirm-data-form-id";
        export const REGISTRATION_EMAIL_SENT_FORM_ID = "registration-email-sent-form-id";
        //Order
        export const ORDER_FORM_ID = "order-form-id";
        export const RECIPIENT_FORM_ID = "recipient-form-id";
        export const ORDER_EMAIL_SENT_FORM_ID = "order-email-sent-form-id";


//MD COMPONENTS TYPES

export const DIALOG_COMPONENT_TYPE = "DIALOG_COMPONENT_TYPE";
export const TEXT_FIELD_COMPONENT_TYPE = "TEXT_FIELD_COMPONENT_TYPE";
export const DROPDOWN_COMPONENT_TYPE = "DROPDOWN_COMPONENT_TYPE";
export const RADIOBUTTON_COMPONENT_TYPE = "RADIOBUTTON_COMPONENT_TYPE";

//BUTTON TYPE 
export const BUTTON_ROUNDED = "BUTTON_ROUNDED";
export const BUTTON_STANDARD = "BUTTON_STANDARD";

//EVENT LISTENER TYPES
export const CLICK = "click";
