import {Component, Template, For, If} from 'angular2/angular2';
import {ListProvider} from 'pattern_search/components/common/menu/list_provider';
import {SelectionModel} from 'pattern_search/components/common/menu/selection_model';

@Component({
  selector: 'ps-menu',
  bind: {
    'list-provider': 'listProvider',
    'selection-model': 'selectionModel'
  }
})
@Template({
  url: `pattern_search/components/common/menu/menu.html`,
  directives: [For, If]
})
export class Menu {
  listProvider: ListProvider;
  selectionModel: SelectionModel;
}
