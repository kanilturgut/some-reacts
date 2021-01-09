import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Tim"
                timeAgo="Today at 4:46PM"
                content="Nice blog"
                avatar={faker.image.image()}
            />
            <CommentDetail
                author="Tom"
                timeAgo="Today at 7:00AM"
                content="Dude it is sick!"
                avatar={faker.image.image()}
            />
            <CommentDetail
                author="Mark"
                timeAgo="Yesterday at 6:00PM"
                content="good"
                avatar={faker.image.image()}
            />
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))
