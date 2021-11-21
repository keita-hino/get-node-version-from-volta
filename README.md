# get-node-version-from-volta

If you are using [volta](https://volta.sh/) to manage node versions, you can use this action to automate the management of node versions in workflows.

# preparation　　
1. [Install volta in your project.](https://docs.volta.sh/guide/getting-started)
2. [Run volta pin command.](https://docs.volta.sh/reference/pin)

# Usage
Please add to an existing workflow file with reference to the following.

```yml
name: get node version

on: push

jobs:
  buid:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Get node version from volta
        id: get-node-version
        uses: keita-hino/get-node-version-from-volta@get-node-version
      - uses: actions/setup-node@v2
        with:
          node-version: ${{ steps.get-node-version.outputs.nodeVersion }}
```

# Outputs
## `nodeVersion`
The node version specified in package.json will be set.

```js
...
"volta": {
  "node": "14.18.1"
}
...
```

# License
All scripts in this project are released under the MIT License.
