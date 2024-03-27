import path from 'node:path'
import generateApi from 'swagger-typescript-api'

export function generateSwaggerApi(options: { dir: string; url: string }) {
  const { dir, url } = options
  generateApi.generateApi({
    name: 'ApiModel.ts',
    templates: path.resolve(__dirname, './templates'),
    extraTemplates: [
      {
        name: 'nice-axios.ts',
        path: path.resolve(__dirname, './templates/nice-axios.ejs')
      }
    ],
    cleanOutput: true,
    output: path.resolve(process.cwd(), dir),
    url,
    httpClientType: 'axios',
    singleHttpClient: true,
    generateClient: true,
    extractEnums: true,
    generateUnionEnums: true,
    modular: true,
    unwrapResponseData: true
  })
}

generateSwaggerApi({
  dir: 'api/swagger',
  url: 'http://xxx/v3/api-docs'
})
