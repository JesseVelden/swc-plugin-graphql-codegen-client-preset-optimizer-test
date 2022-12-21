import { CodegenConfig } from '@graphql-codegen/cli';

const config : CodegenConfig = {
    schema: 'https://api.cartql.com',
    documents: ["src/app/**/*.{ts,tsx}"],
    overwrite: true,
    ignoreNoDocuments: true,
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: [],
        }
    }

}

export default config;