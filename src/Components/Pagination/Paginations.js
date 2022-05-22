import React from "react";
import { Pagination } from "antd";

import "./Pagination.scss";

export const Paginations = (props) => {
  const { posts, location, history, setPage } = props;
  const currentPage = parseInt(posts.page);

  const onChangePage = newPage => {
    history.push(`${location.pathname}?page=${newPage}`);
    setPage(newPage);
  };

  return (
    <Pagination
      defaultCurrent={currentPage}
      total={posts.total}
      pageSize={posts.limit}
      onChange={newPage => onChangePage(newPage)}
      className="pagination"
    />
  );
}
