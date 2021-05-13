# mongoose-helper

Some helper functions for mongoose.

## Install

```bash
npm install @sqrtthree/mongoose-helper
```

## Usage

```js
const mongooseHelper = require('@sqrtthree/mongoose-helper')

// Or with esm
import mongooseHelper from '@sqrtthree/mongoose-helper'
```

## API

### `makeConnectionURI(options)`

Format options to standard connection string of the MongoDB. [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)

#### options.host

The host where the mongod instance is running.

#### options.port?

Optional. The port number where the mongod instance is running.

#### options.extras?

The host (and optional port number) where the mongos instance for a sharded cluster is running.

- For a replica set, specify the hostname(s) of the mongod instance(s) as listed in the replica set configuration.
- For a sharded cluster, specify the hostname(s) of the mongos instance(s).

#### options.database

The authentication database to use if the connection string includes username:password@ authentication credentials but the authSource option is unspecified.

#### options.username?

Optional. Authentication credentials.

#### options.password?

Optional. Authentication credentials.

#### options.options?

Optional. A query string that specifies connection specific options as `<name>=<value>` pairs.

### `preferredConnectionOptions`

To fix all deprecation warnings in the mongoose. Open [mongoosejs.com/docs/deprecations.html](https://mongoosejs.com/docs/deprecations.html) to get more details.
