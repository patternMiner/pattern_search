import {Component, Template, Foreach} from 'angular2/angular2';
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
  directives: [Chip, Foreach]
})
export class ListBuilder {
  _itemList: List;
  labelProvider: Function;
  itemAddedListener: Function;
  itemDeletedListener: Function;

  constructor() {
    this.labelProvider = (item) => item;
  }

  set itemList(list: List) {this._itemList = list;}
  get itemList(): List {return this._itemList;}

  addItem(item) {
    ListWrapper.push(this._itemList, item);
    if (itemAddedListener != null) {
      itemAddedListener(item);
    }
  }

  deleteItem(item) {
    ListWrapper.remove(this._itemList, item);
    if (itemDeletedListener != null) {
      itemDeletedListener(item);
    }
  }
}
