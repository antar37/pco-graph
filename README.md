# Planning Center GraphQL Schema Generator

This project automates the creation of a GraphQL schema and resolvers based on the latest API specifications from Planning Center.

## Features

- Generates GraphQL schema types and queries based on JSON API specification.
- Automatically creates resolvers for querying the Planning Center API.
- Supports nested relationships and complex queries.

## Prerequisites

- Node.js
- npm (or yarn)

## Setup

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables for Planning Center API credentials:

   ```sh
   export PCO_APP_ID=your_app_id
   export PCO_SECRET=your_secret
   ```

## Usage

1. Run the script to get the most updated JSON API spec and generate the GraphQL schema and resolvers:

   ```sh
   pnpm generate
   ```

   The generated schema and resolvers will be saved in the `src/app/graphql` directory.

2. Run graphQl server

```sh
    pnpm dev
```

navigate to `/graphql`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or inquiries, please contact [nate@devcatapult.com].

