export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e33a42cc2ca75a7f68669ad',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jn188v1h',
                  apiId: 'ba97baba-fe86-4dbd-b25b-7b0990445f68'
                },
                {
                  buildHookId: '5e33a42c9fec2e582ec4a3e7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9erbb73o',
                  apiId: '6a3d1801-ca17-4f9e-aa23-4891f815d837'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JeremyOsz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9erbb73o.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
