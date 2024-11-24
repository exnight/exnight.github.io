import { mountSuspended } from '@nuxt/test-utils/runtime'
import { HeaderBar } from '#components'

it('can mount HeaderBar', async () => {
  const component = await mountSuspended(HeaderBar)
  const classes = component.classes()
  expect(classes).toContain('py-4')
  expect(classes).toContain('grid')
  expect(classes).toContain('grid-cols-5')
})
