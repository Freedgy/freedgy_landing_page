import React from "react"
import renderer from "react-test-renderer"

import Footer from "../../src/components/Footer"

describe("Footer", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<Footer datas={datas.layout.footer} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})