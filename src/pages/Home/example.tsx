/* eslint-disable */

import { Layout } from '@components';
import React from 'react';

const ExampleHome: React.FC = () => {
  return (
    <Layout>
      <>
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <form className="form-inline">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-light"
                        id="dash-daterange"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-primary border-primary text-white">
                          <i className="mdi mdi-calendar-range font-13"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="btn btn-primary ml-2">
                    <i className="mdi mdi-autorenew"></i>
                  </a>
                  <a href="#!" className="btn btn-primary ml-1">
                    <i className="mdi mdi-filter-variant"></i>
                  </a>
                </form>
              </div>
              <h4 className="page-title">Dashboard</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-right">
                      <i className="mdi mdi-account-multiple widget-icon"></i>
                    </div>
                    <h5
                      className="text-muted font-weight-normal mt-0"
                      title="Number of Customers"
                    >
                      Customers
                    </h5>
                    <h3 className="mt-3 mb-3">36,254</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-success mr-2">
                        <i className="mdi mdi-arrow-up-bold"></i> 5.27%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-right">
                      <i className="mdi mdi-cart-plus widget-icon"></i>
                    </div>
                    <h5
                      className="text-muted font-weight-normal mt-0"
                      title="Number of Orders"
                    >
                      Orders
                    </h5>
                    <h3 className="mt-3 mb-3">5,543</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-danger mr-2">
                        <i className="mdi mdi-arrow-down-bold"></i> 1.08%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-right">
                      <i className="mdi mdi-currency-usd widget-icon"></i>
                    </div>
                    <h5
                      className="text-muted font-weight-normal mt-0"
                      title="Average Revenue"
                    >
                      Revenue
                    </h5>
                    <h3 className="mt-3 mb-3">$6,254</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-danger mr-2">
                        <i className="mdi mdi-arrow-down-bold"></i> 7.00%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-right">
                      <i className="mdi mdi-pulse widget-icon"></i>
                    </div>
                    <h5
                      className="text-muted font-weight-normal mt-0"
                      title="Growth"
                    >
                      Growth
                    </h5>
                    <h3 className="mt-3 mb-3">+ 30.56%</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-success mr-2">
                        <i className="mdi mdi-arrow-up-bold"></i> 4.87%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7  col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-right">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Sales Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Export Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Profit
                    </a>

                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                  </div>
                </div>
                <h4 className="header-title mb-3">Projections Vs Actuals</h4>

                <div
                  id="high-performing-product"
                  className="apex-charts"
                  data-colors="#727cf5,#e3eaef"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-right">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Sales Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Export Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Profit
                    </a>

                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                  </div>
                </div>
                <h4 className="header-title mb-3">Revenue</h4>

                <div className="chart-content-bg">
                  <div className="row text-center">
                    <div className="col-md-6">
                      <p className="text-muted mb-0 mt-3">Current Week</p>
                      <h2 className="font-weight-normal mb-3">
                        <small className="mdi mdi-checkbox-blank-circle text-primary align-middle mr-1"></small>
                        <span>$58,254</span>
                      </h2>
                    </div>
                    <div className="col-md-6">
                      <p className="text-muted mb-0 mt-3">Previous Week</p>
                      <h2 className="font-weight-normal mb-3">
                        <small className="mdi mdi-checkbox-blank-circle text-success align-middle mr-1"></small>
                        <span>$69,524</span>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="dash-item-overlay d-none d-md-block">
                  <h5>Today's Earning: $2,562.30</h5>
                  <p className="text-muted font-13 mb-3 mt-2">
                    Etiam ultricies nisi vel augue. Curabitur ullamcorper
                    ultricies nisi. Nam eget dui. Etiam rhoncus...
                  </p>
                  <a href="#!" className="btn btn-outline-primary">
                    View Statements
                    <i className="mdi mdi-arrow-right ml-2"></i>
                  </a>
                </div>

                <div
                  id="revenue-chart"
                  className="apex-charts mt-3"
                  data-colors="#727cf5,#0acf97"
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-right">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Sales Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Export Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Profit
                    </a>

                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                  </div>
                </div>
                <h4 className="header-title">Revenue By Location</h4>
                <div className="mb-4 mt-4">
                  <div id="world-map-markers" style={{ height: '224px' }}></div>
                </div>

                <h5 className="mb-1 mt-0 font-weight-normal">New York</h5>
                <div className="progress-w-percent">
                  <span className="progress-value font-weight-bold">72k </span>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '72%' }}
                      aria-valuenow={72}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <h5 className="mb-1 mt-0 font-weight-normal">San Francisco</h5>
                <div className="progress-w-percent">
                  <span className="progress-value font-weight-bold">39k </span>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '39%' }}
                      aria-valuenow={39}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <h5 className="mb-1 mt-0 font-weight-normal">Sydney</h5>
                <div className="progress-w-percent">
                  <span className="progress-value font-weight-bold">25k </span>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '39%' }}
                      aria-valuenow={39}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <h5 className="mb-1 mt-0 font-weight-normal">Singapore</h5>
                <div className="progress-w-percent mb-0">
                  <span className="progress-value font-weight-bold">61k </span>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '61%' }}
                      aria-valuenow={61}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
            <div className="card">
              <div className="card-body">
                <a href="#" className="btn btn-sm btn-link float-right mb-3">
                  Export
                  <i className="mdi mdi-download ml-1"></i>
                </a>
                <h4 className="header-title mt-2">Top Selling Products</h4>

                <div className="table-responsive">
                  <table className="table table-centered table-nowrap table-hover mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            ASOS Ridley High Waist
                          </h5>
                          <span className="text-muted font-13">
                            07 April 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $79.49
                          </h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            82
                          </h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $6,518.18
                          </h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            Marco Lightweight Shirt
                          </h5>
                          <span className="text-muted font-13">
                            25 March 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $128.50
                          </h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            37
                          </h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $4,754.50
                          </h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            Half Sleeve Shirt
                          </h5>
                          <span className="text-muted font-13">
                            17 March 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $39.99
                          </h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            64
                          </h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $2,559.36
                          </h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            Lightweight Jacket
                          </h5>
                          <span className="text-muted font-13">
                            12 March 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $20.00
                          </h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            184
                          </h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $3,680.00
                          </h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            Marco Shoes
                          </h5>
                          <span className="text-muted font-13">
                            05 March 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $28.49
                          </h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            69
                          </h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 font-weight-normal">
                            $1,965.81
                          </h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 order-lg-1">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-right">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Sales Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Export Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Profit
                    </a>

                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                  </div>
                </div>
                <h4 className="header-title">Total Sales</h4>

                <div
                  id="average-sales"
                  className="apex-charts mb-4 mt-4"
                  data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00"
                ></div>

                <div className="chart-widget-list">
                  <p>
                    <i className="mdi mdi-square text-primary"></i> Direct
                    <span className="float-right">$300.56</span>
                  </p>
                  <p>
                    <i className="mdi mdi-square text-danger"></i> Affilliate
                    <span className="float-right">$135.18</span>
                  </p>
                  <p>
                    <i className="mdi mdi-square text-success"></i> Sponsored
                    <span className="float-right">$48.96</span>
                  </p>
                  <p className="mb-0">
                    <i className="mdi mdi-square text-warning"></i> E-mail
                    <span className="float-right">$154.02</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 order-lg-1">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-right">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Sales Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Export Report
                    </a>

                    <a href="#!" className="dropdown-item">
                      Profit
                    </a>

                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                  </div>
                </div>
                <h4 className="header-title mb-2">Recent Activity</h4>

                <div data-simplebar style={{ maxHeight: '424px' }}>
                  <div className="timeline-alt pb-0">
                    <div className="timeline-item">
                      <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-info font-weight-bold mb-1 d-block"
                        >
                          You sold an item
                        </a>
                        <small>
                          Paul Burgess just purchased “Hyper - Admin Dashboard”!
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">5 minutes ago</small>
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-primary font-weight-bold mb-1 d-block"
                        >
                          Product on the Bootstrap Market
                        </a>
                        <small>
                          Dave Gamache added
                          <span className="font-weight-bold">
                            Admin Dashboard
                          </span>
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">30 minutes ago</small>
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-info font-weight-bold mb-1 d-block"
                        >
                          Robert Delaney
                        </a>
                        <small>
                          Send you message
                          <span className="font-weight-bold">
                            "Are you there?"
                          </span>
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">2 hours ago</small>
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-primary font-weight-bold mb-1 d-block"
                        >
                          Audrey Tobey
                        </a>
                        <small>
                          Uploaded a photo
                          <span className="font-weight-bold">"Error.jpg"</span>
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">14 hours ago</small>
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-info font-weight-bold mb-1 d-block"
                        >
                          You sold an item
                        </a>
                        <small>
                          Paul Burgess just purchased “Hyper - Admin Dashboard”!
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">16 hours ago</small>
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-primary font-weight-bold mb-1 d-block"
                        >
                          Product on the Bootstrap Market
                        </a>
                        <small>
                          Dave Gamache added
                          <span className="font-weight-bold">
                            Admin Dashboard
                          </span>
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">22 hours ago</small>
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-info font-weight-bold mb-1 d-block"
                        >
                          Robert Delaney
                        </a>
                        <small>
                          Send you message
                          <span className="font-weight-bold">
                            "Are you there?"
                          </span>
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">2 days ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default ExampleHome;