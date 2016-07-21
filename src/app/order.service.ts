import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Order} from './order';
import {Item} from './item';

const initialItems:Item[] = [
    {
        name: 'ITEM-000001',
        description: 'The Tom Show, July 27, 2016',
        quantity: 1,
        unitPrice: 40.00,
        unitFee: 4.00,
        subtotal: 44.00,
        discount: 0.00,
        total: 44.00
    },
    {
        name: 'ITEM-000002',
        description: 'The Tom Show, July 27, 2016',
        quantity: 1,
        unitPrice: 40.00,
        unitFee: 4.00,
        subtotal: 44.00,
        discount: 0.00,
        total: 44.00
    }
]

@Injectable()
export class OrderService {
    private _order:Subject<Order>;
    private dataStore:{
        order:Order
    };

    constructor() {
        this.dataStore = {order: new Order()};
        this._order = <Subject<Order>> new Subject();
    }

    get order() {
        return this._order.asObservable();
    }

    loadInitialData() {
        this.dataStore.order = Object.assign({}, this.dataStore.order, {
            itemList: initialItems,
            firstName: 'Tom',
            lastName: 'Fuda',
            email: 'tom@9summer.com',
            phone: '',
            billingStreet: '',
            billingCity: '',
            billingState: '',
            billingPostalCode: '',
            paymentMethod: 'Credit Card',
            deliveryMethod: 'Email',
            shippingStreet: '',
            shippingCity: '',
            shippingState: '',
            shippingPostalCode: '',
            itemTotal: 88.00,
            donationAmount: 0.00,
            orderFee: 2.00,
            deliveryFee: 0.00,
            orderTotal: 90.00,
            orderStatus: 'Draft'
        });
        this._order.next(this.dataStore.order);
    }

    onDeleteAllItems() {
        /*
        this.itemList = new Array<Item>();
        this.itemTotal = this.calculateItemTotal(this.itemList);
        this.orderTotal = this.calculateOrderTotal(this.itemTotal, this.orderFee, this.deliveryFee, this.donationAmount);
        */
    }

    /*
    onDeleteItem(itemIndex:number) {
        this.itemList.splice(itemIndex, 1)
        this.itemTotal = this.calculateItemTotal(this.itemList);
        this.orderTotal = this.calculateOrderTotal(this.itemTotal, this.orderFee, this.deliveryFee, this.donationAmount);
    }
    */
    
    onDonationChange(donationAmount: number) {
        console.log('Before: ' + JSON.stringify(this.dataStore.order));
        let changes: Object = {
            donationAmount: donationAmount,
            orderTotal: this.calculateOrderTotal(
                this.dataStore.order.itemTotal, this.dataStore.order.orderFee,
                this.dataStore.order.deliveryFee, donationAmount
            )
        }
        this.dataStore.order = Object.assign({}, this.dataStore.order, changes);
        console.log('After: ' + JSON.stringify(this.dataStore.order));
        this._order.next(this.dataStore.order);
    }
    
    onDeliveryMethodChange(deliveryMethod:string) {
        console.log('Before: ' + JSON.stringify(this.dataStore.order));
        let deliveryFee: number = (deliveryMethod === 'Ship') ? 3.00 : 0.00;
        let changes: Object = {
            deliveryMethod: deliveryMethod,
            deliveryFee: deliveryFee,
            orderTotal: this.calculateOrderTotal(
                this.dataStore.order.itemTotal, this.dataStore.order.orderFee,
                deliveryFee, this.dataStore.order.donationAmount
            )
        }
        this.dataStore.order = Object.assign({}, this.dataStore.order, changes);
        console.log('After: ' + JSON.stringify(this.dataStore.order));
        this._order.next(this.dataStore.order);
    }

    onCopyBillingToShipping() {
        console.log('Before: ' + JSON.stringify(this.dataStore.order));
        let changes: Object = {
            shippingStreet: this.dataStore.order.billingStreet,
            shippingCity: this.dataStore.order.billingCity,
            shippingState: this.dataStore.order.billingState,
            shippingPostalCode: this.dataStore.order.billingPostalCode,
        }
        this.dataStore.order = Object.assign({}, this.dataStore.order, changes);
        console.log('After: ' + JSON.stringify(this.dataStore.order));
        this._order.next(this.dataStore.order);
    }

    calculateItemTotal(itemList:Item[]) {
        let itemTotal = 0;
        itemList.forEach(function (item) {
            itemTotal += item.total
        });
        return itemTotal;
    }
    
    calculateOrderTotal(itemTotal:number = 0, orderFee:number = 0, deliveryFee:number = 0, donationAmount:number = 0) {
        return itemTotal + orderFee + deliveryFee + donationAmount;
    }
}