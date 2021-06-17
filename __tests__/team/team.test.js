import React from "react"
import renderer from "react-test-renderer"

import Team from "../../src/components/Team"

import jsdom from 'jsdom';
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.Image = window.Image;

describe("Team", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<Team datas={datas.content.team} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})