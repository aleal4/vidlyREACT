import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  // destructure props object
  const { pageSize, itemsCount } = props;
  // find out how many pages for all content to load depending on page size limits and itemCount
  const pagesCount = itemsCount / pageSize;
  // use lodash to create page range
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a href="#" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
