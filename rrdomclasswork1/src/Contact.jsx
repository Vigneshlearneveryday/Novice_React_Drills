import React from 'react'

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-6">
          <label htmlFor="">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-12">
          <label htmlFor="">Drop Box</label>
          <input textarea className="form-control" />
        </div>
        <div className="col-lg-12 mt-1">
          <input className="btn btn-primary" type="submit" value={"Submit"} />
        </div>
      </div>
    </div>
  );
}

export default Contact
