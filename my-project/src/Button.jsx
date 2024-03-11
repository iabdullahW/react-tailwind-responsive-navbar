

const Button = (props) => {
    return (
     <>
      <button className=" bg-indigo-600 text-white font-[Poppins]  px-5 py-1 rounded md:ml-8 hover:bg-indigo-500 duration-200 ">
        
        {props.children}
      </button>
     </>
    )
  }
  
  export default Button
  