import React from "react"
import renderer from "react-test-renderer"

import Header from "../../src/components/Header"

import jsdom from 'jsdom';
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.Image = window.Image;

describe("Header", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<Header lang="en" datas={datas.layout.header} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})