import React from 'react'


const Book = ({img, title, aurhor}) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert('hello world');
  };
 
  const complexExample = (aurhor) => {
    console.log(aurhor);
  };

  return (
    <article className='book' onMouseOver ={()=> {
      console.log(title);
    }}>
        <img className='image' src={img} allt=''/>
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{aurhor}</h4>
        <button type='button' onClick={clickHandler}>HELLO</button>
        <button type='button' onClick= {() => complexExample(aurhor)}>A more complex example</button>
    </article>
    );
};

export default Book
