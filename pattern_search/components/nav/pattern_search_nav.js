import {Component, Template, Foreach} from 'angular2/angular2';
import {Parent} from 'angular2/src/core/annotations/visibility';
import {PatternSearch} from 'pattern_search/components/pattern_search';
import {Pattern, PatternSearchService} from 'pattern_search/services/pattern_search_service';

@Component({
  selector: 'pattern-search-nav',
})
@Template({
  url: `pattern_search/components/nav/pattern_search_nav.html`,
  directives: [PatternSearch, Foreach]
})
export class PatternSearchNav {
  app: PatternSearch;

  constructor(@Parent() app: PatternSearch) {
    this.app = app;
    this.app.patternSearchService.currentPatternList
        .forEach(function(p: Pattern) {
      console.log(p);
    });
  }

  viewPatternDetail(p: Pattern) {
    this.app.patternSearchService.currentPattern = p;
  }
}
