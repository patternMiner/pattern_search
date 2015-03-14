import {Component, Template, Foreach} from 'angular2/angular2';
import {List, ListWrapper} from 'angular2/src/facade/collection';
import {Chip} from 'pattern_search/components/common/chip/chip';

@Component({
  selector: 'list-builder',
  bind: {
    'item-list': 'itemList'
  }
})
@Template({
  url: `pattern_search/components/common/list_builder/list_builder.html`,
  directives: [Chip, Foreach]
})
export class ListBuilder {
  _itemList: List;

  set itemList(list: List) {this._itemList = list;}
  get itemList(): List {return this._itemList;}
}
