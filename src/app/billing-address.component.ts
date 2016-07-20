import {Component,Input} from '@angular/core';
import {Order} from './order';
import {SelectOption} from './select-option';
import {STATE_OPTIONS} from './state-options';
@Component({
    selector: 'billing-address',
    templateUrl: './billing-address.component.html'
})
export class BillingAddressComponent {
    @Input() order: Order;
    stateOptions: Array<SelectOption> = STATE_OPTIONS;
    constructor() { }
}
