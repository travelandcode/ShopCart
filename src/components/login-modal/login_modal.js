import { useState } from "react";
import LoginModalButton from "./login_modal_button";

function LoginModal(props){
  const isOpen = props.onOpen
  const isClose = props.onClose
  const [currentView, setView] = useState('login')

  const switchView = (view) =>{
    setView(view)
  }

  const loginButtons = [
    {
      link: 'http://localhost:3001/phone',
      svgData: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z" />
                </svg>),
      txt: 'Use phone / email / username'
    },
    {
      link: 'http://localhost:3001/auth/facebook',
      svgData: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                  <path d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z" fill="white" />
                  <path d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z" fill="#0075FA" />
                </svg>),
      txt: 'Continue with Facebook'
    },
    {
      link: 'http://localhost:3001/auth/google',
      svgData: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M43 24.4313C43 23.084 42.8767 21.7885 42.6475 20.5449H24.3877V27.8945H34.8219C34.3724 30.2695 33.0065 32.2818 30.9532 33.6291V38.3964H37.2189C40.885 35.0886 43 30.2177 43 24.4313Z"
                      fill="#4285F4" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M24.3872 43.001C29.6219 43.001 34.0107 41.2996 37.2184 38.3978L30.9527 33.6305C29.2165 34.7705 26.9958 35.4441 24.3872 35.4441C19.3375 35.4441 15.0633 32.1018 13.5388 27.6108H7.06152V32.5337C10.2517 38.7433 16.8082 43.001 24.3872 43.001Z"
                      fill="#34A853" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.5395 27.6094C13.1516 26.4695 12.9313 25.2517 12.9313 23.9994C12.9313 22.7472 13.1516 21.5295 13.5395 20.3894V15.4668H7.06217C5.74911 18.0318 5 20.9336 5 23.9994C5 27.0654 5.74911 29.9673 7.06217 32.5323L13.5395 27.6094Z"
                      fill="#FBBC04" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M24.3872 12.5568C27.2336 12.5568 29.7894 13.5155 31.7987 15.3982L37.3595 9.94866C34.0018 6.88281 29.6131 5 24.3872 5C16.8082 5 10.2517 9.25777 7.06152 15.4674L13.5388 20.39C15.0633 15.8991 19.3375 12.5568 24.3872 12.5568Z"
                      fill="#EA4335" />
                  </svg>),
      txt: 'Continue with Google'
    },
    {
      link: 'http://localhost:3001/auth/twitter',
      svgData: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8044 6.79902C42.5841 7.62363 39.7822 8.82191 38.4004 8.82191V8.82437C36.8226 7.08554 34.6013 6 32.1377 6C27.353 6 23.4731 10.093 23.4731 15.1387C23.4731 15.8398 23.5501 16.5236 23.6925 17.1793H23.6911C17.2007 16.9996 10.1022 13.5678 5.82893 7.69403C3.2016 12.4916 5.4752 17.8272 8.45673 19.7713C7.43613 19.8526 5.55733 19.6473 4.673 18.737C4.61373 21.9212 6.06507 26.1403 11.3571 27.6709C10.3379 28.2494 8.53373 28.0834 7.74926 27.9604C8.0246 30.6484 11.5927 34.1625 15.4945 34.1625C14.1039 35.8594 8.8716 38.9374 3 37.9582C6.98767 40.5177 11.6352 42 16.5543 42C30.5333 42 41.3894 30.0482 40.8051 15.3041C40.8028 15.2879 40.8028 15.2716 40.8014 15.2539C40.8028 15.216 40.8051 15.1781 40.8051 15.1387C40.8051 15.0929 40.8014 15.0496 40.8 15.0053C42.0726 14.0871 43.7801 12.463 45 10.3254C44.2925 10.7365 42.1701 11.5596 40.1952 11.7639C41.4627 11.0422 43.3405 8.67865 43.8044 6.79902Z" fill="#1DA1F2" />
                </svg>),
      txt: 'Continue with Twitter'
    },
    {
      link: 'http://localhost:3001/auth/microsoft',
      svgData: (<svg enable-background="new 0 0 2499.6 2500" viewBox="0 0 2499.6 2500" xmlns="http://www.w3.org/2000/svg">
                  <path d="m1187.9 1187.9h-1187.9v-1187.9h1187.9z" fill="#f1511b"/>
                  <path d="m2499.6 1187.9h-1188v-1187.9h1187.9v1187.9z" fill="#80cc28"/>
                  <path d="m1187.9 2500h-1187.9v-1187.9h1187.9z" fill="#00adef"/>
                  <path d="m2499.6 2500h-1188v-1187.9h1187.9v1187.9z" fill="#fbbc09"/>
                </svg>),
      txt: 'Continue with Microsoft'  
    }
  ]
  const signUpButtons = [
    {
      link: 'http://localhost:3001/phone',
      svgData: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z" />
                </svg>),
      txt: 'Use phone or email '
    },
    {
      link: 'http://localhost:3001//auth/facebook',
      svgData: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                  <path d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z" fill="white" />
                  <path d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z" fill="#0075FA" />
                </svg>),
      txt: 'Continue with Facebook'
    },
    {
      link: 'http://localhost:3001/auth/google',
      svgData: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M43 24.4313C43 23.084 42.8767 21.7885 42.6475 20.5449H24.3877V27.8945H34.8219C34.3724 30.2695 33.0065 32.2818 30.9532 33.6291V38.3964H37.2189C40.885 35.0886 43 30.2177 43 24.4313Z"
                      fill="#4285F4" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M24.3872 43.001C29.6219 43.001 34.0107 41.2996 37.2184 38.3978L30.9527 33.6305C29.2165 34.7705 26.9958 35.4441 24.3872 35.4441C19.3375 35.4441 15.0633 32.1018 13.5388 27.6108H7.06152V32.5337C10.2517 38.7433 16.8082 43.001 24.3872 43.001Z"
                      fill="#34A853" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.5395 27.6094C13.1516 26.4695 12.9313 25.2517 12.9313 23.9994C12.9313 22.7472 13.1516 21.5295 13.5395 20.3894V15.4668H7.06217C5.74911 18.0318 5 20.9336 5 23.9994C5 27.0654 5.74911 29.9673 7.06217 32.5323L13.5395 27.6094Z"
                      fill="#FBBC04" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M24.3872 12.5568C27.2336 12.5568 29.7894 13.5155 31.7987 15.3982L37.3595 9.94866C34.0018 6.88281 29.6131 5 24.3872 5C16.8082 5 10.2517 9.25777 7.06152 15.4674L13.5388 20.39C15.0633 15.8991 19.3375 12.5568 24.3872 12.5568Z"
                      fill="#EA4335" />
                  </svg>),
      txt: 'Continue with Google'
    },
    {
      link: 'http://localhost:3001/auth/twitter',
      svgData: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8044 6.79902C42.5841 7.62363 39.7822 8.82191 38.4004 8.82191V8.82437C36.8226 7.08554 34.6013 6 32.1377 6C27.353 6 23.4731 10.093 23.4731 15.1387C23.4731 15.8398 23.5501 16.5236 23.6925 17.1793H23.6911C17.2007 16.9996 10.1022 13.5678 5.82893 7.69403C3.2016 12.4916 5.4752 17.8272 8.45673 19.7713C7.43613 19.8526 5.55733 19.6473 4.673 18.737C4.61373 21.9212 6.06507 26.1403 11.3571 27.6709C10.3379 28.2494 8.53373 28.0834 7.74926 27.9604C8.0246 30.6484 11.5927 34.1625 15.4945 34.1625C14.1039 35.8594 8.8716 38.9374 3 37.9582C6.98767 40.5177 11.6352 42 16.5543 42C30.5333 42 41.3894 30.0482 40.8051 15.3041C40.8028 15.2879 40.8028 15.2716 40.8014 15.2539C40.8028 15.216 40.8051 15.1781 40.8051 15.1387C40.8051 15.0929 40.8014 15.0496 40.8 15.0053C42.0726 14.0871 43.7801 12.463 45 10.3254C44.2925 10.7365 42.1701 11.5596 40.1952 11.7639C41.4627 11.0422 43.3405 8.67865 43.8044 6.79902Z" fill="#1DA1F2" />
                </svg>),
      txt: 'Continue with Twitter'
    },
    {
      link: 'http://localhost:3001/auth/microsoft',
      svgData: (<svg enable-background="new 0 0 2499.6 2500" viewBox="0 0 2499.6 2500" xmlns="http://www.w3.org/2000/svg">
                  <path d="m1187.9 1187.9h-1187.9v-1187.9h1187.9z" fill="#f1511b"/>
                  <path d="m2499.6 1187.9h-1188v-1187.9h1187.9v1187.9z" fill="#80cc28"/>
                  <path d="m1187.9 2500h-1187.9v-1187.9h1187.9z" fill="#00adef"/>
                  <path d="m2499.6 2500h-1188v-1187.9h1187.9v1187.9z" fill="#fbbc09"/>
                </svg>),
      txt: 'Continue with Microsoft'  
    }
  ]
  if(!isOpen){
      return null
  }
  return(
    <div className="[ modal ][ h-full w-screen ][ z-[100] ][ bg-[rgba(0,0,0,0.4)] ][ hidden ][ overflow-hidden ][ fixed ][ top-0  left-0 ][ pt-[50px] ]" style={{display:"block"}}>
      {
        currentView === 'login' && (
          <div className="[ modal-content ][ bg-[#ffffff] ][ mx-auto my-auto ][ rounded-[15px] ][ z-2 ][ flex flex-col h-auto w-[483px] ][ relative ][ flex ] ">
            <div onClick={isClose} className="[ close-btn ][ bg-[#16182308] ][ rounded-[50%] ][ z-[1] ][ absolute ][ flex ][ top-[24px] right-[24px] ][ cursor-pointer ][ w-[24px] h-[24px] ][ scale-[1.7] ]">
              <svg className="[ w-[15px] h-[15px] ][ mx-auto my-auto ]" xmlns="http://www.w3.org/2000/svg" width="20" data-e2e="" height="20" viewBox="0 0 48 48" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"/></svg>
            </div>
            <div className="[ flex flex-col ][ mx-auto w-[375px] ]">
              <h3 className="[ shopcart-txt ][ flex justify-center ][ text-[32px] text-[#161823] font-bold font-sans ][ mt-8 mb-4 ][ mx-auto ]">Log in to Shopcart</h3>
              <div className="[ mx-auto ][ flex flex-col ][ w-full ][ space-y-4 m-4 ][ text-[15px] ]">
                {loginButtons.map(button =>(
                    <LoginModalButton   link={button.link} svg={button.svgData} txt={button.txt} />
                  ))
                }
              </div>
            </div>
            <div className="[ terms-of-service-txt-area ][ h-[62px][ border-b-2 ][ py-[16px] px-[30px] ]">
                <p className="[ terms-of-service-txt ][ text-[12px] text-[#16182380] font-sans ][ w-[375px] ][ mx-auto ]" >
                    By conitnuing, you agree to Shopcart's  
                    <a className="[ terms-of-service ][ text-[#161823] font-medium ][ cursor-pointer ][ hover:underline ]"> Terms of Service </a>
                    and confirm that you have read Shopcart's
                    <a className="[ policy-txt ][ text-[#161823] font-medium ][ cursor-pointer ][ hover:underline ]"> Policy</a>.
                </p>
            </div>
            <div className="[ sign-up-area ][ flex flex-row ][ mx-auto h-[64px] ]">
              <div className="[ txt-area ][ my-auto ][ flex flex-row ]">
                <p className="[ sign-up-txt ][ text-[15px] text-[#161823] ]">Don't Have An Account?</p>
                <a onClick={() => switchView('signup')} className="[ sign-up-btn ][ ml-[5px] ][ text-[15px] text-[#fe2c55] font-semibold ][ cursor-pointer ][ hover:underline ]">Sign Up</a>
              </div>
            </div>
          </div>
        )
      },
      {
        currentView === 'signup' && (
          <div className="[ modal-content ][ bg-[#ffffff] ][ mx-auto my-auto ][ rounded-[15px] ][ z-2 ][ flex flex-col h-auto w-[483px] ][ relative ][ flex ] ">
            <div onClick={isClose} className="[ close-btn ][ bg-[#16182308] ][ rounded-[50%] ][ z-[1] ][ absolute ][ flex ][ top-[24px] right-[24px] ][ cursor-pointer ][ w-[24px] h-[24px] ][ scale-[1.7] ]">
              <svg className="[ w-[15px] h-[15px] ][ mx-auto my-auto ]" xmlns="http://www.w3.org/2000/svg" width="20" data-e2e="" height="20" viewBox="0 0 48 48" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"/></svg>
            </div>
            <div className="[ flex flex-col ][ mx-auto w-[375px] ]">
              <h3 className="[ shopcart-txt ][ flex justify-center ][ text-[32px] text-[#161823] font-bold font-sans ][ mt-8 mb-4 ][ mx-auto ]">Sign up for Shopcart</h3>
              <div className="[ mx-auto ][ flex flex-col ][ w-full ][ space-y-4 m-4 ][ text-[15px] ]">
                {signUpButtons.map(button =>(
                    <LoginModalButton  link={button.link} svg={button.svgData} txt={button.txt} />
                  ))
                }
              </div>
            </div>
            <div className="[ terms-of-service-txt-area ][ h-[62px][ border-b-2 ][ py-[16px] px-[30px] ]">
                <p className="[ terms-of-service-txt ][ text-[12px] text-[#16182380] font-sans ][ w-[375px] ][ mx-auto ]" >
                    By conitnuing, you agree to Shopcart's  
                    <a className="[ terms-of-service ][ text-[#161823] font-medium ][ cursor-pointer ][ hover:underline ]"> Terms of Service </a>
                    and confirm that you have read Shopcart's
                    <a className="[ policy-txt ][ text-[#161823] font-medium ][ cursor-pointer ][ hover:underline ]"> Policy</a>.
                </p>
            </div>
            <div className="[ sign-up-area ][ flex flex-row ][ mx-auto h-[64px] ]">
              <div className="[ txt-area ][ my-auto ][ flex flex-row ]">
                <p className="[ sign-up-txt ][ text-[15px] text-[#161823] ]">Have an account already?</p>
                <a onClick={() => switchView('login')} className="[ sign-up-btn ][ ml-[5px] ][ text-[15px] text-[#fe2c55] font-semibold ][ cursor-pointer ][ hover:underline ]">Login</a>
              </div>
            </div>
          </div>
        )
      }
    </div>   
  );
}

export default LoginModal;