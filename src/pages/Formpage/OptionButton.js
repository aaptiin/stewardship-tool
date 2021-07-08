import React from 'react'

class OptionButton extends React.Component {
    getColor() {
        const { option, isActive } = this.props
        const def = `cursor-pointer shadow-lg py-4 pr-6 w-full dark:bg-gray-700 relative rounded-lg text-sm flex items-center`

        switch(option.points) {
            case 5: return `${def} ${ isActive ? `bg-red-300` : `bg-red-100 hover:bg-red-200 `}`;
            case 10: return `${def} ${ isActive ? `bg-yellow-300` : `bg-yellow-100 hover:bg-yellow-200 `}`;
            case 15: return `${def} ${ isActive ? `bg-green-300` : `bg-green-100 hover:bg-green-200 `}`;
            default: return def
        }
    }
    getTagColor() {
        const { option } = this.props
        const def = `rounded-full relative p-2 text-xl text-white font-bold -ml-2 mr-4 h-12 w-12 text-center`
        switch(option.points) {
            case 5: return `${def} bg-red-600`;
            case 10: return `${def} bg-yellow-600`;
            case 15: return `${def} bg-green-600`;
            default: return def
        }
    }
    render() {
        const { option, submitAnswer } = this.props
        return (
            <div className="w-full">
                <div className={this.getColor()} onClick={() => submitAnswer()}>
                    <span className={this.getTagColor()}>{option.points}</span>
                    <p className="flex flex-col">{option.name}</p>
                </div>
            </div>
        )
    }
};

export default OptionButton