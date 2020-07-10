import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from 'components/Title';

const NotFoundPage = () => {
  return (
    <>
      <Helmet title="NotFound" />
      <Title>NotFound</Title>
    </>
  );
};

export default NotFoundPage;
