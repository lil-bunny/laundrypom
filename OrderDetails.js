<div className="order-journey-content">
                                        <span className="left-bar"></span>
                                        <p>Picked up from LS </p>
                                        <span>{orderDetailDate!==null && orderDetailDate.picked_up_from_ls_date !== null && typeof orderDetailDate.picked_up_from_ls_date !== 'undefined' && dateFormat(orderDetailDate.picked_up_from_ls_date, "dd mmm, yyyy | h:MM TT")} </span>
                                    </div>
                                    
                                    </div>
                                    
                                    <span className="order-journey-footer-border"></span>
                                    <div className="order-journey-panel delivery-panel">
                                    <div className="order-journey-content">
                                        <span className="left-bar"></span>
                                        <p>Pickup For Delivery</p>
                                        <span>{orderDateData.picked_up_to_deliver_customer_date !== null && typeof orderDateData.picked_up_to_deliver_customer_date !== 'undefined' && dateFormat(orderDateData.picked_up_to_deliver_customer_date, "dd mmm, yyyy | h:MM TT")} </span>
                                    </div>
                                    <div className="order-journey-content">
                                        <span className="left-bar"></span>
                                        <p>To Be Deliver </p>
                                        <span>{dateFormat(orderDetailsData.customer_delivery_date, "dS mmm, yyyy")} | {orderDetailsData.customer_delivery_time}</span>
                                    </div>
                                    <div className="order-journey-content">
                                        <span className="left-bar"></span>
                                        <p>Order Delivered</p>
                                        <span>{orderDateData.order_delivered_to_customer_date !== null && typeof orderDateData.order_delivered_to_customer_date !== 'undefined' && dateFormat(orderDateData.order_delivered_to_customer_date, "dd mmm, yyyy | h:MM TT")} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LsissueModal show={show} onHide={handleClose} lsIssueRaised={lsIssueRaised} issueImageUrl={issueImageUrl} orderUniqueID={orderUniqueID}/>
            <OrderIssueModal show={show} onHide={handleClose} orderissues={orderissues} orderUniqueID={orderUniqueID}/>
        </>
    )
}

export default OrderDetails;