import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import CharComponent from "../Char/CharComponent";
import AuthContext from "../../context/auth-context";

const StyledButton = styled.button`
  background-color: ${(props) => (props.active ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover: {
    background-color: ${(props) => (props.active ? "salmon" : "lightgreen")};
    color: black;
  }
`;

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect");
  //   // fake Http request...
  //   setTimeout(()=>{
  //     alert('Saved data to the cloud')
  //   },1000);
  // }, [props.persons]);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect only once");
    // fake Http request...
    // const timer = setTimeout(() => {
    //   alert("[Cockpit.js] useEffect only once");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect only once");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const classes = [];
  if (props.personsLength <= 2) {
    classes.push("red");
  }

  if (props.personsLength <= 1) {
    classes.push("bold");
  }

  let chars = (
    <div>
      {[...props.chars].map((char, index) => {
        return (
          <CharComponent click={() => props.charDeleted(index)} char={char} />
        );
      })}
    </div>
  );

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <h2>Char task:</h2>
      <input type="text" onChange={props.charsChanged} value={props.chars} />
      {chars}
      <br />
      <div>
        <StyledButton
          ref={toggleBtnRef}
          active={props.showPersons}
          onClick={props.clicked}
        >
          Toggle People
        </StyledButton>
        <StyledButton active={context.authenticated} onClick={context.login}>
          Log in
        </StyledButton>
      </div>
    </div>
  );
};

export default React.memo(Cockpit);
