

const signup =()=>{
    return(
        <div>
        <form>
            <div><h1>signup page</h1></div>
            <div><label htmlFor="email">
                email address              
                 </label>
                 <input type="text"  placeholder="enter your email address"/>
                 
                 </div>

                 <div><label htmlFor="password">
                password              
                 </label>
                 <input type="text"  placeholder="enter your password"/>
                 
                 </div>
                 <div>
                 <input type="checkbox"/>

                 
                 </div>
                  <button>signup</button>


        </form>
        </div>
    )
}
export default signup