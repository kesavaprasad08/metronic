import { Link } from "react-router-dom";
import {
  ChartsWidget1,
  ListsWidget5,
  TablesWidget1,
  TablesWidget5,
} from "../../../../_metronic/partials/widgets";
import { Content } from "../../../../_metronic/layout/components/content";
import { useUser } from "../../../../store/user-context";

export function Billing() {
  const { user } = useUser();

  return (
    <Content>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-body">
          <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-12 p-6">
            <i className="ki-duotone ki-information fs-2tx text-warning me-4">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
            </i>

            <div className="d-flex flex-stack flex-grow-1 ">
              <div className=" fw-semibold">
                <h4 className="text-gray-900 fw-bold">
                  We need your attention!
                </h4>

                <div className="fs-6 text-gray-700 ">
                  Your payment was declined. To start using tools, please{" "}
                  <a
                    href="#"
                    className="fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_new_card"
                  >
                    Add Payment Method
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <h3 className="mb-2">Active until Dec 09, 2024</h3>
              <p className="fs-6 text-gray-600 fw-semibold mb-6 mb-lg-15">
                We will send you a notification upon Subscription expiration{" "}
              </p>

              <div className="fs-5 mb-2">
                <span className="text-gray-800 fw-bold me-1">$24.99</span>
                <span className="text-gray-600 fw-semibold">Per Month</span>
              </div>

              <div className="fs-6 text-gray-600 fw-semibold">
                Extended Pro Package. Up to 100 Agents &amp; 25 Projects
              </div>
            </div>

            <div className="col-lg-5">
              <div className="d-flex text-muted fw-bold fs-5 mb-3">
                <span className="flex-grow-1 text-gray-800">Users</span>
                <span className="text-gray-800">86 of 100 Used</span>
              </div>

              <div className="progress h-8px bg-light-primary mb-2">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "86%" }}
                  aria-valuenow={86}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>

              <div className="fs-6 text-gray-600 fw-semibold mb-10">
                14 Users remaining until your plan requires update
              </div>

              <div className="d-flex justify-content-end pb-0 px-0">
                <a
                  href="#"
                  className="btn btn-light btn-active-light-primary me-2"
                  id="kt_account_billing_cancel_subscription_btn"
                >
                  Cancel Subscription
                </a>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_upgrade_plan"
                  data-fdprocessedid="2bhrw"
                >
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-5 mb-xl-10">
          <div className="card-header card-header-stretch pb-0">
            <div className="card-title">
              <h3 className="m-0">Payment Methods</h3>
            </div>
            <div className="card-toolbar m-0">
              <ul
                className="nav nav-stretch nav-line-tabs border-transparent"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    id="kt_billing_creditcard_tab"
                    className="nav-link fs-5 fw-bold me-5 active"
                    data-bs-toggle="tab"
                    role="tab"
                    href="#kt_billing_creditcard"
                    aria-selected="true"
                  >
                    Credit / Debit Card
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    id="kt_billing_paypal_tab"
                    className="nav-link fs-5 fw-bold"
                    data-bs-toggle="tab"
                    role="tab"
                    href="#kt_billing_paypal"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Paypal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            id="kt_billing_payment_tab_content"
            className="card-body tab-content"
          >
            <div
              id="kt_billing_creditcard"
              className="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="kt_billing_creditcard_tab"
            >
              <h3 className="mb-5">My Cards</h3>
              <div className="row gx-9 gy-6">
                <div className="col-xl-6" data-kt-billing-element="card">
                  <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                    <div className="d-flex flex-column py-2">
                      <div className="d-flex align-items-center fs-4 fw-bold mb-5">
                        Marcus Morris
                        <span className="badge badge-light-success fs-7 ms-2">
                          Primary
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src="/metronic8/demo1/assets/media/svg/card-logos/visa.svg"
                          alt=""
                          className="me-4"
                        />
                        <div>
                          <div className="fs-4 fw-bold">Visa **** 1679</div>
                          <div className="fs-6 fw-semibold text-gray-500">
                            Card expires at 09/24
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center py-2">
                      <button
                        className="btn btn-sm btn-light btn-active-light-primary me-3"
                        data-kt-billing-action="card-delete"
                        data-fdprocessedid="p6gxg"
                      >
                        <span className="indicator-label">Delete</span>
                        <span className="indicator-progress">
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                      <button
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_new_card"
                        data-fdprocessedid="zok5dh"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6" data-kt-billing-element="card">
                  <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                    <div className="d-flex flex-column py-2">
                      <div className="d-flex align-items-center fs-4 fw-bold mb-5"></div>
                      <div className="d-flex align-items-center">
                        <img
                          src="/metronic8/demo1/assets/media/svg/card-logos/american-express.svg"
                          alt=""
                          className="me-4"
                        />

                        <div>
                          <div className="fs-4 fw-bold">
                            Mastercard **** 2040
                          </div>
                          <div className="fs-6 fw-semibold text-gray-500">
                            Card expires at 10/22
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center py-2">
                      <button
                        className="btn btn-sm btn-light btn-active-light-primary me-3"
                        data-kt-billing-action="card-delete"
                        data-fdprocessedid="ohszv4"
                      >
                        <span className="indicator-label">Delete</span>

                        <span className="indicator-progress">
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                      <button
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_new_card"
                        data-fdprocessedid="ozk5sb"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6" data-kt-billing-element="card">
                  <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                    <div className="d-flex flex-column py-2">
                      <div className="d-flex align-items-center fs-4 fw-bold mb-5">
                        Jhon Larson
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src="/metronic8/demo1/assets/media/svg/card-logos/mastercard.svg"
                          alt=""
                          className="me-4"
                        />

                        <div>
                          <div className="fs-4 fw-bold">
                            Mastercard **** 1290
                          </div>
                          <div className="fs-6 fw-semibold text-gray-500">
                            Card expires at 03/23
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center py-2">
                      <button
                        className="btn btn-sm btn-light btn-active-light-primary me-3"
                        data-kt-billing-action="card-delete"
                        data-fdprocessedid="3sw315"
                      >
                        <span className="indicator-label">Delete</span>

                        <span className="indicator-progress">
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                      <button
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_new_card"
                        data-fdprocessedid="b24r2j"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed h-lg-100 p-6">
                    <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                      <div className="mb-3 mb-md-0 fw-semibold">
                        <h4 className="text-gray-900 fw-bold">
                          Important Note!
                        </h4>

                        <div className="fs-6 text-gray-700 pe-7">
                          Please carefully read{" "}
                          <a href="#" className="fw-bold me-1">
                            Product Terms
                          </a>{" "}
                          adding <br /> your new payment card
                        </div>
                      </div>
                      <a
                        href="#"
                        className="btn btn-primary px-6 align-self-center text-nowrap"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_new_card"
                      >
                        Add Card{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="kt_billing_paypal"
              className="tab-pane fade"
              role="tabpanel"
              aria-labelledby="kt_billing_paypal_tab"
            >
              <h3 className="mb-5">My Paypal</h3>
              <div className="text-gray-600 fs-6 fw-semibold mb-5">
                To use PayPal as your payment method, you will need to make
                pre-payments each month before your bill is due.
              </div>

              <form className="form">
                <div className="mb-7 mw-350px">
                  <select
                    name="timezone"
                    data-control="select2"
                    data-placeholder="Select an option"
                    data-hide-search="true"
                    className="form-select form-select-solid form-select-lg fw-semibold fs-6 text-gray-700 select2-hidden-accessible"
                    data-select2-id="select2-data-9-4s5h"
                    tabIndex={-1}
                    aria-hidden="true"
                    data-kt-initialized="1"
                  >
                    <option data-select2-id="select2-data-11-0tl1">
                      Select an option
                    </option>
                    <option value="25">US $25.00</option>
                    <option value="50">US $50.00</option>
                    <option value="100">US $100.00</option>
                    <option value="125">US $125.00</option>
                    <option value="150">US $150.00</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--bootstrap5"
                    dir="ltr"
                    data-select2-id="select2-data-10-49m8"
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single form-select form-select-solid form-select-lg fw-semibold fs-6 text-gray-700"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-timezone-gx-container"
                        aria-controls="select2-timezone-gx-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-timezone-gx-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Select an option"
                        >
                          Select an option
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>
                    <span
                      className="dropdown-wrapper"
                      aria-hidden="true"
                    ></span>
                  </span>
                </div>

                <button type="submit" className="btn btn-primary">
                  Pay with Paypal
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details</h3>
          </div>

          <Link
            to="/crafted/account/settings"
            className="btn btn-primary align-self-center"
          >
            Edit Profile
          </Link>
        </div>

        <div className="card-body p-9">
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Full Name</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {user?.fName + " " + user?.lName}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Company</label>

            <div className="col-lg-8 fv-row">
              <span className="fw-bold fs-6">{user?.company}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Contact Phone
              <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone number must be active"
              ></i>
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">{user?.contactPhone}</span>

              <span className="badge badge-success">Verified</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Company Site</label>

            <div className="col-lg-8">
              <a
                href="#"
                className="fw-bold fs-6 text-gray-900 text-hover-primary"
              >
                {user?.companySite}
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Country
              <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Country of origination"
              ></i>
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {user?.country}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Communication</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">Email, Phone</span>
            </div>
          </div>

          <div className="row mb-10">
            <label className="col-lg-4 fw-bold text-muted">Allow Changes</label>

            <div className="col-lg-8">
              <span className="fw-bold fs-6">Yes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row gy-10 gx-xl-10">
        <div className="col-xl-6">
          <ChartsWidget1 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>

        <div className="col-xl-6">
          <TablesWidget1 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>
      </div>

      <div className="row gy-10 gx-xl-10">
        <div className="col-xl-6">
          <ListsWidget5 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>

        <div className="col-xl-6">
          <TablesWidget5 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>
      </div>
    </Content>
  );
}
