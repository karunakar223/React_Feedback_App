// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isLiked: false}

  isFeedButtonClicked = () => {
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
  }

  homePage = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="home-container">
        <h1 className="main-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="images-row">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="li-item">
              <button
                type="button"
                onClick={this.isFeedButtonClicked}
                className="like-btn"
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="like-img"
                />
                <br />
                <span className="img-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  getRenderLikeButton = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="like-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thanks-text">Thank You!</h1>
        <p className="response-msg">
          We will use your feedback to improve our customer support performance,
        </p>
      </div>
    )
  }

  render() {
    const {isLiked} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          {isLiked ? this.getRenderLikeButton() : this.homePage()}
        </div>
      </div>
    )
  }
}

export default Feedback
