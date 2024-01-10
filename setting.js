/>
                                                
                                                    </div>
                                               
                                                    <div className="form-group">
                                                        <Field
                                                            type="number"
                                                            name="pincode"
                                                            className="form-control mb-2"
                                                            id="pincode"
                                                            placeholder="Pincode"
                                                            readonly=""
                                                            value={adminDetails.pincode}

                                                        />
                                                    </div>


                                                    <p className="form-submit text-right">
                                                        <button type="submit" className="btn btn-save">SAVE</button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    );
}

export default Settings;