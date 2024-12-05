import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderBar from '../../src/components/HeaderBar.vue'

it('can mount HeaderBar', async () => {
  const wrapper = mount(HeaderBar)
  const classes = wrapper.classes()
  expect(classes).toContain('py-4')
  expect(classes).toContain('grid')
  expect(classes).toContain('grid-cols-5')
})
