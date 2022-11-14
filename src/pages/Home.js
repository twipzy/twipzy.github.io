import React from 'react';
/*import Lottie from 'lottie-react';*/
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
/*import scan from '../assets/lotties/scan.json';*/
import '../styles/index.css';
import downloadnowphoto from "../assets/svgs/downloadnow.jpg";

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
            <div id="root">
                <main>
                <Navbar/>
                <div className='banner' style={{ background: "#181818" }}>
                    <Layout>
                        <div class="container video-move">
                            <div class="row justify-content-center h-100">
                                <div class="col-12 col-md-7 col-lg-7 h-100 d-flex justify-content-center">
                                    <div class="align-self-center">
                                        <h1 style={{fontFamily: "Lato", fontWeight: "700" }} class="tests text-center">Pro Settings</h1>
                                        <div class="d-flex justify-content-center mt-4">
                                            <h1 style={{ color: "white", fontFamily: "Lato", fontWeight: "700" }} className='text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-center lg:text-left text-800 tracking-tight'>Software for exploring<br />CS:GO Pros Settings</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </div>
                <div style={{ background: "#0d1117" }}>
                    <Layout>
                        <div style={{height: "120px"}}className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-4 float-on-hover">
                                    <div className="imagePromo" ><a href="/download">
                                        <div className="previewImage" style={{backgroundImage: `url(${downloadnowphoto})`}}></div>
                                    </a><a style={{marginTop: '10px'}} className="imagepromobtn" href="/download">Download</a></div>
                                </div>
                                {/*<div className="col-12 col-md-4 float-on-hover">
                                    <div className="imagePromo"><a target="_blank" rel="noopener noreferrer"
                                        href="https://discord.gg/highlife">
                                        <div className="previewImage"></div>
                                    </a><a target="_blank" rel="noopener noreferrer" className="imagepromobtn"
                                        href="https://discord.gg/highlife">Join our Discord</a></div>
                                </div>
                                <div className="col-12 col-md-4 float-on-hover">
                                    <div className="imagePromo"><a href="/rules">
                                        <div className="previewImage"></div>
                                    </a><a className="imagepromobtn" href="/rules">Read the Rules</a></div>
                                </div>*/}
                            </div>
                        </div>
                    </Layout>
                </div>
                <div className='bg-c-bg-blue-s'>
                    <div style={{ background: "#161b22" }} className='py-20 flex flex-col gap-14'>
                        <Layout>
                            <div className='flex flex-col justify-center gap-0 lg:gap-2'>
                                <h2 style={{ color: "#387c84", fontFamily: "Urbanist", fontWeight: "500" }} className='text-blue-500 text-center text-sm sm:text-base font-subtitle font-semibold uppercase tracking-widest whitespace-nowrap'>CONSTANTLY EVOLVING</h2>
                                <h1 style={{ color: "#ccc", fontSize:"36px",fontFamily: "Lato", fontWeight: "800" }} class="text-800 text-center text-4xl sm:text-5xl font-extrabold">Explore all different sorts of<br /> professional CS:GO Settings without limits</h1>
                            </div>
                        </Layout>
                    </div>
                </div>
                <div style={{background: "#282828"}}>
                    <Layout>
                        <div className='px-5 md:px-20 py-10 lg:py-20 text-white flex flex-col md:flex-row justify-between items-center gap-10'>
                            <div className='space-y-5'>
                                <h1 style={{ color: "#ccc", fontFamily: "Lato", fontWeight: "900" }} className='text-3xl sm:text-4xl lg:text-5xl font-black'>Are you ready<br />to become a explorer?</h1>
                                <p style={{ color: "#ccc", fontFamily: "Lato", fontWeight: "300" }} className='font-light text-sm sm:text-base'>It's your time to shine, download Pro Settings now, and explore the world of game settings.</p>
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
                    </main>
                </div>
            </>
        );
    }
}

export default Home;