import baseConfig from "@rizrmdhn/eslint-config/base";
import reactConfig from "@rizrmdhn/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
