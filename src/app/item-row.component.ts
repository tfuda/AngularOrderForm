import {Component,Input} from '@angular/core';
import {Item} from './item';

@Component({
    selector: 'tr.item-row',
    templateUrl: './item-row.component.html'
})
export class ItemRowComponent {
    @Input()
    item: Item;
}