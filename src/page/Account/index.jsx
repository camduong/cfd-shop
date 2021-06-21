import { Route, Switch } from "react-router-dom";
import AddressList from "./component/AddressList";
import OrderList from "./component/OrderList";
import PaymentList from "./component/PaymentList";
import Payment from "./component/Payment";
import PersonalInfo from "./component/PersonalInfo";
import Sidebar from "./component/Sidebar";
import Wishlist from "./component/Wishlist";
import Address from "./component/Address";
import Order from "./component/Order";

export default function Account() {
  return (
    <>
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Breadcrumb */}
              <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  My Account
                </li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-10">My Account</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              <Sidebar/>
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <Switch>
              <Route exact path='/account' component={PersonalInfo} />

              <Route exact path='/account/address' component={AddressList} />
              <Route path='/account/address/create' component={Address} />
              {/* <Route path='/account/address/edit' component={Address} /> */}

              <Route exact path='/account/order' component={OrderList} />
              <Route path='/account/order/:slug' component={Order} />

              <Route exact path='/account/payment' component={PaymentList} />
              <Route path='/account/payment/create' component={Payment} />
              {/* <Route path='/account/payment/edit' component={Payment} /> */}

              <Route path='/account/wishlist' component={Wishlist} />
            </Switch>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
