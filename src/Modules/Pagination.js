import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { SortDiv, SortButton, PageButton } from "../Components/Buttons";
import { HomePageButtonDiv, PaginateDiv } from "../Components/Containers";
import PostListView from "../Modules/PostListView";
import useFetchPostCount from "../Utilities/Hooks/useFetchPostCount";

import useFetchPosts from "../Utilities/Hooks/useFetchPosts";
import WarningMessageModule from "./MessageComponents/WarningMessageModule";

// A general purpose pagination function
// It handles what url to use, how to sort, and pagination between back and front end

function Pagination({ searchParams, pathName, fetchedPage }) {
  const history = useHistory();
  const [url, setUrl] = useState("");
  const [countUrl, setCountUrl] = useState("");
  const { data, load, error } = useFetchPosts(url, searchParams);
  const [sortNew, setSortNew] = useState(true);
  const [endOfPage, setEndOfPage] = useState(false);
  // useFetchPostCount is a direct call to back-end for number of posts based on sorting
  // There is a limitation in mongoose where it cannot send a total, non-paginated collection count alongside content
  const { count, countLoad, countError } = useFetchPostCount(
    countUrl,
    searchParams
  );

  // Dynamically change the urls between Home and Genre pages
  // pathName is given by custom hook called in parent component that parses the given url
  useEffect(() => {
    if (pathName.includes("genre")) {
      setUrl("http://localhost:8888/posts/genre/");
      setCountUrl("http://localhost:8888/posts/genre/count");
    } else {
      setUrl("http://localhost:8888/posts");
      setCountUrl("http://localhost:8888/posts/count");
    }
  }, [pathName]);

  // The setting of whether or not to show back/next buttons on the page
  // Based on whether or not there are more posts within the collection in the back
  useEffect(() => {
    const pageCount = searchParams.limit * (searchParams.page + 1);
    if (count > pageCount) {
      setEndOfPage(false);
    } else if (count <= pageCount) {
      setEndOfPage(true);
    }
  }, [data, searchParams, count]);

  // Basic sorting upon onClick
  // history pushes the selected sorting, and that url is parsed on being called
  const sortController = (e, boolean) => {
    e.preventDefault();
    setSortNew(boolean);
    if (boolean === true) {
      history.push({
        pathname: pathName,
        search: `?sortby=createdAt_desc`,
      });
    } else {
      history.push({
        pathname: pathName,
        search: `?sortby=votes_desc`,
      });
    }
  };

  // Next/back button sorting with history.push()
  const paginate = (expr) => {
    switch (expr) {
      case "next":
        history.push({
          pathname: pathName,
          search: `?page=${searchParams.page + 1}&sortby=${
            searchParams.sortby
          }`,
        });
        break;
      case "back":
        history.push({
          pathname: pathName,
          search: `?page=${searchParams.page - 1}&sortby=${
            searchParams.sortby
          }`,
        });
        break;
      default:
        throw new Error();
    }
  };

  return (
    <PaginateDiv>
      <SortDiv>
        <SortButton
          className={`${sortNew ? "selected" : ""}`}
          onClick={(e) => sortController(e, true)}
        >
          New Posts
        </SortButton>
        <SortButton
          className={`${sortNew ? "" : "selected"}`}
          onClick={(e) => sortController(e, false)}
        >
          Top Posts
        </SortButton>
      </SortDiv>
      {error || countError ? (
        <WarningMessageModule string="Something went wrong. Please refresh the page and try again." />
      ) : (
        <PostListView data={data} load={load} countLoad={countLoad} />
      )}

      <HomePageButtonDiv>
        {fetchedPage === 0 ? null : (
          <PageButton onClick={() => paginate("back")}>Back</PageButton>
        )}
        {endOfPage ? null : (
          <PageButton primary onClick={() => paginate("next")}>
            Next
          </PageButton>
        )}
      </HomePageButtonDiv>
    </PaginateDiv>
  );
}

export default Pagination;
