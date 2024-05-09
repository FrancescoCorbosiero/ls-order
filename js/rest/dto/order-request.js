import { userData } from "../../components/data/user-data.js"

export function getRegisterOrderRequest(){
   let palletList = mapPalletData();

    return {
        "clienteEmail": userData.email,
        "destinatario": {
            "ragioneSociale": userData.company,
            "indirizzo": userData.address,
            "provincia": userData.province,
            "citta": userData.city,
            "cap": userData.postalCode,
            "telefono": userData.phone,
            "email": userData.email
        },
        "dettaglioColli": {
            palletList
        },
        "codiceDocumentoTrasporto": userData.deliveryDocument,
        "servizioAccessorio": userData.serviceType,
        "note": userData.orderNotes
    }
}

function mapPalletData(){
    let palletList = [];
    
    userData.palletList.forEach(pallet => {
        let mappedPallet = {};

        mappedPallet.altezza = pallet.height;
        mappedPallet.peso = pallet.weight;
        mappedPallet.larghezza = pallet.width;
        mappedPallet.lunghezza = pallet.lenght;
        mappedPallet.quantity = pallet.quantity;
        mappedPallet.type = pallet.typeId;

        palletList.push(mappedPallet);
    });

    return palletList;
}