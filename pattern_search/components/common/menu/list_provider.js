import {List, ListWrapper} from 'angular2/src/facade/collection';

export class ListProvider {
  items: List;
  labelProvider: Function;

  constructor(items: List, labelProvider: Function) {
    this.items = items;
    this.labelProvider = labelProvider;
  }

  label(item) :string { return this.labelProvider(item);}
}
