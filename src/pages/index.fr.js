import * as React from 'react';
import PropTypes from 'prop-types';

import IndexContent from '../components/IndexContent';
import Layout from '../components/Layout';

export default function Index({ data, location }) {
    const datas = require("../../static/pages/pages.fr.json");

    return (
        <Layout location={location} lang="fr" datas={datas.layout}>
            <IndexContent lang="fr" datas={datas.content} />
        </Layout>
    );
}
Index.propTypes = {
    location: PropTypes.object,
};