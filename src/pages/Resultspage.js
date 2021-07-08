import React from 'react'
import data from 'assets/data.json'
import { withRouter } from 'react-router-dom'
import ReactToPrint from 'react-to-print'

class ResultsCard extends React.Component {
    getArrayFromString() {
        let arr = this.props.results.split("");
        for(let i=0; i<arr.length; i++) { arr[i] = +arr[i]; } 
        for(let i=0; i<arr.length; i++) { arr[i] = data[i].options[arr[i]].points; }
        return arr
    }
    getTag(val) {
        return this.getArrayFromString().reduce((a, v) => (v === val ? a + 1 : a), 0)
    }
    getMajority(){
        let arr = this.getArrayFromString()
        let counted = arr.sort().reduce((acc, curr) => { 
            curr in acc ? acc[curr]++ : acc[curr] = 1
            return acc;
        }, {});    
        let frequent = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);
        switch(frequent) {
            case '5': return `Starter features`;
            case '10': return `Medium features`;
            case '15': return `Advanced features`;
            default: return ``
        }
    }
    getTagColor(points) {
        const def = `mb-4 rounded-full p-2 px-4 text-xs`
        switch(points) {
            case 5: return `${def} bg-red-400`;
            case 10: return `${def} bg-yellow-400`;
            case 15: return `${def} bg-green-400`;
            default: return def
        }
    }
    render() {
        const { results } = this.props
        this.getMajority()
        return (
            <div className="flex items-center justify-between bg-gray-200 relative py-4">
                <div className="flex container mx-auto w-4/5 relative z-10 flex items-center">
                    <div className="w-full flex flex-col items-center justify-between relative z-10">
                        <div className="bg-blue-900 dark:bg-gray-800 overflow-hidden w-full relative pb-24 p-4 md:p-6 mb-4 rounded-lg">
                            <h1 className="text-3xl text-center font-bold text-white dark:text-white mb-4">Results</h1>
                            <p className="text-lg text-center font-bold text-white dark:text-white">Your responses indicate that you have picked <span className="p-1 text-sm rounded-lg bg-green-200 text-black">{this.getTag(15)}</span> advanced features, <span className="p-1 text-sm rounded-lg bg-yellow-200 text-black">{this.getTag(10)}</span> medium features and <span className="p-1 text-sm rounded-lg bg-red-200 text-black">{this.getTag(5)}</span> starter features. You have chosen to optimise for <span className="p-1 text-sm rounded-lg bg-purple-700 text-white">{this.getMajority()}</span> while building a steward. Please find below an explanation of your choices and what it could mean for your organisational goals:</p>
                        </div>
                        {data.map((step, index) => index < data.length/3 &&
                            <div className="flex items-start items-stretch justify-between flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 overflow-hidden relative pb-24 p-4 md:p-6 mb-4 rounded-lg" key={3 * index}>
                                    <h2>
                                        <span className="font-black font-bold text-2xl text-green-600">{data[3 * index].short}</span>
                                    </h2>
                                    <p className="mt-2 mb-8 text-sm">{data[3 * index].description}</p>
                                    <h4 className="text-sm w-max text-gray-700 dark:text-white font-semibold border-gray-200 mb-2">Option Selected</h4>
                                    <p className={this.getTagColor(data[3 * index].options[results.charAt(3 * index)].points)}>
                                        <span >{data[3 * index].options[results.charAt(3 * index)].name}</span>
                                    </p>
                                    <p className="text-sm">{data[index].options[results.charAt(index)].result}</p>
                                </div>
                                <div className="flex flex-col w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 overflow-hidden relative pb-24 p-4 md:p-6 mb-4 rounded-lg" key={(3 * index)+1}>
                                    <h2>
                                        <span className="font-black font-bold text-2xl text-green-600">{data[(3 * index)+1].short}</span>
                                    </h2>
                                    <p className="mt-2 mb-8 text-sm">{data[(3 * index)+1].description}</p>
                                    <h4 className="text-sm w-max text-gray-700 dark:text-white font-semibold border-gray-200 mb-2">Option Selected</h4>
                                    <p className={this.getTagColor(data[(3 * index)+1].options[results.charAt((3 * index)+1)].points)}>
                                        <span>{data[(3 * index)+1].options[results.charAt((3 * index)+1)].name}</span>
                                    </p>
                                    <p className="text-sm">{data[index].options[results.charAt(index)].result}</p>
                                </div>
                                <div className="flex flex-col w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 overflow-hidden relative pb-24 p-4 md:p-6 mb-4 rounded-lg" key={(3 * index)+2}>
                                    <h2>
                                        <span className="font-black font-bold text-2xl text-green-600">{data[(3 * index)+2].short}</span>
                                    </h2>
                                    <p className="mt-2 mb-8 text-sm">{data[(3 * index)+2].description}</p>
                                    <h4 className="text-sm w-max text-gray-700 dark:text-white font-semibold border-gray-200 mb-2">Option Selected</h4>
                                    <p className={this.getTagColor(data[(3 * index)+2].options[results.charAt((3 * index)+2)].points)}>
                                        <span>{data[(3 * index)+2].options[results.charAt((3 * index)+2)].name}</span>
                                    </p>
                                    <p className="text-sm">{data[index].options[results.charAt(index)].result}</p>
                                </div>
                            </div>
                        )}
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

class ResultsPage extends React.Component {
    render(){
        return(
            <div>
                <ResultsCard results={this.props.match.params.id} history={this.props.history} ref={el => (this.componentRef = el)}>
                    <div className="flex justify-center pt-6 pb-3 gap-4">
                        <ReactToPrint
                            trigger={() => {
                                return <span className="bg-white text-blue-600 py-2 px-4 text-xs hover:bg-gray-700 hover:text-white font-bold uppercase rounded-sm cursor-pointer">Print</span>
                            }}
                            content={() => this.componentRef}
                        />
                        <a href='/app' className="bg-white text-blue-600 py-2 px-4 text-xs hover:bg-gray-700 hover:text-white font-bold uppercase rounded-sm">Do it again</a> 
                    </div>
                </ResultsCard>
            </div>
        )
    }
}

export default withRouter(({ match, history }) =>
    <ResultsPage match={match} history={history} />
);