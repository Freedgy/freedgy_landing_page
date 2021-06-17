import React from "react"
import renderer from "react-test-renderer"

import Trailer from "../../src/components/Trailer"

describe("Trailer", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<Trailer lang="en" datas={datas.content.trailer} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})