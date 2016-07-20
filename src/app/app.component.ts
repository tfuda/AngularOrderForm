import {Component} from '@angular/core';
import {Item} from './item';
import {Order} from './order';
import {ItemTableComponent} from './item-table.component';
import {BillingAddressComponent} from './billing-address.component';
import {DeliveryMethodComponent} from './delivery-method.component';
import {ShippingAddressComponent} from './shipping-address.component';

const initialItems: Item[] = [
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

const initialOrder: Order = new Order(
    initialItems, '', '', '', '', '', '', '', '', 'Credit Card', 'Email', '', '', '', '', 88.00, 0.00, 2.00, 0.00, 90.00, 'Draft'
)

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [
        ItemTableComponent,
        BillingAddressComponent,
        DeliveryMethodComponent,
        ShippingAddressComponent
    ]
})
export class AppComponent {
    order = initialOrder;
    constructor() {}

    onCopyBillingToShippingClick(evt: any) {
        console.log('onCopyBillingToShipping: ' + evt.target.value);
        evt.preventDefault();
        this.order.onCopyBillingToShipping();
    }
}


