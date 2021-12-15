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
                  buildHookId: '61b9f59349e8580b6f684bc2',
                  title: 'Sanity Studio',
                  name: 'sanity-devketchup-studio',
                  apiId: '55cde379-ad0a-43e8-be69-b33b2c77813b'
                },
                {
                  buildHookId: '61b9f5932b5e4c159193ad9f',
                  title: 'Landing pages Website',
                  name: 'sanity-devketchup',
                  apiId: 'be8c4c28-49c8-483e-a05a-f1f61683ae6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcobarbosa/sanity-devketchup',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-devketchup.netlify.app', category: 'apps'}
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
