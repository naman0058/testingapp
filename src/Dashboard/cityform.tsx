import React from "react";
class cityForm extends React.PureComponent {

  render(){
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- start page title --> */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">Create Task</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Tasks</a>
                    </li>
                    <li className="breadcrumb-item active">Create Task</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end page title --> */}

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Create New Task</h4>
                  <form className="outer-repeater" method="post">
                    <div data-repeater-list="outer-group" className="outer">
                      <div data-repeater-item className="outer">
                        <div className="form-group row mb-4">
                          <label className="col-form-label col-lg-2">
                            Task Name
                          </label>
                          <div className="col-lg-10">
                            <input
                              id="taskname"
                              name="taskname"
                              type="text"
                              className="form-control"
                              placeholder="Enter Task Name..."
                            />
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label className="col-form-label col-lg-2">
                            Task Description
                          </label>
                          <div className="col-lg-10">
                            <textarea
                              id="taskdesc-editor"
                              name="area"
                            ></textarea>
                          </div>
                        </div>

                        <div className="form-group row mb-4">
                          <label className="col-form-label col-lg-2">
                            Task Date
                          </label>
                          <div className="col-lg-10">
                            <div
                              className="input-daterange input-group"
                              data-provide="datepicker"
                            >
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Start Date"
                                name="start"
                              />
                              <input
                                type="text"
                                className="form-control"
                                placeholder="End Date"
                                name="end"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="inner-repeater mb-4">
                          <div
                            data-repeater-list="inner-group"
                            className="inner form-group mb-0 row"
                          >
                            <label className="col-form-label col-lg-2">
                              Add Team Member
                            </label>
                            <div
                              data-repeater-item
                              className="inner col-lg-10 ms-md-auto"
                            >
                              <div className="mb-3 row align-items-center">
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="inner form-control"
                                    placeholder="Enter Name..."
                                  />
                                </div>
                                <div className="col-md-4">
                                  <div className="mt-4 mt-md-0">
                                    <input
                                      className="form-control"
                                      type="file"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="mt-2 mt-md-0 d-grid">
                                    <input
                                      data-repeater-delete
                                      type="button"
                                      className="btn btn-primary inner"
                                      value="Delete"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row justify-content-end">
                            <div className="col-lg-10">
                              <input
                                data-repeater-create
                                type="button"
                                className="btn btn-success inner"
                                value="Add Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label className="col-form-label col-lg-2">
                            Budget
                          </label>
                          <div className="col-lg-10">
                            <input
                              id="taskbudget"
                              name="taskbudget"
                              type="text"
                              placeholder="Enter Task Budget..."
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row justify-content-end">
                    <div className="col-lg-10">
                      <button type="submit" className="btn btn-primary">
                        Create Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Page-content --> */}
    </div>
  )
  }
};
export default cityForm;
