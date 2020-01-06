module.exports = {
  apps: [],
  deploy: {
    production: {
      user: "deploy",
      host: "alexdana.me",
      ref: "origin/develop",
      repo: "git@github.com:misteralex95/leaderboard.git",
      path: "/home/deploy/leaderboard",
      "post-deploy":
        ". ~/.bashrc && npm install && pm2 reload ecosystem.config.js --env production && npm start",
      env: {
        NODE_ENV: "production"
      }
    }
  }
};
