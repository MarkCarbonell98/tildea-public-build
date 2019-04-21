import React from "react"

const Landing = (props) => (
    <div>
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
                <h1>Welcome To Tildea!</h1>
            </div>
        </div>
        <div className="container">
            <div className="card my-3">
                <h5 className="card-header bg-primary text-white">Games!</h5>
                <div className="card-body">
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                    </p>
                </div>
            </div>
            <div className="card my-3">
                <h5 className="card-header bg-success text-white">Tutorials!</h5>
                <div className="card-body">
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                    </p>
                </div>
            </div>
            <div className="bg-danger shadow rounded p-5 my-5">
                <button 
                    className="btn btn-lg btn-light btn-block my-5"
                    onClick={() => props.history.push("/dashboard")}>
                    Go to the Dashboard!
                </button>
            </div>
        </div>
    </div>
)

export default Landing