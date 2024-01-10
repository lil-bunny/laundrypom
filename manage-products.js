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
            <section className="delivery-boy-panel body-panel">
                <h3>Manage Products</h3>
                <div className="common-table">

                    <div className="table-header">
                        <button className="btn btn-secondry btn-add-new" onClick={() => OpenAddModel()}>Add New</button>
                        <div className="table-search">
                            <form className="form-inline">

                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={handlekeySearch} />
                                <img src={imageLocation + 'search.png'} alt="sort-img" />
                            </form>
                        </div>
                    </div>
                    <BootstrapTable
                        keyField='id'
                        data={productList}
                        columns={columns}
                        wrapperClasses="table-responsive"
                        noDataIndication={emptyDataMessage} 
                    />
                    {PaginationHtml()}
                </div>
            </section>
            <UpdateProductModal show={show} onHide={handleClose} ProductDetail={ProductDetail} />

            <AddProductModal show={showadd} onHide={handleCloseAdd} />
        </>
    )
}

export default ManageProducts;