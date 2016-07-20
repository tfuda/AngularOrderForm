import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Order} from './order';
@Component({
    selector: 'delivery-method',
    templateUrl: './delivery-method.component.html'
})
export class DeliveryMethodComponent {
    @Input() order: Order;
    @Output() deliveryMethodChanged: EventEmitter<any> = new EventEmitter();

    constructor() {}

    onClick(evt: any) {
        console.log('onClick: ' + evt.target.value);
        this.deliveryMethodChanged.emit(evt.target.value);
    }
}