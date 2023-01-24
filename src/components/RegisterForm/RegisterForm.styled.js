import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
color: black;
padding: 30px 15px 20px;
border-top: 1px solid maroon;
border-bottom: 1px solid maroon;
`;

export const Title = styled.h1`
margin: 5px;
text-align: center;
text-transform: uppercase;
color: black;
`;

export const Text = styled.p`
text-align: center;
text-transform: uppercase;
color: black;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
width: 350px;
min-height: 20vh;
margin: 10vh auto;
padding: 20px;
border-width: 10px 0 10px 0;
border-color: maroon;
border-style: solid;
background-color: #fff;
`;

export const Button = styled.button`
margin: 0 auto;
height: 25px;
width: 100px;
border: 0.3px solid black;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
cursor: pointer;
transform: scale(1);
transition: transform 250ms, background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), color 500ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  background-color: maroon;
  color: white;
  transform: scale(0.95);
  transition: transform 250ms;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
`;

export const ButtonLink = styled.button`
padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
/* margin: 15px auto 0; */
/* outline: 0; */
border-bottom: 0.3px solid maroon;
margin: 0 15px 0;
height: 30px;
width: 75px;
/* border: 0.3px solid black; */
border-radius: 30px;
/* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */
cursor: pointer;
transform: scale(1);
transition: transform 250ms, background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), color 500ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  /* background-color: maroon; */
  /* color: white; */
  color: maroon;
  border: 0.3px solid maroon;
  transform: scale(0.95);
  transition: transform 250ms;
  /* box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; */
}
`;

export const Wrap = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
/* outline: 1px solid tomato; */
`;

