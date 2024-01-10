];

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const handleSearch = (event) => {
        // console.log(event.target.value);
        setSearchText(event.target.value);
    };

    const filteredData = SubcategoriesList.filter((item) =>
        Object.values(item).some((field) =>
            String(field).toLowerCase().includes(searchText.toLowerCase())
        )
    );
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

    return (
        <>
            <section className="delivery-boy-panel">
                <h3>Manage Sub Categories</h3>
                <div className="common-table">

                    <div className="table-header">
                        <button className="btn btn-secondry btn-add-new" onClick={() => OpenAddModel()}>Add New</button>
                        <div className="table-search">
                            <form className="form-inline">

                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={handleSearch} />
                                <img src={imageLocation + 'search.png'} alt="sort-img" />
                            </form>
                        </div>
                    </div>
                    <BootstrapTable
                        keyField='id'
                        data={filteredData}
                        columns={columns}
                        wrapperClasses="table-responsive"
                    />
                    {PaginationHtml()}
                </div>
            </section>
            <UpdateSubServideModal show={show} onHide={handleClose} SubCategoryDetails={SubCategoryDetails} />

            <AddSubServiceModal show={showadd} onHide={handleCloseAdd} />
        </>
    )
}

export default ManageSubCategories;