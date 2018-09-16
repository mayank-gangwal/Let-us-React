import React from 'react';
import Axios from 'axios';
import '../App.css';

class ImageRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts: []
        });
    }

    componentDidMount() {
        Axios.get('https://reactworkshop.herokuapp.com/data')
            .then(res => {
                console.log(res)
                const posts = res.data.data;
                this.setState({ posts });
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => (
                        <div key={post.imageId}>
                            <h2 style={{ marginBottom: '0px' }}>{post.imageTitle}</h2>
                            <img src={post.imageUrl} className="App-image" />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ImageRoute;