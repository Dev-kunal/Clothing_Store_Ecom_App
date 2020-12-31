import React from "react";
import PreviewItem from "../Pages/PreviewItem";

function CollectionPreview({ title, items }) {
  console.log("This is ColllectionPreview");

  return (
    <div className="collection-category">
      <h4 className="category-title">{title}</h4>
      <br />
        <div className="collection-preview">
          {items
            .filter((itm, ind) => ind < 3)
            .map((item) => (
              <PreviewItem key={item.id} item={item} />
            ))}
        </div>
      {/* </div> */}
    </div>
  );
}

export default CollectionPreview;
