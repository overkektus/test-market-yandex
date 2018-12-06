import React from "react";
import FilterPanel from "./FilterPanel";
import SearchResultsNormal from "./SearchResultsNormal";
import SearchLayout from "./SearchLayout";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout layout_type_maya">
        <FilterPanel />
        <div className="layout layout_type_search i-bem">
          <SearchResultsNormal />
          <SearchLayout />
        </div>
      </div>
    );
  }
}

export default Layout;
