import * as React from 'react';
import PropTypes from 'prop-types';

import IndexContent from '../components/IndexContent';
import Layout from '../components/Layout';

export default function Index({ data, location }) {
    const datas = require("../../static/pages/pages.es.json");

    console.log(datas);

    return (
        <Layout location={location} lang="es" datas={datas.layout}>
            <IndexContent lang="es" datas={datas.content} />
        </Layout>
    );
}
Index.propTypes = {
    location: PropTypes.object,
};