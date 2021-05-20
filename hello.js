import { serve } from './deps.js'
import getIndex from './api/mod.js'
import getAbout from './api/about.jsx'


serve({
  '/': getIndex,
  '/about': getAbout
})