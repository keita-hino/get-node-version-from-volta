import fs from 'fs'
import {join} from 'path'

const findPackageJson = (path: string): string => {
  return fs.readFileSync(join(path, 'package.json')).toString()
}

export const getNodeVersion = (path: string): string => {
  const packageJson = JSON.parse(findPackageJson(path))

  if (!packageJson.hasOwnProperty('volta')) {
    throw new Error('Please install volta and run volta pin command.')
  }

  return packageJson.volta.node
}
