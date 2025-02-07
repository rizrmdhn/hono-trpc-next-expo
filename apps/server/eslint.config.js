import baseConfig, { restrictEnvAccess } from "@rizrmdhn/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [...baseConfig, ...restrictEnvAccess];
