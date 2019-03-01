import React, {Component} from "react"

class ResizeImage extends Component {
  constructor() {
    super()
    this.showImage = this.showImage.bind(this)
  }

  showImages() {
    const {activity} = this.props
    if(activity.imagesAttached) {
      return (
        <div onclick="" className="second-arrows-holder">
          <div onclick="" unselectable="on" className="second-left-arrow"> Left </div>
          <div onclick="" unselectable="on" className="second-right-arrow"> Right </div>
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
      <div>
        {this.showImage()}
      </div>
    )
  }
}

export default ResizeImage
