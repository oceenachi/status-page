import React from "react";

function Input() {
  return (
    <div className="vh-100 d-flex row m-2">
      <div className="container m-auto col-md-10 col-lg-8 col-xs-12 col-sm-10">
        <div className="mw-100 border border-light shadow p-5 bg-white rounded">
          <h3 className="text-center" style={{ color: "#251f68" }}>
            Url Form
          </h3>
          <div className="p-5">
            <form action="">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name of the url"
                  // id="exampleInputEmail1"
                  // aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="url">Url</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Input url"
                  // id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="current Status">Current Status</label>
                <input
                  type="text"
                  class="form-control"
                  // id="exampleInputPassword1"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
