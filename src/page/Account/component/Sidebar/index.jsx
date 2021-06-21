export default function Sidebar() {
  return (
    <>
      {/* Nav */}
      <nav className="mb-10 mb-md-0">
        <div className="list-group list-group-sm list-group-strong list-group-flush-x">
          <a className="list-group-item list-group-item-action dropright-toggle " href="account-orders.html">
            Orders
          </a>
          <a className="list-group-item list-group-item-action dropright-toggle " href="account-wishlist.html">
            Widhlist
          </a>
          <a className="list-group-item list-group-item-action dropright-toggle " href="account-personal-info.html">
            Personal Info
          </a>
          <a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
            Addresses
          </a>
          <a className="list-group-item list-group-item-action dropright-toggle active" href="account-payment.html">
            Payment Methods
          </a>
          <a className="list-group-item list-group-item-action dropright-toggle" href="#!">
            Logout
          </a>
        </div>
      </nav>
    </>
  )
};
