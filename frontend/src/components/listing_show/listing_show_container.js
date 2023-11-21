import { connect } from 'react-redux';

// import { fetchListing } from '../../actions/listing_actions';
import { selectReviewsForListing, selectListing } from '../../reducers/selectors';
import ListingShow from './listing_show';

// const mapStateToProps = (state, { match }) => {
//   const listingId = parseInt(match.params.listingId);
//   const listing = selectListing(state.entities, listingId);
//   const reviews = selectReviewsForListing(state.entities, listing);
//   return {
//     listingId,
//     listing,
//     reviews
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   fetchListing: id => dispatch(fetchListing(id))
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
