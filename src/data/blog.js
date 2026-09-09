import logo from "../assets/logo";

const blogData = {
  name: "Denis Yegon",
  image: logo,
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "August 15, 2026",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "August 11, 2026",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ],
};

export default blogData;
