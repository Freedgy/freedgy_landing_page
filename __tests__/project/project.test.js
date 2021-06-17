import React from "react"
import renderer from "react-test-renderer"

import Project from "../../src/components/Project"

describe("Project", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<Project datas={datas.content.project} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})