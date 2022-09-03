document.addEventListener('DOMContentLoaded', () => {
  let grid        = null;
  let wrapper     = document.querySelector('.grid-wrapper');
  let searchField = wrapper.querySelector('.search-field');
  let filterField = wrapper.querySelector('.filter-field');
  let gridElem    = wrapper.querySelector('.grid');
  let searchAttr  = 'data-title';
  let filterAttr  = 'data-color';
  let searchFieldValue;
  let filterFieldValue;

  // Init the grid layout
  grid = new Muuri(gridElem, {
    dragEnabled: false
  });

  grid._settings.layout = {
    horizontal:  false,
    alignRight:  false,
    alignBottom: false,
    fillGaps:    false
  };
  grid.layout();

  // Set inital search query, active filter, active sort value and active layout.
  searchFieldValue = searchField.value.toLowerCase();
  filterFieldValue = filterField.value;

  // Search field event binding
  searchField.addEventListener('keyup', () => {
    let newSearch = searchField.value.toLowerCase();
    if (searchFieldValue !== newSearch) {
      searchFieldValue = newSearch;
      filter();
    }
  });

  // Filtering
  const filter = () => {
    filterFieldValue = filterField.value;
    grid.filter( (item) => {
      let element = item.getElement(),
          isSearchMatch = !searchFieldValue ? true : (element.getAttribute(searchAttr) || '').toLowerCase().indexOf(searchFieldValue) > -1,
          isFilterMatch = !filterFieldValue ? true : (element.getAttribute(filterAttr) || '') === filterFieldValue;
      return isSearchMatch && isFilterMatch;
    });
  }

  // Filter field event binding
  filterField.addEventListener('change', filter);
});
