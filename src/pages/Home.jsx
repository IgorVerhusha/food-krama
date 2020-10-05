import { Categories, ItemBlock, ItemBlockLoader, SortList  } from "../components";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../Redux/filters";
import { fetchItems } from "../Redux/items";
import {putItem} from "../Redux/cart";

const categoriesArray = [
  "Пиццы",
  "Бургеры",
  "Донеры",
  "Закуски",
  "Напитки",
];

const sortArray = [
  { name: "популярности", type: "rating", order: 'desc'  },
  { name: "цене", type: "price", order: 'desc'  },
  { name: "алфавиту", type: "name", order: 'asc'  },
];

export const Home = React.memo(function Home()  {

    const items = useSelector((state) => state.items.items)
    const isLoaded = useSelector((state) => state.items.isLoaded)
    const activeCategory = useSelector((state) => state.filters.category)
    const activeSort = useSelector((state) => state.filters.sortBy)


  const dispatch = useDispatch();
  const onSetCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSetSort = useCallback((item) => {
    dispatch(setSortBy(item));
  }, [dispatch]);

    const onPutItemOnCart = useCallback((obj) => {
        dispatch(putItem(obj));
    }, [dispatch]);

  useEffect(() => {
    dispatch(fetchItems(activeCategory, activeSort));
  }, [activeCategory, activeSort, dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoriesArray}
          onSetCategory={onSetCategory}
          activeCategory={activeCategory}
        />
        <SortList
          items={sortArray}
          onSetSort={onSetSort}
          activeSort={activeSort}
        />
      </div>
      <h2 className="content__title">
        {activeCategory != null ? categoriesArray[activeCategory] : "Все"}
      </h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item, index) => (
              <ItemBlock {...item} key={`${item.name}_${index}`} onPutItemOnCart={onPutItemOnCart}/>
            ))
          : Array(10)
              .fill(0)
              .map((loader, index) => <ItemBlockLoader key={index} />)}
      </div>
    </div>
  );
})
