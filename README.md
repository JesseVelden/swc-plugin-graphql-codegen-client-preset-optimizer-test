# SWC-plugin-graphql-codegen-client-preset-optimizer
This is currently a sandbox for [a pull request](https://github.com/dotansimha/graphql-code-generator/pull/8759) 
for the [GraphQL Code Generator client preset](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client).

Large scale projects might want to enable code splitting or tree shaking and reducing the bundle size
on the `client-preset` generated files. This is because instead of using the map which contains all GraphQL 
operations in the project, we can use the specific generated document types.

## Usage/ Test it
Testing is highly appreciated! You can test the SWC plugin by installing the swc plugin:
```bash
npm i -D swc-plugin-graphql-codegen-client-preset-optimizer-test
yarn add -D swc-plugin-graphql-codegen-client-preset-optimizer-test
pnpm i -D swc-plugin-graphql-codegen-client-preset-optimizer-test
```

And configuring it in your `.swcrc`:
```json5
{
  // ...
  jsc: {
    // ...
    experimental: {
      plugins: [
        [
          'swc-plugin-graphql-codegen-client-preset-optimizer-test',
          { artifactDirectory: './src/gql', gqlTagName: 'graphql' }
        ]
      ]
    }
  }
}
```

or in your `next.config.js`:
```js
const nextConfig = {
  // ...
  experimental: {
    swcPlugins: [
      [
        'swc-plugin-graphql-codegen-client-preset-optimizer-test', 
        { artifactDirectory: './src/gql', gqlTagName: 'graphql' }
      ]
    ]
  }
}
```

Note that you will need to provide the `artifactDirectory` path that should be the same as the one configured in your `codegen.ts`.

## Issues
Please report any issues at the [pull request](https://github.com/dotansimha/graphql-code-generator/pull/8759). Thanks!