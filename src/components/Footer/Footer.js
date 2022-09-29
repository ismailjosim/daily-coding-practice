import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-white shadow-md rounded-lg">
                <div>
                    <span className="footer-title">Services</span>
                    <a href='index.html' className="link link-hover">Branding</a>
                    <a href='index.html' className="link link-hover">Design</a>
                    <a href='index.html' className="link link-hover">Marketing</a>
                    <a href='index.html' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='index.html' className="link link-hover">About us</a>
                    <a href='index.html' className="link link-hover">Contact</a>
                    <a href='index.html' className="link link-hover">Jobs</a>
                    <a href='index.html' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='index.html' className="link link-hover">Terms of use</a>
                    <a href='index.html' className="link link-hover">Privacy policy</a>
                    <a href='index.html' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
