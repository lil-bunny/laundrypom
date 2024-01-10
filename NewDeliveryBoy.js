</Field>
                                                            {touched.city && errors.city && <div className="form-error">{errors.city}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <Field
                                                                type="number"
                                                                name="pincode"
                                                                className="form-control mb-2"
                                                                id="pincode"
                                                                placeholder="Pincode"
                                                            />
                                                            {touched.pincode && errors.pincode && <div className="form-error">{errors.pincode}</div>}
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
                </div>

            </section>
        </>
    );
}

export default NewDeliveryBoy;