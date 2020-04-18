const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/andb3/andb3.github.io.git',
        user: {
            name: 'andb3',
            email: 'andb3003@yahoo.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)