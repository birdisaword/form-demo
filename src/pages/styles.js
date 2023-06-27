import styled from 'styled-components'

export const Div = styled.div`
  width: 400px;
  height:550px;
  background: rgb(61,206,165);
  background: radial-gradient(circle at center top, rgba(61,206,165,1) 0%, rgba(149,112,215,1) 100%);
  margin: 8em auto;
  border-radius: 20px;
`

export const Icon = styled.img`
  height: 3em;
  width: 3em;
  margin: 5em 11em 0 11em;
`

export const Text = styled.h1`
  @font-face {
    font-family: "Font";
    src: url('../assets/Roboto.ttf');
  font-size: 30px;
    }
    text-align: center;
    color: white;
`

export const Form = styled.form`
  margin-top: 50px;
`

export const Input = styled.input`
  text-align: center;
  outline: none;
  color: white;
  display: block;
  padding: 0.25em 1em;
  width: 15em;
  height: 2em;
  border-radius: 4px;
  border: 2px solid white;
  background: transparent;
  margin: 1em auto;
  ::placeholder { 
  color: white;
  opacity: 0.4; 
}
`
export const InputHalf = styled(Input)`
width: 6em;
display: inline-block;
`

export const Button = styled.button`
  display: block;
  background: transparent;
  border-radius: 17px;
  border: 2px solid white;
  color: white;
  margin: 0 auto;
  padding: 0.25em 1em;
  width: 15em;
  height: 3em;
  &:active {
    transform: translateY(2px);
  }
`

// export const Link = styled.li`
// list-style-type: none;
// margin: 2em auto;
// &:active {
//   transform: translateY(1px);
// }
// `
// export const LinkA = styled.a`
// color: white;
// text-decoration: none;
// &:hover {
//   color: #e4e8f4;
// }
// `