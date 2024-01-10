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
  
  console.log(laundryList);
  return (
    <>
      <section className="delivery-boy-panel db-details-panel">
        <h1>Laundry Service</h1>
        <div className="common-table order-panel-table">
          <div className="table-header">
            <div className="table-search">
              <form className="d-flex form-inline">
                <div className="search_key">
                  <input className="form-control" type="text" name="search_key" placeholder="Search" aria-label="Search"
                    onChange={handlekeySearch} />
                  <img src="./assets/images/search.png" alt="sort-img" />
                </div>
                <div className="select-dropdown table-select">
                  <img src="./assets/images/sort-down-small.png" alt="sort-img" />
                  <select className="select" name="status" onChange={handlekeySearch_staus}>
                    <option value="">Status</option>
                    <option value="1">Active</option>
                    <option value="2">Accepted</option>
                    <option value="3">Rejected</option>
                    <option value="4">Deleted</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <BootstrapTable
            keyField='id'
            data={laundryList}
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

export default Laundry;