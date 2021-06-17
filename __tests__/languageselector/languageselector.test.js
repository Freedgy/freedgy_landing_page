import React from "react"
import renderer from "react-test-renderer"

import LanguageSelector from "../../src/components/LanguageSelector"

import jsdom from 'jsdom';
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.Image = window.Image;

describe("LanguageSelector", () => {
    it("renders correctly", async () => {
        const datas = require("../../static/pages/pages.en.json");

        const tree = renderer
            .create(<LanguageSelector lang="en" />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})