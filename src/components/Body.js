import React from 'react'
import Main from './Main'

class Body extends React.Component {
  render() {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            position: 'absolute',
            width: 0,
            height: 0,
          }}
          id="__SVG_SPRITE_NODE__"
        >
          <symbol id="icons">
            <symbol viewBox="0 0 24 24" id="icons_arrow-down">
              <path
                fillRule="evenodd"
                d="M11 4v12.176l-5.583-5.583-1.414 1.414L12 20.004l7.997-7.997-1.414-1.414L13 16.176V4z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_arrow-left">
              <path
                fillRule="evenodd"
                d="M20 11H7.824l5.583-5.583-1.414-1.414L3.996 12l7.997 7.997 1.414-1.414L7.824 13H20z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_arrow-right">
              <path
                fillRule="evenodd"
                d="M4 13h12.176l-5.583 5.583 1.414 1.414L20.004 12l-7.997-7.997-1.414 1.414L16.176 11H4z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_arrow-up">
              <path
                fillRule="evenodd"
                d="M13 20V7.824l5.583 5.583 1.414-1.414L12 3.996l-7.997 7.997 1.414 1.414L11 7.824V20z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_attachment">
              <path
                fillRule="evenodd"
                d="M10.63 23.024L9.216 21.61l9.4-9.4c1.748-1.748 1.86-4.698.25-6.577l-.17-.197c-.754-.882-1.781-1.39-2.89-1.433-1.09-.04-2.17.387-2.992 1.208L4.76 13.264c-.49.49-.76 1.143-.761 1.838-.001.63.22 1.225.627 1.696a2.608 2.608 0 0 0 3.533-.143l8.27-8.27L17.844 9.8l-8.27 8.27a4.613 4.613 0 0 1-6.215.276l-.012.012-.275-.274-.006-.007h-.001l-.001-.002.012-.012A4.566 4.566 0 0 1 2 15.102a4.574 4.574 0 0 1 1.347-3.252L11.4 3.797c1.219-1.22 2.81-1.859 4.484-1.793 1.67.064 3.21.821 4.332 2.13l.17.198c2.274 2.653 2.115 6.822-.356 9.292l-9.4 9.4z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_bankcard-outline">
              <path d="M3 5h18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v3h18V7H3zm0 5v6h18v-6H3z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_bankcard">
              <path d="M23 9H1V7a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v2zm0 3v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6h22z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_basket">
              <path
                fillRule="evenodd"
                d="M8 6h14v5.045a2 2 0 0 1-1.384 1.903L9.65 16.5 5 4H2V2h4.5L8 6zm8 14c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM5 20c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_bell-ring">
              <path
                fillRule="evenodd"
                d="M19.155 19.37l-1.622-2.317.868-4.924a6.501 6.501 0 0 0-3.358-6.871l.316-1.79-3.939-.693-.317 1.789A6.5 6.5 0 0 0 5.598 9.87l-.868 4.925-2.316 1.622-.174.985L10 18.77v.729a2 2 0 1 0 4 0v-.024l4.981.879.174-.985z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_bell">
              <path
                fillRule="evenodd"
                d="M20.5 18l-2-2v-5A6.5 6.5 0 0 0 14 4.817V3h-4v1.817A6.5 6.5 0 0 0 5.5 11v5l-2 2v1H10v.5a2 2 0 0 0 4 0V19h6.5v-1z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_bullet">
              <circle cx={12} cy={12} r={3} fillRule="evenodd" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_burger">
              <path fillRule="evenodd" d="M2 6V4h20v2H2zm0 7v-2h20v2H2zm0 7v-2h20v2H2z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_camera">
              <path
                fillRule="evenodd"
                d="M12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm5-11l-1.25-3h-7.5L7 6H1v15h22V6h-6z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_catalog">
              <path
                fillRule="evenodd"
                d="M3 6V4h2.5v2H3zm5.5 14v-2H21v2H8.5zM3 20v-2h2.5v2H3zm0-7v-2h2.5v2H3zm5.5 0v-2H21v2H8.5zm0-7V4H21v2H8.5z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_clear">
              <path
                fillRule="evenodd"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.412-13.998l-1.414-1.414L12 10.586 8.002 6.588 6.588 8.002 10.586 12l-3.998 3.998 1.414 1.414L12 13.414l3.998 3.998 1.414-1.414L13.414 12l3.998-3.998z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_clock-outline">
              <path
                fillRule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m0 2c4.963 0 9 4.038 9 9s-4.037 9-9 9-9-4.038-9-9 4.037-9 9-9zm5 12v-2h-5V6h-2v9h7z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_clock">
              <path
                fillRule="evenodd"
                d="M17 15h-7V6h2v7h5v2zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_code-scanner">
              <path
                fillRule="evenodd"
                d="M4 6v2H2V4h4v2H4zm2 10V8h2v8H6zm3 0V8h1v8H9zm5 0V8h1v8h-1zm2 0V8h2v8h-2zm-5 0V8h2v8h-2zm-7 0v2h2v2H2v-4h2zm16-8V6h-2V4h4v4h-2zm-2 10h2v-2h2v4h-4v-2z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_comment-outline">
              <path
                fillRule="evenodd"
                d="M12 4.016c-5.96 0-10.792 3.358-10.792 7.5 0 2.511 1.783 4.728 4.509 6.09-.462 1.647-1.324 3.494-1.673 4.211a.157.157 0 0 0 .182.221c1.028-.278 4.204-1.247 6.392-3.09.454.04.913.068 1.382.068 5.96 0 10.792-3.358 10.792-7.5 0-4.142-4.832-7.5-10.792-7.5m0 13c-.742 0-1.459-.064-2.147-.173-.66.733-1.547 1.624-2.535 2.345-.13.095-.305-.047-.241-.194.251-.578.654-1.56.969-2.572-2.828-.897-4.785-2.72-4.831-4.83-.001-.025-.007-.05-.007-.076 0-.057.012-.113.014-.169.145-2.954 4.022-5.33 8.778-5.33 4.848 0 8.792 2.466 8.792 5.5 0 3.032-3.944 5.5-8.792 5.5"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_comment">
              <path
                fillRule="evenodd"
                d="M12 4C6.04 4 1.208 7.358 1.208 11.5c0 2.511 1.783 4.728 4.509 6.09-.462 1.647-1.324 3.494-1.673 4.211a.157.157 0 0 0 .182.221c1.028-.278 4.204-1.247 6.392-3.09.454.04.913.068 1.382.068 5.96 0 10.792-3.358 10.792-7.5C22.792 7.358 17.96 4 12 4"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_compare-list">
              <path
                fillRule="evenodd"
                d="M3 6V4h18v2H3zm0 7v-2h18v2H3zm0 7v-2h8v2H3zm18-2v2h-2.5v2.5h-2V20H14v-2h2.5v-2.5h2V18H21z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_copy">
              <path fillRule="evenodd" d="M5 2h12v2H5v14H3V2h2zm2 4h14v16H7V6z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_corner-down">
              <path
                fillRule="evenodd"
                d="M19.997 10.007L12 18.004l-7.997-7.997 1.414-1.414L12 15.176l6.583-6.583z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_corner-left">
              <path
                fillRule="evenodd"
                d="M13.993 19.997L5.996 12l7.997-7.997 1.414 1.414L8.824 12l6.583 6.583z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_corner-right">
              <path
                fillRule="evenodd"
                d="M10.007 4.003L18.004 12l-7.997 7.997-1.414-1.414L15.176 12 8.593 5.417z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_corner-up">
              <path
                fillRule="evenodd"
                d="M4.003 13.993L12 5.996l7.997 7.997-1.414 1.414L12 8.824l-6.583 6.583z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_cross">
              <path
                fillRule="evenodd"
                d="M18.997 6.417l-1.414-1.414L12 10.586 6.417 5.003 5.003 6.417 10.586 12l-5.583 5.583 1.414 1.414L12 13.414l5.583 5.583 1.414-1.414L13.414 12z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_edit">
              <path
                fillRule="evenodd"
                d="M18 2l4 4-2 1.999L16 4l2-2zM3 17L14.655 5.343l4 4.001L7.001 21 2 22l1-5z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_fullscreen">
              <path
                fillRule="evenodd"
                d="M16 2v2h4v3.999h1.999V2H16zM2 2v5.999h1.999V4H8V2H2zm18 13.999v4.002h-4V22h5.999v-6.001H20zm-18 0V22h6v-1.999H3.999v-4.002H2z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_gear">
              <path
                fillRule="evenodd"
                d="M12.106 17.97a5.98 5.98 0 0 0 5.28-3.299c.02-.039.045-.053.064-.092.366-.776.591-1.59.591-2.505v-.284c0-.292-.057-.577-.106-.857-.001-.005-.02-.009-.021-.014a5.991 5.991 0 0 0-4.957-4.857c-.049-.008-.098-.01-.147-.017a5.972 5.972 0 0 0-.796-.047h.027v-.023c-2 0-4.417 1.37-5.395 3.357-.016.034-.046.067-.062.101a5.956 5.956 0 0 0-.571 2.542 5.994 5.994 0 0 0 5.102 5.925c.038.006.076.013.115.018.257.033.517.057.783.057.032 0 .062-.005.093-.005zm10.757-3.495l-3.133-.424a7.951 7.951 0 0 1-1.299 2.679l2.292 2.191-1.381 1.446-2.288-2.187a8.002 8.002 0 0 1-2.62 1.418l.565 3.109-1.967.357-.566-3.112c-.151.008-.3.023-.453.023a7.957 7.957 0 0 1-2.509-.409L8.165 22.35l-1.803-.867L7.7 18.702a8.072 8.072 0 0 1-2.172-2.061l-2.706 1.457-.947-1.761 2.695-1.451a7.936 7.936 0 0 1-.557-2.911c0-.017.003-.032.003-.049L1 11.519l.267-1.983 3.017.408a7.967 7.967 0 0 1 1.307-2.719L3.392 5.124l1.381-1.446 2.194 2.096a7.987 7.987 0 0 1 2.661-1.436l-.541-2.981L11.053 1l.545 2.996c.138-.007.275-.021.415-.021.899 0 1.76.155 2.568.43l1.348-2.802 1.803.867-1.352 2.81a8.052 8.052 0 0 1 2.16 2.084l2.76-1.486.948 1.761-2.767 1.49c.339.885.532 1.842.532 2.846 0 .032-.004.063-.005.095l3.122.422-.267 1.983z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_geo">
              <path
                fillRule="evenodd"
                d="M11.954 13.62c-2.968 0-5.374-2.366-5.374-5.287 0-2.92 2.406-5.287 5.374-5.287 2.968 0 5.374 2.367 5.374 5.287s-2.406 5.287-5.374 5.287m0-2.217c-1.723 0-3.12-1.374-3.12-3.07 0-1.695 1.397-3.07 3.12-3.07s3.12 1.375 3.12 3.07c0 1.696-1.397 3.07-3.12 3.07m7.453-3.07C19.407 4.283 16.07 1 11.954 1 7.837 1 4.5 4.283 4.5 8.333c0 4.05 3.337 7.334 7.454 7.334.228 0 .454-.01.677-.03-.113 1.502-.578 4.794-1.355 8.363 5.69-9.028 8.131-10.778 8.131-15.667"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_globe-outline">
              <path
                fillRule="evenodd"
                d="M15.646 20.222c1.018-1.808 1.7-4.352 1.828-7.222h3.468c-.36 3.232-2.439 5.949-5.296 7.222zM3.058 13h3.468c.128 2.87.81 5.414 1.829 7.222-2.859-1.273-4.938-3.99-5.296-7.222zm5.296-9.221c-1.018 1.807-1.7 4.352-1.828 7.22H3.058c.358-3.231 2.438-5.947 5.295-7.22zm.17 7.22c.239-4.847 2.17-8 3.476-8s3.238 3.153 3.476 8H8.524zM12 21c-1.306 0-3.238-3.151-3.476-8h6.952c-.239 4.849-2.17 8-3.477 8zm8.942-10h-3.468c-.128-2.868-.81-5.413-1.829-7.22 2.858 1.273 4.938 3.989 5.297 7.22zM11.999 1C5.924 1 1 5.926 1 12c0 6.077 4.926 11 11 11 6.077 0 11-4.923 11-11 0-6.074-4.923-11-11-11z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_globe">
              <path
                fillRule="evenodd"
                d="M7.524 13h8.951c-.249 6.135-2.734 10-4.475 10-1.742 0-4.227-3.865-4.476-10zM12 1c1.741 0 4.227 3.865 4.476 10H7.524C7.773 4.865 10.259 1 12 1zm6.475 10c-.143-3.749-1.08-7.052-2.475-9.239 3.798 1.486 6.569 5.013 6.95 9.239h-4.475zm0 2h4.475c-.381 4.226-3.152 7.753-6.95 9.239 1.395-2.187 2.332-5.49 2.475-9.239zm-12.95-2H1.05C1.431 6.774 4.202 3.247 8 1.761 6.605 3.948 5.668 7.251 5.525 11zm0 2c.143 3.749 1.08 7.052 2.475 9.239C4.202 20.753 1.431 17.226 1.05 13h4.475z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_heart-outline">
              <path
                fillRule="evenodd"
                d="M12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_heart">
              <path
                fillRule="evenodd"
                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_history">
              <path
                fillRule="evenodd"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-4.209 0-7.812-2.617-9.284-6.307l1.839-.788C5.721 17.883 8.614 20 12 20c4.411 0 8-3.589 8-8s-3.589-8-8-8C9.62 4 7.496 5.058 6.031 6.714L8 8.229 2 10.8l.429-6.857 2.003 1.54A9.968 9.968 0 0 1 12 2zm-1 6h2v4.586l2.707 2.707-1.414 1.414L11 13.414V8z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_location">
              <path fillRule="evenodd" d="M1 11l9 3 3 9 9-21z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_lock-open">
              <path
                fillRule="evenodd"
                d="M6 10.001V6c0-2.206 1.794-4 4-4s4 1.794 4 4h2c0-3.309-2.691-6-6-6S4 2.691 4 6v16h16V10.001H6z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_lock">
              <path
                fillRule="evenodd"
                d="M8 7c0-2.206 1.794-4 4-4s4 1.794 4 4v3.001H8V7zm10 3.001V7c0-3.309-2.691-6-6-6S6 3.691 6 7v3.001H4V22h16V10.001h-2z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_login">
              <path d="M9.181 13H2v-2h7.181L6.88 8.707l1.414-1.414L13 12l-4.707 4.707-1.414-1.414L9.181 13zM8 20h9V4H8V2h11v20H8v-2z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_logout">
              <path d="M6.819 11H14v2H6.819l2.302 2.293-1.414 1.414L3 12l4.707-4.707 1.414 1.414L6.819 11zM8 20h9V4H8V2h11v20H8v-2z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_microphone">
              <path
                fillRule="evenodd"
                d="M20 12c0 2.02-.755 3.948-2.125 5.43A8.023 8.023 0 0 1 13 19.93V23h-2v-3.07a8.029 8.029 0 0 1-4.873-2.498A7.972 7.972 0 0 1 4 12h2c0 1.516.566 2.962 1.595 4.074A6.02 6.02 0 0 0 12 18a6.017 6.017 0 0 0 4.406-1.928A5.978 5.978 0 0 0 18 12h2zm-8 4a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v6a4 4 0 0 1-4 4z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_minus-circle">
              <path
                fillRule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m0 1.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75zM6 13h12v-2H6v2z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_more-horiz">
              <path
                fillRule="evenodd"
                d="M4 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_more-vert">
              <path
                fillRule="evenodd"
                d="M10 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
              />
            </symbol>
            <symbol viewBox="0 0 50 38" id="icons_noimage">
              <path d="M31.25 16.467l-12.798 9.51L13.75 22.8 3.125 30.4h1.25v3.167h41.25V30.4H50z" />
              <ellipse cx="18.75" cy="13.933" rx="3.75" ry="3.8" />
              <path d="M0 0v38h50V0H0zm45 32.933H5V5.066h40v27.867z" />
              <path d="M45 5.067v27.867H5l-5 5.067h50v-38z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_phone">
              <path
                fillRule="evenodd"
                d="M10.226 8.11L6.9 3.26c-3.697.888-3.66 4.037-3.66 4.037s-.138 2.449 1.172 4.407c1.31 1.959 1.865 2.82 3.476 4.425 1.608 1.604 2.455 2.14 4.42 3.446 1.965 1.307 4.414 1.16 4.414 1.16s3.04.005 4.04-3.654l-4.798-3.287s-1.174 1.631-1.366 1.943c-.22.353-.75.736-1.328.385-.578-.353-1.692-1.019-3.02-2.348a15.363 15.363 0 0 1-2.371-3.027c-.355-.576.073-1.132.366-1.342.294-.208 1.98-1.295 1.98-1.295"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_plus-circle">
              <path
                fillRule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m-1 12v5h2v-5h5v-2h-5V6h-2v5H6v2h5zm1-10.25c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_question-circle">
              <path
                fillRule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m0 1.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75zm-1.5 13.293c0 .718.479 1.162 1.244 1.162.766 0 1.237-.444 1.237-1.162 0-.725-.471-1.169-1.237-1.169-.765 0-1.244.444-1.244 1.169zm1.456-8.996c-2.099 0-3.288 1.176-3.322 2.878h1.852c.041-.752.561-1.237 1.347-1.237.779 0 1.299.451 1.299 1.086 0 .636-.267.964-1.149 1.491-.943.553-1.319 1.169-1.23 2.262l.014.376h1.811v-.362c0-.656.253-.991 1.162-1.518.964-.567 1.463-1.285 1.463-2.31 0-1.579-1.292-2.666-3.247-2.666z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_refresh">
              <path
                fillRule="evenodd"
                d="M6.586 17.857C8.012 19.179 9.906 20 12 20c3.386 0 6.279-2.117 7.445-5.095l1.839.788C19.812 19.383 16.209 22 12 22a9.949 9.949 0 0 1-7.025-2.903L2.5 21 2 13l7 3-2.414 1.857zM17.414 6.143C15.988 4.821 14.094 4 12 4 8.614 4 5.721 6.117 4.555 9.095l-1.839-.788C4.188 4.617 7.791 2 12 2a9.949 9.949 0 0 1 7.025 2.903L21.5 3l.5 8-7-3 2.414-1.857z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_repeat">
              <path
                fillRule="evenodd"
                d="M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8c2.094 0 3.988.821 5.414 2.143L15 8l7 3-.5-8-2.475 1.903A9.949 9.949 0 0 0 12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c4.209 0 7.812-2.617 9.284-6.307l-1.839-.788C18.279 17.883 15.386 20 12 20"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_search">
              <path
                fillRule="evenodd"
                d="M4 10.5C4 6.916 6.916 4 10.5 4S17 6.916 17 10.5 14.084 17 10.5 17A6.508 6.508 0 0 1 4 10.5zm18.507 10.593l-5.339-5.339A8.443 8.443 0 0 0 19 10.5C19 5.813 15.187 2 10.5 2 5.813 2 2 5.813 2 10.5c0 4.687 3.813 8.5 8.5 8.5a8.446 8.446 0 0 0 5.254-1.832l5.339 5.339 1.414-1.414z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_selector-arrows">
              <path fillRule="evenodd" d="M12 2l5.333 8H6.667L12 2zm0 20l-5.333-8h10.666L12 22z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_services">
              <path d="M5 5v4h4V5H5zM3 3h8v8H3V3zm12 2v4h4V5h-4zm-2-2h8v8h-8V3zM5 15v4h4v-4H5zm-2-2h8v8H3v-8zm12 2v4h4v-4h-4zm-2-2h8v8h-8v-8z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_sliders">
              <path
                fillRule="evenodd"
                d="M16 14a3.991 3.991 0 0 1 3.859 3H23v2h-3.141c-.447 1.722-1.997 3-3.859 3a3.99 3.99 0 0 1-3.858-3H1v-2h11.142A3.99 3.99 0 0 1 16 14M8.858 5H23v2H8.858A3.99 3.99 0 0 1 5 10a4 4 0 0 1 0-8 3.99 3.99 0 0 1 3.858 3"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_thumb-down">
              <path
                fillRule="evenodd"
                d="M4.102 15.682A1.105 1.105 0 0 1 3 14.575v-.044c.094-1.478.37-2.903.82-4.253l.002-.01a16.833 16.833 0 0 1 2.716-5.075l.002-.003.159-.19h8.375v9.43l-4.858 5.809-.003.004a4.77 4.77 0 0 0-.774 1.447l-.002.006a4.84 4.84 0 0 0-.235 1.22c-.2.2-.474.324-.778.324-.57 0-.957-.38-1.188-1.025-.276-.77-.252-1.642-.252-1.642 0-1.135.392-2.176 1.043-3l-.003-.002 1.6-1.889H4.103zM16.71 14.43V5h3.273v9.43H16.71z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_thumb-up">
              <path
                fillRule="evenodd"
                d="M19.88 8.318c.61 0 1.103.495 1.103 1.107v.044a16.864 16.864 0 0 1-.82 4.253l-.002.009a16.834 16.834 0 0 1-2.716 5.076l-.002.002-.16.19H8.909V9.57l4.859-5.808.003-.004a4.77 4.77 0 0 0 .774-1.447l.002-.007a4.84 4.84 0 0 0 .235-1.22c.2-.2.474-.323.778-.323.569 0 .956.38 1.188 1.025.276.77.252 1.642.252 1.642a4.828 4.828 0 0 1-1.043 3l.002.002-1.6 1.889h5.522zM4 18.999V9.57h3.272V19H4z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_tick-bold">
              <path
                fillRule="evenodd"
                d="M9 18.954l-7.039-7.04 2.828-2.828L9 13.296l9.555-9.553 2.828 2.828z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_tick-mark">
              <path d="M11.707 21.238l-1.42.636a1.429 1.429 0 0 1-1.742-.467l-.912-1.261a.714.714 0 0 0-.506-.292l-1.548-.16a1.429 1.429 0 0 1-1.275-1.274l-.16-1.549a.714.714 0 0 0-.291-.505l-1.261-.913a1.429 1.429 0 0 1-.467-1.741l.636-1.42a.714.714 0 0 0 0-.585l-.636-1.42a1.429 1.429 0 0 1 .467-1.742l1.26-.912a.714.714 0 0 0 .293-.506l.16-1.548a1.429 1.429 0 0 1 1.274-1.275l1.548-.16a.714.714 0 0 0 .506-.291l.912-1.261a1.429 1.429 0 0 1 1.742-.467l1.42.636a.714.714 0 0 0 .584 0l1.42-.636a1.429 1.429 0 0 1 1.742.467l.913 1.26a.711.711 0 0 0 .505.293l1.549.16c.673.068 1.205.6 1.275 1.274l.159 1.548a.71.71 0 0 0 .292.506l1.261.912c.549.397.744 1.124.467 1.742l-.636 1.42a.714.714 0 0 0 0 .584l.636 1.42a1.429 1.429 0 0 1-.467 1.742l-1.261.913a.714.714 0 0 0-.292.505l-.16 1.549a1.429 1.429 0 0 1-1.274 1.275l-1.549.159a.714.714 0 0 0-.505.292l-.913 1.261a1.429 1.429 0 0 1-1.741.467l-1.42-.636a.714.714 0 0 0-.585 0zm6.289-11.751a.381.381 0 0 0 0-.546l-1.3-1.272a.399.399 0 0 0-.557 0l-5.417 5.3-2.305-2.255a.4.4 0 0 0-.557 0l-1.3 1.272a.38.38 0 0 0 0 .546l3.883 3.8a.398.398 0 0 0 .557 0l6.996-6.845z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_tick">
              <path
                fillRule="evenodd"
                d="M9 19.04l-6.957-6.958 1.414-1.414L9 16.211 20.543 4.668l1.414 1.414z"
              />
            </symbol>
            <symbol viewBox="0 0 24 24" id="icons_trash">
              <path
                fillRule="evenodd"
                d="M5 20.002V7h14v13.002A1.999 1.999 0 0 1 17.005 22H6.995A1.997 1.997 0 0 1 5 20.002zM19.004 4A1 1 0 0 1 20 5v1H4V5c0-.556.445-1 .996-1H9v-.001C9 2.897 9.894 2 10.995 2h2.01C14.108 2 15 2.895 15 3.999V4h4.004z"
              />
            </symbol>
          </symbol>
        </svg>
        <Main />

        <div
          data-apiary-widget-name="@MarketNode/Notification"
          data-apiary-widget-id="/notification"
        >
          <div
            className="_3fw7aJQozt _2w9PUs-OWY"
            data-2dc195aa="true"
            data-reactroot
            data-reactid={1}
            data-react-checksum={1508778039}
          />
        </div>
      </div>
    )
  }
}

export default Body
