import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ButtonFilter extends Component {
    state = {
        sortBy: 'popularity.desc',
        year: 0,
        showFilter: false
    };

    changeFilter = () => {
        this.setState({showFilter: !this.state.showFilter})
    };

    setSorting = (e) => {
        this.setState({sortBy: e.target.value});
    };

    setYear = (e) => {
        this.setState({year: e.target.value});
    };

    handleSubmit = () => {};

    render() {
        let {direction} = this.props;
        let {showFilter, sortBy, year} = this.state;

        let yearOption = Array.from({length: 30}, (e, i) => {
            let setYear = new Date().getFullYear() - i;
            return (
                <option key={i} value={setYear}>{setYear}</option>
            )
        });

        return (
            <div className='options'>
                <button className={showFilter ? 'filter_button filter_button_active' : 'filter_button'}
                        onClick={this.changeFilter}>
                    <span className={showFilter ? 'filter_arrow_up' : 'filter_arrow_down'}/>
                    Filter
                </button>
                {showFilter ?
                    (<div className='filter_form'>
                        <div className='filter_name'>Order:</div>
                        <select value={sortBy} onChange={this.setSorting} className='filter_select'>
                            <option value='popularity.desc'>Most popular</option>
                            <option value='release_date.desc'>Release date</option>
                            <option value='vote_count.desc'>Most vote count</option>
                        </select>
                        <div className='filter_name'>Year:</div>
                        <select value={year} onChange={this.setYear} className='filter_select'>
                            <option value='0'>All</option>
                            {yearOption}
                        </select>
                        <Link to={
                            (year === 0) ? `/${direction}page=1&sort=${sortBy}`:
                            `/${direction}page=1&sort=${sortBy}&year=${year}`
                        }
                              className='filter_form_submit'
                              onClick={this.handleSubmit}>
                            Show
                        </Link>
                    </div>) : null}
            </div>
        )
    }
}