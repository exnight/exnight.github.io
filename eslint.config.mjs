import eslintPluginAstro from 'eslint-plugin-astro'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  ...eslintPluginAstro.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  eslintConfigPrettier,
  {
    rules: {
      // custom overrrides
    }
  }
]
