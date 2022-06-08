import React from 'react'

const Contact = () => {
    return (
        <div style={{ backgroundColor: "#d1d1d1", width: "500px", margin: "auto", padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Contact</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="text" className="form-label">Write your Query</label>
                    <input type="text" className="form-control" placeholder='text area' />
                </div>

                <div style={{ textAlign:"center" }}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact