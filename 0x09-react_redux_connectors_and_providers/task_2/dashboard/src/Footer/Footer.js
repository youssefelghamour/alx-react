import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';

function Footer(props) {
  const { user } = props;
  
  return (
    <div>
      <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      { user && (
        <p><a href="#">Contact us</a></p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

export default connect(mapStateToProps)(Footer);