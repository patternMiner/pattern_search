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
  item;

  constructor(@Parent() builder: ListBuilder) {
      this.builder = builder;
  }

  get itemLabel() { return this.builder.labelProvider(this.item); }

  deleteItem() { this.builder.deleteItem(this.item); }
}
