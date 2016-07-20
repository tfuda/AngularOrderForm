import {Item} from './item';
export class Order {
    constructor(
        public itemList:Item[],
        public firstName:string,
        public lastName:string,
        public email:string,
        public phone:string,
        public billingStreet:string,
        public billingCity:string,
        public billingState:string,
        public billingPostalCode:string,
        public paymentMethod:string,
        public deliveryMethod:string,
        public shippingStreet:string,
        public shippingCity:string,
        public shippingState:string,
        public shippingPostalCode:string,
        public itemTotal:number,
        public donationAmount:number,
        public orderFee:number,
        public deliveryFee:number,
        public orderTotal:number,
        public orderStatus:string
    ) {}

    onDeleteAllItems() {
        this.itemList = new Array<Item>();
        this.itemTotal = this.calculateItemTotal(this.itemList);
        this.orderTotal = this.calculateOrderTotal(this.itemTotal, this.orderFee, this.deliveryFee, this.donationAmount);
    }

    onDeleteItem(itemIndex: number) {
        this.itemList.splice(itemIndex, 1)
        this.itemTotal = this.calculateItemTotal(this.itemList);
        this.orderTotal = this.calculateOrderTotal(this.itemTotal, this.orderFee, this.deliveryFee, this.donationAmount);
    }

    onDeliveryMethodChange(deliveryMethod: string) {
        console.log('onDeliveryMethodChange: ' + deliveryMethod);
        this.deliveryMethod = deliveryMethod;
        this.deliveryFee = (deliveryMethod === 'Ship' ? 3.00 : 0.00);
        this.orderTotal = this.calculateOrderTotal(this.itemTotal, this.orderFee, this.deliveryFee, this.donationAmount);
    }

    onCopyBillingToShipping() {
        this.shippingStreet = this.billingStreet;
        this.shippingCity = this.billingCity;
        this.shippingState = this.billingState;
        this.shippingPostalCode = this.billingPostalCode;
    }

    calculateItemTotal(itemList: Item[]) {
        let itemTotal = 0;
        itemList.forEach(function (item) {
            itemTotal += item.total
        });
        return itemTotal;
    }

    calculateOrderTotal(itemTotal: number = 0, orderFee: number = 0, deliveryFee: number = 0, donationAmount: number = 0) {
        return itemTotal + orderFee + deliveryFee + donationAmount;
    }
}

