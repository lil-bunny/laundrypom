<div className="form-group">
                                <Field
                                    type="hidden"
                                    name="product_id"
                                    className="form-control mb-2"
                                    id="product_id"
                                />
                                <Field
                                    type="text"
                                    name="product_name"
                                    className="form-control mb-2"
                                    id="product_name"
                                    placeholder="Product Name"
                                />
                                {touched.product_name && errors.product_name && (
                                    <div className="form-error">{errors.product_name}</div>
                                )}
                            </div>
                            <div className="form-group d-none">
                                    <Field as="select" name="status" id="status" className="form-control">
                                        <option value="1">Active</option>
                                        <option value="0">Deleted</option>

                                    </Field>
                                {touched.name && errors.status && <div className="form-error">{errors.status}</div>}
                            </div>

                            <Modal.Footer>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateProductModal;