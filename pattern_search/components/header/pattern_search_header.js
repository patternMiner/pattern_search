import {Component, Template} from 'angular2/angular2';
import {Parent} from 'angular2/src/core/annotations/visibility';
import {PatternSearch} from 'pattern_search/components/pattern_search';
import {Pattern, PatternSearchService} from 'pattern_search/services/pattern_search_service';

@Component({
  selector: 'pattern-search-header',
  directives: [PatternSearch]
})
@Template({
  url: `pattern_search/components/header/pattern_search_header.html`
})
export class PatternSearchHeader {
  app: PatternSearch;

  constructor(@Parent() app: PatternSearch) {
    this.app = app;
  }

  keyUp(query, event) {
    if (event.keyCode == 13) {
      this.app.search(query.value);
      query.value = '';
    }
  }
}
