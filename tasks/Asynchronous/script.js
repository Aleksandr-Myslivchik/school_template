import './style.css'

import initRootController from './controller/app.controller'
import { ROOT_NODE } from './view/weather.view'

function initApp() {
  initRootController(ROOT_NODE)
}

initApp()
