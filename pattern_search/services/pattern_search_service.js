import {List, ListWrapper, Map, MapWrapper} from 'angular2/src/facade/collection';

export class Pattern {
  id: string;
  name: string;
  url: string;
  attributes: List<string>;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.url = obj.url;
    this.attributes = ListWrapper.clone(obj.attributes);
  }

  toObj() {
    return {
      id: this.id,
      name: this.name,
      url: this.url,
      attributes: ListWrapper.clone(this.attributes)
    };
  }

  clone(): Pattern {
    return new Pattern(this.toObj());
  }
}

export class PatternSearchService {
  _patternMap: Map<string, Pattern>;
  currentPatternList: List<Pattern>;
  currentPattern: Pattern;
  _query: string;

  constructor() {
    this._query = '';
    this._patternMap = new Map();
    this.currentPatternList = new List();
    this.currentPattern = null;

    patterns.items.forEach((item) => {
      var p = new Pattern(item);
      this._patternMap.set(p.id, p);
    });
  }

  performSearch(query: string) {
    this._query = query;
    ListWrapper.clear(this.currentPatternList);
    var patternList = [];
    this._patternMap.forEach(function(p) {
      patternList.push(p);
    });

    patternList.forEach((p) => {
      this.currentPatternList.push(p);
    });
  }

  save(pattern: Pattern) {
    this._patternMap[pattern.id] = pattern;
    this.performSearch(this._query);
  }
}

var patterns =
  {items: [
      {id:'1',name:'blah_1',url:'blah_url_1',attributes:['tag1','tag2']},
      {id:'2',name:'blah_2',url:'blah_url_2',attributes:['tag3','tag4']},
      {id:'3',name:'jbisa',url:'jbisa_url',attributes:['tag5']}
    ]
  }
