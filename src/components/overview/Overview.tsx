import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { endPoints } from '../../config/endpoints';
import { requestCovidResults } from '../../redux/reducers/covidresults/covidresults.actions';
import ChartOverview from '../chart/chartOverview';
import { useSelector } from 'react-redux';

function Overview() {
  let fromDate = useSelector((state: any) => state.covid.filterResults.from);
  let toDate = useSelector((state: any) => state.covid.filterResults.to);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCovidResults({ fromDate, toDate }));
  }, []);

  return (
    <div>
      <ChartOverview />
    </div>
  );
}

export default Overview;
