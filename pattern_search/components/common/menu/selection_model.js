import {List, ListWrapper} from 'angular2/src/facade/collection';

export class SelectionModel {
  selectionList:List;
  selectionListener: Function;
  isMultiSelect;

  constructor(initialSelectionList:List,
              selectionListener: Function,
              isMultiSelect) {
    this.isMultiSelect = isMultiSelect;
    this.selectionList = ListWrapper.clone(initialSelectionList);
    this.selectionListener = selectionListener;
  }

  isSelected(item) { return ListWrapper.contains(this.selectionList, item); }

  select(items: List) {
    if(!this.isMultiSelect) {
      ListWrapper.clear(this.selectionList);
    }
    items.forEach((item) => {
      if (!this.isSelected(item)) {
        this.selectionList.push(item);
      }
    });
    if (this.selectionListener != null) {
      this.selectionListener(items);
    }
  }
}

