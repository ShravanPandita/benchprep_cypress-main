// promisified fs module
const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')

//Take the requested json files and merge them into a single JS object to determine environment and viewport settings
function getConfigurationByFile (file) {
  let configValues = {}
  file.forEach((parsedFile) => {
    const pathToConfigFile = path.resolve('cypress/config', `${parsedFile}.json`)
    const options = fs.readJsonSync(pathToConfigFile)
    configValues = _.merge(configValues, options)
  })

  return configValues
}

//',' is here because Cypress will render the '|' delimiter used in the command as a ','. 
function parseFileConfig (config) {
  return config.split(',')
}

// plugins file
const parseFileOption = function(config) {
  // accept a configFile value or use development by default
  const file = parseFileConfig(config.env.configFile) || ['development']

  return getConfigurationByFile(file)
} 

module.exports = parseFileOption
