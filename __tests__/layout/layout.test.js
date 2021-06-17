import React from "react"
import renderer from "react-test-renderer"

import Layout from "../../src/components/Layout"

import jsdom from 'jsdom';
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.Image = window.Image;

describe("Layout", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<Layout lang="en" datas={datas.layout} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})