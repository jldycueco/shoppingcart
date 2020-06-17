import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  filterProducts,
  sortProducts,
} from '../flux/action/productAction';

const Filter = () => {
  const dispatch = useDispatch();

  const { data, displayData, sort } = useSelector(
    (state) => state.product,
  );

  const handleFilter = (e) => {
    dispatch(filterProducts(data, e.target.value));
  };

  const handleSort = (e) => {
    dispatch(sortProducts(displayData, e.target.value));
  };

  return (
    <>
      <div>
        <div>{displayData.length} Products</div>
        <label>Sort</label>
        <select onChange={handleSort} value={sort}>
          <option value="Latest">Latest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
        <label>Filter</label>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="Huawei">Huawei</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
