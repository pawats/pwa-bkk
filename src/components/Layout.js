import React from 'react'

export default (props) => {

  if( document.body.className.match('bg') ) {
    document.body.className = 'home-bg-top'
  }
  
  return (
    <div>
      {props.children}
    </div>
  )
}