import { graphql } from 'graphql'

import { schema } from '../../app/graphql/route'

export default async function queryGraphql(query, variableValues = {}) {
  const { data } = await graphql({ schema, source: query, variableValues })
  return data || {}
}