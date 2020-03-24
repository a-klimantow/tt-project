import React from "react"
import styled from "reshadow/macro"

import { Button, Icon, Input } from "components/ui"

export function App() {
  return styled()(
    <div style={{ display: "" }}>
      <Icon fill="red" icon="task" />
      <Button text="test" />
      <Button text="test" size="big" />
      <Input />
    </div>
  )
}
