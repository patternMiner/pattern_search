import {Component, Template} from 'angular2/angular2';
import {Parent} from 'angular2/src/core/annotations/visibility';
import {ListBuilder} from 'pattern_search/components/common/list_builder/list_builder';

@Component({
  selector: 'chip',
  bind: {
    'item': 'item'
  }
})
@Template({
  url: `pattern_search/components/common/list_builder/chip.html`
})
export class Chip {
  builder: ListBuilder;
  _item;

  constructor(@Parent() builder: ListBuilder) {
      this.builder = builder;
  }

  set item(t) { this._item = t; }
  get item() { return this._item; }

  get itemLabel() { return this.builder.labelProvider(this._item); }

  deleteItem() { this.builder.deleteItem(this._item); }
}
