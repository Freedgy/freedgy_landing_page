import React from "react"
import renderer from "react-test-renderer"

import Contact from "../../src/components/Contact"

describe("Contact", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<Contact datas={datas.content.contact} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})