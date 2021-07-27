import React, {Component} from 'react'
import ReactPlayer from 'react-player/lazy'

class ResponsivePlayer extends Component {
  render () {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={this.props.url}
          width='100%'
          volume={0}
          muted={true}
          height='100%'
          controls={true}
          light={false}
        />
      </div>
    )
  }
}

export default ResponsivePlayer;