function Article({ title, date, preview }) {
    return (
      <article>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;