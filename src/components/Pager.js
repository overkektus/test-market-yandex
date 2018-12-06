import React from 'react'

class Pager extends React.Component {
  render() {
    return (
      <div
        className="n-pager i-bem n-pager_js_inited"
        data-bem="{n-pager:{itemsPerPage:48,page:1,total:9436,pagesCount:197,forceMaxPage:50,link:{target:market:search,params:{suggest_text:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,suggest:1,suggest_type:category,local-offers-first:0,viewtype:list,hid:91052,cvredirect:0,refererPageId:list},moreTarget:api:search-apply},availableItemsPerPage:{12:12,48:48},noSelect:,url:/api/search?hid=91052,changePageWithoutReload:true,changeLimitSelect:true,cookieIndex:0}}"
      >
        <a
          href="https://market.yandex.by/search?suggest_text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&suggest=1&suggest_type=category&local-offers-first=0&viewtype=list&hid=91052&cvredirect=0&refererPageId=list&page=0"
          className="button button_size_s button_theme_pseudo n-pager__button-prev g-hidden i-bem button_js_inited"
          data-bem="{ button:  }"
        >
          <span className="button__text">Назад</span>
        </a>
        <a
          href="https://market.yandex.by/catalog--monitory/54539/list?hid=91052&suggest_text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&suggest=1&suggest_type=category&local-offers-first=0&viewtype=list"
          className="button button_size_s button_theme_pseudo n-pager__button-number g-hidden i-bem button_js_inited button_side_right button_side_left"
          data-bem="{ button:  }"
        >
          <span className="button__text">-1</span>
        </a>
        <a
          href="https://market.yandex.by/catalog--monitory/54539/list?hid=91052&suggest_text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&suggest=1&suggest_type=category&local-offers-first=0&viewtype=list"
          className="button button_size_s button_theme_pseudo n-pager__button-number g-hidden i-bem button_js_inited button_side_right button_side_left"
          data-bem="{ button:  }"
        >
          <span className="button__text">0</span>
        </a>
        <a
          href="/"
          className="button_action_yes  button button_size_s button_theme_pseudo n-pager__button-number i-bem button_js_inited button_side_left"
        >
          <span className="button__text">1</span>
        </a>
        <a
          href="https://market.yandex.by/catalog--monitory/54539/list?hid=91052&suggest_text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&suggest=1&suggest_type=category&local-offers-first=0&viewtype=list&page=2"
          className="button button_size_s button_theme_pseudo n-pager__button-number i-bem button_js_inited button_side_right button_side_left"
          data-bem="{ button:  }"
        >
          <span className="button__text">2</span>
        </a>
        <a
          href="https://market.yandex.by/catalog--monitory/54539/list?hid=91052&suggest_text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&suggest=1&suggest_type=category&local-offers-first=0&viewtype=list&page=3"
          className="button button_size_s button_theme_pseudo n-pager__button-number i-bem button_js_inited button_side_right button_side_left"
          data-bem="{ button:  }"
        >
          <span className="button__text">3</span>
        </a>
        <a
          href="https://market.yandex.by/catalog--monitory/54539/list?hid=91052&suggest_text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&suggest=1&suggest_type=category&local-offers-first=0&viewtype=list&page=2"
          className="button button_size_s button_theme_pseudo n-pager__button-next i-bem button_js_inited"
          data-bem="{ button:  }"
        >
          <span className="button__text">Вперед</span>
        </a>
        <span
          className="select select_size_s select_theme_normal b-pager__select i-bem select_js_inited"
          data-bem="{select:{textAll:\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435}}"
        >
          <button
            className="button button_theme_normal button_arrow_down button_size_s select__button i-bem button_js_inited"
            data-bem="{ button:  }"
            role="listbox"
            type="button"
          >
            <span className="button__text">Показывать по 48</span>
          </button>
          <select
            className="select__control"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            defaultValue={48}
          >
            <option className="select__option" value={12}>
              Показывать по 12
            </option>
            <option className="select__option" value={48}>
              Показывать по 48
            </option>
          </select>
        </span>
      </div>
    )
  }
}

export default Pager
