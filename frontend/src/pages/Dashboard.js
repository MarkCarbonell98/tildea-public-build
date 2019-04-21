import React from "react"

const Landing = (props) => (
    <div>
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
                <h1>This is your Dashboard</h1>
            </div>
        </div>
        <div className="container pt-5">
            <div className="jumbotron bg-light shadow">
                <h2>Tema 1</h2>
                <div className="d-flex flex-wrap mt-5">
                    <div className="col-md-4 pl-md-0">
                        <button 
                            className="btn btn-success" 
                            onClick={() => props.history.push("/tutorial")}>
                            this takes you to the tutorial
                        </button>
                    </div>
                    <div className="col-md-8">
                        <button 
                            className="btn btn-danger mr-3"
                            onClick={() => props.history.push("/game1/1")}>
                            1
                        </button>
                        <button 
                            className="btn btn-danger mr-3"
                            onClick={() => props.history.push("/game2/1")}>
                            2
                        </button>
                        <button 
                            className="btn btn-danger mr-3"
                            onClick={() => props.history.push("/game3/1")}>
                            3
                        </button>
                    </div>
                </div>
             </div>
        </div>
        
    </div>
)

export default Landing