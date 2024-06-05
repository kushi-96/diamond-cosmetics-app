import { FC, useEffect, useState } from 'react'
import Pagination from 'react-paginate';

export interface PaginationProps {
  data: PaginatedData | null;
  itemsPerPage: number;
  handlePageChange: (newPage: number) => void;
  currentPage: number;
}
interface PaginatedData {
  data: any[];
  last_page: number;
}
export const ProductPagination: FC<PaginationProps> = ({
  data,
  itemsPerPage,
  handlePageChange,
  currentPage,
}: PaginationProps) => {
  const [pageCount, setPageCount] = useState(0);


  useEffect(() => {
    if (data && data.hasOwnProperty('last_page')) {
      setPageCount(data.last_page);
    }
  }, [data]);

  const handlePageClick = (data: { selected: number }) => {
    handlePageChange(data.selected + 1);
  };

  return (
    <div className='flex justify-center mt-5'>
      <Pagination
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        forcePage={currentPage - 1}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center gap-x-4"
        pageClassName="px-2 py-1 rounded-md text-md hover:bg-gray-100"
        pageLinkClassName="text-gray-700"
        activeClassName="bg-gray-200 font-bold"
        nextLabel={<i className='ri-arrow-right-line text-[15px] font-bold text-black' />}
        previousLabel={<i className='ri-arrow-left-line text-[15px] font-bold text-black' />}
        breakLabel="..."
      />
    </div>
  )
}

ProductPagination.defaultProps = {

}

export default ProductPagination
