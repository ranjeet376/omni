import React, { Component } from 'react'
import ModuleCard from '../components/ModuleCard'
export default class ModuleList extends Component {

    render() {
        const { list, getVideo } = this.props
        console.log("your  list is", list)
        return (
            <div className="module-list">
                {list ? list.map((i, j) => {
                    return <ModuleCard displayImage={i.displayImage} name={i.name} durationStr={i.durationStr} expertName={i.moduleExperts[0].expertName}
                        profilePic={i.moduleExperts[0].profilePic}
                        i={i.id}
                        getVideo={(i) => getVideo(i)}

                    />
                }) : "Loading...."}
            </div>
        )
    }
}
