import React from 'react'
import { useNavigate } from '@shopify/app-bridge-react';
import { Icon } from '@shopify/polaris';
import { HomeMajor } from '@shopify/polaris-icons';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <Icon source={HomeMajor} color='subdued' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"
                                    onClick={() => {
                                        navigate('https://quick-start-8ebb1932.myshopify.com/admin/apps/my-new-app-809/pagename');
                                    }}>
                                    Price
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"
                                    onClick={() => {
                                        navigate('https://quick-start-8ebb1932.myshopify.com/admin/apps/my-new-app-809/pagename');
                                    }}>
                                    Cost
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"
                                    onClick={() => {
                                        navigate('https://quick-start-8ebb1932.myshopify.com/admin/apps/my-new-app-809/pagename');
                                    }}>
                                    Compared
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => {
                                    navigate('https://quick-start-8ebb1932.myshopify.com/admin/apps/my-new-app-809/pagename');
                                }}>
                                    Tax
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"
                                    onClick={() => {
                                        navigate('https://quick-start-8ebb1932.myshopify.com/admin/apps/my-new-app-809/pagename');
                                    }}>
                                    SKU & Barcode
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"
                                    onClick={() => {
                                        navigate('https://quick-start-8ebb1932.myshopify.com/admin/apps/my-new-app-809/pagename');
                                    }}>
                                    Inventory
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;