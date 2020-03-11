module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "on",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "on",
    semi: ["error", "always"]
  }
};
