import * as React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

export default function NotFoundPage({ location }) {
    const title = "yo";
    return (
        <Layout location={location} title={title} lang="en">
            404
        </Layout>
    );
}
NotFoundPage.propTypes = {
    location: PropTypes.object,
};