import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-alert": "error",
      "id-length": ["error", { max: 12 }],
    },
  },
];
