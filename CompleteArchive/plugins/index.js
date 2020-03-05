// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
	on('before:browser:launch', (browser = {}, args) => {

    throw "You cannot run task command on BrowserStack"
    // browser will look something like this
    // {
    //   name: 'chrome',
    //   displayName: 'Chrome',
    //   version: '63.0.3239.108',
    //   path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    //   majorVersion: '63'
    // }

    if (browser.name === 'chrome') {
      // `args` is an array of all the arguments
      // that will be passed to Chrome when it launchers
//args['start-fullscreen'] = true
//     	args['proxy-server'] = 'http://localhost:8888'
//	args.push('--proxy-bypass-list="http://localhost:8082"')
//	args['--no-proxy-server']
      // whatever you return here becomes the new args
      return args
    }

    if (browser.name === 'electron') {
      // `args` is a `BrowserWindow` options object
      // https://electronjs.org/docs/api/browser-window#new-browserwindowoptions
      args['fullscreen'] = true

      // whatever you return here becomes the new args
      return args
    }
  })
}
