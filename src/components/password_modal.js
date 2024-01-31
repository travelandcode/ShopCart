import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function PasswordModal(){
    const [isPassword1Hidden,setPassword1toHidden] = useState(true)
    const [isPassword2Hidden,setPassword2toHidden] = useState(true)
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

    const handlePassword1Change = (e) => {
        setPassword1(e.target.value);
        passwordCriteriaCheck(password1)
      };
    
      const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
      };

    const changePassword1toHidden = () => {
        setPassword1toHidden(!isPassword1Hidden)
    }

    const changePassword2toHidden  = () => {
        setPassword2toHidden(!isPassword2Hidden)
    }
    return(
        <div  className="[ password-modal-container ][ flex ][ relative ][ h-[600px] w-[1000px] ][ mx-auto my-auto ][ shadow-sm ][ z-[1] ]">
            <div className="[ password-modal ][ h-[475px] w-[450px] ][ flex flex-col ][ my-auto mx-auto ][[ bg-white ][ px-[20px] py-[30px] ][ rounded-[10px] ]">
                    <button  className="[ close-btn ][ z-[1] ][ absolute ][ flex ][ top-[80px] right-[240px] ][ cursor-pointer ][ w-[24px] h-[24px] ][ scale-[1.7] ]">
                    <svg className="[ w-[15px] h-[15px] ][ mx-auto my-auto ]" xmlns="http://www.w3.org/2000/svg" width="20" data-e2e="" height="20" viewBox="0 0 48 48" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"/></svg>
                </button>
                <div className="[ top-section ][ mx-auto ][ mt-[20px] ]">
                    <FontAwesomeIcon className="[ h-[35px] w-[35px] ][ my-auto mx-auto ]" icon={faLock} style={{color: "#FFD43B",}} />
                    <p className="[ top-section-txt ][ mt-[10px] ][ text-[22px] font-[RussoOne] ]">Set New Password</p>
                    <p className="[ top-section-txt ][ mt-[5px] ][ text-[18px] font-[Roboto] ]">Must be at least 8 characters</p>
                </div>
                <div className="[ password-section ][ mt-[20px] mx-auto ][ w-[375px] ]">
                    <p className="[ password-txt ][ text-[16px] font-[Roboto] text-left ][ mb-[5px] ]">New Password</p>
                    <div className="[ new-password-container ][ w-full h-[40px] ][ border border-solid border-[#cccccc] ][ rounded-[10px] ][ mx-auto my-auto ][ flex ][ relative ]">
                        <input onChange={handlePassword1Change} value={password1} className="[ password-input ][ h-full w-full ][ my-auto ][ rounded-[10px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ]" type={isPassword1Hidden ? "password": ""} placeholder="Enter Password" required/>
                        <button onClick={() => changePassword1toHidden()} href="#" className="[ eye-container ][ w-[60px] h-[40px] ][ absolute top-0 right-0 ][ flex ]">
                            {
                                isPassword1Hidden ?
                                    <FontAwesomeIcon className="[ h-[27px]  w-[27px] ][ my-auto mx-auto ]" icon={faEyeSlash} style={{color: "#404040"}} />
                                :
                                    <FontAwesomeIcon className="[ h-[27px]  w-[27px] ][ my-auto mx-auto ]" icon={faEye} style={{color: "#404040"}} />
                            }
                        </button>
                        
                    </div>
                    { password1.length > 0 && passwordCriteriaCheck(password1)}
                    <p className="[ password-txt ][ text-[16px] font-[Roboto] text-left ][ mb-[5px] ][ mt-[20px] ]">Confirm Password</p>
                    <div className="[ new-password-container ][ w-full h-[40px] ][ border border-solid border-[#cccccc] ][ rounded-[10px] ][ mx-auto my-auto ][ flex ][ relative ]">
                        <input onChange={handlePassword2Change} value={password2} className="[ password-input ][ h-full w-full ][ my-auto ][ rounded-[10px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ]" type={isPassword2Hidden ? "password": ""} placeholder="Enter Password" minLength={8} required/>
                        <button onClick={() => changePassword2toHidden} className="[ eye-container ][ w-[60px] h-[40px] ][ absolute top-0 right-0 ][ flex ]">
                            {
                                isPassword2Hidden ?
                                    <FontAwesomeIcon className="[ h-[27px]  w-[27px] ][ my-auto mx-auto ]" icon={faEyeSlash} style={{color: "#404040"}} />
                                :
                                    <FontAwesomeIcon className="[ h-[27px]  w-[27px] ][ my-auto mx-auto ]" icon={faEye} style={{color: "#404040"}} />
                            }
                        </button>
                    </div>
                    { (password1 !== password2) && <div className="[ error-message ][ font-[Roboto] ][ text-[#FF0000] ][ mt-[10px] ]">Passwords do not match</div>}
                </div>
                <button className={`[ set-password-btn ][ mx-auto ][ rounded-[10px] ][ bg-[#FFA33C] hover:bg-[#F3B664] ][ w-[375px] h-[40px] ][ ${(password1 !== password2 ? "mt-[20px]": "mt-[50px]")} ]`}>
                            <p className="[ set-password-btn-txt ][ text-white text-[18px] font-[Lobster] ]">Set Password</p>
                </button>
            </div>
        </div>
    )
}

