import React, { useEffect, useRef, useState } from "react";

export const SortList = React.memo(({ items, onSetSort, activeSort }) => {


  const [showSortList, setShowSortList] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);
  const sortRef = useRef(null);
  const toggleShowSortList = () => {
    setShowSortList(!showSortList);
  };

  const handleOutsideClick = (event) => {
    let path = event.path || (event.composedPath && event.composedPath()) ;
    if (!path.includes(sortRef.current)) {
      setShowSortList(false);
    }
  };

  const onClickSetSort = (item) => {
    onSetSort(item);
    setShowSortList(false);
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label" onClick={toggleShowSortList}>
        <svg
          className={showSortList ? "" : "rotated"}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{activeSort.name}</span>
      </div>
      {showSortList && (
        <div className="sort__popup">
          <ul>
            {items.map((item, index) => (
              <li
                key={`${item.type}_${index}`}
                onClick={() => onClickSetSort(item)}
                className={activeSort.type === item.type ? "active" : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
