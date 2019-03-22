const { generateDtsBundle } = require('dts-bundle-generator')
const execa = require('execa')
const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')

const build = async ({ cwd, out, reporter }) => {
  const tsBin = path.resolve(__dirname, '..', 'node_modules/.bin/tsc')
  const tsConfig = path.join(cwd, 'tsconfig.json')

  if (!fs.existsSync(tsConfig)) {
    console.error(
      ['\n', '⚠️  dist-types/: ', 'Ensure that your package contains "tsconfig.json" file.'].join(
        ' ',
      ),
    )
    throw new Error(`Failed to build: dist-types/`)
  }

  const declarationOutputDir = path.join(out, 'dist-declarations')
  const declarationOutputFiles = [
    path.join(declarationOutputDir, 'index.d.ts'),
    path.join(declarationOutputDir, 'src/index.d.ts'),
  ]

  const typingsOutputDir = path.join(out, 'dist-types')
  const typingsOutputFile = path.join(typingsOutputDir, 'index.d.ts')

  await (async () => {
    await execa(
      tsBin,
      [
        '-d',
        '--declarationMap',
        'false',
        '--declarationDir',
        declarationOutputDir,
        '--skipLibCheck',
        '--emitDeclarationOnly',
      ],
      { cwd },
    )

    const declarationOutputFile = declarationOutputFiles.find(file => fs.existsSync(file))
    const definitionBundle = generateDtsBundle([{ filePath: declarationOutputFile }])

    rimraf.sync(declarationOutputDir)

    fs.mkdirSync(typingsOutputDir)
    fs.writeFileSync(typingsOutputFile, definitionBundle)
  })()

  reporter.created(declarationOutputDir, 'types')
}

const manifest = manifest => {
  manifest.types = 'dist-types/index.d.ts'
}

module.exports = {
  build,
  manifest,
}
