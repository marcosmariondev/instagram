import React, {Component} from "react";
import "./post.css";

class Post extends Component {


    render() {

        const {name, avatar, imagePost, caption} = this.props;

        return <article className="Post" ref="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src={avatar} alt={name}/>
                    </div>
                    <div className="Post-user-nickname">
                        <span>{name}</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="Icon Living" src={imagePost}/>
                </div>
            </div>
            <div className="Post-caption">
                <strong>{name}</strong> {caption}
            </div>
        </article>;
    }
}

export default Post;