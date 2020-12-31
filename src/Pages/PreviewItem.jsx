import React from "react";
import "../Pages/Shoppage.css";

function PreviewItem(props) {
  return (
    <div className="preview-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.item.imageUrl})` }}
      >
      </div>
      <div className="collection-footer">
        <span className="name">{props.item.name}&nbsp;&nbsp;</span>
        <span className="price">${props.item.price}</span>
      </div>
    </div>
  );
}

export default PreviewItem;
