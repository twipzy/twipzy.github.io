import React from 'react';
import Layout from '../components/Layout';
import { Items, STYLES } from '../utils/NavbarItems';
import headerlogoclick from '../assets/svgs/logo512.png';
import '../styles/index.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        const { background } = this.props;
        const { isOpen } = this.state;
        return (
            <div className={`fixed md:relative z-10 ${background ?? 'md:bg-[#282828] '}`}>
                <div className='py-3.5'>
                    <Layout>
                    <nav className='flex flex-row justify-evenly items-center gap-4 text-gray-800 whitespace-nowrap'>
                            <div className='hidden lg:block flex-shrink-0'>
                                <a href='/'>
                                    <img loading="lazy" src={headerlogoclick} alt="Pro Settings"/>
                                </a>
                            </div>
                            
                            <button className='md:hidden z-20 flex-shrink-0 p-1 shadow-md bg-gradient-to-r from-[#387c84]-500 to-[#326c73]-500 text-white rounded-full' onClick={this.toggle.bind(this)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? `M6 18L18 6M6 6l12 12` : `M4 6h16M4 12h16M4 18h7`} />
                                </svg>
                            </button>

                            <div className='hidden flex-1 md:flex flex-row justify-evenly lg:justify-end items-center gap-4 text-xs'>
                                {
                                    Items.map((item, index) => {
                                        if (item.style === STYLES.DOWNLOAD) {
                                            return (
                                                <a className='bgcolor-change-on-hover flex-1 lg:flex-none py-2 px-4 rounded-full text-center text-white font-medium border-[#387c84]-300 focus:ring-1' key={index} href={item.url} target={item.newTab ? '_blank' : '_self'} rel='noreferrer'>
                                                    <div className='flex justify-center items-center gap-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                                                        </svg>
                                                        <span>{item.label}</span>
                                                    </div>
                                                </a>
                                            )
                                        }
                                        else {
                                            return (
                                                <a className={`color-change-on-hover flex-1 lg:flex-none py-1 px-4 rounded-full text-center font-medium ${item.active ? 'text-[#326c73]' : 'hover:text-[#387c84]'}`} key={index} href={item.url} target={item.newTab ? '_blank' : '_self'} rel='noreferrer'>{item.label}</a>
                                            )
                                        }
                                    })
                                }
                            </div>
                            {
                                isOpen &&
                                <div className='md:hidden z-10 absolute left-0 top-0 w-screen py-3.5 shadow-lg bg-[#282828]'>
                                    <div className='flex flex-col items-center gap-2 text-sm text-center text-white'>
                                        {
                                            Items.map((item, index) => {
                                                if (item.style === STYLES.DOWNLOAD) {
                                                    return (
                                                        <a className='py-1.5 w-full font-medium text-white bgcolor-change-on-hover' key={index} href={item.url} target={item.newTab ? '_blank' : '_self'} rel='noreferrer'>
                                                            <div className='flex justify-center items-center'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                                                                </svg>
                                                                <span>{item.mobilelabel}</span>
                                                            </div>
                                                        </a>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <ul className="">
                                                            <li>
                                                                <a className={`color-change-on-hover py-1.5 w-full font-medium ${item.active ? '' : 'focus:'} ${item.active ? '' : 'focus:'}text-gray`} key={index} href={item.url} target={item.newTab ? '_blank' : '_self'} rel='noreferrer'>{item.label}</a>
                                                            </li>
                                                        </ul>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            }
                        </nav>
                    </Layout>
                </div>
            </div>
        )
    }
}

export default Navbar;