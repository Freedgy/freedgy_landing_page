import React from "react"
import renderer from "react-test-renderer"

import Context from "../../src/components/Context"

describe("Context", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<Context datas={datas.content.context} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})