function passwordCriteriaCheck(password){
    const has8Characters = (password.length >= 8)
    const hasUpperCaseCharacter = (/[A-Z]/.test(password))
    const hasNumber = (/\d/.test(password))
    const hasSymbol = /[^\w\d]/.test(password)
    const checksRemaining = 4 - ((has8Characters ? 1 : 0) +(hasUpperCaseCharacter ? 1 : 0) + (hasNumber ? 1 : 0) + (hasSymbol ? 1: 0))
    const displayText = ((checksRemaining === 3 && "👍Good Start") || (checksRemaining === 2 && "🙂 Getting There") || (checksRemaining === 1 && "🤏 You're Almost There") || (checksRemaining === 0 && "👌 Perfect") )

    return (
        
        <div className="[ password-check ][ bg-white ][ h-auto w-[300px] ][ border border-solid ][ shadow-md shadow-current ][ p-[10px] ][ rounded-[10px] ][ flex flex-col ][ z-[100] ][ absolute top-[250px] left-0 ]">
            <div className="[ display-txt ][ font-[Roboto] text-[16px] ]">Password Requirements</div>
            <div className="[ display-txt ][ font-[Roboto] text-[22px] ][ mt-[10px] ]">{displayText}</div>
            <div className="[ progress-bar ][ mt-[15px] ][ flex flex-row ]">
                <div className={`[ h-[11px] w-[60px] ][ rounded-[10px] ][ ${ checksRemaining === 4 && "bg-[#D3D3D3]" } ${ checksRemaining === 3 && "bg-[#FF0000]"} ${ (checksRemaining === 1 || checksRemaining === 2)  && "bg-[#F28C28]"} ${ checksRemaining === 0 && "bg-[#0BDA51]"} ]`}></div>
                <div className={`[ h-[11px] w-[60px] ][ rounded-[10px] ][ ${ checksRemaining >= 3 && "bg-[#D3D3D3]" } ${ (checksRemaining === 1 || checksRemaining === 2) && "bg-[#FFA500]" } ${checksRemaining === 0 && "bg-[#0BDA51]"} ][ ml-[5px] ]`}></div>
                <div className={`[ h-[11px] w-[60px] ][ rounded-[10px] ][ ${ checksRemaining >= 2 && "bg-[#D3D3D3]" } ${ checksRemaining === 1 && "bg-[#FFBF00]" } ${ checksRemaining === 0 && "bg-[#0BDA51]"} [ ml-[5px] ]`}></div>
                <div className={`[ h-[11px] w-[60px] ][ rounded-[10px] ][ ${ checksRemaining === 0 ? "bg-[#0BDA51]" : "bg-[#D3D3D3]" } [ ml-[5px] ]`}></div>
            </div>
            <div className="[ checks ][ mt-[20px] ]">
                <div className="[ 8-characters-container ][ flex flex-row ]">
                    <FontAwesomeIcon className="[ h-[25px]  w-[25px] ]" icon={faCheck} style={has8Characters ? {color: "#0BDA51"} : {color: "#D3D3D3"}} />
                    <p className="[ ml-[10px] ]">At least 8 characters</p>
                </div>
                <div className="[ 8-characters-container ][ flex flex-row ]">
                    <FontAwesomeIcon className="[ h-[25px]  w-[25px] ]" icon={faCheck} style={hasNumber ? {color: "#0BDA51"} : {color: "#D3D3D3"}} />
                    <p className="[ ml-[10px] ]">At least 1 number (0-9)</p>
                </div>
                <div className="[ 8-characters-container ][ flex flex-row ]">
                    <FontAwesomeIcon className="[ h-[25px]  w-[25px] ]" icon={faCheck} style={hasUpperCaseCharacter ? {color: "#0BDA51"} : {color: "#D3D3D3"}} />
                    <p className="[ ml-[10px] ]">At least 1 upper case letter (A-Z)</p>
                </div>
                <div className="[ 8-characters-container ][ flex flex-row ]">
                    <FontAwesomeIcon className="[ h-[25px]  w-[25px] ]" icon={faCheck} style={hasSymbol ? {color: "#0BDA51"} : {color: "#D3D3D3"}} />
                    <p className="[ ml-[10px] ]">At least 1 symbol (#$&)</p>
                </div>
            </div>
        </div>
    )
}

export default PasswordModal