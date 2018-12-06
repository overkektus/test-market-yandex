import React from "react";

class PageSearch extends React.Component {
  render() {
    return (
      <div className="n-page-search i-bem layout layout_type_maya">
        <div className="alerts">
          <div className="alert">
            <div
              className="n-search-preciser i-bem n-search-preciser_js_inited"
              data-bem="{n-search-preciser: }"
            >
              <div className="n-search-preciser__text">
                <span className="n-search-preciser__results-count">
                  Найдено 9436 результатов
                </span>{" "}
                в категории «Мониторы». Если в этой категории нет нужного
                товара, посмотрите
                <a
                  className="link"
                  href="https://market.yandex.by/search?text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&cvredirect=0&track=redirbarup"
                >
                   все результаты поиска
                </a>
                .
              </div>
              <div className="n-search-preciser__separator" />
            </div>
          </div>
        </div>
        <div className="headline i-bem headline_js_inited">
          <div
            itemScope
            itemType="https://schema.org/BreadcrumbList"
            itemRef="n-breadcrumbs"
          />
          <ul
            className="n-breadcrumbs i-bem n-breadcrumbs_js_inited"
            id="n-breadcrumbs"
            data-bem="{n-breadcrumbs:{count-categories:1,currentCategory:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,lastCrumb:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B}}"
          >
            <li className="n-breadcrumbs__item">
              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta
                  itemProp="name"
                  content="\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430"
                />
                <meta
                  itemProp="url"
                  content="https://market.yandex.ru/catalog/54425?hid=91009"
                />
              </div>
              <a
                className="link i-bem link_js_inited"
                title="\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430"
                href="https://market.yandex.by/catalog/54425?hid=91009&track=pieces"
              >
                Компьютерная техника
              </a>
            </li>
            <li className="n-breadcrumbs__item">
              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta
                  itemProp="name"
                  content="\u041F\u0435\u0440\u0438\u0444\u0435\u0440\u0438\u0439\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430"
                />
                <meta
                  itemProp="url"
                  content="https://market.yandex.ru/catalog/58486?hid=10604398"
                />
              </div>
              <a
                className="link i-bem link_js_inited"
                title="\u041F\u0435\u0440\u0438\u0444\u0435\u0440\u0438\u0439\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430"
                href="https://market.yandex.by/catalog/58486?hid=10604398&track=pieces"
              >
                Периферийные устройства компьютера
              </a>
            </li>
            <li className="n-breadcrumbs__item">
              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta
                  itemProp="name"
                  content="\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B"
                />
                <meta
                  itemProp="url"
                  content="https://market.yandex.ru/catalog/54539/list?hid=91052"
                />
              </div>
              <a
                className="link"
                title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B"
                href="https://market.yandex.by/catalog/54539/list?hid=91052&track=pieces"
              >
                Мониторы
              </a>
            </li>
          </ul>
          <div className="headline__header headline__header_regional">
            <h1
              className="title title_size_32 i-bem title_changeable_yes title_js_inited"
              data-bem="{title:{max-length:55}}"
              title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B"
            >
              Мониторы
            </h1>
            <span className="title title_size_32"> в Минске</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PageSearch;
