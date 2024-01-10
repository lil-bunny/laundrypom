<div className="helper-details db-details-contents">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="db-details-profile">
                                            <span className="profile-image">
                                                <img src={ data.new_profile_image_name ? data.new_profile_image_name : imagepath()+'dummy.png'} alt="prof-img" />
                                            </span>
                                            <div className="right-prof-panel">
                                                <h2>{data.firstName} {data.lastName}</h2>
                                                <p>Helper</p>
                                                <span className="db-contact">
                                                    Contact No: <span>{data.primary_phone_no}, {data.alternate_phone_no}</span>
                                                </span>
                                                <span className="db-prof-address">
                                                {data.address}, {data.cityName} {data.pincode}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="profile-footer-border"></span>
                            </div>
                        </div>
                    
                    </div>
                </div >
            </section >
        </>
    )
}

export default HelperDetails;