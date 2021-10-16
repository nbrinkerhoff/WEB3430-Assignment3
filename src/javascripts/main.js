// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// TODO
import React from 'react'
import ReactDOM from 'react-dom'

function Hello(props) {
  return (
    <button className="btn btn-primary p-3 m-5">
      Welcome to WEB 3430 (Powered by React!)
    </button>
  )
}

ReactDOM.render(<Hello/>, document.getElementById('main'))