import React from 'react'
import './index.less'
import loadingUrl from '../../assets/imgs/loading.gif'
function Loading() {
  return (
    <div className='loading'>
      <img src={loadingUrl} alt='' />
    </div>
  )
}

export default Loading
