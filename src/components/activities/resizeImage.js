import React, {Component} from "react"

class ResizeImage extends Component {

  showImages() {
    const {activity} = this.props
    if(activity.imagesAttached) {
      return (
        <div onclick="" className="second-arrows-holder">
          <div onclick="" unselectable="on" className="second-left-arrow"><</div>
          <div onclick="" unselectable="on" className="second-right-arrow">></div>
        </div>
      )
    }
  }

  showImage() {
    const {activity} = this.props
    if(activity.imageAttached) {
      return (
        <div className="second-image-activity-card-container">
          {this.showImages}
          <img className="second-show-image-activity-card" src={activity.image}/>
        </div>
      )
    }
  }

  render() {
    return(
      <%if activity.image.attached?%>
        <div className="second-image-activity-card-container">
          <%if activity.images.attached?%>
            <div onclick="" className="second-arrows-holder">
              <div onclick="" unselectable="on" className="second-left-arrow"><</div>
              <div onclick="" unselectable="on" className="second-right-arrow">></div>
            </div>
          <%end%>
          <img className="second-show-image-activity-card" src="<%=url_for(activity.image)%>"/>
        </div>
      <%end%>
    )
  }
}

export default ResizeImage
