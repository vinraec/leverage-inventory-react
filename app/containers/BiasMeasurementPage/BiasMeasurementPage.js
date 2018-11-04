import React from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import Header from 'components/Header';
import BiasMeasurementScatterplot from 'components/BiasMeasurementScatterplot';

const BiasMeasurementPage = ({ user, error, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <Header />
      <BiasMeasurementScatterplot userData={user} />
    </div>

  );
};

export default BiasMeasurementPage;