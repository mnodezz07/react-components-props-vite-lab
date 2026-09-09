function About({ about, image }) {
    return (
      <aside>
        <img
          src={image || "/images/blog-logo.png"}
          alt="blog logo"
        />
        <p>{about}</p>
      </aside>
    );
  }
  
  export default About;