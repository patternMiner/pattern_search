import {Component, Template, Foreach} from 'angular2/angular2';
import {List, ListWrapper} from 'angular2/src/facade/collection';
import {Parent} from 'angular2/src/core/annotations/visibility';
import {PatternSearch} from 'pattern_search/components/pattern_search';
import {Pattern, PatternSearchService} from 'pattern_search/services/pattern_search_service';
import {Menu} from 'pattern_search/components/common/menu/menu';
import {ListProvider} from 'pattern_search/components/common/menu/list_provider';
import {SelectionModel} from 'pattern_search/components/common/menu/selection_model';

@Component({
  selector: 'pattern-search-nav',
})
@Template({
  url: `pattern_search/components/nav/pattern_search_nav.html`,
  directives: [PatternSearch, Menu]
})
export class PatternSearchNav {
  app: PatternSearch;
  _pattern: Pattern;
  listProvider: ListProvider;

  constructor(@Parent() app: PatternSearch) {
    this.app = app;
    this.listProvider = new ListProvider(this.app.patternList, (item) => {
      return item.name;
    });
  }

  get selectionModel(): SelectionModel { return this.app.selectionModel; }
}
