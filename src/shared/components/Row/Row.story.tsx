import React from "react"
import Row from "./Row"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { faBuilding } from "@fortawesome/free-regular-svg-icons"

export default {
  title: "Components/Row",
  component: Row,
} as ComponentMeta<typeof Row>

const Template: ComponentStory<typeof Row> = (args) => (
  <div style={{ width: "700px" }}>
    <Row {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  label: "Company name",
  value: "Amazon US. AAAA",
  icon: faBuilding,
}
