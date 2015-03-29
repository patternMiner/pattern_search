import {Component, Template, For} from 'angular2/angular2';
import {List, ListWrapper} from 'angular2/src/facade/collection';
import {Chip} from 'pattern_search/components/common/list_builder/chip';

@Component({
  selector: 'list-builder',
  bind: {
    'item-list': 'itemList',
    'label-provider': 'labelProvider',
    'item-added-listener': 'itemAddedListener',
    'item-deleted-listener': 'itemDeletedListener'
  }
})
@Template({
  url: `pattern_search/components/common/list_builder/list_builder.html`,
  directives: [Chip, For]
})
export class ListBuilder {
  _itemList: List;
  labelProvider;
  itemAddedListener;
  itemDeletedListener;

  constructor() {
    this.labelProvider = (item) => item;
  }

  set itemList(list: List) {this._itemList = list;}
  get itemList(): List {return this._itemList;}

  addItem(item) {
    ListWrapper.push(this._itemList, item);
    if (this.itemAddedListener != null) {
      this.itemAddedListener(item);
    }
  }

  deleteItem(item) {
    ListWrapper.remove(this._itemList, item);
    if (this.itemDeletedListener != null) {
      this.itemDeletedListener(item);
    }
  }
}
