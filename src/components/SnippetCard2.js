import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import { noun } from 'plural-ru'

class SnippetCard2 extends React.Component {
  render() {
    const {
      id,
      title,
      price,
      badge,
      photo,
      rating,
      reviews,
      matrix,
      diagonal,
      resolution,
      connect,
      like,
      purchaced,
      offers,
      minPrice,
      isFlickerFree,
      bright,
      frequency,
    } = this.props
    return (
      <div
        className="n-snippet-card2 i-bem b-zone b-spy-visible b-spy-visible_js_inited n-snippet-card2_js_inited b-zone_js_inited"
        data-id="model-1963924408"
        data-bem="{n-snippet-card2:{context:search,type:model,clickActionType:clickout,modelId:1963924408,entity:product},b-zone:{name:snippet-card2,data:{isCpa20:false,id:1963924408}},b-spy-visible:}"
      >
        <div className="n-snippet-card2__hover">
          <div className="n-snippet-card2__toolbar">
            <div
              className="n-product-toolbar i-bem  n-product-toolbar_label_no n-product-toolbar_js_inited"
              data-bem="{n-product-toolbar: }"
            >
              <a
                href="/"
                className="n-product-toolbar__item link link_theme_minor wishlist-control wishlist-control_type_toggle pseudo-checkbox hint b-zone b-spy-events i-bem pseudo-checkbox_js_inited hint_js_inited pseudo-checkbox_checked_yes wishlist-control_js_inited metrika_js_inited"
                data-bem="{wishlist-control:{item:{type:model,itemId:1963924408,hid:91052,displayName:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Viewsonic VA2719-2K-smhd,modelId:1963924408,addSign:true},image:{url://avatars.mds.yandex.net/get-mpic/466729/img_id5595280924220369215.jpeg/2hq}},hint:{to:top,content:\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\xA0\u0432\xA0\u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435},pseudo-checkbox:,metrika:,b-zone:{name:to-wishlist}}"
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
                  <div className="tooltip__content">Добавить в отложенные</div>
                </div>
              </a>
              <div
                className="n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_yes n-user-lists_type_compare_js_inited hint_js_inited _popup2-destructor _popup2-destructor_js_inited link_js_inited"
                data-bem="{n-user-lists_type_compare:{id:1963924408,name:\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Viewsonic VA2719-2K-smhd,hid:91052,catname:\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u044B,image:{url://avatars.mds.yandex.net/get-mpic/466729/img_id5595280924220369215.jpeg/2hq},link:/compare?track=rmmbr,inComparison:true},hint:{to:top}}"
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
          {/* <div
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
                  </div> */}

          <div className="stickers__sticker stickers__sticker_type_new">Новинка</div>

          {/* <div className="stickers__sticker stickers__sticker_type_discount">
                          <span className="sticker_type_discount__text">
                            -14%
                          </span>
                        </div> */}
        </div>
        <div className="n-snippet-card2__part n-snippet-card2__part_type_left">
          <a
            className="n-snippet-card2__image link i-bem link_js_inited"
            href="https://market.yandex.by/product--monitor-viewsonic-va2719-2k-smhd/1963924408?show-uid=15435075889809456972816001&nid=54539&context=search"
            title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Viewsonic VA2719-2K-smhd"
          >
            <img
              className="image"
              src={`/images/${photo}`}
              title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Viewsonic VA2719-2K-smhd"
              alt="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Viewsonic VA2719-2K-smhd"
            />
          </a>
        </div>
        <div className="n-snippet-card2__part n-snippet-card2__part_type_center">
          <div className="n-snippet-card2__header n-snippet-card2__header_has_rating">
            <div className="n-snippet-card2__title">
              <a
                className="link n-link_theme_blue i-bem link_js_inited"
                href={`/review?id=${id}`}
                title="\u041C\u043E\u043D\u0438\u0442\u043E\u0440 Viewsonic VA2719-2K-smhd"
              >
                {title}
              </a>
            </div>
            <div className="n-snippet-card2__header-stickers">
              <a
                className="n-snippet-card2__rating link link_theme_gray link_type_reviews i-bem link_js_inited"
                href="/review"
              >
                <Tooltip placement="right" title={`Рейтинг модели ${rating} из 5`}>
                  <div
                    className="rating hint i-bem rating_outline_yes"
                    date-rate={5}
                    data-bem="{hint:{content:\u0420\u0435\u0439\u0442\u0438\u043D\u0433\xA0\u043C\u043E\u0434\u0435\u043B\u0438\xA05\xA0\u0438\u0437\xA05,offset:15}}"
                  >
                    <div className="rating__value">{rating}</div>
                    <div className="rating__corner">
                      <div className="rating__triangle" />
                    </div>
                  </div>
                </Tooltip>
                {reviews && (
                  <span>
                    {reviews} {noun(reviews, 'отзыв', 'отзыва', 'отзывов')}
                  </span>
                )}
              </a>
            </div>
          </div>
          <div className="n-snippet-card2__content">
            {like && (
              <div className="n-snippet-card2__reasons-to-buy-item">
                <div
                  className="n-reasons-to-buy n-reasons-to-buy_type_best b-zone b-spy-visible i-bem n-reasons-to-buy_tag_best n-reasons-to-buy_js_inited b-spy-visible_js_inited b-zone_js_inited"
                  data-bem="{n-reasons-to-buy:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1963924408,taggedEntity:best}}}"
                >
                  <div className="n-reasons-to-buy__content">
                    <span className="n-reasons-to-buy__label">
                      Покупателям нравится{' '}
                      {like.map((item, index) => {
                        const delimiter = index === like.length - 1 ? '' : ', '
                        return (
                          <Fragment key={item}>
                            <span className="n-reason-to-buy__best-item">{item}</span>
                            {delimiter}
                          </Fragment>
                        )
                      })}
                    </span>
                    <div
                      data-bem="{popup:{directions:{to:bottom,axis:left,tail:{axis:left}}}}"
                      className="popup  i-bem  popup_autoclosable_yes  popup_adaptive_yes  popup_animate_yes  popup_theme_info  popup_type_reasons-to-buy popup_js_inited"
                    >
                      <div className="popup__under  " />
                      <i className="popup__tail" />
                      <div className="popup__content">
                        Характеристики, которые покупатели отметили высокой оценкой в отзывах
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <ul className="n-snippet-card2__desc n-snippet-card2__desc_type_list">
              <li className="n-snippet-card2__desc-item">ЖК-монитор с диагональю {diagonal}"</li>
              <li className="n-snippet-card2__desc-item">тип матрицы экрана {matrix}</li>
              <li className="n-snippet-card2__desc-item">разрешение {resolution}</li>
              {connect && (
                <li className="n-snippet-card2__desc-item">подключение: {connect.join(', ')}</li>
              )}
              {bright && <li className="n-snippet-card2__desc-item">яркость {bright} кд/м2</li>}
              {frequency && <li className="n-snippet-card2__desc-item">частота {frequency} Гц</li>}
              {isFlickerFree && <li className="n-snippet-card2__desc-item">Flicker Free</li>}
            </ul>
            <div class="n-snippet-card2__reasons-to-buy-item">
              {purchaced && (
                <Tooltip placement="bottom" title="По данным Яндекс.Маркета за 2 месяца">
                  <div
                    class="n-reasons-to-buy n-reasons-to-buy_type_interest-simple b-zone b-spy-visible i-bem n-reasons-to-buy_tag_interest n-reasons-to-buy_js_inited b-spy-visible_js_inited b-zone_js_inited _popup-destructor _popup-destructor_js_inited"
                    data-bem='{"n-reasons-to-buy":"","b-spy-visible":"","b-zone":{"name":"reason-to-buy","data":{"entity":"product","id":194605098,"taggedEntity":"interest"}}}'
                  >
                    <div class="n-reasons-to-buy__content">
                      <span class="n-reasons-to-buy__label">
                        {purchaced} {noun(purchaced, 'человек', 'человека', 'человек')} человека
                        купили этот товар
                      </span>
                      <div class="n-reasons-to-buy__bottom" />
                    </div>
                  </div>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
        <div className="n-snippet-card2__part n-snippet-card2__part_type_right">
          <div className="n-snippet-card2__top">
            {price && (
              <div className="n-snippet-card2__price">
                <div className="n-snippet-card2__main-price">
                  <div className="n-snippet-card2__main-price-wrapper">
                    <a
                      className="link n-smart-link i-bem n-smart-link_js_inited"
                      href="https://market.yandex.by/product--monitor-viewsonic-va2719-2k-smhd/1963924408/offers?track=srchlink&show-uid=15435075889809456972816001"
                      data-bem="{n-smart-link:{subscriptions:[filters]}}"
                    >
                      <div className="price">{price.toLocaleString()} б.p.</div>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {offers && (
              <div className="n-snippet-card2__more-prices-link">
                <a
                  className="link n-link_theme_blue link_type_prices i-bem link_js_inited"
                  href="https://market.yandex.by/product--monitor-viewsonic-va2719-2k-smhd/1963924408/offers?track=srchbtn&show-uid=15435075889809456972816001&context=search"
                >
                  {offers} {noun(offers, 'предложение', 'предложения', 'предложений')}
                </a>{' '}
                {minPrice && (
                  <Fragment>
                    от <span className="price">{minPrice.toLocaleString()} б.p.</span>
                  </Fragment>
                )}
              </div>
            )}
            <div
              className="n-badge-review b-zone b-spy-visible i-bem n-reasons-to-buy n-reasons-to-buy_tag_review b-spy-visible_js_inited b-zone_js_inited"
              data-bem="{n-badge-review:,b-spy-visible:,b-zone:{name:reason-to-buy,data:{entity:product,id:1963924408,taggedEntity:review,isShown:false}}}"
            />
          </div>
          <div className="n-snippet-card2__bottom" />
        </div>
      </div>
    )
  }
}

SnippetCard2.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  badge: PropTypes.string,
  photo: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  matrix: PropTypes.string.isRequired,
  diagonal: PropTypes.number.isRequired,
  resolution: PropTypes.string.isRequired,
  connect: PropTypes.arrayOf(PropTypes.string),
  like: PropTypes.arrayOf(PropTypes.string),
  purchaced: PropTypes.number,
  offers: PropTypes.number,
  minPrice: PropTypes.number,
  isFlickerFree: PropTypes.bool,
  bright: PropTypes.number,
  frequency: PropTypes.number,
}

SnippetCard2.defaultProps = {
  photo: 'julian.jpg',
}

export default SnippetCard2
