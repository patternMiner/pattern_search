import {Component, Template} from 'angular2/angular2';
import {List, ListWrapper} from 'angular2/src/facade/collection';
import {Pattern, PatternSearchService} from 'pattern_search/services/pattern_search_service';
import {PatternSearchHeader} from 'pattern_search/components/header/pattern_search_header';
import {PatternSearchNav} from 'pattern_search/components/nav/pattern_search_nav';
import {PatternSearchContent} from 'pattern_search/components/content/pattern_search_content';
import {SelectionModel} from 'pattern_search/components/common/menu/selection_model';

@Component({
  selector: 'pattern-search',
  services: [PatternSearchService]
})
@Template({
  url: `pattern_search/components/pattern_search.html`,
  directives: [PatternSearchHeader, PatternSearchNav, PatternSearchContent]
})
export class PatternSearch {
  patternSearchService: PatternSearchService;
  patternList: List<Pattern>;
  _pattern: Pattern;
  selectionModel: SelectionModel;

  constructor(service: PatternSearchService) {
    this.patternSearchService = service;
    this.patternList = service.search('');
    this._pattern = service.find('0');
    this.selectionModel = new SelectionModel([], (selections) => {
      this._pattern = ListWrapper.first(selections);
    }, false);
  }

  set pattern(p: Pattern) {
    this._pattern = p;
    if (!ListWrapper.contains(this.patternList, p)) {
      ListWrapper.push(this.patternList, p);
    }
  }

  get pattern(): Pattern {return this._pattern;}

  search(query: string) {
    ListWrapper.clear(this.patternList);
    this.patternSearchService.search(query).forEach((p) => {
      this.patternList.push(p);
    });
  }

  save(pattern: Pattern) {
    this.patternSearchService.save(pattern);
    this.patternList.map((p) => {
      if (p.id == pattern.id) {
        p.attributes = pattern.attributes;
      }
    });
    this.currentPattern = pattern;
  }

  getRelatedPatterns(p: Pattern) {
    var relatedPatterns = [];
    p.relatedPatterns.forEach((id) => {
      var related = this.patternSearchService.find(id);
      if (related != null) {
        relatedPatterns.push(related);
      }
    });
    return relatedPatterns;
  }
}
