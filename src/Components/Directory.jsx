import React, { useState } from "react";
import MenuItem from "../Components/Menu-Item";
import "../App.css";

function Directory() {
  const [categories, setcategories] = useState([
    {
      id: 1,
      title: "Jackets",
      imgurl:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        linkUrl:"jackets"
    },
    {
      id: 2,
      title: "Sneakers",
      imgurl:
        "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        linkUrl:"sneakers"
    },
    {
      id: 3,
      title: "Caps",
      imgurl:
        "https://images.unsplash.com/photo-1466992133056-ae8de8e22809?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        linkUrl:"caps"
    },
    {
      id: 4,
      title: "Mens",
      imgurl:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        linkUrl:"mens"
    },
    {
      id: 5,
      title: "Womens",
      imgurl:
        "https://images.unsplash.com/photo-1557771551-634f8d68b0a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        linkUrl:"womens"
    },
  ]);

  return (
    <div className="directory-menu">
      {categories.map((category) => (
        <MenuItem key={category.id} item={category} />
      ))}
    </div>
  );
}

export default Directory;
