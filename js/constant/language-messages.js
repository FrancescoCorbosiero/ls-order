const jsonMessagesItalian = {
    //FORM TEXT
    pendingFormText: "La tua richiesta di registrazione è andata a buon fine, a breve verrà approvata",
    registrationFormText: "Inserisci i dati dell'azienda",
    recipientFormText: "Inserisci i dati del destinatario",
    orderFormText: "Inserisci i dati dell'ordine",
    emailFormText: "Inserisci email",
    confirmDataFormText: "Per confermare i dati inseriti clicca nuovamente il pulsante 'Avanti' ",
    registrationEmailSentFormText: "Ci siamo quasi, per completare la registrazione segui le istruzioni contenute nella mail che ti abbiamo mandato",
    orderEmailSentFormText: "Ci siamo quasi, per completare l'ordine segui le istruzioni contenute nella mail che ti abbiamo mandato",

    //Units
    weightUnit: "kg",
    lenghtUnit: "cm",
    volumeUnit: "m3",

    //Overall
    overall: "Totale",

    //USER DATA PLACEHOLDER
        //Package
        packageQuantityPlaceHolder:  "Numero Colli (facoltativo)",
        packageWeightPlaceHolder:  `Peso (kg)`,
        packageVolumePlaceHolder:  `Volume (m3)`,
        //Epal
        epalQuantityPlaceHolder:  "Numero Epal",
        //Pallet
        palletHeightPlaceHolder: `Altezza (cm)`,
        palletWeightPlaceHolder: `Peso (kg)`,
        palletLenghtPlaceHolder: `Lunghezza (cm)`,
        palletWidhtPlaceHolder: `Larghezza (cm)`,
        palletQuantityPlaceHolder: "Quantità",
        //Delivery
        deliveryDocumentPlaceHolder: "Documento di trasporto",
        orderNotesPlaceHolder: "Note (facoltativo)",

        //User
        emailPlaceHolder:  "Email",
        companyPlaceHolder: "Ragione Sociale",
        addressPlaceHolder: "Via",
        provincePlaceHolder: "Provincia",
        cityPlaceHolder: "Città",
        postalCodePlaceHolder: "CAP",
        phoneNumberPlaceHolder: "Telefono",

    //DIALOG
        dialogConfirm: "Conferma",
        dialogCancel: "Annulla",
        dialogClose: "Chiudi",

        //ERROR
        errorDialogTitle: "Errore",
        
        errorDialogText: 
        `Ops, si è verificato un errore riprova più tardi. 
        Se il problema persiste contattaci via email o telefonicamente`,

        //Pallet
        palletDialogDataTitle: "Pallet",

    //PALLET TYPE
        genericPallet: "Pallet Generico",
        epal: "Epal",

    //BUTTON
        //Navigation
        nextButtonText: "Avanti",
        previousButtonText: "Indietro",
        //Service
        serviceOpenDropdownText: "Seleziona servizio",
        //Pallet
        palletOpenDialogButtonText: "Aggiungi Pallet",
        palletOpenDropdownTypeText: "Tipo Pallet"
}

export let language = jsonMessagesItalian;

const languageMap = new Map([ ['italian', jsonMessagesItalian] ]);

export function getLanguageMessages(selectedLanguage){
    language = languageMap.get(selectedLanguage);
}