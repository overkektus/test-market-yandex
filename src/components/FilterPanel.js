import React from "react";

class FilterPanel extends React.Component {
  render() {
    return (
      <div
        className="n-filter-panel-dropdown i-bem n-filter-panel-dropdown_js_inited"
        data-bem="{n-filter-panel-dropdown:{additionalQueryParams:{hid:91052},gateUrl:/api/search}}"
      >
        <div className="n-filter-panel-dropdown__placeholder" />
        <div className="n-filter-panel-dropdown__main">
          <div className="n-filter-panel-dropdown__item n-filter-panel-dropdown__item_size_triple n-filter-panel-dropdown__item_left_100">
            <div className="n-filter-block_pos_left i-bem">
              <div className="n-filter-sorter__label">Сортировать: </div>
              <div
                className="n-filter-sorter i-bem n-filter-sorter_state_select n-filter-sorter_js_inited"
                data-bem="{n-filter-sorter:{options:,place:,showOnboarding:,isActive:true}}"
              >
                <a
                  href="/"
                  className="link link_theme_major n-filter-sorter__link i-bem link_js_inited"
                >
                  по популярности
                </a>
              </div>
              <div
                className="n-filter-sorter i-bem n-filter-sorter_js_inited"
                data-bem="{n-filter-sorter:{options:[{id:aprice,type:asc},{id:dprice,type:desc}],place:,showOnboarding:}}"
              >
                <a
                  href="/"
                  className="link link_theme_major n-filter-sorter__link i-bem link_js_inited"
                >
                  по цене
                </a>
              </div>
              <div
                className="n-filter-sorter i-bem n-filter-sorter_js_inited"
                data-bem="{n-filter-sorter:{options:{id:quality},place:,showOnboarding:}}"
              >
                <a
                  href="/"
                  className="link link_theme_major n-filter-sorter__link i-bem link_js_inited"
                >
                  по рейтингу
                </a>
              </div>
              <div
                className="n-filter-sorter i-bem n-filter-sorter_js_inited"
                data-bem="{n-filter-sorter:{options:{id:opinions},place:,showOnboarding:}}"
              >
                <a
                  href="/"
                  className="link link_theme_major n-filter-sorter__link i-bem link_js_inited"
                >
                  по отзывам
                </a>
              </div>
              <div
                className="n-filter-sorter i-bem n-filter-sorter_js_inited"
                data-bem="{n-filter-sorter:{options:{id:discount_p},place:,showOnboarding:}}"
              >
                <a
                  href="/"
                  className="link link_theme_major n-filter-sorter__link i-bem link_js_inited"
                >
                  по размеру скидки
                </a>
              </div>
              <div
                className="n-filter-sorter i-bem n-filter-sorter_js_inited"
                data-bem="{n-filter-sorter:{options:{id:ddate},place:,showOnboarding:}}"
              >
                <a
                  href="/"
                  className="link link_theme_major n-filter-sorter__link i-bem link_js_inited"
                >
                  по новизне
                </a>
              </div>
            </div>
            <div className="n-filter-block n-filter-block_pos_left">
              <div
                className="n-filter-block i-bem n-filter-block_js_inited"
                data-bem="{n-filter-block:{activatedCount:1,filterId:local-offers-first}}"
              >
                <span
                  className="checkbox checkbox_theme_normal checkbox_size_s i-bem checkbox_js_inited"
                  data-filter="glf,local-offers-first,select"
                  data-bem="{checkbox:}"
                >
                  <span className="checkbox__box">
                    <input
                      className="checkbox__control"
                      id="local-offers-first"
                      type="checkbox"
                    />
                    <i className="checkbox__tick" />
                  </span>
                  <label
                    className="checkbox__label"
                    htmlFor="local-offers-first"
                  >
                    Сначала предложения в моём регионе
                  </label>
                </span>
              </div>
            </div>
          </div>
          <div className="n-filter-panel-dropdown__item n-filter-panel-dropdown__item_right_100">
            <div
              className="view-switcher i-bem view-switcher_js_inited"
              data-bem="{view-switcher:{place:search}}"
            >
              <span
                className="radio-button radio-button_size_s i-bem radio-button_js_inited"
                data-bem="{radio-button: }"
              >
                <label className="radio-button__radio radio-button__radio_side_right radio-button__radio_checked_yes">
                  <input
                    className="radio-button__control"
                    defaultValue="list"
                    type="radio"
                    name="viewtype"
                  />
                  <span className="radio-button__text view-switcher__item view-switcher__item_type_list" />
                </label>
                <label className="radio-button__radio radio-button__radio_side_left">
                  <input
                    className="radio-button__control"
                    defaultValue="grid"
                    type="radio"
                    name="viewtype"
                    defaultChecked="checked"
                  />
                  <span className="radio-button__text view-switcher__item view-switcher__item_type_grid" />
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterPanel;
