import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import ItemLevelTable from 'components/ItemLevelTable';
import itemLevelData from 'data/itemLevelData';
import getData from 'utils/parseData';

const SelfOnly = ({ data, view, comparisonGroup }) => {
  const { selfData, sortedSelfData } = getData(data, view, comparisonGroup.name);

  let charts;
  if (view === 'absolute') {
    charts = (
      <Fragment>
        <div className="column is-half">
          <HorizontalBarChart data={sortedSelfData} />
        </div>
        <div className="column is-half">
          <RadialBarChart data={selfData} type={view} />
        </div>
      </Fragment>
    );
  } else if (view === 'percentile') {
    charts = (
      <div className="column">
        <RadialBarChart data={selfData} type={view} />
      </div>
    );
  } else {
    charts = (
      <div className="column">
        <h2 className="has-text-centered is-size-3">Item-Level Summary</h2>
        <ItemLevelTable data={itemLevelData} />
      </div>
    );
  }

  return (
    <section className="section">
      {view === 'item-level' ? null : <h2 className="has-text-centered is-size-3">Self Assessment</h2>}
      <div className="columns is-multiline">
        { charts }
      </div>
    </section>
  );
};

SelfOnly.propTypes = {
  data: PropTypes.object,
  view: PropTypes.oneOf([
    'absolute',
    'percentile',
    'item-level'
  ]),
  comparisonGroup: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ])
};

export default SelfOnly;
