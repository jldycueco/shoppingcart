import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  filterProducts,
  sortProducts,
} from '../redux/action/productAction';
import '../App.css';
import { Divider, Select } from 'semantic-ui-react';

const sortOptions = [
  { key: 'Latest', value: 'Latest', text: 'Latest' },
  { key: 'Lowest', value: 'Lowest', text: 'Lowest' },
  { key: 'Highest', value: 'Highest', text: 'Highest' },
];

const brandOptions = [
  { key: 'All', value: 'All', text: 'All' },
  { key: 'Samsung', value: 'Samsung', text: 'Samsung' },
  { key: 'Apple', value: 'Apple', text: 'Apple' },
  { key: 'Huawei', value: 'Huawei', text: 'Huawei' },
];

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
      <div className="filterbar">
        <div>{displayData.length} Products Found</div>
        <div>
          <label>Sort</label>
          <select onChange={handleSort} value={sort}>
            <option value="Latest">Latest</option>
            <option value="Lowest">Lowest</option>
            <option value="Highest">Highest</option>
          </select>
        </div>
        <div>
          <label>Filter</label>
          <select onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Huawei">Huawei</option>
          </select>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Filter;
