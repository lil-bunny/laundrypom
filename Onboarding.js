return (
        <>
            <section className="onboarding-panel">
                <h1>Onboarding Request</h1>
                <div className="common-table">
                    <div className="table-header">
                        <div className="table-search">
                        <form className="d-flex form-inline">
                            <input className="form-control" type="text" name="search_key" placeholder="Search" aria-label="Search"
                  onChange={handlekeySearch} />
                                <img src={imageLocation + 'search.png'} alt="sort-img" />
                            
                        
                        <div className="select-dropdown table-select">
                            <img src={imageLocation + 'sort-down-small.png'} alt="sort-img" />
                            <select className="select" name="type" onChange={handleTypeFilter}>
                                <option value="">By Type</option>
                                <option value="delivery_boy">Delivery Boy</option>
                                <option value="customer">Customer</option>
                                <option value="helper">Helper</option>
                                <option value="laundry">Laundry Services</option>
                            </select>
                        </div>
                        <div className="select-dropdown table-select">
                            <DateRangePicker
                                format="dd/MM/yyyy"
                                onChange={setRangeFilter} 
                            />
                        </div>
                        </form>
                        </div>
                    </div>
                    <BootstrapTable
                        keyField='id'
                        data={onboarding_requests}
                        columns={columns}
                        noDataIndication={emptyDataMessage} 
                        wrapperClasses="table-responsive"
                    />

                    

                        {PaginationHtml()}
                      
                       
                </div>
            </section>
            <OnboardingModal show={show} onHide={handleClose} onboardingdata={onboardingdata} />
        </>
    )
}

export default Onboarding;