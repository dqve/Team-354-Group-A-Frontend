import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (<div class="alert alert-primary" role="alert">
                            Welcome home!!!!!!!
                            <Link to="/landing" className="success">Visit Landing Page</Link>
                        </div>)

export default HomePage;