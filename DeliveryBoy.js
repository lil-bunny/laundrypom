<div className="table-search">
							<form className="d-flex form-inline">
								<div className="search_key">
									<input
										className="form-control"
										type="text"
										name="search_key"
										placeholder="Search"
										aria-label="Search"
										onChange={handlekeySearch}
									/>
									<img src="./assets/images/search.png" alt="sort-img" />
								</div>
								<div className="select-dropdown table-select">
									<img
										src="./assets/images/sort-down-small.png"
										alt="sort-img"
									/>
									<select
										className="select"
										name="status"
										onChange={handlekeySearch_staus}
									>
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
						keyField="id"
						data={deliveryBoys}
						columns={columns}
						noDataIndication={emptyDataMessage}
						wrapperClasses="table-responsive"
					/>

					{PaginationHtml()}
				</div>
			</section>
			<AddModal show={show} onHide={handleClose} />
			<SendNotificationModal
				show={notification}
				onHide={handleCloseNotification}
				NotificationDetail={NotificationDetail}
			/>
		</>
	);
};

export default DeliveryBoy;