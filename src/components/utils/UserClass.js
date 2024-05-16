import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "obs",
        location: "KA",
        avatar_url: "https://obs.com",
      },
    };

    console.log(props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/siddeshob");
    const json = await data.json();
    console.log(json.name);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <div className="user-card">
          <img src={avatar_url} />
          <h2>name: {name}</h2>
          <h3>Location:{location}</h3>
          <h4>Contact:siddeshaob2001@gmail.com</h4>
        </div>
      </div>
    );
  }
}
export default UserClass;
