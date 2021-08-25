import querystring from 'querystring'

interface ExtraHostOption {
  host: string
  port?: number
}

interface ConnectionURIOptions {
  host: string
  port?: number
  extras?: ExtraHostOption[]
  database: string
  username?: string
  password?: string
  options?: Record<string, string>
}

/**
 * Format options to standard connection string of the MongoDB.
 *
 * @return mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
 */
export function makeConnectionURI(options: ConnectionURIOptions): string {
  const protocol = 'mongodb://'

  let uri = ''

  if (options.username) {
    if (options.password) {
      uri += `${protocol}${options.username}:${options.password}@${options.host}`
    } else {
      throw new Error('Password is required when the username is specified.')
    }
  } else {
    uri += `${protocol}${options.host}`
  }

  if (options.port) {
    uri += `:${options.port}`
  }

  if (options.extras && options.extras.length) {
    const extras = options.extras
      .map((item) => (item.port ? `${item.host}:${item.port}` : `${item.host}`))
      .join(',')

    uri += `,${extras}`
  }

  uri += `/${options.database}`

  if (options.options) {
    const opts = querystring.stringify(options.options)

    uri += `?${opts}`
  }

  return uri
}
