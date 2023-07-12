import React from 'react'

const Toast = ({ message }) => {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="/logo512.png" style={{ width: 25, height: 25, objectFit: 'cover' }} className="rounded me-2" alt="sea cinema" />
          <strong className="me-auto">SEA Cinema</strong>
          <small></small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  )
}

export default Toast