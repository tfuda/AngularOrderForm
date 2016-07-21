import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Item} from './item';

@Component({
    selector: 'tr.item-row',
    templateUrl: './item-row.component.html'
})
export class ItemRowComponent {
    @Input() item: Item;
    @Input() itemIndex: number;
    @Output() deleteItem: EventEmitter<any> = new EventEmitter();
    constructor() {}
    onDeleteItemClick(evt:any) {
        evt.preventDefault();
        console.log('In ItemRowComponent.onDeleteItemClick, item index: ' + evt.currentTarget.dataset['itemIndex']);
        this.deleteItem.emit(Number(evt.currentTarget.dataset['itemIndex']));
    }
}