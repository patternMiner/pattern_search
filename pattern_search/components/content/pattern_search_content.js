import {Component, Template, If} from 'angular2/angular2';
import {ListWrapper} from 'angular2/src/facade/collection';
import {Parent} from 'angular2/src/core/annotations/visibility';
import {PatternSearch, EMPTY_PATTERN} from 'pattern_search/components/pattern_search';
import {Pattern, PatternSearchService} from 'pattern_search/services/pattern_search_service';
import {ListBuilder} from 'pattern_search/components/common/list_builder/list_builder';
import {TypeAheadInstiller} from 'pattern_search/components/common/list_builder/type_ahead_instiller';
import {Menu} from 'pattern_search/components/common/menu/menu';
import {ListProvider} from 'pattern_search/components/common/menu/list_provider';
import {SelectionModel} from 'pattern_search/components/common/menu/selection_model';

@Component({
  selector: 'pattern-search-content',
  bind: {
    'pattern': 'pattern'
  }
})
@Template({
  url: `pattern_search/components/content/pattern_search_content.html`,
  directives: [PatternSearch, ListBuilder, If, TypeAheadInstiller, Menu]
})
export class PatternSearchContent {
  app: PatternSearch;
  _workingCopy: Pattern;
  labelProvider: Function;
  listProvider: ListProvider;

  constructor(@Parent() app: PatternSearch) {
    this.app = app;
    this._workingCopy = this.app.pattern.clone();
    this.labelProvider = (attr) => attr;
    this.listProvider = new ListProvider([], (item) => {
      return item.name;
    });
  }

  set pattern(p: Pattern) {
    this._workingCopy = p.clone();
    var relatedPatterns = this.app.getRelatedPatterns(p);
    this.listProvider = new ListProvider(relatedPatterns, (item) => {
      return item.name;
    });
  }

  get pattern(): Pattern { return this._workingCopy; }

  get hasAttributes() { return this._workingCopy.attributes.length > 0; }

  get isDirty() {return !ListWrapper.equals(this.app.pattern.attributes,
      this._workingCopy.attributes);}

  save() {this.app.save(this._workingCopy);}
  cancel() {this._workingCopy = this.app.pattern.clone();}

  get selectionModel(): SelectionModel { return this.app.selectionModel; }
}

