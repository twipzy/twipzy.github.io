import React from 'react';
import Lottie from 'lottie-react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import scan from '../assets/lotties/scan.json';
import '../styles/index.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        /*const { starCount, forkCount, downloadCount, createdAt, latest } = this.state;*/
        return (
            <>
                <Navbar />
                <div style={{ background: "#161b22" }}>
                    <Layout>
                        <div className='my-5 flex flex-col-reverse lg:flex-row justify-between lg:justify-center items-center' >
                            <div className='grid font-sans gap-5'>
                                <h1 style={{ color: "white", fontFamily: "Lato", fontWeight: "700" }} className='text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-center lg:text-left text-800 tracking-tight'>Software for exploring<br />CS:GO Pros Settings</h1>
                                <p style={{ color: "white" }} className='text-sm lg:text-base text-center lg:text-left text-700'>
                                    Ever wanted to explore settings of CS:GO Professional Players? We've got you covered.
                                </p>
                                <div className='flex flex-wrap justify-center lg:justify-start items-center gap-2 whitespace-nowrap text-xs lg:text-base'>

                                    <a className="py-2.5 px-6 shadow-inner rounded-full font-regular text-white bg-gradient-to-r from-blue-600 to-purple-400 transform hover:-rotate-1 focus:ring-2" href="/download">
                                        <div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"></path></svg>
                                            <span>Download Now</span>
                                        </div>
                                    </a>
                                    {/*<a className='py-2.5 px-6 shadow-inner rounded-full font-medium text-gray-800 bg-gradient-to-r from-white via-white to-c-white transform hover:rotate-1 focus:ring-2' href='/discord' target="_blank">
                                        <div className='flex items-center gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                            </svg>
                                            <span>Join Our Discord</span>
                                        </div>
                                    </a>*/}
                                </div>
                            </div>
                            <Lottie className='w-auto max-w-sm lg:max-w-2xl' loop autoplay animationData={scan} />
                        </div>
                    </Layout>
                </div>
                <div className="py-20" style={{ background: "#0d1117" }}>
                    <Layout>
                        <div className="grid grid-flow-row lg:grid-flow-col items-center gap-5 lg:gap-20 xl:gap-40 2xl:gap-60 font-sans"><div class="flex flex-col gap-0 lg:gap-3"><h2 style={{ color: "#387c84", fontFamily: "Urbanist", fontWeight: "500" }} class="text-blue-500 text-sm sm:text-base font-subtitle font-semibold uppercase tracking-widest whitespace-nowrap">FREE AND OPEN-SOURCE</h2><h1 style={{ color: "white", fontFamily: "Lato", fontWeight: "700" }} class="text-800 text-4xl sm:text-5xl font-Urbanist-extrabold tracking-tighter">Built for ease-of-use</h1></div><p style={{ color: "white" }} class="text-gray-600 text-sm text-justify lg:text-left leading-5 sm:leading-6">Pro Settings is a beginner-friendly and open-source software for exploring<br /> CS:GO Pros Settings. Its interface was carefully created to be easy to<br /> understand, but complete in the features it offers.</p></div>
                    </Layout>
                </div>
                <div className='bg-c-bg-blue-s'>
                    <div style={{ background: "#282828" }} className='py-20 flex flex-col gap-14'>
                        <Layout>
                            <div className='flex flex-col justify-center gap-0 lg:gap-2'>
                                <h2 style={{ color: "#387c84", fontFamily: "Urbanist", fontWeight: "500" }} className='text-blue-500 text-center text-sm sm:text-base font-subtitle font-semibold uppercase tracking-widest whitespace-nowrap'>CONSTANTLY EVOLVING</h2>
                                <h1 style={{ color: "#fff", fontSize:"36px",fontFamily: "Lato", fontWeight: "800" }} class="text-800 text-center text-4xl sm:text-5xl font-extrabold">Explore all different sorts of<br /> professional CS:GO Settings without limits</h1>
                            </div>
                        </Layout>
                    </div>
                </div>
                <div style={{background: "#161b22"}}>
                    <Layout>
                        <div className='px-5 md:px-20 py-10 lg:py-20 text-white flex flex-col md:flex-row justify-between items-center gap-10'>
                            <div className='space-y-5'>
                                <h1 style={{ color: "white", fontFamily: "Lato", fontWeight: "900" }} className='text-3xl sm:text-4xl lg:text-5xl font-black'>Are you ready<br />to become a explorer?</h1>
                                <p style={{ fontFamily: "Lato", fontWeight: "300" }} className='font-light text-sm sm:text-base'>It's your time to shine, download Pro Settings now, and explore the world of game settings.</p>
                            </div>
                            <a style={{ fontFamily: "Urbanist", fontWeight: "800" }} className='px-6 py-3 lg:px-8 lg:py-5 bg-[#387c84] hover:bg-c-[#387c84] text-gray-800 text-xl lg:text-2xl font-black font-subtitle float-on-hover bgcolor-change-on-hover focus:ring-2 focus:ring-inset' href='/download'>
                                <div className='flex items-center gap-4 whitespace-nowrap'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                                    </svg>
                                    <span>Download Now</span>
                                </div>
                            </a>
                        </div>
                    </Layout>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;