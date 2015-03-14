import {Component, Template, If} from 'angular2/angular2';
import {Parent} from 'angular2/src/core/annotations/visibility';
import {PatternSearch} from 'pattern_search/components/pattern_search';
import {Pattern, PatternSearchService} from 'pattern_search/services/pattern_search_service';
import {ListBuilder} from 'pattern_search/components/common/list_builder/list_builder';
import {TypeAheadInstiller} from 'pattern_search/components/common/list_builder/type_ahead_instiller';

@Component({
  selector: 'pattern-search-content',
  bind: {
    'pattern': 'pattern'
  }
})
@Template({
  url: `pattern_search/components/content/pattern_search_content.html`,
  directives: [PatternSearch, ListBuilder, If, TypeAheadInstiller]
})
export class PatternSearchContent {
  app: PatternSearch;
  _pattern: Pattern;
  _workingCopy: Pattern;
  labelProvider: Function;

  constructor(@Parent() app: PatternSearch) {
    this.app = app;
    this._workingCopy = EMPTY_PATTERN;
    this.labelProvider = (attr) => attr;
  }

  set pattern(p: Pattern) {
    if (p != null) {
      this._pattern = p;
      this._workingCopy = p.clone();
    }
  }

  get pattern(): Pattern { return this._workingCopy; }

  get hasAttributes() { return this._workingCopy.attributes.length > 0; }
}

const EMPTY_PATTERN = new Pattern({id: '0', name:'', url:'', attributes:[]});