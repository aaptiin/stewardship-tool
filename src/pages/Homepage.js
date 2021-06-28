const Homepage = () => {
    return (
        <div className="bg-blue-500 relative overflow-hidden h-screen">
            <div className="inset-0 bg-black opacity-25 absolute">
            </div>
            <div className="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-16 md:my-24">
                <div className="w-full flex flex-col items-center justify-between relative z-10">
                    <p className="flex flex-col items-center font-extrabold text-5xl text-center md:text-5xl text-white">Stewardship Configuration Tool</p>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">
                        The objective of this tool is to surface the key features necessary to build a "good steward". There are certain design choices to be considered in the quest for creating a resilient steward that can unlock data for social benefit while empowering communities to participate in decisions about their data. Fundamentally, a steward acts as an intermediary between data generators (individuals, communities) and data requestors to create public value from data.
                    </p>
                    <p className="flex flex-col max-w-lg md:max-w-4xl text-center items-center text-md mt-6 text-white">
                        We've designed this tool to help you understand where you stand on the stewardship ladder. This is because we believe this tool illustrates a journey of facilitating responsible data sharing that can be used to assess your organisation's priorities and data practices. The resultant assessment is best understood in combination with our mind map that displays the range of modalities available to build an effective steward.
                    </p>
                    <a href="/rules" className="block bg-white hover:bg-blue-900 py-3 px-16 text-lg text-blue hover:text-white font-bold uppercase rounded-sm mt-10">
                        Start
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Homepage