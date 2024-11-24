import { mount, type VueWrapper } from '@vue/test-utils'
import HeaderBar from '~/components/HeaderBar.vue'

describe('HeaderBar', () => {
  let wrapper: VueWrapper
  afterEach(() => {
    wrapper?.unmount()
  })
  test('contains 3 elements', () => {
    const wrapper = mount(HeaderBar)
    expect(wrapper.findAllComponents('').length == 3)
  })
})
