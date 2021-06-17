import React from "react"
import renderer from "react-test-renderer"

import Home from "../../src/components/Home"

import jsdom from 'jsdom';
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.Image = window.Image;

describe("Home", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<Home lang="en" datas={datas.content.home} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})