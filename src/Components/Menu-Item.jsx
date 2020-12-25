import React from 'react'
import "../App.css";
function MenuItem(props) {
    return (
        <div>
            <div className="menu-item" style={{ backgroundImage: `url(${props.item.imgurl})` }}>
                    <div className="content">
                        <h4 className="title">{props.item.title.toUpperCase()}</h4>
                        <button type="button" className="btn btn-outline-dark btn-sm subtitle">Shop Now</button>
                    </div>
                </div>
        </div>
    )
}

export default MenuItem;
