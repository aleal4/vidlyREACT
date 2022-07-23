import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  // destructure props object
  const { pageSize, itemsCount, currentPage, onPageChange } = props;
  console.log(currentPage);
  // find out how many pages for all content to load depending on page size limits and itemCount
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  // use lodash to create page range
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
