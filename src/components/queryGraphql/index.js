import { GRAPHQL_URL } from '@/constants/index'

/**
 * Lightweight `gql` template tag :  returns the query as a plain string.
 * Compatible with the Apollo `gql` ergonomics used in the legacy codebase
 * but without pulling in the Apollo Client runtime.
 */
export function gql(strings, ...values) {
  return strings.reduce(
    (acc, str, i) => acc + str + (values[i] != null ? values[i] : ''),
    '',
  )
}

/**
 * Run a GraphQL query against the Cogtix WordPress GraphQL endpoint.
 *
 * Mirrors the shape of the legacy Apollo helper so call sites can keep using:
 *   const { data } = await queryGraphql(QUERY, variables)
 */
export default async function queryGraphql(query, variables = {}) {
  try {
    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      cache: 'no-store',
    })

    if (!res.ok) {
      console.error('[queryGraphql] HTTP error', res.status, res.statusText)
      return { data: null, errors: [{ message: `HTTP ${res.status}` }] }
    }

    const json = await res.json()

    if (json.errors) {
      console.error('[queryGraphql] GraphQL errors', json.errors)
    }

    return { data: json.data ?? null, errors: json.errors }
  } catch (err) {
    console.error('[queryGraphql] Request failed', err)
    return { data: null, errors: [{ message: err?.message ?? 'Request failed' }] }
  }
}
