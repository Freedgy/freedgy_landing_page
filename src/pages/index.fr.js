import * as React from 'react';
import PropTypes from 'prop-types';

import IndexContent from '../components/IndexContent';
import Layout from '../components/Layout';

export default function Index({ data, location }) {
    const title = "Yo";
    return (
        <Layout location={location} title={title} lang="fr">
            <IndexContent lang="fr" />
        </Layout>
    );
}
Index.propTypes = {
    location: PropTypes.object,
};