import { connect } from 'react-redux';

import { createListing } from '../../actions/listing_actions';
import ListingForm from './listing_form';

// const mapStateToProps = (state, { location }) => ({
//   lat: new URLSearchParams(location.search).get('lat'),
//   lng: new URLSearchParams(location.search).get('lng')
// });

// const mapDispatchToProps = dispatch => ({
//   createListing: listing => dispatch(createListing(listing))
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
