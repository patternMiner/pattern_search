import {List, ListWrapper, Map, MapWrapper} from 'angular2/src/facade/collection';
import {StringWrapper} from 'angular2/src/facade/lang';

export class Pattern {
  id: string;
  name: string;
  url: string;
  attributes: List<string>;
  relatedPatterns: List<string>;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.url = obj.url;
    this.attributes = ListWrapper.clone(obj.attributes);
    this.relatedPatterns = ListWrapper.clone(obj.relatedPatterns);
  }

  toObj() {
    return {
      id: this.id,
      name: this.name,
      url: this.url,
      attributes: ListWrapper.clone(this.attributes),
      relatedPatterns: ListWrapper.clone(this.relatedPatterns)
    };
  }

  clone(): Pattern {
    return new Pattern(this.toObj());
  }
}

export class PatternSearchService {
  _patternMap: Map<string, Pattern>;

  constructor() {
    this._patternMap = new Map();

    patterns.items.forEach((item) => {
      var p = new Pattern(item);
      this._patternMap.set(p.id, p);
    });
  }

  search(query: string): List<Pattern> {
    this._query = query;
    var patternList = [];
    this._patternMap.forEach((p) => {
      if (StringWrapper.contains(p.name, query) ||
          ListWrapper.any(p.attributes,
              (a) => StringWrapper.contains(a, query))) {
        patternList.push(p);
      }
    });
    return patternList;
  }

  find(id: string): Pattern {
    var p = this._patternMap.get(id);
    if (p == null) {
      p = EMPTY_PATTERN.clone();
    }
    return p;
  }

  save(pattern: Pattern) {
    this._patternMap[pattern.id] = pattern;
  }
}

const EMPTY_PATTERN = new Pattern({id: '0', name:'', url:'', attributes:[],
    relatedPatterns:[]});

var patterns =
  {items: [
      {
        id:'1',
        name:'PatternSearch_outline',
        url:'images/PatternSearch_outline.png',
        attributes:[],
        relatedPatterns:['2', '3']},
      {
        id:'2',
        name:'PatternSearch',
        url:'images/PatternSearch.png',
        attributes:[],
        relatedPatterns:['1', '3']},
      {
        id:'3',
        name:'ListBuilder',
        url:'images/ListBuilder.png',
        attributes:[],
        relatedPatterns:['1', '2']},
      ]
  }
