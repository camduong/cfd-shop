import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useTranslate } from "../../core/Translate"
import { logout } from "../../redux/reducer/authReducer"

export function Header() {
  let { t, selectLang, lang } = useTranslate()
  function changeLang(lan) {
    selectLang(lan)
  }
  let dispatch = useDispatch()
  function _logout(){
    dispatch(logout())
  }
  const auth = useSelector(state => state.auth)
  return (
    <>
      {/* NAVBAR */}
      <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          {/* Promo */}
          <div className="mr-xl-8">
            <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">{t("Free shipping worldwide")}</span>
          </div>
          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="topbarCollapse">
            {/* Nav */}
            <ul className="nav nav-divided navbar-nav mr-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                  <img className="mb-1 mr-1" src="/assets/img/flags/usa.svg" alt="..." /> {t("United States")}
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    <img className="mb-1 mr-2" src="/assets/img/flags/usa.svg" alt="USA" />{t("United States")}
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img className="mb-1 mr-2" src="/assets/img/flags/canada.svg" alt="Canada" />{t("Canada")}
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img className="mb-1 mr-2" src="/assets/img/flags/germany.svg" alt="Germany" />{t("Germany")}
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">USD</a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">USD</a>
                  <a className="dropdown-item" href="#!">EUR</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                  {
                    lang === 'en' ? 'English' : 'Tiếng Việt'
                  }
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#" onClick={e => changeLang('en')}>English</a>
                  <a className="dropdown-item" href="#" onClick={e => changeLang('vn')}>Tiếng Việt</a>
                </div>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav mr-8">
              <li className="nav-item">
                <a className="nav-link" href="./shipping-and-returns.html">{t("Shipping")}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./faq.html">{t("FAQ")}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contact-us.html">{t("Contact")}</a>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="./overview.html">
            Shopper.
            </a>
          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">{t("Home")}</a>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown position-static">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">{t("Catalog")}</a>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">{t("Shop")}</a>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">{t("Pages")}</a>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">{t("Blog")}</a>
                {/* Menu */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="docs/getting-started.html">{t("Docs")}</a>
              </li>
            </ul>
            {/* Nav */}
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                  <i className="fe fe-search" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                {
                  auth.login
                  ? <button type='submit' className="nav-link btn h-auto border-0" onClick={_logout}>{t("Logout")}</button>
                  : <Link to="/auth" className="nav-link">{t("Login / Register")}</Link>
                }
              </li>
              {/* <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-orders.html">
                  <i className="fe fe-user" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-wishlist.html">
                  <i className="fe fe-heart" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                  <span data-cart-items={2}>
                    <i className="fe fe-shopping-cart" />
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}