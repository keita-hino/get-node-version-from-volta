import * as core from '@actions/core'
import {getNodeVersion} from './getNodeVersion'

async function run(): Promise<void> {
  try {
    const workingDir = process.cwd()

    const nodeVersion = getNodeVersion(workingDir)

    core.info(`nodeVersion is set to ${nodeVersion}`)
    core.setOutput('nodeVersion', nodeVersion)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
