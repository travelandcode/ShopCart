function MobileTopNavBar () {
    return (
        <div className="[ moblie-topnav ][ bg-[#003d29] w-screen h-[40px] ][ py-[7px] ][ flex flex-row ][ laptop:hidden tablet:hidden ]" >
            <div className=" [ mobile-topnav-container ][ flex flex-row ][ px-[10px] ][ min-w-[320px] max-w-[360px] ][ mx-auto ][ justify-between ]">
                <div className="[ num ][ flex flex-row ][ space-x-1 ]">
                    <svg className="[ phone-logo ][ h-[16px] w-[16px] ][ my-auto ]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46683 10.5325C0.868173 5.93332 1.52209 3.82727 2.00687 3.14861C2.06915 3.03892 3.60415 0.741091 5.24956 2.08922C9.33372 5.45281 4.16324 4.97725 7.59277 8.40736C11.023 11.8368 10.5474 6.66647 13.9104 10.7498C15.2586 12.3958 12.9607 13.9308 12.8517 13.9923C12.173 14.4778 10.0662 15.1317 5.46683 10.5325Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="[ phone-txt ][ text-white text-[12px] ][ my-auto ]">+18761234567</p>
                </div>
                <div className="[ language-menu ][ flex flex-row ][  ]">
                    <p className="[ language-txt ][ text-white text-[12px] ][ my-auto ]">Lang</p>
                    <svg className="[ dropdown-img ][ text-white ][ w-[12px] h-[12px] ][ my-auto ][ ml-3 ]" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <g class="nc-icon-wrapper" fill="currentColor">
                            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" fill="currentColor"/>
                         </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default MobileTopNavBar;