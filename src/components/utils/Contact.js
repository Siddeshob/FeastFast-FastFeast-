import React from "react"


const Contact=()=>{
    return(
        <div className="contact flex justify-center flex-row">
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form className="">
                <input type="text" className="border border-black m-2 p-1" placeholder="name"/><br/>
                <input type="text" className="border border-black m-2 p-7" placeholder="message"/><br/>
                <button className="border border-black m-4 p-1 rounded-lg bg-blue-500 text-white" >submit</button>
            </form>
        </div>
    )
}
export default Contact;