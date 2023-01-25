import React from "react"
import Button from "./Button"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ margin: "20%" }}>
    <Button {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  label: "Button",
}
