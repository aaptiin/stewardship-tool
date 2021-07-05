const Rulepage = () => {
    return (
        <div className="bg-blue-500 relative overflow-hidden sm:h-screen">
            <div className="inset-0 bg-black opacity-25 absolute">
            </div>
            <div className="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-12 my-16 md:my-12">
                <div className="w-full flex flex-col items-center justify-between relative z-10 px-4">
                    <p className="flex flex-col items-center font-extrabold text-5xl text-center md:text-5xl text-white">Rules</p>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">We've designed this exercise as a short game. As a user, you get a total of 50 points to invest in a combination of design choices. These can be spent on three types of options which have different weights.</p>
                    <div className="flex items-start items-stretch justify-between flex-col md:flex-row mt-6 w-full px-4">
                        <div className="flex flex-col w-full md:w-1/4 py-4 bg-red-800 text-white">
                            <p className="flex flex-col text-center items-center text-sm">Red is worth 5 points</p>
                        </div>
                        <div className="flex flex-col w-full md:w-1/4 py-4 bg-yellow-800 text-white">
                            <p className="flex flex-col text-center items-center text-sm">Yellow is worth 10 points</p>
                        </div>
                        <div className="flex flex-col w-full md:w-1/4 py-4 bg-blue-800 text-white">
                            <p className="flex flex-col text-center items-center text-sm">Blue is worth 15 points</p>
                        </div>
                        <div className="flex flex-col w-full md:w-1/4 py-4 bg-purple-800 text-white">
                            <p className="flex flex-col text-center items-center text-sm">Total of 50 points</p>
                        </div>
                    </div>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">
                    The goal is to use these points to answer questions that relate to a few attributes of a "good steward". Keep in mind that your answers should represent your future aspirations as a steward
                    </p>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">
                    We've built this to illustrate both the trade-offs users have to make while building their stewarding entity and the finite investment possible. Use the flexibility to optimise for features that are important for your organization - but make sure to select an answer for each round or you will not be able to proceed to the next question
                    </p>
                    <p className="flex flex-col items-center max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">
                    To modify your previous answer, use the back button
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-between relative max-w-lg md:max-w-4xl text-center items-center text-md mt-6">
                        <a href="/" className="flex flex-col bg-white hover:bg-blue-600 py-3 px-16 text-lg text-blue hover:text-white font-bold uppercase rounded-sm">
                            Back
                        </a>
                        <a href="/app" className="flex flex-col bg-white hover:bg-blue-600 py-3 px-16 text-lg text-blue hover:text-white font-bold uppercase rounded-sm">
                            Proceed
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rulepage