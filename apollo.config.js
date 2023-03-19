module.exports = {
  client: {
    service: {
      name: "blog-web-app",
      // URL to the GraphQL API
      url: "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/blog-web-app-ddtvo/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js", "src/**/*.ts"],
  },
};
