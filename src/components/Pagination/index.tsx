import React, { useCallback } from "react";
import Button from "@/components/Button";
import classNames from "classnames";

interface PaginateType {
  curPage: number;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const RANGE = 1;

export default function Pagination({
  curPage,
  setCurPage,
  pages,
  handlePrevPage,
  handleNextPage,
}: PaginateType) {
  //RENDER PAGINATION
  const renderPagination = useCallback(() => {
    let dotAfter = false;
    let dotBefore = false;
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true;
        return (
          <span
            key={index}
            className="mx-2 rounded border bg-white px-3 py-2 shadow-sm"
          >
            ...
          </span>
        );
      }
      return null;
    };
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true;
        return (
          <span
            key={index}
            className="mx-2 rounded border bg-white px-3 py-2 shadow-sm"
          >
            ...
          </span>
        );
      }
      return null;
    };

    return Array(pages)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        if (
          curPage <= RANGE * 2 + 1 &&
          pageNumber > curPage + RANGE &&
          pageNumber < pages - RANGE + 1
        ) {
          return renderDotAfter(index);
        } else if (curPage > RANGE * 2 + 1 && curPage < pages - RANGE * 2) {
          if (pageNumber < curPage - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index);
          } else if (
            pageNumber > curPage + RANGE &&
            pageNumber < pages - RANGE + 1
          ) {
            return renderDotAfter(index);
          }
        } else if (
          curPage >= pages - RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < curPage - RANGE
        ) {
          return renderDotBefore(index);
        }
        return (
          <Button
            key={index}
            className={classNames(
              "px-3 py-1 bg-white mx-2 rounded-sm border shadow-md cursor-pointer",
              { "!border-blue-500 border-2": pageNumber == curPage }
            )}
            onClick={() => setCurPage(index + 1)}
            contentButton={pageNumber}
          ></Button>
        );
      });
  }, [pages, setCurPage, curPage]);

  return (
    <div className="mt-6 flex flex-wrap justify-center dark:text-black">
      <Button
        className={classNames(
          "mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm",
          {
            "!cursor-not-allowed": curPage == 1,
          }
        )}
        onClick={handlePrevPage}
        contentButton="Prev"
      />

      {renderPagination()}
      <Button
        className={classNames(
          "mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm",
          {
            "!cursor-not-allowed": curPage == pages,
          }
        )}
        onClick={handleNextPage}
        contentButton="Next"
      />
    </div>
  );
}
