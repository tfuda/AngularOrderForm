import {Item} from './item';
export class Order {
    public itemList:Item[];
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    billingStreet:string;
    billingCity:string;
    billingState:string;
    billingPostalCode:string;
    paymentMethod:string;
    deliveryMethod:string;
    shippingStreet:string;
    shippingCity:string;
    shippingState:string;
    shippingPostalCode:string;
    itemTotal:number;
    donationAmount:number;
    orderFee:number;
    deliveryFee:number;
    orderTotal:number;
    orderStatus:string;
}

