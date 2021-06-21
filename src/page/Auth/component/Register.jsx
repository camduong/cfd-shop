import { useDispatch, useSelector } from "react-redux"
import { useTranslate } from "../../../core/Translate"
import useFormValidate from "../../../hook/useFormValidate"
import { loginAction, registerAction } from "../../../redux/reducer/authReducer"
const styles = {
  inputError: {
      color: 'red',
      fontSize: 13,
      fontStyle: 'italic'
  },
  inputSuc: {
      color: 'green',
      fontSize: 13,
      fontStyle: 'italic'
  }
}
export default function Register() {
  let { t } = useTranslate()
  let { handleSubmit, error, register, form } = useFormValidate({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  }, {
    message: {
      first_name: {
          required: 'Họ không được để trống'
      },
      last_name: {
          required: 'Tên không được để trống'
      },
      email: {
          required: 'Email không được để trống',
          pattern: 'Email không đúng định dạng'
      },
      password: {
        required: 'Password không được để trống',
        min: 6,
        max: 32
      },
      confirm_password: {
        required: 'Vui lòng xác nhận mật khẩu',
        min: 6,
        max: 32,
      }
    }
  })
  let dispatch = useDispatch()
  function formSubmit() {
    // e.preventDefault();
    // console.log(form)
    dispatch(registerAction(form))
  }
  const auth = useSelector(state => state.auth)
  // console.log(auth)
  return (
    <div className="card card-lg">
      <div className="card-body">
        {/* Heading */}
        <h6 className="mb-7">New Customer</h6>
        {auth.registerError && <p className="error-text" style={styles.inputError}>{auth.registerError}</p>}
        {auth.registerSuc && <p className="success-text" style={styles.inputSuc}>{auth.registerSuc}</p>}
        {/* Form */}
        <form noValidate onSubmit={handleSubmit(formSubmit)}>
          <div className="row">
            <div className="col-12">
              {/* Email */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerEmail">{t("Email address")} *</label>
                <input className="form-control form-control-sm" id="registerEmail" type="text" placeholder={t("Email Address")+" *"} {...register("email",{pattern: "email",required: true})} />
                {
                  error.email && <p className="error-text" style={styles.inputError}>{error.email}</p>
                }
              </div>
            </div>
            <div className="col-12">
              {/* Email */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerFirstName">{t("First Name")} *</label>
                <input className="form-control form-control-sm" id="registerFirstName" type="text" placeholder={t("First Name")+" *"} {...register("first_name",{required: true})} />
                {
                  error.first_name && <p className="error-text" style={styles.inputError}>{error.first_name}</p>
                }
              </div>
            </div>
            <div className="col-12">
              {/* Email */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerLastName">{t("Last Name")} *</label>
                <input className="form-control form-control-sm" id="registerLastName" type="text" placeholder={t("Last Name")+" *"} {...register("last_name",{required: true})} />
                {
                  error.last_name && <p className="error-text" style={styles.inputError}>{error.last_name}</p>
                }
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Password */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerPassword">{t("Password")} *</label>
                <input className="form-control form-control-sm" id="registerPassword" type="password" placeholder={t("Password")+" *"} {...register("password",{required: true})} />
                {
                  error.password && <p className="error-text" style={styles.inputError}>{error.password}</p>
                }
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Password */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerPasswordConfirm">{t("Confirm password")} *</label>
                <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder={t("Confirm password")+" *"} {...register("confirm_password",{match: "password", required: true})} />
                {
                  error.confirm_password && <p className="error-text" style={styles.inputError}>{error.confirm_password}</p>
                }
              </div>
            </div>
            <div className="col-12 col-md-auto">
              {/* Link */}
              <div className="form-group font-size-sm text-muted">{t("By registering your details, you agree with our Terms & Conditions, and Privacy and Cookie Policy.")}</div>
            </div>
            <div className="col-12 col-md">
              {/* Newsletter */}
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                  <label className="custom-control-label" htmlFor="registerNewsletter">{t("Sign me up for the Newsletter!")}</label>
                </div>
              </div>
            </div>
            <div className="col-12">
              {/* Button */}
              <button className="btn btn-sm btn-dark" type="submit">{t("Register")}</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}