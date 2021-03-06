import React, {Component} from 'react';

export default class Reviews extends Component{
    render() {
        let nodeReviews = this.props.reviews.map(e => {
            return (
                <div className='review' key={e.id}>
                    <div className='review_author'>{e.author}:</div>
                    <div className='review_content'>{e.content}</div>
                </div>
            )
        });

        return (
            <div>
                <div className='subtitle'>Reviews &#8250;</div>
                {nodeReviews}
            </div>
        )
    }
}