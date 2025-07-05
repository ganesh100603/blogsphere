import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo';
import Container from '../Container/Container';

function Footer() {
    return ( 
        <section className="relative overflow-hidden py-10 shadow bg-black">
        <div className="relative z-10 mx-auto px-4 text-white">
            <div className="-m-6 flex flex-wrap">
                <div className="w-full p-6 md:w-1/2 lg:w-5/12 ">
                    <div className="flex h-full flex-col justify-between">
                        <div className="mb-4 inline-flex items-center invert brightness-0">
                            <Logo width="100px" />
                        </div>
                        <div>
                            <p className="text-sm ">
                                &copy; Copyright 2023. All Rights Reserved by BlogSphere.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="mb-9 text-md font-semibold uppercase">
                            Company
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Features
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    className=" text-sm "
                                    to="/"
                                >
                                    Affiliate Program
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Press Kit
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="mb-9  text-md font-semibold uppercase">
                            Support
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Account
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Help
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Customer Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                    <div className="h-full">
                        <h3 className="mb-9 text-md font-semibold uppercase">
                            Legals
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=" text-sm"
                                    to="/"
                                >
                                    Licensing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}

export default Footer;