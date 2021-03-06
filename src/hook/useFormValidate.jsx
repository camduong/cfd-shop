import { useState } from "react";

// "i" ở cuối mỗi dòng để khỏi phân biệt viết hoa hay viết thường
let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
    urlPattern = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/i

export default function useFormValidate(initialForm, validate) {
  let [form, setForm] = useState(initialForm)
  let [error, setError] = useState({})
  function inputChange(e) {
    let name = e.target.name
    let value = e.target.value
    setForm({
      ...form,
      [name]: value
    })
  }
  function check() {
    let errorObj = {}
    let { rule, message } = validate
    if (!message) message = {}
    for (let i in rule) {
      let r = rule[i]
      let m = message[i] || {}

      // check rule required input
      if (r.required && !form[i]?.trim()) {
        errorObj[i] = m.required || 'Trường này không đc để trống';
        continue;
      }

      // check rule pattern input
      if (r.pattern && form[i]) {
        // let pattern = r.pattern
        let { pattern } = r
        if (pattern === 'email') pattern = emailPattern
        if (pattern === 'phone') pattern = phonePattern
        if (pattern === 'url') pattern = urlPattern
        if (!pattern?.test(form[i])) {
          errorObj[i] = m.pattern || 'Trường này không đúng định dạng'
        }
      }

      // check rule pattern input
      if (r.min) {
        if (form[i].length < r.min) {
          errorObj[i] = m?.min || `Trường này không được ít hơn ${r.min} ký tự`
        }
        if (form[i].length > r.max) {
          errorObj[i] = m?.max || `Trường này không được nhiều hơn ${r.max} ký tự`
        }
      }
      if(r.match && form[r.match]){
        if(form[i] !== form[r.match]){
          errorObj[i] = m?.match || `Trường này không giống yêu cầu`;
        }
      }
    }

    setError(errorObj)
    return errorObj
  }
  function register(name, rule){
    if(rule){
      if(!validate.rule) validate.rule ={}
      validate.rule[name] = rule
    }
    return {
      name,
      onChange: inputChange,
      defaultValue: form[name]
    }
  }
  function handleSubmit(callback){
    return (e)=>{
      e.preventDefault()
      let error = check()
      if (Object.keys(error).length === 0) {
        callback()
      }
    }
  }
  return {
    form,
    error,
    register,
    handleSubmit,
    inputChange,
    check
  }
}