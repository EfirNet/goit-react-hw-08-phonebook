import styled from 'styled-components';

export const Text = styled.p`
margin: 3px;
text-transform: lowercase;
color: black;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 15px;
border-bottom: 1px solid maroon;
`;

export const Button = styled.button`
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
  transition: transform 500ms;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
`;

