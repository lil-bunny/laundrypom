<div className="db-details-contents">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="db-details-profile">
                                                    <span className="profile-image">
                                                        <img src={data.new_profile_image_name ? data.new_profile_image_name : imagepath() + 'dummy.png'} alt="prof-img" />
                                                    </span>
                                                    <div className="right-prof-panel">
                                                        <h2>{data.firstName} {data.lastName}</h2>
                                                        <span className="db-contact">
                                                            Contact No: <span>{data.primary_phone_no}</span>
                                                        </span>
                                                        <span className="db-prof-address">
                                                            {data.address}
                                                        </span>
                                                        <button className="btn btn-dark d-none">
                                                            Rs. <span>256</span> will be adjusted in next billing amount.
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="profile-footer-border"></span>
                                    </div>
                                </div>

                                <h2>Order History</h2>
                                <BootstrapTable
                                    keyField='order_unique_id'
                                    data={customeOrders}
                                    columns={columns}
                                    wrapperClasses="table-responsive"
                                    noDataIndication={emptyDataMessage}
                                />
                                {PaginationHtml()}
                                <div className="footer-button">
                                    <button className="btn btn-sm d-none" type="button">CANCEL</button>
                                    <button className="btn btn-sm" type="button" onClick={backHandler}>Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default CustomerDetails;