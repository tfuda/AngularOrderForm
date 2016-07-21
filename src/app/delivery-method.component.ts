import {Component,Input} from '@angular/core';
import {Order} from './order';
import {OrderService} from './order.service';
@Component({
    selector: 'delivery-method',
    templateUrl: './delivery-method.component.html'
})
export class DeliveryMethodComponent {
    @Input() order: Order;
    @Input() orderService: OrderService;
    constructor() {}
    onDeliveryMethodChange(evt: any) {
        evt.preventDefault();
        this.orderService.onDeliveryMethodChange(evt.target.value);
    }
}