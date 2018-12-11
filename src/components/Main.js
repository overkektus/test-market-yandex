import React from 'react'
import { Button } from 'antd'
import Header from './Header'
import Tabs from './Tabs'
import PageSearch from './PageSearch'
import Layout from './Layout'
import Footer from './Footer'

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />

        <div
          className="n-w-tabs__popup-shadow i-bem"
          style={{
            display: 'none',
          }}
        />
        <Tabs />

        <PageSearch />
        <Layout />
        <div className="n-settings-notifications-popup-opener" />
        {/* <noindex>
          <iframe
            tabIndex={-1}
            className="g-none g-hidden"
            src="./old/remarketing.html"
          />
        </noindex> */}
        <div className="gallery-popup-container" />
        <div
          className="n-notification-center n-notification-center_visibility_no i-bem n-notification-center_js_inited"
          data-bem="{n-notification-center:}"
        />
        <Button>TEST</Button>
        <Footer />
        {/* <iframe
          src="./old/saved_resource.html"
          className="i-flashcookie"
        /> */}
      </div>
    )
  }
}

export default Main
