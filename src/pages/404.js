import * as React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

export default function NotFoundPage({ location }) {
    return (
        <Layout location={location} lang="en">
            404
        </Layout>
    );
}
NotFoundPage.propTypes = {
    location: PropTypes.object,
};