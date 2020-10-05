import React from "react";

export const Categories = React.memo(
  ({ activeCategory, onSetCategory, items }) => {
    const onSelectItem = (index) => {
      onSetCategory(index);
    };

    return (
      <div className="categories">
        <ul>
          <li
            onClick={() => onSelectItem(null)}
            className={activeCategory === null ? "active" : ""}
          >
            Все
          </li>
          {items.map((item, index) => (
            <li
              key={`${item}_${index}`}
              onClick={() => onSelectItem(index)}
              className={activeCategory === index ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
