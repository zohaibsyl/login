import styles from "login.module.css";
const Form =()=>{
    return(
        <div>
        <form>
            <div className={styles.abc}><h1>login page</h1></div>
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

                    <label htmlFor="checkox">
                remeber me              
                 </label>
                 
                 </div>
                  <button>login</button>
                  <a href="">create a new account</a>


        </form>
        </div>
    )
}
export default Form