import { removeArrayElementByIndex } from "../../utility/array-util.js";

export const userData = {
    email: "",

    company: "",
    address: "",
    province: "",
    city: "",
    postalCode: "",
    phone: "",
    
    //Order
    packageQuantity: "",
    deliveryDocument: null,
    serviceType: 1,
    orderNotes: "",
    
    palletList: [],
    orderVolume: 0.00,
    orderWeight: 0.00,
}

export function addPalletToUserData(pallet){
    userData.palletList.push(pallet);
}

export function removePalletFromUserData(index){
    removeArrayElementByIndex(userData.palletList, index);
}