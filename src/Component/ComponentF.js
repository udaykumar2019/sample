import React from 'react'
import { UserContext, ChannelContext } from '../App'


function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
        user=> {
          return (<ChannelContext>
            {
                channel => {
                    return <div>user context{user}, channel context value {channel}</div>
                }
            }
          </ChannelContext>) 
        }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
