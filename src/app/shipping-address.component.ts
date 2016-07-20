import {Component,Input} from '@angular/core';
import {Order} from './order';
import {SelectOption} from './select-option';
import {STATE_OPTIONS} from './state-options';
@Component({
    selector: 'shipping-address',
    templateUrl: './shipping-address.component.html'
})
export class ShippingAddressComponent {
    @Input() order: Order;
    stateOptions: Array<SelectOption> = STATE_OPTIONS;
    constructor() { }
}
