import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const FIXTURES_DIR = path.join(__dirname)
const SAVE_DIR = path.join(__dirname, '..')
const EXLUDE_FILES = ['run']

export function generateFixtureJestSnippets(files: string[]) {
  if (!files || !files.length)
    throw new Error('A valid file name must be provided')

  const open = '// WARNING: this file is generated automatically\n\ndescribe(\'hehe\', () => {'
  const close = '\n})'

  const specs = files
    .map((fname) => {
      if (EXLUDE_FILES.includes(fname.split('.ts')[0]))
        return ''

      const specName = fname.split('.ts')[0].replace(/[-]/gi, ' ')

      return `
  it('${specName}', async() => {
    const { result, expected } = await import('./fixtures/${fname.split('.ts')[0]}')
    expect(result.equals(expected)).toBeTruthy()
  })`
    })
    .join('\n')

  return `${open}${specs}${close}`
}

function parseFileTree(err: any, files: string[]) {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const tmp = generateFixtureJestSnippets(files.filter(f => f !== 'tests'))

  fs.writeFileSync(`${SAVE_DIR}/fixtures.test.ts`, tmp)
}

fs.readdir(FIXTURES_DIR, parseFileTree)
