import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import ThemeToggle from '../../src/components/ThemeToggle.vue'

it('can mount ThemeToggle', async () => {
  const wrapper = mount(ThemeToggle, {
    attachTo: document.body,
  })

  const toDark = wrapper.get('button').get('#to-dark')
  expect(toDark.text()).toEqual('To Dark')
  expect(toDark.classes()).toContain('inline')
  expect(toDark.classes()).toContain('dark:hidden')

  const toLight = wrapper.get('button').get('#to-light')
  expect(toLight.text()).toEqual('To Light')
  expect(toLight.classes()).toContain('hidden')
  expect(toLight.classes()).toContain('dark:inline')
})
