import React from 'react'
import data from 'assets/data.json'
import { withRouter } from 'react-router-dom'

const Resultspage = ({ results, history }) => {
    return (
        <div className="flex items-center justify-between bg-blue-500 relative py-4">
            <div className="flex container mx-auto w-4/5 relative z-10 flex items-center">
                <div className="w-full flex flex-col items-center justify-between relative z-10">
                    <div className="bg-blue-900 dark:bg-gray-800 overflow-hidden w-full relative pb-24 p-4 md:p-6 mb-4 rounded-lg">
                        <h1 className="text-3xl text-center font-bold text-white dark:text-white">Results</h1>
                    </div>
                    {data.map((step, index) =>                                            
                    <div className="bg-gray-100 dark:bg-gray-800 overflow-hidden w-full relative pb-24 p-4 md:p-6 mb-4 rounded-lg" key={index}>
                        <p>
                            <span className="font-black font-semibold text-2xl text-green-600">{step.short}</span>
                        </p>
                        <p className="mt-2 mb-8 text-sm">{step.description}</p>
                        <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-gray-200 mb-2">Option Selected</p>
                        <p className="mb-4">
                            <span className="rounded-full p-2 px-4 bg-black text-white text-xs">
                            {step.options[results.charAt(index)].name}</span>
                        </p>
                        <p className="text-sm">{step.options[results.charAt(index)].result}</p>
                    </div>
                    )}
                    <a href='/app' className="bg-white text-blue-600 py-2 px-4 text-xs hover:bg-gray-200 font-bold uppercase rounded-sm">Do it again</a> 
                </div>
            </div>
        </div>
    )
}

export default withRouter(({ match, history }) =>
    <Resultspage results={match.params.id} history={history} />
);