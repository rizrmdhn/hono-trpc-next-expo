import baseConfig, { restrictEnvAccess } from "@rizrmdhn/eslint-config/base";
import nextjsConfig from "@rizrmdhn/eslint-config/nextjs";
import reactConfig from "@rizrmdhn/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
