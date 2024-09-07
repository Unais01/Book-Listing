
import "./App.css" 
const Footer = () => {

  const handleClickEvent=(e)=>{
    console.log("Button Clicked...");
    console.log(e.target);
   
  }
  const handleTextChangeEvent=(e)=>{
    console.log(`Text Manipulate ${Math.floor(Math.random()*10)+1}`);
    console.log(e.target.value);
    console.log(e.target.name);
  }
  const handleFormSubmittion=(e)=>{
    e.preventDefault();
    console.log("submitted...");
    
  }



    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Welcome to Book Haven, your one-stop destination for all genres of books.
              We offer a wide range of collections for book lovers.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@bookhaven.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Book Lane, Library City, 56789</p>
          </div>
          
          <div className="footer-section social">
            <h3>Follow Us</h3>
           
          </div>
        </div>
        <form className="form"  onSubmit={handleFormSubmittion}>
          <h4>Typical Form</h4>
        <input type="text" placeholder="TYPE SOMETHING" name="form-learning" onChange={handleTextChangeEvent} />
        <button className="btn" onClick={handleClickEvent} >Click Me</button>
        </form>
      </footer>
     
    );
  };
  
  export default Footer;



//   const Footer = () => {
//     return (
//       <div>
//         {
//           data.map((item) => {
//             const { company, rating, origin } = item;
//             return <Headings  company={company} rating={rating} origin={origin} />
//           })
  
//         } </div>
//     )
//   }


// const Headings = ({ company, rating, origin }) => {

//     return (
//       <div>
//         <h4>{company} is trustable</h4>
//         <h4>comes from {origin} </h4>
//         <h4>{rating} ratings</h4>
//       </div>
  
//     )
//   }

