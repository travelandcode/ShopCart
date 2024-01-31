
function LoginModalButton(props){
    const link =  props.link
    const svg = props.svg
    const txt = props.txt

    const login = async (link) => {
        try {
            const response = await fetch(link,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': 'true',
                },
                credentials: 'include'
            })
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <button onClick={()=>login(link)} className="[ modal-btn ][ no-underline ][ h-[44px] w-full ][ border-solid border border-[#1618231f] ][ bg-white text-[#161823] font-semibold font-sans p-3 ]">
            <div className="[ modal-icon ][ w-[20px] h-[20px] ]">
                {svg}
            </div>
            <div className="[ modal-txt ][ h-[22px] ][ mx-auto -mt-5 ]">
                <p>{txt}</p>
            </div>
        </button>
    )
}

export default LoginModalButton;