import {Component, Template} from 'angular2/angular2';
import {Parent} from 'angular2/src/core/annotations/visibility';
import {ListBuilder} from 'pattern_search/components/common/list_builder/list_builder';

@Component({
  selector: 'type-ahead-instiller',
  directives: [ListBuilder]
})
@Template({
  url: `pattern_search/components/common/list_builder/type_ahead_instiller.html`
})
export class TypeAheadInstiller {
  builder: ListBuilder;

  constructor(@Parent() builder: ListBuilder) {
      this.builder = builder;
  }

  keyUp(input, event) {
    if (event.keyCode == 13) {
      this.builder.addItem(input.value);
      input.value = '';
    }
  }
}
