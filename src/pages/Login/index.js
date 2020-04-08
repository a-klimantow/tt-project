import React from "react"
import styled, { css } from "reshadow/macro"

import { login_page } from "./styles"
import { useAuth } from "hooks"
import { useInput } from "hooks/logica/useInput"
import img from "assets/svg/login_page.svg"
import { Button } from "components"

const label = () => css`
  label {
    color: inherit;
  }
`

export function Login() {
  const { login, loading } = useAuth("login")
  const email = useInput({
    name: "email",
    big: true,
    placeholder: "Введите логин",
    label: "Логин",
    styles: label(),
    loading,
  })

  const password = useInput({
    name: "password",
    big: true,
    placeholder: "хххххххххх",
    label: "Пароль",
    isPass: true,
    styles: label(),
    loading,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ ...email.data, ...password.data })
  }

  return styled(login_page)(
    <login_page>
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <h1>Вход в систему</h1>
        <form onSubmit={handleSubmit}>
          {email.input}
          {password.input}
          <Button big text="Вход в систему" kind="primary" />
        </form>
      </div>
    </login_page>
  )
}
