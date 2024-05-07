import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div className="about">
            <h1>About</h1>
            <h3>is about page</h3>
            <User name={"siddesha for fun"} location={"Karnataka,India"} />

            <UserClass name={"siddesha for class"} location={"Karnataka,India"} />
        </div>
    )
}

export default About;