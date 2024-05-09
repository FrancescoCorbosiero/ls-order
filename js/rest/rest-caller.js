import { initServiceDropDownData } from "../components/data/component-data.js";
import { CUSTOMER_STATE_URL, ENUM_SERVICE_URL, GET, POST, REGISTER_CUSTOMER_URL, REGISTER_ORDER_URL } from "../constant/rest-constant.js";
import { getCustomerStatusRequest, getRegisterCustomerRequest } from "./dto/customer-request.js";
import { getRegisterOrderRequest } from "./dto/order-request.js";

export async function getCustomerStatus(){
    let request = getCustomerStatusRequest();

    let response = await doPostRestCall(CUSTOMER_STATE_URL, request);

    let responseJson = await response.json();
    let status = responseJson.status;

    return status;
}

export async function sendCustomer(){
    let request = getRegisterCustomerRequest();

    let response = await doPostRestCall(REGISTER_CUSTOMER_URL, request);

    return response;
}

export async function sendOrder(){
    let request = getRegisterOrderRequest();

    let response = await doPostRestCall(REGISTER_ORDER_URL, request);

    return response;
}

export async function getOrderDropdownData(){
    let request = {};

    let response = await doGetRestCall(ENUM_SERVICE_URL, request);

    let responseJson = await response.json();
    initServiceDropDownData(responseJson);

    return response;
}

async function doPostRestCall(url, request){
    let response = await fetch(url, {
        method: POST,
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });

    let restCallFailed = response.ok == false;

    if(restCallFailed){
        throw new Error("Rest call failed");
    }

    return response;
}

async function doGetRestCall(url){
    let response = await fetch(url, {
        method: GET
    });

    let restCallFailed = response.ok == false;

    if(restCallFailed){
        throw new Error("Rest call failed");
    }

    return response;
}