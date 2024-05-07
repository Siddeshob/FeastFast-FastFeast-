import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };

    console.log(props.name);
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    return (
      <div>
        <div className="user-card">
          <h1>Count: {count}</h1>
          <button
            onClick={() => {
              this.setState(
                {
                  count : this.state.count + 1,
                }
              )
            }}
          >
            click
          </button>
          <h2>name: {name}</h2>
          <h3>Location:{location}</h3>
          <h4>Contact:siddeshaob2001@gmail.com</h4>
        </div>
      </div>
    );
  }
}
export default UserClass;
