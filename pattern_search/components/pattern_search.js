import {Component, Template} from 'angular2/angular2';
import {Pattern, PatternSearchService} from 'pattern_search/services/pattern_search_service';
import {PatternSearchHeader} from 'pattern_search/components/header/pattern_search_header';
import {PatternSearchNav} from 'pattern_search/components/nav/pattern_search_nav';
import {PatternSearchContent} from 'pattern_search/components/content/pattern_search_content';

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

  constructor(service: PatternSearchService) {
    this.patternSearchService = service;
  }

  get currentPattern(): Pattern {return this.patternSearchService.currentPattern;}
}
