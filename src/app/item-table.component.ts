import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Item} from './item';
import {ItemRowComponent} from './item-row.component';
import {OrderService} from './order.service';

@Component({
    selector: 'div.item-table',
    templateUrl: './item-table.component.html',
    directives: [ItemRowComponent]
})
export class ItemTableComponent {
    @Input() itemList: Item[];
    @Input() orderService: OrderService;
    constructor() {}
    onDeleteAllClick(evt: any) {
        evt.preventDefault();
        this.orderService.onDeleteAllItems();
    }
}