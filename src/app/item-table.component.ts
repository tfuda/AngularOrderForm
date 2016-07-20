import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Item} from './item';
import {ItemRowComponent} from './item-row.component';

@Component({
    selector: 'div.item-table',
    templateUrl: './item-table.component.html',
    directives: [ItemRowComponent]
})
export class ItemTableComponent {
    @Input() itemList: Item[];
    @Output() deleteAllItems: EventEmitter<any> = new EventEmitter();
    constructor() {}
    onDeleteAllClick(evt: any) {
        this.deleteAllItems.emit(evt);
    }
}