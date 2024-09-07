import books from './book';
import "./App.css"
const BookList = () => {

  const getBook = (id) => {
    const book = books.find((item) => item.id == id
    );
    console.log(book.title);

  }

  return (
    <div className="bookContainer">
      {books.map((item,idx) => {
        //   const { title, author, img } = item;

        return <Book {...item} key={item.id} getBook={getBook} number={idx} />
      })}

    </div>
  )


}

const Book = (props) => {
  const { title, img, author,id ,getBook,number} = props;
  return (
  
    <div className="book-card">
    {/* <span className="book-num">{id}{number+1}</span> */}
    <span className="book-num">{id}</span>
      <img src={img} alt={title} />
      <h2 className="title">{title}</h2>
      {/* <button className='btn' onClick={()=>console.log(title)}>Console Title</button> */}
      {/* button directly hold the refrence to component independently ,while we have to struggle in vanilla Js */}
      <h3 className="author-name">{author}</h3>
      {/* <button className="btn" onClick={()=>getBook(id)}>SHOW IN CONSOLE</button> */}
    </div>
 
  )

}
export default BookList;