import React from 'react';
import { connect } from 'dva';
import SiderDemo from '../components/IndexPage';

function IndexPage() {
  return (
    <SiderDemo />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
