import books from './book';

const BookList = () => {
    return (
      <div className="bookContainer">
        {books.map((item,index) => {
        //   const { title, author, img } = item;
  
          return <Book {...item}  key={index} />
        })}
  
      </div>
    )
  
  
  }
  
  const Book = (props) => {
    const { title, img, author } = props;
    return (
      <div className="book-card">
  
        <h2 className="title">{title}</h2>
  
  
        <img src={img} alt={title} />
        <h3 className="author-name">{author}</h3>
      </div>
    )
  
  }
  export default BookList;