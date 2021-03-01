import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (mid-width: 500px) {
    width: 450px;
  }
`;

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <React.Fragment>
        <StyledDiv>
          <AuthContext.Consumer>
            {(context) =>
              context.authenticated ? (
                <p>Authenticated</p>
              ) : (
                <p>Please log in</p>
              )
            }
          </AuthContext.Consumer>
          <p key="i2" onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age}!
          </p>
          <input
            key="i3"
            ref={this.inputElementRef}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
          <small>{this.props.children}</small>
        </StyledDiv>
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
