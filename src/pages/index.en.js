import * as React from 'react';
import PropTypes from 'prop-types';

import IndexContent from '../components/IndexContent';
import Layout from '../components/Layout';

export default function Index({ location }) {
    const title = "yo";
    return (
        <Layout location={location} title={title} lang="en">
            <IndexContent lang="en" />
        </Layout>
    );
}
Index.propTypes = {
    location: PropTypes.object,
};