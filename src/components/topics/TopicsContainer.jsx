import React, { Component } from 'react'
import MainNav from '../navigation/MainNav'
import Topic from './Topic'
import {connect} from 'react-redux'
import {getAllTopics} from '../../actions/TopicsActions'

class TopicsContainer extends Component {

    render() {
        return (
            <div>
                <MainNav/>
                <div style = {{ position: 'relative', top: '10vh', textAlign: 'right '}}>
                    <h1 style = {{paddingRight: '20px'}} >Choose a Discussion Topic</h1>
                    {this.props.topics[0] ? this.props.topics.map(topic => <Topic key ={topic.id} topic = {topic}/>) : null}

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topics: state.topicsManager.topics
    }
}

export default connect(mapStateToProps, {getAllTopics})(TopicsContainer)
