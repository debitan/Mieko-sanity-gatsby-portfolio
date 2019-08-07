export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d4b39aab8f2a50186dbb829',
                  title: 'Sanity Studio',
                  name: 'Mieko-sanity-gatsby-portfolio-studio',
                  apiId: '784ba80d-7974-4df0-842f-a255c852e7ce'
                },
                {
                  buildHookId: '5d4b39aa2c2b6a01817886c9',
                  title: 'Portfolio Website',
                  name: 'Mieko-sanity-gatsby-portfolio',
                  apiId: '75ceb5bc-c649-4355-858f-082795c758ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/debitan/Mieko-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://Mieko-sanity-gatsby-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
