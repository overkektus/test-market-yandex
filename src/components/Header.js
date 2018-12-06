import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="header2 suggest-owner i-bem header2_type_default" data-bem="{suggest-owner:}">
        {/* <noindex> */}
        <div
          className="head-banner head-banner_type_stock market-metrika i-bem metrika_js_inited"
          data-bem="{head-banner:{bannerName:stock,cookie:{name:head-banner,options:{expires:1859126774984,path:/,domain:.market.yandex.by}},url:/catalog/61522?utm_source=ym_header_skidki_hub_desktop&utm_medium=banner&utm_campaign=header_skidki_hub},metrika:{onInit:{stock:{action:_show}}}}"
        >
          <a
            className="head-banner__link market-metrika i-bem head-banner__img-loader metrika_js_inited"
            href="https://market.yandex.by/catalog/61522?utm_source=ym_header_skidki_hub_desktop&utm_medium=banner&utm_campaign=header_skidki_hub"
            data-bem="{metrika:{onClick:{stock:{action:}}}}"
          >
            <img
              alt=""
              className="head-banner__image"
              src="./old/desktop.png"
              srcSet="//yastatic.net/market-export/_/i/head-banner/discount_hub/desktop_x2.png 2x"
            />
          </a>
        </div>
        <div className="header2__main">
          <div className="header2__main-content n-adaptive-layout">
            <div className="header2__logo">
              <a
                className="logo logo_type_link logo_part_yandex"
                href="https://yandex.ru/"
                tabIndex={-1}
              >
                <span className="logo__text">Яндекс</span>
              </a>
              <a
                className="logo logo_type_link logo_part_market"
                href="https://market.yandex.by/"
                tabIndex={-1}
              >
                <span className="logo__text">Маркет</span>
              </a>
            </div>
            <div className="header2__middle">
              <div className="header2__middle-wrap">
                <div className="header2__left" itemType="https://schema.org/WebSite" itemScope>
                  <meta itemProp="url" content="https://market.yandex.by" />
                  <form
                    className="header2__search search2 search2_type_market suggest2-form suggest2-counter suggest2-counter_type_market suggest2-form_stats_yes i-bem search2_js_inited suggest2-counter_js_inited suggest2-form_js_inited"
                    data-bem="{search2:{type:market},suggest2-form:{buttonName:button2},suggest2-counter:{service:market,host://yandex.ru,suggestHistoryAddUrl:/api/suggest-history/add,submitBySelect:true,preventSubmit:true,suggestReqID:true}}"
                    action="https://market.yandex.by/search"
                    itemProp="potentialAction"
                    itemScope
                    itemType="https://schema.org/SearchAction"
                  >
                    <meta
                      itemProp="target"
                      content="https://market.yandex.by/search?text={text}&from=reach-search-snippet"
                    />
                    <meta itemProp="query-input" content="required name=text" />
                    <input
                      type="hidden"
                      className="suggest2-form__redirect-input"
                      name="cvredirect"
                      defaultValue={2}
                    />
                    <span className="suggest2-form__node">
                      <span className="search2__input">
                        <span
                          id="market-search"
                          className="suggest2-form__input input input_size_l input_theme_normal input_pin_round-clear input_focus_thin i-bem input_js_inited"
                          data-bem="{input:}"
                        >
                          <span className="input__box">
                            <div
                              className="suggest2-autocomplete i-bem suggest2-autocomplete_js_inited"
                              data-bem="{suggest2-autocomplete: }"
                            >
                              <span className="suggest2-autocomplete__entered" />
                              <span className="suggest2-autocomplete__complete" />
                            </div>
                            <input
                              id="header-search"
                              className="input__control"
                              name="text"
                              aria-labelledby="header-search header-search-label"
                              maxLength={400}
                              autoComplete="off"
                              defaultValue=""
                              placeholder=""
                              autoCorrect="off"
                              autoCapitalize="off"
                              spellCheck="false"
                              aria-autocomplete="list"
                            />
                            <input
                              className="suggest2-autocomplete-shadow i-bem suggest2-autocomplete-shadow_js_inited"
                              disabled="disabled"
                              data-bem="{suggest2-autocomplete-shadow: }"
                            />
                            <span
                              className="input__clear input__clear_visibility_visible"
                              unselectable="on"
                            />
                          </span>
                        </span>
                        <div
                          className="popup suggest2 suggest2_type_market suggest2_theme_normal suggest2_size_m popup_animate_no i-bem popup_js_inited suggest2_js_inited suggest2-detect_js_inited"
                          data-bem="{popup:{directions:bottom-left,position:{left:0}},suggest2-detect:,suggest2:{url://yandex.ru/suggest-market/suggest-market-rich?v=2&enable-continuation=1&group_sort=max&hl=1&market_personal_num=2&market_personal=1,suggestHistoryRemoveUrl://yandex.ru/suggest-market/suggest-delete-text,data:{srv:market,wiz:TrWth},onFocus:request,submitBySelect:false,requestOnEmptyInput:true,updateOnEnterByKeyboard:false}}"
                        >
                          <div className="popup__under popup__under popup__under_theme_ffffff popup__under_autoclosable_yes popup__under_adaptive_yes popup__under_animate_yes" />
                          <div className="popup__content"> </div>
                        </div>
                      </span>
                      <span className="search2__button">
                        <button
                          type="submit"
                          className="button2 button2_size_ml button2_type_submit button2_pin_brick-round i-bem suggest2-form__button button2_theme_gray button2_js_inited"
                          data-bem="{button2:}"
                        >
                          <span className="button2__text">Найти</span>
                        </button>
                      </span>
                    </span>
                  </form>
                </div>
                <div className="header2__right">
                  <div
                    className="header2-menu header2-menu_loading_yes i-bem header2-menu_js_inited"
                    data-bem="{header2-menu:}"
                  >
                    <span
                      className="link header2-menu__item header2-menu__item_type_region header2-region region-form-opener i-bem n-region-popup-opener"
                      data-bem="{region-form-opener:{region:{id:157,source:60,name:\u041C\u0438\u043D\u0441\u043A,detectedName:\u041C\u043E\u0441\u043A\u0432\u0430,tld:by,country:149,isBySettings:true,isInternal:false,regSet:false,linguistics:{ablative:,accusative:\u041C\u0438\u043D\u0441\u043A,dative:\u041C\u0438\u043D\u0441\u043A\u0443,directional:,genitive:\u041C\u0438\u043D\u0441\u043A\u0430,instrumental:\u041C\u0438\u043D\u0441\u043A\u043E\u043C,locative:,nominative:\u041C\u0438\u043D\u0441\u043A,preposition:\u0432,prepositional:\u041C\u0438\u043D\u0441\u043A\u0435}}}}"
                    >
                      <span className="header2-menu__icon-wrap">
                        <span className="header2-menu__icon header2-menu__icon_type_region" />
                      </span>
                      <span className="header2-menu__text">Минск</span>
                    </span>
                    <a
                      className="link header2-menu__item header2-menu__item_type_wishlist"
                      href="https://market.yandex.by/my/wishlist?track=head"
                    >
                      <span className="header2-menu__icon-wrap">
                        <span
                          className="header2-menu__count personal-counter personal-counter_provider_wishlist i-bem personal-counter_empty_no personal-counter_js_inited header2-menu__count_draw_yes"
                          data-bem="{personal-counter:{showDot:true},header2-menu__count:{type:wishlist}}"
                        >
                          2
                        </span>
                        <span
                          className="header2-menu__icon header2-menu__icon_type_wishlist header2-menu__icon_hint_yes hint i-bem"
                          data-title="\u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435"
                          data-bem="{hint:{to:bottom}}"
                        />
                        <span className="header2-menu__icon header2-menu__icon_type_wishlist" />
                      </span>
                      <span className="header2-menu__text">Отложенные</span>
                    </a>
                    <a
                      className="link header2-menu__item header2-menu__item_type_compare"
                      href="https://market.yandex.by/compare?track=head"
                    >
                      <span className="header2-menu__icon-wrap">
                        <span
                          className="header2-menu__count personal-counter personal-counter_provider_comparison i-bem personal-counter_empty_no personal-counter_js_inited header2-menu__count_draw_yes"
                          data-bem="{personal-counter:{showDot:true,comparisonCount:1},header2-menu__count:{type:compare}}"
                        >
                          1
                        </span>
                        <span
                          className="header2-menu__icon header2-menu__icon_hint_yes header2-menu__icon_type_compare hint i-bem"
                          data-title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435"
                          data-bem="{hint:{to:bottom}}"
                        />
                        <span className="header2-menu__icon header2-menu__icon_type_compare" />
                      </span>
                      <span className="header2-menu__text">Сравнение</span>
                    </a>
                  </div>
                  <div className="header2__nav">
                    <div
                      className="header2-nav i-bem header2-nav_js_inited"
                      data-bem="{header2-nav:{user:{isAuth:false,login:,name:null,UID:,yandexuid:9189576811506020893,region:{id:157,source:60,name:\u041C\u0438\u043D\u0441\u043A,detectedName:\u041C\u043E\u0441\u043A\u0432\u0430,tld:by,country:149,isBySettings:true,isInternal:false,regSet:false,linguistics:{ablative:,accusative:\u041C\u0438\u043D\u0441\u043A,dative:\u041C\u0438\u043D\u0441\u043A\u0443,directional:,genitive:\u041C\u0438\u043D\u0441\u043A\u0430,instrumental:\u041C\u0438\u043D\u0441\u043A\u043E\u043C,locative:,nominative:\u041C\u0438\u043D\u0441\u043A,preposition:\u0432,prepositional:\u041C\u0438\u043D\u0441\u043A\u0435}},comparisonCount:1},domain:ru,retpath:https://market.yandex.by,expFlags:}}"
                    >
                      <div className="header2-nav__user-placeholder">
                        <div
                          className="header2-user user i-bem user_js_inited"
                          data-bem="{user:{passportHost:passport.yandex.by,origin:market_desktop_header}}"
                        >
                          <a
                            className="button2 button2_pseudo_yes button2_size_ml button2_theme_gray user__login"
                            href="https://passport.yandex.by/auth?origin=market_desktop_header&retpath=https://market.yandex.by"
                            role="button"
                          >
                            <span className="button2__text">
                              <span className="user__enter-label">Войти</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="header2-nav__content">
                        <div className="header2-nav__user">
                          <div className="n-passport-suggest-popup-opener">
                            <div
                              className="header2-user user i-bem user_js_inited"
                              data-bem="{user:{passportHost:passport.yandex.by,origin:market_desktop_header}}"
                            >
                              <a
                                className="button2 button2_pseudo_yes button2_size_ml button2_theme_gray user__login"
                                href="https://passport.yandex.by/auth?origin=market_desktop_header&retpath=https://market.yandex.by"
                                role="button"
                              >
                                <span className="button2__text">
                                  <span className="user__enter-label">Войти</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="header2-nav__user-menu" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </noindex> */}
      </div>
    )
  }
}

export default Header
