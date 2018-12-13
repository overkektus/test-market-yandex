import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { dispatch } from '../store'
import { readGoods } from '../ducks/goods'

class PagerMore extends React.Component {
  loadMore = () => {
    dispatch(readGoods({ isLoadMore: true }))
  }

  render() {
    const { isGameOver } = this.props
    return (
      <div
        className="i-bem n-pager-more n-pager-more_js_inited"
        data-bem="{n-pager-more:{page-param:page,current-page:1,total:9436,forceMaxPage:50,per-page:48,url:/api/search?hid=91052}}"
      >
        <div className="pager-more__button pager-loader_preload">
          {/* <a
            href="/"
            className="button button_size_m button_theme_pseudo i-bem button_js_inited"
            role="button"
            data-bem="{button: }"
          >
            <span className="button__text">Показать еще</span>
          </a> */}
          <Button disabled={isGameOver} onClick={this.loadMore}>
            Показать ещё
          </Button>
        </div>
        <div className="spin spin_theme_gray-24 i-bem spin_js_inited" data-bem="{spin: }">
          <img alt="" src="./old/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" className="image spin__icon" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isGameOver: state.goods.isGameOver,
})

export default connect(mapStateToProps)(PagerMore)
