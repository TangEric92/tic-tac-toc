module.exports = {
  apps: [],
  deploy: {
    production: {
      user: "deploy",
      host: "alexdana.me",
      ref: "origin/master",
      repo: "https://github.com/MisterAlex95/tic-tac-toc.git",
      path: "/home/deploy/tic-tac-toc",
      "post-deploy": "source ~/.bashrc && yarn install && yarn run build",
      env: {
        NODE_ENV: "production"
      }
    }
  }
};
