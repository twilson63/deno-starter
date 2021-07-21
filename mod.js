import { R, crocks } from './deps.js'

const v = crocks.Identity.of(Deno.version)
  .map(R.prop('deno'))
  .valueOf()

console.log('Hello Deno! ', v)