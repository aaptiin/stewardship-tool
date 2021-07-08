const Rulepage = () => {
    return (
        <div className="bg-blue-100 relative overflow-hidden sm:h-screen">
            <div className="container bg-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-12 my-16 md:my-12">
                <div className="w-full flex flex-col items-center justify-between relative z-10 px-4">
                    <p className="flex flex-col items-center font-extrabold text-5xl text-center md:text-5xl">Rules</p>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6">We've designed this exercise as a short game. As a user, you get a total of 50 points to invest in a combination of design choices. These can be spent on three types of options which have different weights.</p>
                    <div className="flex items-start items-stretch justify-between flex-col md:flex-row mt-6 w-full px-4">
                        <div className="flex flex-col w-full md:w-1/4 p-1">
                            <div className="p-4 rounded-lg bg-red-500 hover:bg-red-400 text-white">
                                <p className="flex flex-col text-center items-center text-sm">Red = 5 points</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/4 p-1">
                            <div className="p-4 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-white">
                                <p className="flex flex-col text-center items-center text-sm">Yellow = 10 points</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/4 p-1">
                            <div className="p-4 rounded-lg bg-blue-500 hover:bg-blue-400 text-white">
                                <p className="flex flex-col text-center items-center text-sm">Blue = 15 points</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/4 p-1">
                            <div className="p-4 rounded-lg bg-purple-500 hover:bg-purple-400 text-white">
                                <p className="flex flex-col text-center items-center text-sm">Total of 50 points</p>
                            </div>
                        </div>
                    </div>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6">
                    The goal is to use these points to answer questions that relate to a few attributes of a "good steward". Keep in mind that your answers should represent your future aspirations as a steward. We've built this to illustrate both the trade-offs users have to make while building their stewarding entity and the finite investment possible. Use the flexibility to optimise for features that are important for your organization - but make sure to select an answer for each round or you will not be able to proceed to the next question
                    </p>
                    <p className="flex flex-col items-center max-w-lg md:max-w-4xl text-center items-center text-md mt-6">
                    To modify your previous answer, use the back button
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-between relative max-w-lg md:max-w-4xl text-center items-center text-md">
                        <a href="/" className="flex flex-col bg-white hover:bg-black bg-blue-900 py-3 px-16 text-lg text-white font-bold uppercase rounded-sm mt-10 text-center rounded-md cursor-pointer">
                            Back
                        </a>
                        <a href="/app" className="flex flex-col bg-white hover:bg-black bg-blue-700 py-3 px-16 text-lg text-white font-bold uppercase rounded-sm mt-10 text-center rounded-md cursor-pointer">
                            Proceed
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rulepage