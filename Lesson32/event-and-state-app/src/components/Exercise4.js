const Exercise4=(props)=>{
  const {item}= props;
    return(

      <li 
      
      onClick={() => alert(item)}
  >
      {item}
  </li>
    );

};

export default Exercise4;



export const Exercise4v2 = () => {
  const data = ['apple', 'banana', 'pineapple'];

  return (
    <ul>
      {
        data.map(item => <li key={item} onClick={()=>alert(item)}>{item}</li>
        )
      }
    </ul>
  )
}