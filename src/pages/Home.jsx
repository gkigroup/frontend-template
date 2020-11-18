import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { loadData } from 'store/actions';

const Home = ({ loadData }) => {
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.mainApp.data,
});
const mapDispatchToProps = {
  loadData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
