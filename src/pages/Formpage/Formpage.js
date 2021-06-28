import React from 'react'
import data from 'assets/data.json'

class OptionButton extends React.Component {
    getColor() {
        const { option, isActive } = this.props
        const def = `cursor-pointer shadow-lg py-4 px-6 w-full dark:bg-gray-700 relative rounded-lg text-sm`

        switch(option.points) {
            case 5: return `${def} ${ isActive ? `bg-red-300` : `bg-red-100 hover:bg-red-200 `}`;
            case 10: return `${def} ${ isActive ? `bg-yellow-300` : `bg-yellow-100 hover:bg-yellow-200 `}`;
            case 15: return `${def} ${ isActive ? `bg-green-300` : `bg-green-100 hover:bg-green-200 `}`;
            default: return def
        }
    }
    render() {
        const { option, submitAnswer } = this.props
        return (
            <div className="w-full">
                <div className={this.getColor()} onClick={() => submitAnswer()}>
                    <p>{option.name}</p>
                </div>
            </div>
        )
    }
}

class Formpage extends React.Component {
    state = {
        current_step: 0,
        acquired_points: 0,
        available_points: 50,
        steps_taken: new Array(data.length).fill({
            "answered": false,
            "option_selected": 5
        }),
        show_error: false
    }
    getCurrentPoints() {
        let points = 0;
        this.state.steps_taken.map((step, index) => {
            if(step.answered) {
                points += data[index].options[step.option_selected].points
            }
            return 0;
        })
        this.setState({ acquired_points: points })
    }
    getStepPoints(key) {
        const option = this.state.steps_taken[key]["option_selected"]
        return data[key].options[option].points
    }
    getState(key) {
        return `w-full flex items-center pl-6 p-1 mb-1 cursor-pointer transition-colors duration-200 justify-start border-l-4 ${key === this.state.current_step ? `border-blue-500 text-gray-800 dark:text-white` : `hover:text-gray-800 border-transparent text-gray-400`}`     
    }
    answer(key) {
        const new_steps_taken = this.state.steps_taken
        const old_steps_taken = this.state.steps_taken
        new_steps_taken[this.state.current_step] = {
            "answered": true,
            "option_selected": key
        }
        this.setState({ steps_taken: new_steps_taken });
        this.getCurrentPoints();
        if(this.state.available_points < this.state.acquired_points) {
            console.log('error')
            this.setState({ show_error: true, steps_taken: old_steps_taken })
            setTimeout(this.setState({ show_error: false }), 3000)
        }
    }
    changeState(key) {
        this.setState({ current_step: key });
    }
    checkIfOptionIsActive(index) {
        const steps_taken = this.state.steps_taken
        return steps_taken[this.state.current_step].option_selected === index
    }
    formIsComplete() {
        let flag = true;
        this.state.steps_taken.map((step, index) => {
            if(step.answered === false) {
                flag = false;
            }
            return 0;
        })
        return flag
    }
    render() {
        return (
            <div className="flex items-center justify-between bg-blue-500 relative overflow-hidden h-screen py-4">
                <div className="inset-0 bg-black opacity-25 absolute">
                </div>
                {this.state.show_error && 
                <div className="inset-0 absolute">
                    <div className="flex container mx-auto w-4/5 relative z-10 flex items-center pt-4">
                        <div class="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            {/* <strong class="font-bold">Holy smokes!</strong> */}
                            <span class="block sm:inline">You don't have that many points left!</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => this.setState({ show_error: false })}>
                                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                            </span>
                        </div>
                    </div>
                </div>
                }
                <div className="flex container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center">
                    <div className="w-full flex flex-col items-center justify-between relative z-10">
                        <div className="bg-gray-100 dark:bg-gray-800 overflow-hidden w-full relative">
                            <div className="flex items-start items-stretch justify-between">
                                <div className="flex hidden lg:block shadow-lg relative w-80">
                                    <div className="bg-white h-full dark:bg-gray-700">
                                        <div className="pt-6 ml-6">
                                            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">Available Points</p>
                                            <p className="text-4xl text-black dark:text-white font-extrabold my-4">{this.state.available_points - this.state.acquired_points}</p>
                                        </div>
                                        <nav className="mt-6">
                                            <div className="pl-6 mb-4">
                                                <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">Steps</p>
                                            </div>
                                            <div>
                                                {data.map((step, index) =>                                            
                                                <p className={this.getState(index)} key={index} onClick={() => this.changeState(index)}>
                                                    <span className="mr-2 text-sm font-normal">{step.short}</span>
                                                    {this.state.steps_taken[index]["answered"] &&
                                                    <span className="p-1 text-center ml-2 rounded-lg bg-blue-200 text-xs">
                                                        {this.getStepPoints(index)}
                                                    </span>}
                                                </p>
                                                )}
                                            </div>
                                        </nav>
                                        <div className="ml-6 py-4">
                                            {this.formIsComplete ? 
                                            <a href="/app" className="bg-blue-600 text-white py-2 px-4 text-xs hover:bg-black font-bold uppercase rounded-sm">Complete</a> :
                                            <span disabled={true} className="bg-gray-800 text-white py-2 px-4 text-xsfont-bold uppercase rounded-sm">Complete</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col w-full md:space-y-4">
                                    <div className="overflow-auto h-full pb-24 p-4 md:p-6">
                                        <h1 className="text-3xl font-bold text-blue-800 dark:text-white pb-2">Step {this.state.current_step + 1}</h1>
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white pb-2">{data[this.state.current_step].name}</h2>
                                        <h3 className="text-sm text-gray-600">{data[this.state.current_step].description}</h3>
                                        <div className="grid grid-cols-1 gap-4 my-4">
                                            {data[this.state.current_step].options.map((option, index) =>                                            <OptionButton option={option} key={index} submitAnswer={() => this.answer(index)} isActive={this.checkIfOptionIsActive(index)} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Formpage