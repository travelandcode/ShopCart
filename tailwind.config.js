/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize:{
      'deals': [ '28px', { lineHeight: '100%',fontWeight:'700' }],
      'num-txt': '14px',
      'menu-txt-size': '16px',
      'product-title': ['18px', { fontWeight:'600'}],
      'product-description': '12px',
      'total-ratings': [' 12px', {fontWeight:'500',lineHeight:'100%'}],
      'add-to-cart': ['14px', {fontWeight:'600'}],
      'discount-title': ['52px', {fontWeight:'700', lineHeight:'120%'}],
      'discount-body': ['20px', {lineHeight:'145%'}],
      'learn-txt': ['18px',{lineHeight:'24px',fontWeight:'600'}]
    },
    extend: {
      backgroundImage: {
        'discount-background': "url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png')"
      },
      height:{
        'top-nav': '36px',
        'num': '22px',
        'phone':'16px',
        'nav-bar': '82px',
        'logo': '44px',
        'nav-container': '52px',
        'search-bar': '40px',
        'search-img': '20px',
        'account-icon': '24px',
        'cart-icon': '24px',
        'nav-right-content': '24px',
        'deals-container': '578px',
        'deals-card': '445px',
        'product-wishlist': '40px',
        'wishlist-icon': '17px',
        'add-to-cart-btn':'40px',
        'left-arrow': '25px',
        'right-arrow': '25px',
        'discount-container': '482px',
        'learn-btn': '60px'
      },
      width:{
        'num':'116px',
        'phone': '16px',
        'top-menu': '210px',
        'logo': '175px',
        'nav-bar-container': '1360px',
        'topnav-bar-container': '1360px',
        'nav-container': '784px',
        'nav-menu': '400px',
        'search-bar': '320px',
        'search-icon': '60px',
        'search-img': '20px',
        'account-icon': '24px',
        'cart-icon': '24px',
        'account-container': '90px',
        'cart-container': '100px',
        'deals-container': '1460px',
        'deals-card': '410px',
        'product-wishlist': '40px',
        'wishlist-icon': '20px',
        'add-to-cart-btn': '122px',
        'left-arrow': '25px',
        'right-arrow': '25px',
        'discount-container': '1360px',
        'discount-content': '513px',
        'learn-btn': '170px'
      },
      margin:{
        'account-margin': '11px',
        'cart-margin': '11px',
        'deals-margin': '80px',
        'deals-text-margin': '40px',
        'product-title-top': '16px',
        'product-title-bottom': '12px',
        'product-description-margin': '10px',
        'total-ratings': '5px',
        'product-ratings': '15px',
        'deal-margin-right': '24px',
        'arrow-margin': '24px',
        'discount-body': '50px'
      },
      colors:{
        'top-nav': '#003d29',
        'nav-bar': '#fff',
        'search-bar': '#cccccc',
        'search-bar-after': '#3898EC',
        'nav-bar-border': '#cccccc',
        'product': '#f5f6f6',
        'wishlist-container': '#fff',
        'add-to-cart-btn-border': '#231F1E',
        'after-add-to-cart': '#003d29',
        'after-wishlist': '#f9dcdc',
        'after-deals-arrow': '#003d29',
        'discount-content': '#003d29',
        'learn-btn': '#FFF',
        'after-learn-btn': '#231F1E'
      },
      textColor:{
        'menu-txt': '#231F1E',
        'deals-txt': '#231F1E',
        'product-txt': '#231F1E',
        'product-description-txt': '#333',
        'add-to-cart-txt': '#231F1E',
        'discount-title-txt': '#FFF',
        'discount-body': '#FFF',
        'learn-txt': '#FFF'
      },
      padding:{
        'horizontal-top-nav': '40px',
        'vertical-top-nav': '7px',
        'nav-bar-vertical': '15px',
        'nav-bar-horizontal': '40px',
        'search-left': '20px',
        'search-right': '50px',
        'deals-horizontal': '40px',
        'discount-horizontal': '40px',
        'discont-content-horizontal':'64px',
        'discount-content-vertical':'75px',
        'learn-container-horizontal': '36px',
        'learn-container-vertical': '16px' 
      },
      borderRadius:{
        'search-bar': '100px',
        'product-container': '10px',
        'add-to-cart-btn': '50px',
        'learn-btn': '50px'
      },
      spacing:{
        'wishlist': '16px',

      },
      fontFamily:{
        'deals-font': 'Inter, sans-serif',
        'product-title': 'Inter, sans-serif',
        'discount-title': 'Inter, sans-serif',
      },
      scale:{
        'product-zoom':'1.2'
      }
    },
  },
  plugins: [],
}

