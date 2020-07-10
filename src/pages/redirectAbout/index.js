import React from 'react';
import { Helmet } from 'react-helmet-async';
import { endpoint } from 'config/url';

const RedirectAboutPage = () => {
  return <Helmet title="RedirectAboutPage" />;
};

RedirectAboutPage.getRedirectUrl = () => {
  return endpoint.about;
};

export default RedirectAboutPage;
