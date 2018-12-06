import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div
        className="footer-market i-bem footer-market_js_inited"
        data-bem="{footer-market:{domainZone:by,route:market:list}}"
      >
        {/* <noindex> */}
        <div
          className="footer-subscription-wrap i-bem footer-subscription-wrap_js_inited"
          data-bem="{footer-subscription-wrap:{type:ADVERTISING}}"
        >
          <div className="footer-market__content footer-market__content_type_subscription">
            <div className="footer-subscription-wrap__content footer-subscription" />
          </div>
        </div>
        <div className="footer-market__common footer-history">
          <div className="footer-market__content footer-history__content">
            <div
              className="history-latest i-bem history-latest_js_inited"
              data-bem="{history-latest: }"
            >
              <div
                className="history-latest__carousel flex-grid flex-grid_lazy_yes flex-grid_row_1 i-bem flex-grid_js_inited"
                data-bem="{flex-grid:{container:flex-grid__container,list:snippet-list,item:snippet-list__item,min-size:220, max:4, resizable:false, previous:pager-arrows__item_type_prev,next:pager-arrows__item_type_next,speed:500}}"
              >
                <div className="title title_size_22">Вы смотрели</div>
                <div className="pager-arrows">
                  <span className="pager-arrows__item pager-arrows__item_type_prev i-bem pager-arrows__item_type_prev_js_inited">
                    <img className="image" src="./old/La6qi18Z8LwgnZdsAr1qy1GwCwo(1).gif" alt="<" />
                  </span>
                  <span className="pager-arrows__item pager-arrows__item_type_next i-bem pager-arrows__item_type_next_js_inited">
                    <img className="image" src="./old/La6qi18Z8LwgnZdsAr1qy1GwCwo(1).gif" alt=">" />
                  </span>
                </div>
                <div className="flex-grid__container snippet-list__container history-latest__list history-latest__list_state_loading i-bem history-latest__list_js_inited">
                  <div className="history-latest__spinner-area i-bem history-latest__spinner-area_js_inited">
                    <div className="spin2 spin2_progress_yes spin2_hidden_yes spin2_size_xs i-bem spin2_js_inited" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-market__info b-zone i-bem" data-bem="{b-zone:{name:footer}}">
          <div
            className="footer-market__content b-spy-visible i-bem b-spy-visible_js_inited"
            data-bem="{b-spy-visible:{mode:topLeft}}"
          >
            <div className="footer-market__column footer-market__column_half footer-market__column_order_first">
              <div className="footer-market__spacing-wrap">
                <div className="footer-market__column-content footer-market__column_half">
                  <h5 className="footer-market__header">Покупателям</h5>
                  <a
                    className="footer-market__list-item link"
                    href="https://yandex.ru/support/market/choice-goods/product-search.html"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Как выбрать товар
                  </a>
                  <a
                    className="footer-market__list-item link"
                    href="https://yandex.ru/support/market/troubleshooting/general.xml"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Обратная связь
                  </a>
                  <a
                    className="footer-market__list-item link"
                    href="https://yandex.ru/support/market/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Помощь по сервису
                  </a>
                  <a
                    className="footer-market__list-item link"
                    href="https://yandex.ru/jobs/usability"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Участие в исследованиях
                  </a>
                </div>
                <div className="footer-market__column-content footer-market__column_half">
                  <h5 className="footer-market__header">Продавцам</h5>
                  <a
                    className="footer-market__list-item link"
                    href="https://partner.market.yandex.ru/"
                  >
                    Войти в личный кабинет
                  </a>
                  <a
                    className="footer-market__list-item link"
                    href="https://yandex.by/adv/products/classified/market/?from=adv"
                  >
                    Подключение к Маркету
                  </a>
                  <a
                    className="footer-market__list-item link"
                    href="https://yandex.ru/support/partnermarket/"
                  >
                    Помощь для магазинов
                  </a>
                  <a
                    className="footer-market__list-item link"
                    href="https://market.yandex.ru/partners"
                  >
                    Сайт для партнёров
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-market__column footer-market__column_half footer-market__column_order_last">
              <div className="footer-market__spacing-wrap">
                <div className="footer-market__column-content">
                  <div className="footer-market__inner-container">
                    <h5 className="footer-market__header">Мобильные приложения Яндекс.Маркет</h5>
                    <div className="footer-market__promo-buttons">
                      <a
                        className="link i-bem link_js_inited"
                        href="https://mobile.yandex.ru/apps/iphone/market?from=market_footer#main"
                      >
                        <img
                          alt="\u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442 \u0432 App Store"
                          className="footer-market__promo-image"
                          src="./old/lnh1zFYvjLY6X0bNFV4l9hKkmpA.png"
                          srcSet="//yastatic.net/market-export/_/i/desktop/app-ios2x.png 2x"
                        />
                      </a>
                       
                      <a
                        className="link footer-market__promo-image i-bem link_js_inited"
                        href="https://mobile.yandex.ru/apps/android/market?from=market_footer#main"
                      >
                        <img
                          alt="\u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442 \u0432 Google Play"
                          className="footer-market__promo-image"
                          src="./old/Q2yeopwYEbCbW75uIitMdlk1p4o.png"
                          srcSet="//yastatic.net/market-export/_/i/desktop/app-android2x.png 2x"
                        />
                      </a>
                    </div>
                  </div>
                  <a
                    className="footer-market__promo-block footer-market__inner-container"
                    href="https://sovetnik.yandex.ru/?clid=2312596&utm_source=market&utm_medium=main&utm_campaign=footer"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <div className="footer-market__promo-img" />
                    <p className="footer-market__promo-text footer-market__header">
                      Советник находит нужные вам товары
                      <br />
                      по более выгодной цене.{' '}
                      <span className="link" target="_blank" rel="nofollow noopener noreferrer">
                        Подробнее
                      </span>
                    </p>
                  </a>
                  <div className="footer-market__inner-container">
                    <div className="footer-market__stat">
                      <div className="footer-market__stat-line">
                        177 051 988 предложений от 22 700 магазинов.
                        <br />
                        Обновлено 29.11.2018 в 18:03 по московскому времени.
                      </div>
                    </div>
                  </div>
                  <div className="footer-market__inner-container">
                    <a
                      className="footer-market__social-media footer-market__social-media_resource_facebook link"
                      href="https://www.facebook.com/yandex.market/"
                      title="Facebook"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {' '}
                    </a>
                    <a
                      className="footer-market__social-media footer-market__social-media_resource_vk link"
                      href="https://vk.com/yandex.market"
                      title="\u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {' '}
                    </a>
                    <a
                      className="footer-market__social-media footer-market__social-media_resource_instagram link"
                      href="https://www.instagram.com/yandex.market/"
                      title="Instagram"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-market__common footer-market__copyright">
          <div className="footer-market__column footer-market__column_center">
            <a
              className="link footer-market__link footer-market__mobile-link n-smart-link i-bem n-smart-link_js_inited"
              data-bem="{n-smart-link:{subscriptions:[filters]}}"
              href="https://m.market.yandex.by/catalog--monitory/54539/list?hid=91052&suggest_text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&suggest=1&suggest_type=category&suggest_reqid=17348172652166876175617858110875&track=ftr_desktop_to_touch"
            >
              Мобильная версия
            </a>
            <a
              className="link footer-market__link"
              href="https://stat.yandex.ru/stats.xml?ReportID=-225&ProjectID=47"
            >
              Статистика
            </a>
            <a
              className="link footer-market__link"
              href="https://legal.yandex.by/market_termsofuse/"
            >
              Пользовательское соглашение
            </a>
          </div>
          <div className="copyright">
            © 2018  ООО «
            <a className="link copyright__link" href="https://market.yandex.by/">
              Яндекс.Маркет
            </a>
            »
          </div>
        </div>
        {/* </noindex> */}
      </div>
    )
  }
}

export default Footer
