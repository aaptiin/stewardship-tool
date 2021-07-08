import React from 'react'
import { AlertCircleOutline } from 'react-ionicons'

const DesktopAlertPopup = ({ hidePopup }) => {
    return (
        <div className="flex container rounded-lg overflow-hidden w-full relative z-10 flex justify-center">
            <div className="bg-blue-700 rounded-lg z-50">
                <div className="w-96 rounded-lg text-center">
                    <div className="flex justify-center pt-6 pb-3">
                        <AlertCircleOutline color={'#FFF'} height="60px" width="60px" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Hello there!</h2>
                    <p className="p-4 text-sm text-white">This application is in beta testing, for experiencing this application in it's best form we advise you to use your laptop only.</p>
                </div>

                <div className="p-4 flex space-x-4">
                    <span className="w-1/5"></span>
                    <span onClick={() => hidePopup()} className="w-1/2 px-4 py-3 text-center text-white bg-blue-400 rounded-lg hover:bg-blue-900 font-bold text-sm cursor-pointer">Okey dokey</span>
                </div>
            </div>
        </div>
    )
}

class Homepage extends React.Component {
    state = {
        showPopup: true
    }
    render() {
        return (
            <div className="flex items-center justify-center bg-blue-500 relative overflow-hidden md:h-screen py-4">
                {this.state.showPopup && <DesktopAlertPopup hidePopup={() => this.setState({ showPopup: false })} />}
                {!this.state.showPopup && <div className="flex container rounded-lg overflow-hidden mx-auto w-4/5 relative z-10 flex items-center">
                    <div className="w-full flex flex-col items-center justify-between relative z-10">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden w-full relative">
                            <div className="p-8 w-full bg-blue-700">
                                <h2 className="flex flex-col items-center font-extrabold text-3xl text-center md:text-4xl text-white">Welcome to the Stewardship Evaluation Guide!</h2>
                            </div>
                            <div className="flex items-start items-stretch justify-between flex-col md:flex-row">
                                <div className="flex flex-col w-full md:w-1/2 p-8 bg-gray-100">
                                    <h2 className="flex flex-col items-center font-extrabold text-xl text-center mt-4">What are the features that make a 'good steward'? </h2>
                                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 ">Building resilient steward that can empower communities to participate meaningfully in data decisions while unlocking societal benefit of data is a complex endeavour which requires the coming together of many elements. Organisations are required to consider certain "design choices" while building internal data governance frameworks, but have limited understanding of what those considerations might look like.</p>
                                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 ">Our guide is a product of conversations with practioners and experts working on health data stewardship. This is part of  a larger engagement with our partner, The Rockefeller Foundation, aimed at building trustoworythy data intermediaries in healthcare.</p>
                                </div>
                                <div className="flex flex-col w-full md:w-1/2 p-8">
                                    <h2 className="flex flex-col items-center font-extrabold text-xl text-center mt-4">So, how is this guide useful?</h2>
                                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 ">The SEG helps organisations or potential stewards assess their position on the stewardship ladder. Transitioning into stewardship involves several processes and considered trade-offs to be made among different features</p>
                                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 ">To realise this, our guide provides a review of organisational data practices and priorities. You can also explore mechanisms to readily pilot some of the features within your organisation. </p>
                                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md">
                                        <a href="/rules" className="hover:bg-black bg-blue-900 py-3 px-16 text-lg text-white font-bold uppercase rounded-sm mt-10 text-center cursor-pointer">Start</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Homepage