import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
//import { SliceZone } from '../components/SliceZone'

const PageTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicPage
  console.log(doc)

  return (
    <Layout>
      {/* <Seo title={page.data.document_display_name.text} /> */}
      {/* <SliceZone sliceZone={doc.data.body} /> */}
      <h1>{doc.data.document_display_name.text}</h1>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
        document_display_name {
          text
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
        }
      }
    }
  }
`

export default PageTemplate