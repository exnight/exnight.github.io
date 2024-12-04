import eslintPluginAstro from 'eslint-plugin-astro'
import pluginVue from 'eslint-plugin-vue'

export default [
  ...eslintPluginAstro.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  {
    rules: {
      // custom overrrides
    }
  }
]
