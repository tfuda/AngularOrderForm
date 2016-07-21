import {Component,OnInit,Inject} from '@angular/core';
import {Order} from './order';
import {OrderService} from './order.service';
import {ItemTableComponent} from './item-table.component';
import {BillingAddressComponent} from './billing-address.component';
import {DeliveryMethodComponent} from './delivery-method.component';
import {ShippingAddressComponent} from './shipping-address.component';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [
        ItemTableComponent,
        BillingAddressComponent,
        DeliveryMethodComponent,
        ShippingAddressComponent
    ],
    providers: [
        OrderService
    ]
})
export class AppComponent implements OnInit {
    private order: Order;
    constructor(private orderService: OrderService) { }
    ngOnInit() {
        this.orderService.order.subscribe(order => this.order = order);
        this.orderService.loadInitialData();
    }
    onDonationChange(evt:any) {
        this.orderService.onDonationChange(Number(evt.target.value));
    }
    onCopyBillingToShipping(evt:any) {
        evt.preventDefault();
        this.orderService.onCopyBillingToShipping();
    }
}


