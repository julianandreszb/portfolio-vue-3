import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VTag from '@/components/VTag.vue'

describe('VTag', () => {
  it('checks that VTag component is rendered based on tag property', () => {
    const wrapper = mount(VTag, {
      props: {
        tag: {
          id: 'javascript',
          label: 'JavaScript',
          icon: { class: 'bi-filetype-js', style: { 'font-size': '2rem', color: 'red' } }
        }
      }
    })
    const elJs = wrapper.find('[data-testid="javascript"]').html()
    expect(elJs).contain(' JavaScript')
    expect(elJs).contain('font-size: 2rem;')
    expect(elJs).contain('color: red;')
    expect(elJs).contain('class="bi-filetype-js"')
  })
})
