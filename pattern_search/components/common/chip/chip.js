import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'chip',
  bind: {
    'item': 'item',
    'delete-handler': 'deleteHandler',
    'label-provider': 'labelProvider'
  }
})
@Template({
  url: `pattern_search/components/common/chip/chip.html`,
})
export class Chip {
  _deleteHandler: Function;
  labelProvider: Function;
  _item;

  constructor() {
    this.labelProvider = (item) => item;
  }

  set deleteHandler(handler: Function) { this._deleteHandler = handler; }
  get deleteHandler(): Function { this._deleteHandler; }

  set item(t) { this._item = t; }
  get item() { return this._item; }

  get itemLabel() { return this.labelProvider(this._item); }

  deleteItem() {
    if (this._deleteHandler != null) {this._deleteHandler(this._item);}
  }
}
