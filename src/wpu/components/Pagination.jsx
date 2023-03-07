
export const Pagination = ({ currentPage, totalPages, onPageChange }) => {

	const currentPageNum = Number(currentPage);
  const totalPagesNum = Number(totalPages);

	if ( currentPageNum === 1 && currentPageNum === totalPagesNum ) {
    return '';
  }

	return (
		<div>
      <button
        disabled={currentPageNum === 1}
        onClick={() => onPageChange(currentPageNum - 1)}
      >
        Previous
      </button>
      <span>Page {currentPageNum} of {totalPagesNum}</span>
      <button
        disabled={currentPageNum === totalPagesNum}
        onClick={() => onPageChange(currentPageNum + 1)}
      >
        Next
      </button>
    </div>
	)
}
