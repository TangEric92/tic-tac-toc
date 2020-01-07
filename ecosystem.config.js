module.exports = {
  apps: [
    {
      name: "tic-tac-toc",
      script: "npx",
      interpreter: "none",
      args: "serve build -s",
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "deploy",
      host: "alexdana.me",
      ref: "origin/master",
      repo: "git@github.com:misteralex95/tic-tac-toc.git",
      path: "/home/deploy/tic-tac-toc",
      "post-deploy":
        ". ~/.bashrc && npm install && pm2 reload ecosystem.config.js --env production && npm run build",
      env: {
        NODE_ENV: "production"
      }
    }
  }
};
