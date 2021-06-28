const Rulepage = () => {
    return (
        <div className="bg-green-500 relative overflow-hidden h-screen">
            <div className="inset-0 bg-black opacity-25 absolute">
            </div>
            <div className="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-16 md:my-24">
                <div className="w-full flex flex-col items-center justify-between relative z-10">
                    <p className="flex flex-col items-center font-extrabold text-5xl text-center md:text-5xl text-white">Rules</p>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">
                        You get 50 points to invest in a combination of design choices, as per your preferences. Every option in red is worth 5 points, yellow = 10 points and green = 15 points
                    </p>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">
                        You will have a chance to revise your responses to each question, however it is necessary to provide a response to each question
                    </p>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">
                        Users are encouraged to pick those options that represent their goals as a steward
                    </p>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">
                        The differential points assigned to options and finite investment indicate the trade-offs users have to make while building their stewarding entity. You are given flexibility to optimise for features that is important to you
                    </p>
                    <a href="/app" className="block bg-white hover:bg-green-600 py-3 px-16 text-lg text-green hover:text-white font-bold uppercase rounded-sm mt-10">
                        Proceed
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Rulepage