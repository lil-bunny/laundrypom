{
            dataField: 'cs_name',
            text: 'CS Name',
            formatter: nameFormatter
        },
        {
            dataField: 'primary_phone_no',
            text: 'Contact'
        },
        {
            dataField: 'last_order',
            text: 'Last Order',
            formatter: lastOrderDateFormate
        },
        {
            dataField: 'unpaid_amount',
            text: 'Unpaid Amount',
            formatter: PendingAmounFormator
            
        },
        {
            dataField: 'active_order_count',
            text: 'Active Orders'
        },
        {
            dataField: 'address',
            text: 'Address'
        },
        {
            dataField: 'action',
            text: 'Action',
            formatter: actionFormator
        },
    ];
    const handlekeySearch = (event) => {
        //set_Search_key(event.target.value);
        if (event.target.value != '') {
          setKeyFilter('&search_key=' + event.target.value.trim());
        }
        else {
          setKeyFilter('');
        }
      };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const renderItems = () => {
        return Array.from({ length: Math.ceil(total_items / itemsPerPage) }, (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? "active" : ""}>{index + 1}</button>
        ));
    };

    const PaginationHtml = () => {
        if (Math.ceil(total_items / itemsPerPage) > 1) {
            return <div className="custom-pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <Icon icon="fa-arrow-left" />
                </button>
                {renderItems()}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(total_items / itemsPerPage)}><Icon icon="fa-arrow-right" />
                </button>
            </div>
        }
    };

   // console.log(customers);
    return (
        <>
            <section className="customer-panel">
            <h1 className="title">Customers</h1>
                <div className="common-table">
                    <div className="table-header">
                        <div className="table-search">
                            <form className="form-inline">
                            <input className="form-control" type="text" name="search_key" placeholder="Search" aria-label="Search"
                    onChange={handlekeySearch} />
                                <img src="../assets/images/search.png" alt="sort-img" />
                            </form>
                        </div>
                    </div>
                    <BootstrapTable
                        keyField='id'
                        data={customers}
                        columns={columns}
                        noDataIndication={emptyDataMessage}
                        wrapperClasses="table-responsive"
                    />
                    {PaginationHtml()}
                </div>
            </section>
        </>
    )
}

export default Customer;