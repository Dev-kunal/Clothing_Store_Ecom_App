import React, { cloneElement, useState } from "react";
import CollectionPreview from "../Components/CollectionPreview";
import "../Pages/Shoppage.css";

import SHOP_DATA from "../ShopData";

function ShopPage() {
  const [shopData, setshopData] = useState(SHOP_DATA); 
  const collections = shopData;

  return (
    <div className="shop-page">
     
      {collections.map(({ id, ...collectionprops }) => (
        <CollectionPreview key={id} {...collectionprops} />
      ))}
    </div>
  );
}

export default ShopPage;
