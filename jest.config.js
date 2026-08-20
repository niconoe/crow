module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",

  // d3 v7 and its dependencies ship as ES modules only, which Jest 27 cannot
  // require() directly. Let babel transform them instead of ignoring them.
  transformIgnorePatterns: [
    "/node_modules/(?!(d3|d3-[a-z0-9-]+|internmap|delaunator|robust-predicates)/)"
  ]
}
