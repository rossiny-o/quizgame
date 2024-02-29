import "../global.css";

export default function questions(){

    return (
        <div className="container mx-auto py-8">
            {/* first row  */}
            <div className="flex items-center space-x-10 m-3 p-3">
                <h5>Question 1/10</h5>
                <h4>Round: 1</h4>
                <h5>Time: 45s</h5>
                <h5>Score: 0</h5>
            </div>

            {/* question & answer */}
            <div className="m-3 p-3">
                <h3 className="p-3 font-bold">Select the correct answer: </h3>
                <div className="flex m-2 border-2 border-black">
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
                <button className="px-3 py-1 bg-blue-500 text-white rounded-full">Previous</button>
                <button className="px-3  py-1 bg-blue-500 text-white float-end rounded-full">Submit</button>
            </div>
        </div>
    )
}