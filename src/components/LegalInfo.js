import React from "react";

class LegalInfo extends React.Component {
  render() {
    return (
      <div className="n-legal-info">
        <div
          className="n-shops-info i-bem n-shops-info_js_inited"
          data-bem="{n-shops-info:{shopIds:}}"
        >
          <div className="n-shops-info__block">
            <div className="n-shops-info__info-line">
              Стоимость доставки из других регионов приблизительная. Точную
              стоимость уточняйте у продавца.
            </div>
            <div className="n-shops-info__info-line">
              Товары в разделе «Вместе с этим покупают» подобраны автоматически.
              Совместимость товаров уточняйте у продавца или производителя.
            </div>
          </div>
        </div>
        <div
          className="n-discount-info i-bem n-discount-info_visible_yes n-discount-info_js_inited"
          data-bem="{n-discount-info: }"
        >
          <a
            className="link link_theme_minor"
            href="https://yandex.ru/support/market/discounts.html"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Процент скидки рассчитан автоматически
          </a>
        </div>
      </div>
    );
  }
}

export default LegalInfo;
