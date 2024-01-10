<Form>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    name="username"
                                                    className="form-control mb-2"
                                                    id="username"
                                                    placeholder="Enter user name or mobile number"
                                                />
                                                {touched.username && errors.username && <div className="form-error">{errors.username}</div>}
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    className="form-control mb-2"
                                                    id="password"
                                                    placeholder="Enter password"
                                                />
                                                {touched.password && errors.password && <div className="form-error">{errors.password}</div>}
                                            </div>
                                            <div className="login-footer">
                                                <div className="checkbox">
                                                    <label><input type="checkbox" name="remember" /> Remember me</label>
                                                </div>
                                                <Link href="#">Forgot Password</Link>
                                            </div>
                                            <button type="submit" className="btn btn-default">LOGIN</button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;