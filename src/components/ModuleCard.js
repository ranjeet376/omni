import React, { Component } from 'react'

export default class ModuleCard extends Component {
    render() {
        const { profilePic, durationStr, expertImage, expertName, name, getVideo, i } = this.props;
        return (
            <div className="module-card">
                <div className="module-details" onClick={() => getVideo(i)}>
                    <img src={profilePic} className="profile-image" />
                    <p className="color-name">{name}</p>
                    <span className="duration">{durationStr}</span>
                </div>
                <div></div>
            </div>
        )
    }
}
