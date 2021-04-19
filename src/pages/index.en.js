import * as React from 'react';
import PropTypes from 'prop-types';

import IndexContent from '../components/IndexContent';
import Layout from '../components/Layout';

export default function Index({ location }) {
    const datas = require("../../static/pages/pages.en.json");

    return (
        <Layout location={location} lang="en" datas={datas.layout}>
            <IndexContent lang="en" datas={datas.content} />
        </Layout>
    );
}
Index.propTypes = {
    location: PropTypes.object,
};