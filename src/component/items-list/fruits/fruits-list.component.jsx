import React, { useState } from "react";

import './fruits-list.styles.scss';

import FRUIT_DATA from './fruits-data';
import Item from "../../item/item.component";

import ReactPaginate from "react-paginate";

const FruitsList = () => {
    const [items] = useState(FRUIT_DATA);
    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 8
    const pagesVisited = pageNumber * itemsPerPage

    const displayItems = items
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((item) => (<Item key={item.id} item={item} />));

    const pageCount = Math.ceil(items.length / itemsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="fruitslist">
            <div className="fl-header">
                <h2>Fresh Fruits</h2>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationbuttons'}
                    previousLinkClassName={'nextbutton'}
                    nextLinkClassName={'nextbutton'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                    pageClassName={'page'}
                    
                />
            </div>

            <div className='list'>
                {displayItems}
            </div>
        </div>
    )
};

export default FruitsList;