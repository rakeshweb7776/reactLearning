import { useState } from "react"

function Counter() {
    const [earning, setEarning] = useState(0)

    const addEarning = () => {
        if (earning < 500) {
            setEarning(earning + 50)
            setEarning(earning + 50)
            setEarning(earning + 50)
            setEarning(earning + 50)
        }
    }

    const removeEarning = () => {
        if (earning > 0) {
            setEarning(earning - 50)
        }
    }

    return (
        <>
            <div className="bg-purple-500 p-10 mb-10 rounded-2xl">
                <h1 className="text-4xl text-white mb-2">Rakesh is Earning Now ${earning}</h1>
                <div className="flex gap-5 mt-5">
                    <button disabled={earning === 500} className="bg-white p-3 rounded-md cursor-pointer" onClick={addEarning}>Add Earning</button>
                    <button disabled={earning === 0} className="bg-white p-3 rounded-md cursor-pointer" onClick={removeEarning}>Remove Earning</button>
                </div>
            </div>
        </>
    )
}

export default Counter