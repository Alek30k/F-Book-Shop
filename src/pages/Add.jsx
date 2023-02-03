import React, { useState } from "react";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        // onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        // onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        // onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        // onChange={handleChange}
      />
    </div>
  );
};

export default Add;
