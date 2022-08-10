import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/features/filter";

export const Paginations = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.filter);
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(getPage(e.selected + 1))}
      pageRangeDisplayed={5}
      pageCount={3}
      forcePage={page - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
