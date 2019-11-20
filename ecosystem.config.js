module.exports = {
    apps: [{
        name: 'phaserBird',
        script: 'nodeServer.js',
        instances: 1,
        autorestart: true,
        watch: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],

    deploy: {
        production: {
            user: 'root',
            host: '112.74.52.208',
            ref: 'origin/master',
            repo: 'https://github.com/logan4846/phaserFlapyBirdNode.git',
            path: '/src/phaserFlapyBirdNode',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};
