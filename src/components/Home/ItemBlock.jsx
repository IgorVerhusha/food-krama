import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types"
import {Button} from "..";




export const ItemBlock = React.memo(({ id, name, types, prices, imageUrl, sizes, onPutItemOnCart} ) => {



  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activePrice, setActivePrice] = useState(prices[String(activeSize)]);
   // const [cheeseBoard, setCheeseBoard] = useState("");
   // const [doubleCheese, setDoubleCheese] = useState("");



// const onSelectType=(index)=>{
//     setActiveType(index)
// }

const onSelectSize=(index)=>{
    setActiveSize(index)
    setActivePrice(prices[index])
}

// const onCheckAdditives=(e)=>{
//     if (e.target.checked){
//         setCheeseBoard(e.target.value)
//
//     } else {
//         setCheeseBoard("")
//
//     }
//     setActivePrice(activePrice + (cheeseBoard.length ===0? 30 : -30))
// }

    // const onDoubleCheese=(e)=>{
    //     if (e.target.checked){
    //         setDoubleCheese(e.target.value)
    //
    //     } else {
    //         setDoubleCheese("")
    //     }
    //     setActivePrice(activePrice  + (doubleCheese.length ===0? 30 : -30))
    // }

    const onSelectItem=()=>{
        let obj = {id,
            name,
            size: activeSize,
         //   type: availableTypes[activeType],
            img: imageUrl,
            price: activePrice,
            // cheeseBoard,
            // doubleCheese
        }

        onPutItemOnCart(obj)
    }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        {/*<ul>*/}
        {/*  {availableTypes.map((type, index) => (*/}
        {/*          <li*/}
        {/*              key={`${type}_${index}`}*/}
        {/*      onClick={() => {*/}
        {/*          onSelectType(index);*/}
        {/*      }}*/}
        {/*      className={classNames({ active: activeType === index , disabled: !types.includes(index) })}*/}
        {/*    >*/}
        {/*      {type}*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
        <ul>
          {sizes.map((size, index) => (
            <li key={`${size}_${index}`} onClick={()=>onSelectSize(size)} className={classNames({ active: activeSize === size , disabled: !sizes.includes(size)})}>{size}</li>
          ))}
        </ul>
      </div>
        {/*<div className="pizza-block__checkboxes">*/}
        {/*    <div className="pizza-block__checkbox-item">*/}
        {/*        <input type="checkbox" value={"двойной сыр"} onChange={onDoubleCheese}/>*/}
        {/*        <label> двойной сыр </label>*/}
        {/*    </div>*/}
        {/*    <div className="pizza-block__checkbox-item">*/}
        {/*        <input type="checkbox" value={"сырный борт"} onChange={onCheckAdditives}/>*/}
        {/*        <label> сырный борт</label>*/}
        {/*    </div>*/}
        {/*</div>*/}
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
            {activePrice} руб.</div>
        <Button className="button button--outline button--add" onClick={onSelectItem}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span >Добавить</span>

        </Button>
      </div>
    </div>

  );
}
)

ItemBlock.propTypes = {
name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
 prices: PropTypes.object.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired
}
