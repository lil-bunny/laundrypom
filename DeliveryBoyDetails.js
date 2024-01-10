<div className="col-md-3 mt-2">
                                        <h5>Date Of Birth</h5>
                                    </div>
                                    <div className="col-md-9 mt-2">
                                        <input readOnly className="form-control" type="text" defaultValue={data.dob} />
                                    </div>
                                    <div className="col-md-3 mt-2">
                                        <h5>Phone Number</h5>
                                    </div>
                                    <div className="col-md-9 mt-2">
                                        <input readOnly className="form-control" type="text" defaultValue={data.primary_phone_no} />
                                    </div>
                                    <div className="col-md-3 mt-2">
                                        <h5>City</h5>
                                    </div>
                                    <div className="col-md-9 mt-2">
                                        <input readOnly className="form-control" type="text" defaultValue={data.cityName} />
                                    </div>
                                    <div className="col-md-3 mt-2">
                                        <h5>Pin Code</h5>
                                    </div>
                                    <div className="col-md-9 mt-2">
                                        <input readOnly className="form-control" type="text" defaultValue={data.pincode} />
                                    </div>
                                </div>
                            </div>
                            
                                
                            <h2>Rates</h2>
                                <BootstrapTable
                                    keyField='id'
                                    data={rates}
                                    columns={columns}
                                    wrapperClasses="table-responsive"
                            />
                            <span className="profile-footer-border"></span>
                            <div className="footer-button">
                                <a className="btn btn-primary btn-back" href={'/delivery-boy/'}>BACK</a>
                            </div>
                        </div>
                    </div>
                </div >
                </div>
            </section >
        </>
    )
}

export default DeliveryBoyDetails;