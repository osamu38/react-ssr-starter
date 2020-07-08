import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from 'components/Title';

export default function NotFoundPage() {
  return (
    <>
      <Helmet title="NotFound" />
      <Title>NotFound</Title>
    </>
  );
}
