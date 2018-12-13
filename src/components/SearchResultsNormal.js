import React from 'react'
import { connect } from 'react-redux'
import { dispatch } from '../store'
import { readGoods } from '../ducks/goods'
import { Spin } from 'antd'
import SnippetCard2 from './SnippetCard2'
import PagerMore from './PagerMore'
import Pager from './Pager'
import SerpSearch from './SerpSearch'
import LegalInfo from './LegalInfo'
import BrandsCarousel from './BrandsCarousel'
import ReviewsHub from './ReviewsHub'
import PopularSearch from './PopularSearch'

class SearchResultsNormal extends React.Component {
  componentDidMount() {
    dispatch(readGoods())
  }

  render() {
    const { items, isLoading } = this.props
    return (
      <div className="layout__col i-bem layout__col_search-results_normal">
        <div
          className="serp-empty island i-bem serp-empty_state_hidden serp-empty_js_inited"
          data-bem="{serp-empty: }"
        >
          <div className="serp-empty__wrapper">
            <div className="title">Нет подходящих товаров</div>
            <div className="serp-empty__subtitle">попробуйте смягчить условия поиска</div>
            <button
              className="button button_action_n-filter-reset button_size_m button_pseudo_yes button_theme_pseudo i-bem"
              type="button"
              data-bem="{button: }"
            >
              <span className="button__text">Сбросить фильтры</span>
            </button>
          </div>
        </div>
        <div
          className="n-filter-applied-results metrika b-zone i-bem n-filter-applied-results_js_inited b-zone_js_inited"
          data-bem="{n-filter-applied-results:,b-zone:{name:search-results}}"
        >
          <div
            className="n-filter-applied-results__content preloadable i-bem preloadable_js_inited"
            data-bem="{preloadable: {size:m, paranja: true}}"
            style={{
              height: 'auto',
            }}
          >
            <div
              className="n-snippet-list n-snippet-list_type_vertical metrika b-zone b-spy-init b-spy-events i-bem metrika_js_inited snippet-list_js_inited b-spy-init_js_inited b-zone_js_inited"
              data-bem="{metrika:{productOffers:{place:,inStock:0,byRegion:0,userRegion:157}},snippet-list:,b-zone:{name:snippet-list,data:{products:{count:48},offers:{count:0},articles:{count:4},collections:{count:0},total:52}},b-spy-init:}"
            >
              <Spin spinning={isLoading}>
                {items.map((item) => (
                  <SnippetCard2 key={item.id} {...item} />
                ))}
              </Spin>
              {/*
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited b-zone_js_inited n-snippet-card2_js_inited"
                data-id="model-194605098"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:194605098,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:194605098}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:194605098,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2480E,modelId:194605098,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/364668/img_id4723463983549357463.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited hint_js_inited link_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:194605098,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2480E,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/364668/img_id4723463983549357463.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div className="stickers__sticker stickers__sticker_type_new">
                    Новинка
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link i-bem link_js_inited"
                    href="https://market.yandex.by/product--monitor-benq-gw2480e/194605098?show-uid=15435075889809456972816002&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2480E"
                  >
                    <img
                      className="image"
                      src="./old/6hq(1)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2480E"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2480E"
                      srcSet="//avatars.mds.yandex.net/get-mpic/364668/img_id4723463983549357463.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-benq-gw2480e/194605098?show-uid=15435075889809456972816002&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2480E"
                      >
                        Монитор BenQ GW2480E
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-benq-gw2480e/194605098/reviews?show-uid=15435075889809456972816002"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>1 отзыв</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited b-zone_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:194605098,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              подставка
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-benq-gw2480e/194605098/offers?track=srchlink&show-uid=15435075889809456972816002"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">293,24 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-benq-gw2480e/194605098/offers?track=srchbtn&show-uid=15435075889809456972816002&context=search"
                      >
                        4 предложения
                      </a>{" "}
                      от <span className="price">293,24 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited b-zone_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:194605098,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited b-zone_js_inited n-snippet-card2_js_inited"
                data-id="model-1729623123"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1729623123,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1729623123}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1729623123,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 273V7QJAB,modelId:1729623123,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/397397/img_id8172636247548923623.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1729623123,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 273V7QJAB,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/397397/img_id8172636247548923623.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited b-zone_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729623123,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-philips-273v7qjab/1729623123?show-uid=15435075889809456972816003&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 273V7QJAB"
                  >
                    <img
                      className="image"
                      src="./old/6hq(2)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 273V7QJAB"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 273V7QJAB"
                      srcSet="//avatars.mds.yandex.net/get-mpic/397397/img_id8172636247548923623.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-philips-273v7qjab/1729623123?show-uid=15435075889809456972816003&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 273V7QJAB"
                      >
                        Монитор Philips 273V7QJAB
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-philips-273v7qjab/1729623123/reviews?show-uid=15435075889809456972816003"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>5 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited b-zone_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729623123,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 27"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited b-zone_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729623123,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            21 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-philips-273v7qjab/1729623123/offers?track=srchlink&show-uid=15435075889809456972816003"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">402,58 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-philips-273v7qjab/1729623123/offers?track=srchbtn&show-uid=15435075889809456972816003&context=search"
                      >
                        19 предложений
                      </a>{" "}
                      от <span className="price">402,58 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited b-zone_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729623123,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-entrypoint-carousel b-zone b-spy-visible i-bem n-entrypoint-carousel_js_inited b-spy-visible_js_inited"
                data-bem="{n-entrypoint-carousel:,b-zone:{name:entrypoint-carousel,data:{items:{count:4}}},b-spy-visible:}"
              >
                <div
                  className="n-entrypoint-carousel__arrow n-entrypoint-carousel__arrow_side_left b-zone b-spy-events i-bem"
                  data-bem="{b-zone:{name:entrypoint-carousel-arrow,data:{direction:left}},b-spy-events:}"
                  style={{
                    display: "none"
                  }}
                />
                <div
                  className="n-entrypoint-carousel__inner"
                  style={{
                    marginLeft: "0px"
                  }}
                >
                  <a
                    className="n-entrypoint-banner b-zone b-spy-events b-spy-visible i-bem b-spy-visible_js_inited"
                    style={{
                      background: "rgb(247, 247, 247)",
                      width: "347px"
                    }}
                    data-bem="{b-zone:{name:entrypoint-banner,data:{uel:/articles/--kak-vybrat-monitor}},b-spy-events:,b-spy-visible:}"
                    href="https://market.yandex.by/articles/--kak-vybrat-monitor?show-uid=15435075889809456972812004"
                  >
                    <div className="n-entrypoint-banner__image">
                      <img
                        className="image"
                        src="./old/optimize(79)"
                        srcSet="//avatars.mds.yandex.net/get-mpic/200316/cms_resources-navigation-pages-48350-ab9b95539d6e373bec1b3e2dffc6015c_200x200@x2.png/optimize 2x"
                      />
                    </div>
                    <div className="n-entrypoint-banner__content">
                      <div className="n-entrypoint-banner__title">
                        <p className="mbo-page-text__paragraph">
                          Монитор
                        </p>
                      </div>
                      <div className="n-entrypoint-banner__subtitle">
                        <p className="mbo-page-text__paragraph">
                          Как выбрать
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="n-entrypoint-banner b-zone b-spy-events b-spy-visible i-bem b-spy-visible_js_inited"
                    style={{
                      background: "rgb(247, 247, 247)",
                      width: "347px"
                    }}
                    data-bem="{b-zone:{name:entrypoint-banner,data:{uel:/articles/obzor-monitora-Acer-ProDesigner-BM320}},b-spy-events:,b-spy-visible:}"
                    href="https://market.yandex.by/articles/obzor-monitora-Acer-ProDesigner-BM320?show-uid=15435075889809456972812004"
                  >
                    <div className="n-entrypoint-banner__image">
                      <img
                        className="image"
                        src="./old/optimize(80)"
                        srcSet="//avatars.mds.yandex.net/get-mpic/466729/cms_resources-navigation-pages-48429-41e17216efd4ae874a95cfed97099aa3_200x200@x2.png/optimize 2x"
                      />
                    </div>
                    <div className="n-entrypoint-banner__content">
                      <div className="n-entrypoint-banner__title">
                        <p className="mbo-page-text__paragraph">
                          Монитор Acer
                        </p>
                        <p className="mbo-page-text__paragraph">
                          ProDesigner BM320
                        </p>
                      </div>
                      <div className="n-entrypoint-banner__subtitle">
                        <p className="mbo-page-text__paragraph">
                          Обзор
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="n-entrypoint-banner b-zone b-spy-events b-spy-visible i-bem b-spy-visible_js_inited"
                    style={{
                      background: "rgb(247, 247, 247)",
                      width: "347px"
                    }}
                    data-bem="{b-zone:{name:entrypoint-banner,data:{uel:/articles/obzor-monitora-AOC-U2879VF}},b-spy-events:,b-spy-visible:}"
                    href="https://market.yandex.by/articles/obzor-monitora-AOC-U2879VF?track=fr_ctlg_list&show-uid=15435075889809456972812004"
                  >
                    <div className="n-entrypoint-banner__image">
                      <img
                        className="image"
                        src="./old/optimize(81)"
                        srcSet="//avatars.mds.yandex.net/get-mpic/397397/cms_resources-navigation-pages-44090-21mr41ir0je65pal30sb5bcm21_200x200@x2.png/optimize 2x"
                      />
                    </div>
                    <div className="n-entrypoint-banner__content">
                      <div className="n-entrypoint-banner__title">
                        <p className="mbo-page-text__paragraph">
                          AOC U2879VF
                        </p>
                      </div>
                      <div className="n-entrypoint-banner__subtitle">
                        <p className="mbo-page-text__paragraph">
                          Обзор монитора
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="n-entrypoint-banner b-zone b-spy-events b-spy-visible i-bem b-spy-visible_js_inited"
                    style={{
                      background: "rgb(247, 247, 247)",
                      width: "347px"
                    }}
                    data-bem="{b-zone:{name:entrypoint-banner,data:{uel:/articles/kak-vybrat-kompjuter-dlja-shkolnika}},b-spy-events:,b-spy-visible:}"
                    href="https://market.yandex.by/articles/kak-vybrat-kompjuter-dlja-shkolnika?track=fr_ctlg_list&show-uid=15435075889809456972812004"
                  >
                    <div className="n-entrypoint-banner__image">
                      <img
                        className="image"
                        src="./old/optimize(82)"
                        srcSet="//avatars.mds.yandex.net/get-mpic/200316/cms_resources-navigation-pages-42748-o8blodm7hqkerm86lo4tlhtmlb_200x200@x2.png/optimize 2x"
                      />
                    </div>
                    <div className="n-entrypoint-banner__content">
                      <div className="n-entrypoint-banner__title">
                        <p className="mbo-page-text__paragraph">
                          Компьютер
                        </p>
                        <p className="mbo-page-text__paragraph">
                          для школьника
                        </p>
                      </div>
                      <div className="n-entrypoint-banner__subtitle">
                        <p className="mbo-page-text__paragraph">
                          Как выбрать
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="n-entrypoint-carousel__arrow n-entrypoint-carousel__arrow_side_right b-zone b-spy-events i-bem"
                  data-bem="{b-zone:{name:entrypoint-carousel-arrow,data:{direction:right}},b-spy-events:}"
                />
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13793418"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13793418,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13793418}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13793418,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F390FHI,modelId:13793418,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/200316/img_id8125285104942622969/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13793418,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F390FHI,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/200316/img_id8125285104942622969/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-samsung-c24f390fhi/13793418?show-uid=15435075889809456972816005&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F390FHI"
                  >
                    <img
                      className="image"
                      src="./old/6hq(3)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F390FHI"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F390FHI"
                      srcSet="//avatars.mds.yandex.net/get-mpic/200316/img_id8125285104942622969/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-samsung-c24f390fhi/13793418?show-uid=15435075889809456972816005&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F390FHI"
                      >
                        Монитор Samsung C24F390FHI
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-samsung-c24f390fhi/13793418/reviews?show-uid=15435075889809456972816005"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>58 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793418,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        изогнутый экран
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT *VA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <span
                        className="n-badge-bestseller b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_bestseller n-reasons-to-buy_isShown_false  n-badge-bestseller_js_inited b-spy-visible_js_inited"
                        data-bem="{n-badge-bestseller:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793418,taggedEntity:bestseller,isShown:false}}}"
                      />
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793418,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            377 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-samsung-c24f390fhi/13793418/offers?track=srchlink&show-uid=15435075889809456972816005"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">270,19 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-samsung-c24f390fhi/13793418/offers?track=srchbtn&show-uid=15435075889809456972816005&context=search"
                      >
                        18 предложений
                      </a>{" "}
                      от <span className="price">269,26 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793418,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1731656789"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1731656789,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1731656789}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited pseudo-checkbox_checked_yes wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1731656789,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL P2418D,modelId:1731656789,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1365202/img_id3804453179966895742.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1731656789,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL P2418D,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1365202/img_id3804453179966895742.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731656789,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-dell-p2418d/1731656789?show-uid=15435075889809456972816006&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL P2418D"
                  >
                    <img
                      className="image"
                      src="./old/6hq(4)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL P2418D"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL P2418D"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1365202/img_id3804453179966895742.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-dell-p2418d/1731656789?show-uid=15435075889809456972816006&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL P2418D"
                      >
                        Монитор DELL P2418D
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-dell-p2418d/1731656789/reviews?show-uid=15435075889809456972816006"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>29 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731656789,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              подставка
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 2560x1440 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        яркость 300 кд/м2
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731656789,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            74 человека купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-dell-p2418d/1731656789/offers?track=srchlink&show-uid=15435075889809456972816006"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">602,64 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-dell-p2418d/1731656789/offers?track=srchbtn&show-uid=15435075889809456972816006&context=search"
                      >
                        14 предложений
                      </a>{" "}
                      от <span className="price">599,38 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731656789,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13927009"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13927009,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13927009}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13927009,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32F391FWI,modelId:13927009,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/175985/img_id8183278700758048190/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13927009,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32F391FWI,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/175985/img_id8183278700758048190/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13927009,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-samsung-c32f391fwi/13927009?show-uid=15435075889809456972816007&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32F391FWI"
                  >
                    <img
                      className="image"
                      src="./old/6hq(5)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32F391FWI"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32F391FWI"
                      srcSet="//avatars.mds.yandex.net/get-mpic/175985/img_id8183278700758048190/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-samsung-c32f391fwi/13927009?show-uid=15435075889809456972816007&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32F391FWI"
                      >
                        Монитор Samsung C32F391FWI
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-samsung-c32f391fwi/13927009/reviews?show-uid=15435075889809456972816007"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>44 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13927009,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 31.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        изогнутый экран
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT *VA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <span
                        className="n-badge-bestseller b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_bestseller n-reasons-to-buy_isShown_false  n-badge-bestseller_js_inited b-spy-visible_js_inited"
                        data-bem="{n-badge-bestseller:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13927009,taggedEntity:bestseller,isShown:false}}}"
                      />
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13927009,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            88 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-samsung-c32f391fwi/13927009/offers?track=srchlink&show-uid=15435075889809456972816007"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">468,64 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-samsung-c32f391fwi/13927009/offers?track=srchbtn&show-uid=15435075889809456972816007&context=search"
                      >
                        13 предложений
                      </a>{" "}
                      от <span className="price">468,64 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13927009,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-153068182"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:153068182,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:153068182}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:153068182,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32JG50QQI,modelId:153068182,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/906397/img_id7408206789894110727.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:153068182,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32JG50QQI,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/906397/img_id7408206789894110727.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-samsung-c32jg50qqi/153068182?show-uid=15435075889809456972816008&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32JG50QQI"
                  >
                    <img
                      className="image"
                      src="./old/6hq(6)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32JG50QQI"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32JG50QQI"
                      srcSet="//avatars.mds.yandex.net/get-mpic/906397/img_id7408206789894110727.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-samsung-c32jg50qqi/153068182?show-uid=15435075889809456972816008&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C32JG50QQI"
                      >
                        Монитор Samsung C32JG50QQI
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-samsung-c32jg50qqi/153068182/reviews?show-uid=15435075889809456972816008"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>2 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 31.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        изогнутый экран
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT *VA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 2560x1440 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        макс. частота обновления 144 Гц
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-samsung-c32jg50qqi/153068182/offers?track=srchlink&show-uid=15435075889809456972816008"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">903,81 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-samsung-c32jg50qqi/153068182/offers?track=srchbtn&show-uid=15435075889809456972816008&context=search"
                      >
                        4 предложения
                      </a>{" "}
                      от <span className="price">903,81 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:153068182,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-197651129"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:197651129,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:197651129}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:197651129,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ PD2700U,modelId:197651129,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1060343/img_id3076925546940710674.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:197651129,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ PD2700U,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1060343/img_id3076925546940710674.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:197651129,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-benq-pd2700u/197651129?show-uid=15435075889809456972816009&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ PD2700U"
                  >
                    <img
                      className="image"
                      src="./old/6hq(7)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ PD2700U"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ PD2700U"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1060343/img_id3076925546940710674.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-benq-pd2700u/197651129?show-uid=15435075889809456972816009&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ PD2700U"
                      >
                        Монитор BenQ PD2700U
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-benq-pd2700u/197651129/reviews?show-uid=15435075889809456972816009"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>2 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:197651129,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 27"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 3840x2160 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort, Mini DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-benq-pd2700u/197651129/offers?track=srchlink&show-uid=15435075889809456972816009"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">1 148,94 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-benq-pd2700u/197651129/offers?track=srchbtn&show-uid=15435075889809456972816009&context=search"
                      >
                        3 предложения
                      </a>{" "}
                      от <span className="price">1 148,94 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:197651129,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13579255"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13579255,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13579255}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13579255,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 25UM58,modelId:13579255,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/199079/img_id5755038409424601189/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13579255,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 25UM58,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/199079/img_id5755038409424601189/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-25um58/13579255?show-uid=15435075889809456972816010&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 25UM58"
                  >
                    <img
                      className="image"
                      src="./old/6hq(8)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 25UM58"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 25UM58"
                      srcSet="//avatars.mds.yandex.net/get-mpic/199079/img_id5755038409424601189/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-25um58/13579255?show-uid=15435075889809456972816010&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 25UM58"
                      >
                        Монитор LG 25UM58
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-lg-25um58/13579255/reviews?show-uid=15435075889809456972816010"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>59 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13579255,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 25"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 2560x1080 (21:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <span
                        className="n-badge-bestseller b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_bestseller n-reasons-to-buy_isShown_false  n-badge-bestseller_js_inited b-spy-visible_js_inited"
                        data-bem="{n-badge-bestseller:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13579255,taggedEntity:bestseller,isShown:false}}}"
                      />
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13579255,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            239 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-25um58/13579255/offers?track=srchlink&show-uid=15435075889809456972816010"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">332,28 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-lg-25um58/13579255/offers?track=srchbtn&show-uid=15435075889809456972816010&context=search"
                      >
                        17 предложений
                      </a>{" "}
                      от <span className="price">332,28 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13579255,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1731630129"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1731630129,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1731630129}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1731630129,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ ZOWIE XL2411P,modelId:1731630129,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id5886914345482764639.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1731630129,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ ZOWIE XL2411P,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id5886914345482764639.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-benq-zowie-xl2411p/1731630129?show-uid=15435075889809456972816011&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ ZOWIE XL2411P"
                  >
                    <img
                      className="image"
                      src="./old/6hq(9)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ ZOWIE XL2411P"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ ZOWIE XL2411P"
                      srcSet="//avatars.mds.yandex.net/get-mpic/195452/img_id5886914345482764639.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-benq-zowie-xl2411p/1731630129?show-uid=15435075889809456972816011&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ ZOWIE XL2411P"
                      >
                        Монитор BenQ ZOWIE XL2411P
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-benq-zowie-xl2411p/1731630129/reviews?show-uid=15435075889809456972816011"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>8 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731630129,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              подставка
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        игровой ЖК-монитор с диагональю 24"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT TN
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        макс. частота обновления 144 Гц
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731630129,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            71 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-benq-zowie-xl2411p/1731630129/offers?track=srchlink&show-uid=15435075889809456972816011"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">555,52 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-benq-zowie-xl2411p/1731630129/offers?track=srchbtn&show-uid=15435075889809456972816011&context=search"
                      >
                        10 предложений
                      </a>{" "}
                      от <span className="price">544,85 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731630129,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-12660464"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:12660464,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:12660464}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:12660464,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung U28E590D,modelId:12660464,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id1279787909686372498/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:12660464,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung U28E590D,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id1279787909686372498/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-samsung-u28e590d/12660464?show-uid=15435075889809456972816012&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung U28E590D"
                  >
                    <img
                      className="image"
                      src="./old/6hq(10)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung U28E590D"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung U28E590D"
                      srcSet="//avatars.mds.yandex.net/get-mpic/96484/img_id1279787909686372498/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-samsung-u28e590d/12660464?show-uid=15435075889809456972816012&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung U28E590D"
                      >
                        Монитор Samsung U28E590D
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-samsung-u28e590d/12660464/reviews?show-uid=15435075889809456972816012"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>35 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:12660464,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 28"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT TN
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 3840x2160 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <span
                        className="n-badge-bestseller b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_bestseller n-reasons-to-buy_isShown_false  n-badge-bestseller_js_inited b-spy-visible_js_inited"
                        data-bem="{n-badge-bestseller:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:12660464,taggedEntity:bestseller,isShown:false}}}"
                      />
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:12660464,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            98 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-samsung-u28e590d/12660464/offers?track=srchlink&show-uid=15435075889809456972816012"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">507,01 б.p.</div>
                          </a>
                        </div>
                      </div>
                      <div className="n-snippet-card2__sub-price">
                        <div className="price price_unactual_yes">
                          <span className="price price_unactual_yes">
                            533,82 б.p.
                          </span>
                        </div>
                      </div>
                      <div className="n-snippet-card2__price-stickers stickers">
                        <div className="stickers__sticker stickers__sticker_type_discount">
                          <span className="sticker_type_discount__text">
                            -5%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-samsung-u28e590d/12660464/offers?track=srchbtn&show-uid=15435075889809456972816012&context=search"
                      >
                        15 предложений
                      </a>{" "}
                      от <span className="price">507,01 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:12660464,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13537195"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13537195,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13537195}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13537195,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58D,modelId:13537195,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id4088872689892789228/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13537195,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58D,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id4088872689892789228/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-22mp58d/13537195?show-uid=15435075889809456972816013&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58D"
                  >
                    <img
                      className="image"
                      src="./old/6hq(11)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58D"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58D"
                      srcSet="//avatars.mds.yandex.net/get-mpic/96484/img_id4088872689892789228/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-22mp58d/13537195?show-uid=15435075889809456972816013&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58D"
                      >
                        Монитор LG 22MP58D
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-lg-22mp58d/13537195/reviews?show-uid=15435075889809456972816013"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>5 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13537195,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 21.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-22mp58d/13537195/offers?track=srchlink&show-uid=15435075889809456972816013"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">208,50 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-lg-22mp58d/13537195/offers?track=srchbtn&show-uid=15435075889809456972816013&context=search"
                      >
                        15 предложений
                      </a>{" "}
                      от <span className="price">208,50 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13537195,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13041451"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13041451,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13041451}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13041451,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270H,modelId:13041451,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id459988458595213247/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13041451,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270H,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id459988458595213247/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-benq-gw2270h/13041451?show-uid=15435075889809456972816014&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270H"
                  >
                    <img
                      className="image"
                      src="./old/6hq(12)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270H"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270H"
                      srcSet="//avatars.mds.yandex.net/get-mpic/96484/img_id459988458595213247/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-benq-gw2270h/13041451?show-uid=15435075889809456972816014&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270H"
                      >
                        Монитор BenQ GW2270H
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-benq-gw2270h/13041451/reviews?show-uid=15435075889809456972816014"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>29 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13041451,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              подставка
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 21.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT A-MVA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13041451,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            50 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-benq-gw2270h/13041451/offers?track=srchlink&show-uid=15435075889809456972816014"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">225,83 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-benq-gw2270h/13041451/offers?track=srchbtn&show-uid=15435075889809456972816014&context=search"
                      >
                        17 предложений
                      </a>{" "}
                      от <span className="price">219,61 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13041451,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1729910383"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1729910383,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1729910383}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1729910383,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer ET221Qbi,modelId:1729910383,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/466729/img_id4809601350038182522.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1729910383,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer ET221Qbi,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/466729/img_id4809601350038182522.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-acer-et221qbi/1729910383?show-uid=15435075889809456972816015&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer ET221Qbi"
                  >
                    <img
                      className="image"
                      src="./old/6hq(13)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer ET221Qbi"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer ET221Qbi"
                      srcSet="//avatars.mds.yandex.net/get-mpic/466729/img_id4809601350038182522.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-acer-et221qbi/1729910383?show-uid=15435075889809456972816015&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer ET221Qbi"
                      >
                        Монитор Acer ET221Qbi
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-acer-et221qbi/1729910383/reviews?show-uid=15435075889809456972816015"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>5 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729910383,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 21.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729910383,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            26 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-acer-et221qbi/1729910383/offers?track=srchlink&show-uid=15435075889809456972816015"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">227,65 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-acer-et221qbi/1729910383/offers?track=srchbtn&show-uid=15435075889809456972816015&context=search"
                      >
                        9 предложений
                      </a>{" "}
                      от <span className="price">226,09 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729910383,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1713283536"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1713283536,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1713283536}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1713283536,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UD58,modelId:1713283536,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id8724105714333462282/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1713283536,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UD58,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id8724105714333462282/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1713283536,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-27ud58/1713283536?show-uid=15435075889809456972816016&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UD58"
                  >
                    <img
                      className="image"
                      src="./old/6hq(14)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UD58"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UD58"
                      srcSet="//avatars.mds.yandex.net/get-mpic/96484/img_id8724105714333462282/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-27ud58/1713283536?show-uid=15435075889809456972816016&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UD58"
                      >
                        Монитор LG 27UD58
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-lg-27ud58/1713283536/reviews?show-uid=15435075889809456972816016"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>19 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1713283536,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 27"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT AH-IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 3840x2160 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1713283536,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            32 человека купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-27ud58/1713283536/offers?track=srchlink&show-uid=15435075889809456972816016"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">815,52 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-lg-27ud58/1713283536/offers?track=srchbtn&show-uid=15435075889809456972816016&context=search"
                      >
                        15 предложений
                      </a>{" "}
                      от <span className="price">791,29 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1713283536,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-181070198"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:181070198,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:181070198}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:181070198,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG240YUbmiipx,modelId:181070198,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1345185/img_id2316098392006263719.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:181070198,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG240YUbmiipx,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1345185/img_id2316098392006263719.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-acer-nitro-vg240yubmiipx/181070198?show-uid=15435075889809456972816017&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG240YUbmiipx"
                  >
                    <img
                      className="image"
                      src="./old/6hq(15)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG240YUbmiipx"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG240YUbmiipx"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1345185/img_id2316098392006263719.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-acer-nitro-vg240yubmiipx/181070198?show-uid=15435075889809456972816017&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG240YUbmiipx"
                      >
                        Монитор Acer Nitro VG240YUbmiipx
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-acer-nitro-vg240yubmiipx/181070198/reviews?show-uid=15435075889809456972816017"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>1 отзыв</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:181070198,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        игровой ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 2560x1440 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        яркость 300 кд/м2
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-acer-nitro-vg240yubmiipx/181070198/offers?track=srchlink&show-uid=15435075889809456972816017"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">586,82 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-acer-nitro-vg240yubmiipx/181070198/offers?track=srchbtn&show-uid=15435075889809456972816017&context=search"
                      >
                        1 предложение
                      </a>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:181070198,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13041452"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13041452,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13041452}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13041452,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270,modelId:13041452,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/175985/img_id8927720267165214967/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13041452,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/175985/img_id8927720267165214967/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-benq-gw2270/13041452?show-uid=15435075889809456972816018&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270"
                  >
                    <img
                      className="image"
                      src="./old/6hq(16)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270"
                      srcSet="//avatars.mds.yandex.net/get-mpic/175985/img_id8927720267165214967/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-benq-gw2270/13041452?show-uid=15435075889809456972816018&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 BenQ GW2270"
                      >
                        Монитор BenQ GW2270
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-benq-gw2270/13041452/reviews?show-uid=15435075889809456972816018"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>21 отзыв</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13041452,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              подставка
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 21.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT A-MVA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13041452,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            45 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-benq-gw2270/13041452/offers?track=srchlink&show-uid=15435075889809456972816018"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">200,26 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-benq-gw2270/13041452/offers?track=srchbtn&show-uid=15435075889809456972816018&context=search"
                      >
                        16 предложений
                      </a>{" "}
                      от <span className="price">200,26 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13041452,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-133625383"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:133625383,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:133625383}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:133625383,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC C24G1,modelId:133625383,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1365202/img_id2437569108243060550.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:133625383,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC C24G1,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1365202/img_id2437569108243060550.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-aoc-c24g1/133625383?show-uid=15435075889809456972816019&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC C24G1"
                  >
                    <img
                      className="image"
                      src="./old/6hq(17)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC C24G1"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC C24G1"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1365202/img_id2437569108243060550.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-aoc-c24g1/133625383?show-uid=15435075889809456972816019&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC C24G1"
                      >
                        Монитор AOC C24G1
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-aoc-c24g1/133625383/reviews?show-uid=15435075889809456972816019"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>8 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:133625383,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        игровой ЖК-монитор с диагональю 24"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        изогнутый экран
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT *VA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        макс. частота обновления 144 Гц
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:133625383,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            33 человека купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-aoc-c24g1/133625383/offers?track=srchlink&show-uid=15435075889809456972816019"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">480,86 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-aoc-c24g1/133625383/offers?track=srchbtn&show-uid=15435075889809456972816019&context=search"
                      >
                        2 предложения
                      </a>{" "}
                      от <span className="price">480,86 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:133625383,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited n-snippet-card2_js_inited"
                data-id="model-13793416"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13793416,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13793416}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13793416,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F390FHI,modelId:13793416,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id6371881203942818822/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13793416,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F390FHI,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id6371881203942818822/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-samsung-c27f390fhi/13793416?show-uid=15435075889809456972816020&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F390FHI"
                  >
                    <img
                      className="image"
                      src="./old/6hq(18)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F390FHI"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F390FHI"
                      srcSet="//avatars.mds.yandex.net/get-mpic/195452/img_id6371881203942818822/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-samsung-c27f390fhi/13793416?show-uid=15435075889809456972816020&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F390FHI"
                      >
                        Монитор Samsung C27F390FHI
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-samsung-c27f390fhi/13793416/reviews?show-uid=15435075889809456972816020"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>26 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793416,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 27"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        изогнутый экран
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT *VA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793416,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            49 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-samsung-c27f390fhi/13793416/offers?track=srchlink&show-uid=15435075889809456972816020"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">373,82 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-samsung-c27f390fhi/13793416/offers?track=srchbtn&show-uid=15435075889809456972816020&context=search"
                      >
                        17 предложений
                      </a>{" "}
                      от <span className="price">373,13 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793416,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited n-snippet-card2_js_inited"
                data-id="model-10709874"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:10709874,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:10709874}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:10709874,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung S24D300H,modelId:10709874,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id6699230478039223263/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:10709874,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung S24D300H,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id6699230478039223263/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-samsung-s24d300h/10709874?show-uid=15435075889809456972816021&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung S24D300H"
                  >
                    <img
                      className="image"
                      src="./old/6hq(19)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung S24D300H"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung S24D300H"
                      srcSet="//avatars.mds.yandex.net/get-mpic/96484/img_id6699230478039223263/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-samsung-s24d300h/10709874?show-uid=15435075889809456972816021&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung S24D300H"
                      >
                        Монитор Samsung S24D300H
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-samsung-s24d300h/10709874/reviews?show-uid=15435075889809456972816021"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={4}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>43 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:10709874,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 24"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT TN
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        яркость 250 кд/м2
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <span
                        className="n-badge-bestseller b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_bestseller n-reasons-to-buy_isShown_false  n-badge-bestseller_js_inited b-spy-visible_js_inited"
                        data-bem="{n-badge-bestseller:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:10709874,taggedEntity:bestseller,isShown:false}}}"
                      />
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:10709874,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            496 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-samsung-s24d300h/10709874/offers?track=srchlink&show-uid=15435075889809456972816021"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">230,12 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-samsung-s24d300h/10709874/offers?track=srchbtn&show-uid=15435075889809456972816021&context=search"
                      >
                        15 предложений
                      </a>{" "}
                      от <span className="price">230,12 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:10709874,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited n-snippet-card2_js_inited"
                data-id="model-1730044362"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1730044362,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1730044362}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1730044362,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 HP 22w,modelId:1730044362,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1361544/img_id7431465029390509401.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1730044362,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 HP 22w,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1361544/img_id7431465029390509401.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1730044362,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-hp-22w/1730044362?show-uid=15435075889809456972816022&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 HP 22w"
                  >
                    <img
                      className="image"
                      src="./old/6hq(20)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 HP 22w"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 HP 22w"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1361544/img_id7431465029390509401.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-hp-22w/1730044362?show-uid=15435075889809456972816022&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 HP 22w"
                      >
                        Монитор HP 22w
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-hp-22w/1730044362/reviews?show-uid=15435075889809456972816022"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>10 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1730044362,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 21.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        яркость 250 кд/м2
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-hp-22w/1730044362/offers?track=srchlink&show-uid=15435075889809456972816022"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">349,41 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-hp-22w/1730044362/offers?track=srchbtn&show-uid=15435075889809456972816022&context=search"
                      >
                        11 предложений
                      </a>{" "}
                      от <span className="price">349,41 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1730044362,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited n-snippet-card2_js_inited"
                data-id="model-47667128"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:47667128,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:47667128}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:47667128,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2319H,modelId:47667128,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1101307/img_id971502916994890314.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:47667128,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2319H,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1101307/img_id971502916994890314.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-dell-s2319h/47667128?show-uid=15435075889809456972816023&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2319H"
                  >
                    <img
                      className="image"
                      src="./old/6hq(21)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2319H"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2319H"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1101307/img_id971502916994890314.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-dell-s2319h/47667128?show-uid=15435075889809456972816023&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2319H"
                      >
                        Монитор DELL S2319H
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-dell-s2319h/47667128/reviews?show-uid=15435075889809456972816023"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>4 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:47667128,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:47667128,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            66 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-dell-s2319h/47667128/offers?track=srchlink&show-uid=15435075889809456972816023"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">327,44 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-dell-s2319h/47667128/offers?track=srchbtn&show-uid=15435075889809456972816023&context=search"
                      >
                        13 предложений
                      </a>{" "}
                      от <span className="price">327,44 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:47667128,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited n-snippet-card2_js_inited"
                data-id="model-1728740334"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1728740334,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1728740334}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1728740334,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VZ229HE,modelId:1728740334,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1246680/img_id5956250141604254264.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1728740334,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VZ229HE,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1246680/img_id5956250141604254264.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-asus-vz229he/1728740334?show-uid=15435075889809456972816024&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VZ229HE"
                  >
                    <img
                      className="image"
                      src="./old/6hq(22)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VZ229HE"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VZ229HE"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1246680/img_id5956250141604254264.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-asus-vz229he/1728740334?show-uid=15435075889809456972816024&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VZ229HE"
                      >
                        Монитор ASUS VZ229HE
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-asus-vz229he/1728740334/reviews?show-uid=15435075889809456972816024"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>2 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1728740334,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 21.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-asus-vz229he/1728740334/offers?track=srchlink&show-uid=15435075889809456972816024"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">275,50 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-asus-vz229he/1728740334/offers?track=srchbtn&show-uid=15435075889809456972816024&context=search"
                      >
                        10 предложений
                      </a>{" "}
                      от <span className="price">268,21 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1728740334,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1723530881"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1723530881,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1723530881}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1723530881,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29UM69G,modelId:1723530881,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id3464414613261286689.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1723530881,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29UM69G,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id3464414613261286689.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1723530881,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-29um69g/1723530881?show-uid=15435075889809456972816025&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29UM69G"
                  >
                    <img
                      className="image"
                      src="./old/6hq(23)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29UM69G"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29UM69G"
                      srcSet="//avatars.mds.yandex.net/get-mpic/195452/img_id3464414613261286689.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-29um69g/1723530881?show-uid=15435075889809456972816025&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29UM69G"
                      >
                        Монитор LG 29UM69G
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-lg-29um69g/1723530881/reviews?show-uid=15435075889809456972816025"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>34 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1723530881,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        игровой ЖК-монитор с диагональю 29"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 2560x1080 (21:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1723530881,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            86 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-29um69g/1723530881/offers?track=srchlink&show-uid=15435075889809456972816025"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">552,21 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-lg-29um69g/1723530881/offers?track=srchbtn&show-uid=15435075889809456972816025&context=search"
                      >
                        18 предложений
                      </a>{" "}
                      от <span className="price">526,75 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1723530881,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-133625381"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:133625381,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:133625381}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:133625381,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC 24V2Q,modelId:133625381,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1336510/img_id124294483618290747.png/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:133625381,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC 24V2Q,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1336510/img_id124294483618290747.png/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:133625381,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-aoc-24v2q/133625381?show-uid=15435075889809456972816026&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC 24V2Q"
                  >
                    <img
                      className="image"
                      src="./old/6hq(24)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC 24V2Q"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC 24V2Q"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1336510/img_id124294483618290747.png/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-aoc-24v2q/133625381?show-uid=15435075889809456972816026&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC 24V2Q"
                      >
                        Монитор AOC 24V2Q
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-aoc-24v2q/133625381/reviews?show-uid=15435075889809456972816026"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>7 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:133625381,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              подставка
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        яркость 250 кд/м2
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:133625381,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            27 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-aoc-24v2q/133625381/offers?track=srchlink&show-uid=15435075889809456972816026"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">305,06 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-aoc-24v2q/133625381/offers?track=srchbtn&show-uid=15435075889809456972816026&context=search"
                      >
                        6 предложений
                      </a>{" "}
                      от <span className="price">305,06 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:133625381,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1731009916"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1731009916,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1731009916}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1731009916,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24FG73FQI,modelId:1731009916,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/331398/img_id2536084661909730884.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1731009916,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24FG73FQI,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/331398/img_id2536084661909730884.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-samsung-c24fg73fqi/1731009916?show-uid=15435075889809456972816027&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24FG73FQI"
                  >
                    <img
                      className="image"
                      src="./old/6hq(25)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24FG73FQI"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24FG73FQI"
                      srcSet="//avatars.mds.yandex.net/get-mpic/331398/img_id2536084661909730884.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-samsung-c24fg73fqi/1731009916?show-uid=15435075889809456972816027&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24FG73FQI"
                      >
                        Монитор Samsung C24FG73FQI
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-samsung-c24fg73fqi/1731009916/reviews?show-uid=15435075889809456972816027"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={4}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>28 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731009916,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        игровой ЖК-монитор с диагональю 23.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        изогнутый экран
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT *VA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        макс. частота обновления 144 Гц
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731009916,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            51 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-samsung-c24fg73fqi/1731009916/offers?track=srchlink&show-uid=15435075889809456972816027"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">569,70 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-samsung-c24fg73fqi/1731009916/offers?track=srchbtn&show-uid=15435075889809456972816027&context=search"
                      >
                        14 предложений
                      </a>{" "}
                      от <span className="price">569,70 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731009916,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1964859273"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1964859273,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1964859273}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1964859273,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 34WK500,modelId:1964859273,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/200316/img_id575911344957843917.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1964859273,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 34WK500,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/200316/img_id575911344957843917.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-34wk500/1964859273?show-uid=15435075889809456972816028&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 34WK500"
                  >
                    <img
                      className="image"
                      src="./old/6hq(26)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 34WK500"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 34WK500"
                      srcSet="//avatars.mds.yandex.net/get-mpic/200316/img_id575911344957843917.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-34wk500/1964859273?show-uid=15435075889809456972816028&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 34WK500"
                      >
                        Монитор LG 34WK500
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-lg-34wk500/1964859273/reviews?show-uid=15435075889809456972816028"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>2 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1964859273,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 34"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT AH-IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 2560x1080 (21:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-34wk500/1964859273/offers?track=srchlink&show-uid=15435075889809456972816028"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">737,17 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-lg-34wk500/1964859273/offers?track=srchbtn&show-uid=15435075889809456972816028&context=search"
                      >
                        13 предложений
                      </a>{" "}
                      от <span className="price">737,17 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1964859273,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1711504574"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1711504574,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1711504574}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1711504574,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC M2060SWD2,modelId:1711504574,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/200316/img_id2882267240266768225/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1711504574,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC M2060SWD2,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/200316/img_id2882267240266768225/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-aoc-m2060swd2/1711504574?show-uid=15435075889809456972816029&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC M2060SWD2"
                  >
                    <img
                      className="image"
                      src="./old/6hq(27)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC M2060SWD2"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC M2060SWD2"
                      srcSet="//avatars.mds.yandex.net/get-mpic/200316/img_id2882267240266768225/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-aoc-m2060swd2/1711504574?show-uid=15435075889809456972816029&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC M2060SWD2"
                      >
                        Монитор AOC M2060SWD2
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-aoc-m2060swd2/1711504574/reviews?show-uid=15435075889809456972816029"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>1 отзыв</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1711504574,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 19.53"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT MVA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        яркость 250 кд/м2
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-aoc-m2060swd2/1711504574/offers?track=srchlink&show-uid=15435075889809456972816029"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">174,69 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-aoc-m2060swd2/1711504574/offers?track=srchbtn&show-uid=15435075889809456972816029&context=search"
                      >
                        12 предложений
                      </a>{" "}
                      от <span className="price">174,69 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1711504574,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-133625322"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:133625322,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:133625322}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:133625322,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 24MK600M,modelId:133625322,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/932277/img_id3367795950445968307.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:133625322,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 24MK600M,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/932277/img_id3367795950445968307.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-24mk600m/133625322?show-uid=15435075889809456972816030&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 24MK600M"
                  >
                    <img
                      className="image"
                      src="./old/6hq(28)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 24MK600M"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 24MK600M"
                      srcSet="//avatars.mds.yandex.net/get-mpic/932277/img_id3367795950445968307.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-24mk600m/133625322?show-uid=15435075889809456972816030&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 24MK600M"
                      >
                        Монитор LG 24MK600M
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-lg-24mk600m/133625322/reviews?show-uid=15435075889809456972816030"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>3 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:133625322,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-24mk600m/133625322/offers?track=srchlink&show-uid=15435075889809456972816030"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">321,76 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-lg-24mk600m/133625322/offers?track=srchbtn&show-uid=15435075889809456972816030&context=search"
                      >
                        13 предложений
                      </a>{" "}
                      от <span className="price">321,76 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:133625322,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1964859276"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1964859276,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1964859276}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1964859276,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29WK600,modelId:1964859276,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/466729/img_id1289418068742994901.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1964859276,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29WK600,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/466729/img_id1289418068742994901.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-29wk600/1964859276?show-uid=15435075889809456972816031&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29WK600"
                  >
                    <img
                      className="image"
                      src="./old/6hq(29)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29WK600"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29WK600"
                      srcSet="//avatars.mds.yandex.net/get-mpic/466729/img_id1289418068742994901.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-29wk600/1964859276?show-uid=15435075889809456972816031&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 29WK600"
                      >
                        Монитор LG 29WK600
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-lg-29wk600/1964859276/reviews?show-uid=15435075889809456972816031"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>5 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1964859276,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 29"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT AH-IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 2560x1080 (21:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1964859276,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            47 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-29wk600/1964859276/offers?track=srchlink&show-uid=15435075889809456972816031"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">532,50 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-lg-29wk600/1964859276/offers?track=srchbtn&show-uid=15435075889809456972816031&context=search"
                      >
                        13 предложений
                      </a>{" "}
                      от <span className="price">532,50 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1964859276,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-10767819"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:10767819,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:10767819}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:10767819,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer K242HLbd,modelId:10767819,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id3362720186421185733/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:10767819,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer K242HLbd,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id3362720186421185733/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-acer-k242hlbd/10767819?show-uid=15435075889809456972816032&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer K242HLbd"
                  >
                    <img
                      className="image"
                      src="./old/6hq(30)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer K242HLbd"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer K242HLbd"
                      srcSet="//avatars.mds.yandex.net/get-mpic/96484/img_id3362720186421185733/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-acer-k242hlbd/10767819?show-uid=15435075889809456972816032&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer K242HLbd"
                      >
                        Монитор Acer K242HLbd
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-acer-k242hlbd/10767819/reviews?show-uid=15435075889809456972816032"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>8 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:10767819,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 24"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT TN
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        яркость 250 кд/м2
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-acer-k242hlbd/10767819/offers?track=srchlink&show-uid=15435075889809456972816032"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">248,75 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-acer-k242hlbd/10767819/offers?track=srchbtn&show-uid=15435075889809456972816032&context=search"
                      >
                        16 предложений
                      </a>{" "}
                      от <span className="price">248,75 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:10767819,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1729623196"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1729623196,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1729623196}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1729623196,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 243V7QDSB,modelId:1729623196,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/364668/img_id552975276437431382.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1729623196,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 243V7QDSB,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/364668/img_id552975276437431382.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-philips-243v7qdsb/1729623196?show-uid=15435075889809456972816033&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 243V7QDSB"
                  >
                    <img
                      className="image"
                      src="./old/6hq(31)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 243V7QDSB"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 243V7QDSB"
                      srcSet="//avatars.mds.yandex.net/get-mpic/364668/img_id552975276437431382.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-philips-243v7qdsb/1729623196?show-uid=15435075889809456972816033&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 243V7QDSB"
                      >
                        Монитор Philips 243V7QDSB
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-philips-243v7qdsb/1729623196/reviews?show-uid=15435075889809456972816033"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>18 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729623196,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729623196,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            36 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-philips-243v7qdsb/1729623196/offers?track=srchlink&show-uid=15435075889809456972816033"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">282,51 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-philips-243v7qdsb/1729623196/offers?track=srchbtn&show-uid=15435075889809456972816033&context=search"
                      >
                        9 предложений
                      </a>{" "}
                      от <span className="price">282,51 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729623196,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13857340"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13857340,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13857340}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13857340,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I2281FWH,modelId:13857340,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id7034850202076662595/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13857340,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I2281FWH,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id7034850202076662595/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-aoc-i2281fwh/13857340?show-uid=15435075889809456972816034&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I2281FWH"
                  >
                    <img
                      className="image"
                      src="./old/6hq(32)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I2281FWH"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I2281FWH"
                      srcSet="//avatars.mds.yandex.net/get-mpic/96484/img_id7034850202076662595/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-aoc-i2281fwh/13857340?show-uid=15435075889809456972816034&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I2281FWH"
                      >
                        Монитор AOC I2281FWH
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-aoc-i2281fwh/13857340/reviews?show-uid=15435075889809456972816034"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>50 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13857340,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              подставка
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 21.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT AH-IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13857340,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            25 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-aoc-i2281fwh/13857340/offers?track=srchlink&show-uid=15435075889809456972816034"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">263,78 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-aoc-i2281fwh/13857340/offers?track=srchbtn&show-uid=15435075889809456972816034&context=search"
                      >
                        13 предложений
                      </a>{" "}
                      от <span className="price">261,72 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13857340,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-14172191"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:14172191,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:14172191}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:14172191,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F396FHI,modelId:14172191,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1220464/img_id350861039143079260.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:14172191,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F396FHI,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1220464/img_id350861039143079260.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-samsung-c24f396fhi/14172191?show-uid=15435075889809456972816035&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F396FHI"
                  >
                    <img
                      className="image"
                      src="./old/6hq(33)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F396FHI"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F396FHI"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1220464/img_id350861039143079260.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-samsung-c24f396fhi/14172191?show-uid=15435075889809456972816035&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C24F396FHI"
                      >
                        Монитор Samsung C24F396FHI
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-samsung-c24f396fhi/14172191/reviews?show-uid=15435075889809456972816035"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>10 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:14172191,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        изогнутый экран
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT *VA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:14172191,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            61 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-samsung-c24f396fhi/14172191/offers?track=srchlink&show-uid=15435075889809456972816035"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">284,06 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-samsung-c24f396fhi/14172191/offers?track=srchbtn&show-uid=15435075889809456972816035&context=search"
                      >
                        8 предложений
                      </a>{" "}
                      от <span className="price">282,64 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:14172191,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1732921844"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1732921844,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1732921844}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1732921844,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VP249H,modelId:1732921844,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1374520/img_id270025358348445793.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1732921844,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VP249H,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1374520/img_id270025358348445793.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-asus-vp249h/1732921844?show-uid=15435075889809456972816036&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VP249H"
                  >
                    <img
                      className="image"
                      src="./old/6hq(34)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VP249H"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VP249H"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1374520/img_id270025358348445793.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-asus-vp249h/1732921844?show-uid=15435075889809456972816036&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 ASUS VP249H"
                      >
                        Монитор ASUS VP249H
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-asus-vp249h/1732921844/reviews?show-uid=15435075889809456972816036"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>26 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1732921844,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              подставка
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1732921844,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            73 человека купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-asus-vp249h/1732921844/offers?track=srchlink&show-uid=15435075889809456972816036"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">293,89 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-asus-vp249h/1732921844/offers?track=srchbtn&show-uid=15435075889809456972816036&context=search"
                      >
                        8 предложений
                      </a>{" "}
                      от <span className="price">282,61 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1732921844,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1953762681"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1953762681,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1953762681}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1953762681,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UK850,modelId:1953762681,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/199079/img_id99248789880463539.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1953762681,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UK850,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/199079/img_id99248789880463539.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1953762681,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-27uk850/1953762681?show-uid=15435075889809456972816037&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UK850"
                  >
                    <img
                      className="image"
                      src="./old/6hq(35)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UK850"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UK850"
                      srcSet="//avatars.mds.yandex.net/get-mpic/199079/img_id99248789880463539.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-27uk850/1953762681?show-uid=15435075889809456972816037&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 27UK850"
                      >
                        Монитор LG 27UK850
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-lg-27uk850/1953762681/reviews?show-uid=15435075889809456972816037"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>7 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1953762681,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 27"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT AH-IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 3840x2160 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1953762681,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            33 человека купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-27uk850/1953762681/offers?track=srchlink&show-uid=15435075889809456972816037"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">1 295,66 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-lg-27uk850/1953762681/offers?track=srchbtn&show-uid=15435075889809456972816037&context=search"
                      >
                        11 предложений
                      </a>{" "}
                      от <span className="price">1 273 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1953762681,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1731656793"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1731656793,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1731656793}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1731656793,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL E2418HN,modelId:1731656793,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1111879/img_id6101455818424209679.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1731656793,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL E2418HN,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1111879/img_id6101455818424209679.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-dell-e2418hn/1731656793?show-uid=15435075889809456972816038&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL E2418HN"
                  >
                    <img
                      className="image"
                      src="./old/6hq(36)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL E2418HN"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL E2418HN"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1111879/img_id6101455818424209679.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-dell-e2418hn/1731656793?show-uid=15435075889809456972816038&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL E2418HN"
                      >
                        Монитор DELL E2418HN
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-dell-e2418hn/1731656793/reviews?show-uid=15435075889809456972816038"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>1 отзыв</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-dell-e2418hn/1731656793/offers?track=srchlink&show-uid=15435075889809456972816038"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">304,52 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-dell-e2418hn/1731656793/offers?track=srchbtn&show-uid=15435075889809456972816038&context=search"
                      >
                        10 предложений
                      </a>{" "}
                      от <span className="price">304,52 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731656793,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13477400"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13477400,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13477400}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13477400,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58VQ,modelId:13477400,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id3508290889924278565/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13477400,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58VQ,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id3508290889924278565/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-22mp58vq/13477400?show-uid=15435075889809456972816039&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58VQ"
                  >
                    <img
                      className="image"
                      src="./old/6hq(37)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58VQ"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58VQ"
                      srcSet="//avatars.mds.yandex.net/get-mpic/195452/img_id3508290889924278565/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-22mp58vq/13477400?show-uid=15435075889809456972816039&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MP58VQ"
                      >
                        Монитор LG 22MP58VQ
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-lg-22mp58vq/13477400/reviews?show-uid=15435075889809456972816039"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>12 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13477400,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 21.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <span
                        className="n-badge-bestseller b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_bestseller n-reasons-to-buy_isShown_false  n-badge-bestseller_js_inited b-spy-visible_js_inited"
                        data-bem="{n-badge-bestseller:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13477400,taggedEntity:bestseller,isShown:false}}}"
                      />
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13477400,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            202 человека купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-22mp58vq/13477400/offers?track=srchlink&show-uid=15435075889809456972816039"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">240,80 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-lg-22mp58vq/13477400/offers?track=srchbtn&show-uid=15435075889809456972816039&context=search"
                      >
                        17 предложений
                      </a>{" "}
                      от <span className="price">240,80 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13477400,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-47419270"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:47419270,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:47419270}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:47419270,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2419H,modelId:47419270,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1363658/img_id2442122118898106600.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:47419270,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2419H,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1363658/img_id2442122118898106600.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-dell-s2419h/47419270?show-uid=15435075889809456972816040&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2419H"
                  >
                    <img
                      className="image"
                      src="./old/6hq(38)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2419H"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2419H"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1363658/img_id2442122118898106600.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-dell-s2419h/47419270?show-uid=15435075889809456972816040&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL S2419H"
                      >
                        Монитор DELL S2419H
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-dell-s2419h/47419270/reviews?show-uid=15435075889809456972816040"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>4 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:47419270,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        яркость 250 кд/м2
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-dell-s2419h/47419270/offers?track=srchlink&show-uid=15435075889809456972816040"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">396,14 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-dell-s2419h/47419270/offers?track=srchbtn&show-uid=15435075889809456972816040&context=search"
                      >
                        11 предложений
                      </a>{" "}
                      от <span className="price">392,37 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:47419270,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13545447"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13545447,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13545447}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13545447,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC E2475SWJ,modelId:13545447,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id4915971955011706261/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13545447,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC E2475SWJ,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id4915971955011706261/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-aoc-e2475swj/13545447?show-uid=15435075889809456972816041&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC E2475SWJ"
                  >
                    <img
                      className="image"
                      src="./old/6hq(39)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC E2475SWJ"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC E2475SWJ"
                      srcSet="//avatars.mds.yandex.net/get-mpic/96484/img_id4915971955011706261/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-aoc-e2475swj/13545447?show-uid=15435075889809456972816041&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC E2475SWJ"
                      >
                        Монитор AOC E2475SWJ
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <div className="n-snippet-card2__rating">
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13545447,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.6"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT TN
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-aoc-e2475swj/13545447/offers?track=srchlink&show-uid=15435075889809456972816041"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">288,91 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-aoc-e2475swj/13545447/offers?track=srchbtn&show-uid=15435075889809456972816041&context=search"
                      >
                        12 предложений
                      </a>{" "}
                      от <span className="price">278,40 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13545447,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-224174933"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:224174933,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:224174933}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:224174933,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG270Ubmiipx,modelId:224174933,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1453843/img_id500577457024111484.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:224174933,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG270Ubmiipx,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1453843/img_id500577457024111484.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div className="stickers__sticker stickers__sticker_type_new">
                    Новинка
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-acer-nitro-vg270ubmiipx/224174933?show-uid=15435075889809456972816042&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG270Ubmiipx"
                  >
                    <img
                      className="image"
                      src="./old/6hq(40)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG270Ubmiipx"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG270Ubmiipx"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1453843/img_id500577457024111484.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-acer-nitro-vg270ubmiipx/224174933?show-uid=15435075889809456972816042&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Acer Nitro VG270Ubmiipx"
                      >
                        Монитор Acer Nitro VG270Ubmiipx
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers" />
                  </div>
                  <div className="n-snippet-card2__content">
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        игровой ЖК-монитор с диагональю 27"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 2560x1440 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-acer-nitro-vg270ubmiipx/224174933/offers?track=srchlink&show-uid=15435075889809456972816042"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">784,22 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-acer-nitro-vg270ubmiipx/224174933/offers?track=srchbtn&show-uid=15435075889809456972816042&context=search"
                      >
                        1 предложение
                      </a>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:224174933,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1731629610"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1731629610,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1731629610}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1731629610,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I240SXH,modelId:1731629610,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1365202/img_id1665638133132588646.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1731629610,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I240SXH,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1365202/img_id1665638133132588646.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-aoc-i240sxh/1731629610?show-uid=15435075889809456972816043&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I240SXH"
                  >
                    <img
                      className="image"
                      src="./old/6hq(41)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I240SXH"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I240SXH"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1365202/img_id1665638133132588646.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-aoc-i240sxh/1731629610?show-uid=15435075889809456972816043&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC I240SXH"
                      >
                        Монитор AOC I240SXH
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-aoc-i240sxh/1731629610/reviews?show-uid=15435075889809456972816043"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>9 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731629610,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.8"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        изогнутый экран
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731629610,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            25 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-aoc-i240sxh/1731629610/offers?track=srchlink&show-uid=15435075889809456972816043"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">311,18 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-aoc-i240sxh/1731629610/offers?track=srchbtn&show-uid=15435075889809456972816043&context=search"
                      >
                        5 предложений
                      </a>{" "}
                      от <span className="price">308,35 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1731629610,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1729139455"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1729139455,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1729139455}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1729139455,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Iiyama G-Master G2730HSU-1,modelId:1729139455,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/466729/img_id3602141723972096652/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1729139455,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Iiyama G-Master G2730HSU-1,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/466729/img_id3602141723972096652/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729139455,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-iiyama-g-master-g2730hsu-1/1729139455?show-uid=15435075889809456972816044&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Iiyama G-Master G2730HSU-1"
                  >
                    <img
                      className="image"
                      src="./old/6hq(42)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Iiyama G-Master G2730HSU-1"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Iiyama G-Master G2730HSU-1"
                      srcSet="//avatars.mds.yandex.net/get-mpic/466729/img_id3602141723972096652/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-iiyama-g-master-g2730hsu-1/1729139455?show-uid=15435075889809456972816044&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Iiyama G-Master G2730HSU-1"
                      >
                        Монитор Iiyama G-Master G2730HSU-1
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-iiyama-g-master-g2730hsu-1/1729139455/reviews?show-uid=15435075889809456972816044"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>5 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729139455,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Качество сборки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        игровой ЖК-монитор с диагональю 27"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT TN
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729139455,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            27 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-iiyama-g-master-g2730hsu-1/1729139455/offers?track=srchlink&show-uid=15435075889809456972816044"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">450,08 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-iiyama-g-master-g2730hsu-1/1729139455/offers?track=srchbtn&show-uid=15435075889809456972816044&context=search"
                      >
                        9 предложений
                      </a>{" "}
                      от <span className="price">450,08 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1729139455,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-1827806183"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1827806183,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1827806183}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1827806183,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC Q3279VWF,modelId:1827806183,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/372220/img_id2870199088718206143.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1827806183,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC Q3279VWF,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/372220/img_id2870199088718206143.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-aoc-q3279vwf/1827806183?show-uid=15435075889809456972816045&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC Q3279VWF"
                  >
                    <img
                      className="image"
                      src="./old/6hq(43)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC Q3279VWF"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC Q3279VWF"
                      srcSet="//avatars.mds.yandex.net/get-mpic/372220/img_id2870199088718206143.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-aoc-q3279vwf/1827806183?show-uid=15435075889809456972816045&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 AOC Q3279VWF"
                      >
                        Монитор AOC Q3279VWF
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-aoc-q3279vwf/1827806183/reviews?show-uid=15435075889809456972816045"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>4 отзыва</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 31.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT MVA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 2560x1440 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI, HDMI, DisplayPort
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-aoc-q3279vwf/1827806183/offers?track=srchlink&show-uid=15435075889809456972816045"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">457,96 б.p.</div>
                          </a>
                        </div>
                      </div>
                      <div className="n-snippet-card2__sub-price">
                        <div className="price price_unactual_yes">
                          <span className="price price_unactual_yes">
                            530,50 б.p.
                          </span>
                        </div>
                      </div>
                      <div className="n-snippet-card2__price-stickers stickers">
                        <div className="stickers__sticker stickers__sticker_type_discount">
                          <span className="sticker_type_discount__text">
                            -14%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-aoc-q3279vwf/1827806183/offers?track=srchbtn&show-uid=15435075889809456972816045&context=search"
                      >
                        15 предложений
                      </a>{" "}
                      от <span className="price">457,96 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1827806183,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-7349236"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:7349236,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:7349236}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:7349236,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL U2412M,modelId:7349236,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/1362400/img_id4175615829956550791.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:7349236,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL U2412M,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/1362400/img_id4175615829956550791.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:7349236,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-dell-u2412m/7349236?show-uid=15435075889809456972816046&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL U2412M"
                  >
                    <img
                      className="image"
                      src="./old/6hq(44)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL U2412M"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL U2412M"
                      srcSet="//avatars.mds.yandex.net/get-mpic/1362400/img_id4175615829956550791.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-dell-u2412m/7349236?show-uid=15435075889809456972816046&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 DELL U2412M"
                      >
                        Монитор DELL U2412M
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-dell-u2412m/7349236/reviews?show-uid=15435075889809456972816046"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>169 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:7349236,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              подставка
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 24"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT E-IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1200 (16:10)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI, DisplayPort
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        яркость 300 кд/м2
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:7349236,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            21 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-dell-u2412m/7349236/offers?track=srchlink&show-uid=15435075889809456972816046"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">521,46 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-dell-u2412m/7349236/offers?track=srchbtn&show-uid=15435075889809456972816046&context=search"
                      >
                        31 предложение
                      </a>{" "}
                      от <span className="price">497,48 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:7349236,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-12795772"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:12795772,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:12795772}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:12795772,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 246E7QDSW,modelId:12795772,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id777796987378332679/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:12795772,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 246E7QDSW,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/96484/img_id777796987378332679/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-philips-246e7qdsw/12795772?show-uid=15435075889809456972816047&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 246E7QDSW"
                  >
                    <img
                      className="image"
                      src="./old/6hq(45)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 246E7QDSW"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 246E7QDSW"
                      srcSet="//avatars.mds.yandex.net/get-mpic/96484/img_id777796987378332679/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-philips-246e7qdsw/12795772?show-uid=15435075889809456972816047&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Philips 246E7QDSW"
                      >
                        Монитор Philips 246E7QDSW
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-philips-246e7qdsw/12795772/reviews?show-uid=15435075889809456972816047"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">5.0</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>6 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:12795772,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 23.6"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT PLS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, DVI, HDMI, MHL
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item" />
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-philips-246e7qdsw/12795772/offers?track=srchlink&show-uid=15435075889809456972816047"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">339,58 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-philips-246e7qdsw/12795772/offers?track=srchbtn&show-uid=15435075889809456972816047&context=search"
                      >
                        12 предложений
                      </a>{" "}
                      от <span className="price">331,48 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:12795772,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited"
                data-id="model-13793434"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:13793434,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:13793434}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:13793434,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F591FDI,modelId:13793434,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id4758796771694838858/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:13793434,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F591FDI,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/195452/img_id4758796771694838858/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers" />
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-samsung-c27f591fdi/13793434?show-uid=15435075889809456972816048&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F591FDI"
                  >
                    <img
                      className="image"
                      src="./old/6hq(46)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F591FDI"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F591FDI"
                      srcSet="//avatars.mds.yandex.net/get-mpic/195452/img_id4758796771694838858/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-samsung-c27f591fdi/13793434?show-uid=15435075889809456972816048&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Samsung C27F591FDI"
                      >
                        Монитор Samsung C27F591FDI
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews"
                        href="https://market.yandex.by/product--monitor-samsung-c27f591fdi/13793434/reviews?show-uid=15435075889809456972816048"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>21 отзыв</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793434,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              Внешний вид
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 27"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        изогнутый экран
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT *VA
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793434,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            35 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-samsung-c27f591fdi/13793434/offers?track=srchlink&show-uid=15435075889809456972816048"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">473,84 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem"
                        href="https://market.yandex.by/product--monitor-samsung-c27f591fdi/13793434/offers?track=srchbtn&show-uid=15435075889809456972816048&context=search"
                      >
                        15 предложений
                      </a>{" "}
                      от <span className="price">473,84 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:13793434,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
              <div
                className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited n-snippet-card2_js_inited"
                data-id="model-1964854237"
                data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1964854237,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1964854237}},b-spy-visible:}"
              >
                <div className="n-snippet-card2__hover">
                  <div className="n-snippet-card2__toolbar">
                    <div
                      className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
                      data-bem="{n-product-toolbar: }"
                    >
                      <a
                        className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited wishlist-control_js_inited metrika_js_inited"
                        data-bem="{wishlist-control:{item:{type:model,itemId:1964854237,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MK430H,modelId:1964854237,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/397397/img_id8615912146160404328.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
                      >
                        <i className="image image_name_favorite" />
                        <i className="image image_name_favorite-activated" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Отложить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          Отложено
                        </span>
                        <div
                          className="popup2 popup2_target_anchor popup2_autoclosable_yes popup2_theme_normal tooltip tooltip_size_xs tooltip_theme_normal tooltip_autoclosable_yes hint__tooltip i-bem tooltip_js_inited"
                          data-bem="{popup2:{mainOffset:10,directions:[top-center]}}"
                        >
                          <div className="popup2__tail" />
                          <div className="tooltip__content">
                            Добавить в отложенные
                          </div>
                        </div>
                      </a>
                      <div
                        className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited"
                        data-bem="{n-user-lists_type_compare:{id:1964854237,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MK430H,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/397397/img_id8615912146160404328.jpeg/2hq},link:/compare?track=rmmbr,inComparison:false},hint:{to:top}}"
                      >
                        <i className="image image_name_compare" />
                        <i className="image image_name_compare-in-list" />
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_no">
                          Сравнить
                        </span>
                        <span className="n-product-toolbar__item-label n-product-toolbar__item-label_activated_yes">
                          В сравнении
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__stickers">
                  <div
                    className="n-reasons-to-buy n-reasons-to-buy_type_recommend b-zone b-spy-visible i-bem n-reasons-to-buy_tag_recommend n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                    data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1964854237,taggedEntity:recommend}}}"
                  >
                    <div className="n-reasons-to-buy__content">
                      <span className="n-reasons-to-buy__label">
                        Выбор покупателей
                      </span>
                      <div
                        data-bem="{popup:{directions:{to:bottom,axis:left,offset:{top:5},tail:{offset:{left:-40}}}}}"
                        className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                      >
                        <div className="popup__under  " />
                        <i className="popup__tail" />
                        <div className="popup__content">
                          Больше 80% покупателей советуют купить этот товар в
                          своих отзывах на Маркете.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
                  <a
                    className="n-snippet-card2__image link"
                    href="https://market.yandex.by/product--monitor-lg-22mk430h/1964854237?show-uid=15435075889809456972816049&nid=54539&context=search"
                    title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MK430H"
                  >
                    <img
                      className="image"
                      src="./old/6hq(47)"
                      title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MK430H"
                      alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MK430H"
                      srcSet="//avatars.mds.yandex.net/get-mpic/397397/img_id8615912146160404328.jpeg/9hq 1.5x"
                    />
                  </a>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
                  <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
                    <div className="n-snippet-card2__title">
                      <a
                        className="link n-link_theme_blue"
                        href="https://market.yandex.by/product--monitor-lg-22mk430h/1964854237?show-uid=15435075889809456972816049&nid=54539&context=search"
                        title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 LG 22MK430H"
                      >
                        Монитор LG 22MK430H
                      </a>
                    </div>
                    <div className="n-snippet-card2__header-stickers">
                      <a
                        className="n-snippet-card2__rating link link_theme_gray link_type_reviews i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-lg-22mk430h/1964854237/reviews?show-uid=15435075889809456972816049"
                      >
                        <div
                          className="rating hint i-bem rating_outline_yes"
                          date-rate={5}
                          data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA04.5\xA0\u0438\u0437\xA05,offset:15}}"
                        >
                          <div className="rating__value">4.5</div>
                          <div className="rating__corner">
                            <div className="rating__triangle" />
                          </div>
                        </div>
                        <span>13 отзывов</span>
                      </a>
                    </div>
                  </div>
                  <div className="n-snippet-card2__content">
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1964854237,taggedEntity:best}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            Покупателям нравится{" "}
                            <span className="n-reason-to-buy__best-item">
                              качество картинки
                            </span>
                            ,{" "}
                            <span className="n-reason-to-buy__best-item">
                              Цветопередача
                            </span>
                          </span>
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              Характеристики, которые покупатели отметили
                              высокой оценкой в отзывах
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
                      <li className="n-snippet-card2__desc-item">
                        ЖК-монитор с диагональю 21.5"
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        тип матрицы экрана TFT AH-IPS
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        разрешение 1920x1080 (16:9)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подсветка без мерцания (Flicker-Free)
                      </li>
                      <li className="n-snippet-card2__desc-item">
                        подключение: VGA, HDMI
                      </li>
                    </ul>
                    <div className="n-snippet-card2__reasons-to-buy-item">
                      <div
                        className="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited"
                        data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1964854237,taggedEntity:interest}}}"
                      >
                        <div className="n-reasons-to-buy__content">
                          <span className="n-reasons-to-buy__label">
                            27 человек купили этот товар
                          </span>
                          <div className="n-reasons-to-buy__bottom" />
                          <div
                            data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                            className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                          >
                            <div className="popup__under  " />
                            <i className="popup__tail" />
                            <div className="popup__content">
                              По данным Яндекс.Маркета за 2 месяца.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
                  <div className="n-snippet-card2__top">
                    <div className="n-snippet-card2__price">
                      <div className="n-snippet-card2__main-price">
                        <div className="n-snippet-card2__main-price-wrapper">
                          <a
                            className="link n-smart-link i-bem n-smart-link_js_inited"
                            href="https://market.yandex.by/product--monitor-lg-22mk430h/1964854237/offers?track=srchlink&show-uid=15435075889809456972816049"
                            data-bem="{n-smart-link:{subscriptions:[filters]}}"
                          >
                            <div className="price">215,93 б.p.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="n-snippet-card2__more-prices-link">
                      <a
                        className="link n-link_theme_blue link_type_prices i-bem link_js_inited"
                        href="https://market.yandex.by/product--monitor-lg-22mk430h/1964854237/offers?track=srchbtn&show-uid=15435075889809456972816049&context=search"
                      >
                        16 предложений
                      </a>{" "}
                      от <span className="price">215,93 б.p.</span>
                    </div>
                    <div
                      className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited"
                      data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1964854237,taggedEntity:review,isShown:false}}}"
                    />
                  </div>
                  <div className="n-snippet-card2__bottom" />
                </div>
              </div>
            */}
            </div>
            <PagerMore />
            <Pager />
            <SerpSearch />
            <div className="n-search-result__recommendations" />
            <LegalInfo />
          </div>
        </div>
        <BrandsCarousel />
        <ReviewsHub />
        <PopularSearch />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.goods.isLoading,
  items: state.goods.items,
})

export default connect(mapStateToProps)(SearchResultsNormal)
