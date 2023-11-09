import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import caseStudyCard from './caseStudyCard';
// Import other schemas...

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    caseStudyCard,
    // ...other schemas
  ]),
});