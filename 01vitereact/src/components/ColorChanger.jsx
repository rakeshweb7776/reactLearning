import { useState } from "react"
function ColorChanger() {
    const [color, setColor] = useState("olive")

    return (
        <>

            <div className="w-full h-screen duration-200 position-relative p-15 flex flex-col gap-10 items-center justify-center"
                style={{ backgroundColor: color }}
            >
                <h1 className="text-gray-300 font-bold text-8xl uppercase">{color}</h1>
                <div className="flex flex-row gap-5 items-center justify-center bg-white border border-black-600 px-10 py-5 rounded-2xl fixed bottom-10 left-1/2 transform -translate-x-1/2">

                    <a onClick={() => setColor("red")} className="group relative inline-block text-sm font-medium text-white" href="#">
                        <span className="absolute inset-0 border border-red-600"></span>
                        <span className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Red
                        </span>
                    </a>

                    <a onClick={() => setColor("blue")} className="group relative inline-block text-sm font-medium text-white" href="#">
                        <span className="absolute inset-0 border border-blue-600"></span>
                        <span className="block border border-blue-600 bg-blue-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Blue
                        </span>
                    </a>

                    <a onClick={() => setColor("green")} className="group relative inline-block text-sm font-medium text-white" href="#">
                        <span className="absolute inset-0 border border-green-600"></span>
                        <span className="block border border-green-600 bg-green-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Green
                        </span>
                    </a>

                    <a onClick={() => setColor("yellow")} className="group relative inline-block text-sm font-medium text-white" href="#">
                        <span className="absolute inset-0 border border-yellow-500"></span>
                        <span className="block border border-yellow-500 bg-yellow-500 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Yellow
                        </span>
                    </a>

                    <a onClick={() => setColor("purple")} className="group relative inline-block text-sm font-medium text-white" href="#">
                        <span className="absolute inset-0 border border-purple-600"></span>
                        <span className="block border border-purple-600 bg-purple-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Purple
                        </span>
                    </a>
                    <a onClick={() => setColor("white")} className="group relative inline-block text-sm font-medium text-black" href="#">
                        <span className="absolute inset-0 border border-black"></span>
                        <span className="block border border-black bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                            White
                        </span>
                    </a>
                </div>
            </div>

        </>
    )
}

export default ColorChanger