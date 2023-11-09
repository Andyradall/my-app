  
export default {
    name: 'caseStudyCard',
    title: 'Case Study Card',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'href',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'ariaLabel',
        title: 'Aria Label',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'alt',
        title: 'Alt Text',
        type: 'string',
      },
    ],
  };