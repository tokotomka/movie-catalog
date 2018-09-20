import {connect} from 'react-redux';

import {movieFetchData} from "../../actions/movie";
import ItemReq from "../requests/ItemReq";


const mapStateToProps = ({movie, cast, video, similar, reviews}, ownProps) => ({
    url: `/${ownProps.direction}/${ownProps.id}`,
    movie,
    cast,
    video,
    similar,
    reviews
});

const mapDispatchToProps = dispatch => ({
    fetchMovie: url => dispatch(movieFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemReq);