<div className="table-search">
              <form className="d-flex form-inline">
                <div className="search_key">
                <input className="form-control" type="text" name="search_key" placeholder="Search" aria-label="Search"
                  onChange={handlekeySearch} />
                <img src="./assets/images/search.png" alt="sort-img" />
                </div>
                <div className="select-dropdown table-select">
                            <DateRangePicker
                                format="dd/MM/yyyy"
                                onChange={setRangeFilter} 
                            
                            />
                        </div>
                        <div className="select-dropdown table-select" onChange={handleDayFilter} > 
                            <img src="./assets/images/sort-down-small.png" alt="sort-img" />
                            <select className="select">
                            <option value="">Filter By Day</option>
                                <option value="today">Todays</option>
                                <option value="yesterday">Yesterday</option>
                                <option value="tomorrow">Tomorrow</option>
                            </select>
                        </div>

                <div className="select-dropdown table-select">
                <img src="./assets/images/sort-down-small.png" alt="sort-img" />
                <select className="select" name="status" onChange={handlekeySearch_staus}> 
                  <option value="">Status</option>
                  <option value="1">Paid</option>
                  <option value="2">Pending</option>
                </select>
              </div>
                </form>
              </div>
                    </div>
                    <BootstrapTable
                        keyField='transaction_id'
                        data={paymentdada}
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

export default Payment;