import React from 'react'

const Data = {
    title: "Menu",
    items: [
        { id: 1, name: "tacos", type: "mexican" },
        { id: 2, name: "burrito", type: "mexican" },
        { id: 3, name: "tostada", type: "mexican" },
        { id: 4, name: "mushy peas", type: "english" },
        { id: 5, name: "black pudding", type: "english" },
        { id: 6, name: "fish and chips", type: "english" }
    ]
};


const Menu = () => {
    const items = Data.items
        .map(item => <li key={item.id}> {item.name}</li>)

    return (
        <div>
            <h1>
                {Data.title}
            </h1>
            <ukl>
                {items}
            </ukl>
        </div>
    )
}
export default Menu