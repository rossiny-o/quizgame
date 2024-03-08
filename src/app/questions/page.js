import "../global.css";

export default function questions(){

    return (
        <div className="container mx-auto py-8">
            {/* first row  */}
            <div className="flex justify-items-center space-x-10 m-3 p-3">
                <h5>Question: 1/10</h5>
                <h4>Level: 1</h4>
                <h4>Round: 1</h4>
                <h5>Time: 45s</h5>
                <h5>Score: 0</h5>
            </div>

            {/* question & answer */}
            <div className="m-3 p-3">
                <h3 className="p-3 font-bold">Select the correct answer: </h3>
                <div className="flex m-2 border-2 border-black rounded-r">
                    <p className="p-2 px-4 mr-3 border-r-2 border-black">A</p>
                    <p className="p-1">Choice 1</p>
                </div>
                <div className="flex m-2 border-2 border-black">
                    <p className="p-2 px-4 mr-3 border-r-2 border-black">B</p>
                    <p className="p-1">Choice 2</p>
                </div>
                <div className="flex m-2 border-2 border-black">
                    <p className="p-2 px-4 mr-3 border-r-2 border-black">C</p>
                    <p className="p-1">Choice 3</p>
                </div>
                <div className="flex m-2 border-2 border-black">
                    <p className="p-2 px-4 mr-3 border-r-2 border-black">D</p>
                    <p className="p-1">Choice 4</p>
                </div>
            </div>
            <div className="m-3 p-3">
                <button className="font-semibold rounded-lg border border-gray-700 px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Previous</button>

                
                <button className="float-end font-semibold rounded-lg border border-gray-700 px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Submit</button>
            </div>
        </div>
    )
}