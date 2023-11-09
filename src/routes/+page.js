import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  apiVersion: '2023-11-08',
  useCdn: false,
})

// Cards query
const query = '*[_type == "caseStudyCard"]'
const caseStudies = await client.fetch(query)

export let caseStudies;