import React from 'react'
import data from 'assets/data.json'
import OptionButton from './OptionButton';
import { NotEnoughPointsError, CompleteAllOptionsError } from './Errors'
import { withRouter } from 'react-router-dom'
import { HelpCircleSharp } from 'react-ionicons'

class Formpage extends React.Component {
    state = {
        current_step: 0,
        acquired_points: 0,
        available_points: 50,
        steps_taken: new Array(data.length).fill({
            "answered": false,
            "option_selected": 5
        }),
        show_error: false,
        not_enough_points_error: false,
        select_all_error: false,
        show_rules_popup: false
    }
    getCompletedSteps() {
        return this.state.steps_taken.reduce((a, v) => (v["answered"] ? a + 1 : a), 0)
    }
    async getCurrentPoints(new_steps) {
        let points = 0;
        new_steps.map((step, index) => {
            if(step["answered"]) {
                points += data[index].options[step["option_selected"]].points
            }
            return 0;
        })
        return points
    }
    getStepPoints(key) {
        const option = this.state.steps_taken[key]["option_selected"]
        return data[key].options[option].points
    }
    getState(key) {
        return `w-full flex items-center pl-6 p-1 mb-1 transition-colors duration-200 justify-start border-l-4 ${key === this.state.current_step ? `border-blue-500 text-gray-800 dark:text-white` : `hover:text-gray-800 border-transparent text-gray-400`}`     
    }
    async answer(key) {
        let new_steps_taken = [...this.state.steps_taken]
        new_steps_taken[this.state.current_step] = {
            "answered": true,
            "option_selected": key
        }
        const points = await this.getCurrentPoints(new_steps_taken)

        if(this.state.available_points < points) {
            this.setState({ show_error: true, not_enough_points: true })
            setTimeout(() => {
                this.setState({ show_error: false, not_enough_points: false })
            }, 3000)
        }
        else {
            this.setState({ steps_taken: new_steps_taken, acquired_points: points });
        }
    }
    changeState(key) {
        this.setState({ current_step: key });
    }
    checkIfOptionIsActive(index) {
        const steps_taken = this.state.steps_taken
        return steps_taken[this.state.current_step]["option_selected"] === index
    }
    formIsComplete() {
        let flag = true;
        this.state.steps_taken.map(step => {
            if(!step["answered"] && (this.state.available_points >= this.state.acquired_points) ) {
                flag = false;
            }
            return 0;
        })
        return flag
    }
    getPath() {
        let path = '/results/'
        this.state.steps_taken.map((step) => 
            path = `${path}${step["option_selected"]}`
        )
        return path
    }
    canGetOnNextStep(){
        return this.state.steps_taken[this.state.current_step].answered
    }
    canGetOnPreviousStep(){
        return this.state.current_step > 0
    }
    getNextStep(){
        console.log(this.formIsComplete())
        return this.formIsComplete() ? this.props.history.push(this.getPath()) : this.canGetOnNextStep() ? this.setState({ current_step: this.state.current_step + 1 }) : null
    }
    getPreviousStep(){
        return this.canGetOnPreviousStep() ? this.setState({ current_step: this.state.current_step - 1 }) : this.props.history.push('/rules')
    }
    render() {
        return (
            <div className="flex items-center justify-between bg-blue-100 relative overflow-hidden h-screen py-4">
                {this.state.show_error && 
                <div className="inset-0 absolute">
                    <div className="flex container mx-auto w-4/5 relative z-10 flex items-center pt-4">
                        {this.state.not_enough_points && <NotEnoughPointsError/>}
                        {this.state.select_all_error && <CompleteAllOptionsError/>}
                    </div>
                </div>
                }
                {this.state.show_rules_popup && 
                <div className="flex inset-0 absolute z-50 w-screen h-screen">
                    <div className="flex container rounded-lg mx-auto w-4/5 relative z-10 flex items-center">
                        <div className="w-full flex flex-col items-center justify-between relative z-10">
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden w-full relative">
                                <div className="p-24 shadow-lg relative block">
                                    <p className="text-center items-center text-sm mt-6">We've designed this exercise as a short game. As a user, you get a total of 50 points to invest in a combination of design choices. These can be spent on three types of options which have different weights.</p>
                                    <div className="flex items-start items-stretch justify-between flex-row md:flex-row mt-6 w-full px-4">
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
                                    <p className="text-center items-center text-sm mt-6">
                                    The goal is to use these points to answer questions that relate to a few attributes of a "good steward". Keep in mind that your answers should represent your future aspirations as a steward. We've built this to illustrate both the trade-offs users have to make while building their stewarding entity and the finite investment possible. Use the flexibility to optimise for features that are important for your organization - but make sure to select an answer for each round or you will not be able to proceed to the next question
                                    </p>
                                    <p className="text-center items-center text-sm mt-6">
                                    To modify your previous answer, use the back button
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-4 justify-center relative max-w-lg md:max-w-4xl text-center items-center text-md">
                                        <button onClick={()=>this.setState({ show_rules_popup: false })} className="flex bg-white hover:bg-black bg-blue-900 py-3 px-16 text-lg text-white font-bold uppercase rounded-sm mt-10 text-center rounded-md cursor-pointer">Resume</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                <div className="flex container rounded-lg mx-auto w-4/5 relative z-10 flex items-center">
                    <div className="w-full flex flex-col items-center justify-between relative z-10">
                        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden w-full relative">
                            <div className="flex items-start items-stretch justify-between">
                                <div className="flex hidden lg:block shadow-lg relative w-80">
                                    <div className="bg-white h-full dark:bg-gray-700">
                                        <div className="pt-6 pl-6 pr-6">
                                            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-gray-200 mb-2">Available Points</p>
                                            <p className="text-4xl text-white font-extrabold mb-4 bg-purple-500 p-3 text-center rounded-md">{this.state.available_points - this.state.acquired_points}</p>
                                        </div>
                                        <nav className="mt-6">
                                            <div className="pl-6 mb-4">
                                                <p className="text-sm w-max text-gray-700 dark:text-white font-semibold">Steps <span className="p-1 text-center ml-2 rounded-lg bg-blue-200 text-xs">{this.getCompletedSteps()}/{data.length}</span></p>
                                            </div>
                                            <div>
                                                {data.map((step, index) =>                                            
                                                <p className={this.getState(index)} key={index}>
                                                    <span className="mr-2 text-sm font-normal cursor-default">{step.short}</span>
                                                    {this.state.steps_taken[index]["answered"] &&
                                                    <span className="p-1 text-center ml-2 rounded-lg bg-blue-200 text-xs">
                                                        {this.getStepPoints(index)}
                                                    </span>}
                                                </p>
                                                )}
                                            </div>
                                        </nav>
                                        <div className="ml-6 py-4">
                                            <HelpCircleSharp color="#444" height="30px" width="30px" className="cursor-pointer" onClick={()=>this.setState({ show_rules_popup: true })} />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col w-full md:space-y-4">
                                    <div className="overflow-auto h-full pb-24 p-4 md:p-6">
                                        <h1 className="text-3xl font-bold text-blue-800 dark:text-white pb-2">Attribute {this.state.current_step + 1}</h1>
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white pb-2">{data[this.state.current_step].name}</h2>
                                        <h3 className="text-sm text-gray-600">{data[this.state.current_step].game_description}</h3>
                                        <div className="grid grid-cols-1 gap-4 my-4">
                                            {data[this.state.current_step].options.map((option, index) => <OptionButton option={option} key={index} submitAnswer={() => this.answer(index)} isActive={this.checkIfOptionIsActive(index)} />
                                            )}
                                        </div>
                                        <div className="flex flex-row gap-4 justify-between relative flex text-center items-center text-md mt-6">
                                            <button onClick={() => this.getPreviousStep()} className="flex flex-col hover:bg-gray-500 bg-blue-600 py-3 px-16 text-xs hover:text-blue text-white font-bold uppercase rounded-sm cursor-pointer disabled:opacity-50">
                                                Previous
                                            </button>
                                            <button disabled={!this.canGetOnNextStep()} onClick={() => this.getNextStep()} className="flex flex-col hover:bg-gray-500 bg-blue-600 py-3 px-16 text-xs hover:text-blue text-white font-bold uppercase rounded-sm cursor-pointer disabled:opacity-50">
                                                {this.formIsComplete() ? `Complete` : `Next`}
                                            </button>
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

export default withRouter(Formpage)
