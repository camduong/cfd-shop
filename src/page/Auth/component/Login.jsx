import { useDispatch, useSelector } from "react-redux"
import { useTranslate } from "../../../core/Translate"
import useFormValidate from "../../../hook/useFormValidate"
import { loginAction } from "../../../redux/reducer/authReducer"
const styles = {
  inputError: {
      color: 'red',
      fontSize: 13,
      fontStyle: 'italic'
  }
}
export default function Login() {
  let { t } = useTranslate()
  let { handleSubmit, inputChange, error, form } = useFormValidate({
    email: "",
    password: ""
  }, {
    rule: {
      email: {
        required: true,
        pattern: 'email'
      },
      password: {
        required: true,
        min: 6,
        max: 32
      }
    }
  })
  let dispatch = useDispatch()
  function formSubmit() {
    dispatch(loginAction(form))
  }
  const auth = useSelector(state => state.auth)
  return (
    <div className="card card-lg mb-10 mb-md-0">
      <div className="card-body">
        {/* Heading */}
        <h6 className="mb-7">{t("Login")}</h6>
        {auth.loginError && <p className="error-text" style={styles.inputError}>{auth.loginError}</p>}
        {/* Form */}
        <form noValidate onSubmit={handleSubmit(formSubmit)}>
          <div className="row">
            <div className="col-12">
              {/* Email */}
              <div className="form-group">
                <label className="sr-only" htmlFor="loginEmail">{t("Email address")} *</label>
                <input className="form-control form-control-sm" id="loginEmail" type="text" name="email" onChange={inputChange} placeholder={t("Email address") + " *"} required />
                {
                  error.email && <p className="error-text" style={styles.inputError}>{error.email}</p>
                }
              </div>
            </div>
            <div className="col-12">
              {/* Password */}
              <div className="form-group">
                <label className="sr-only" htmlFor="loginPassword">{t("Password")} *</label>
                <input className="form-control form-control-sm" id="loginPassword" type="password" name="password" onChange={inputChange} placeholder={t("Password") + " *"} required />
                {
                  error.password && <p className="error-text" style={styles.inputError}>{error.password}</p>
                }
              </div>
            </div>
            <div className="col-12 col-md">
              {/* Remember */}
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" id="loginRemember" type="checkbox" />
                  <label className="custom-control-label" htmlFor="loginRemember">
                    {t("Remember me")}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-auto">
              {/* Link */}
              <div className="form-group">
                <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">{t("Forgot password")}?</a>
              </div>
            </div>
            <div className="col-12">
              {/* Button */}
              <button className="btn btn-sm btn-dark" type="submit">
                {t("Sign in")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}