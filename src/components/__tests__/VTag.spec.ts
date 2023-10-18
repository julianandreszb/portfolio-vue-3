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
    const elHtml = wrapper.find('span:has(.bi-filetype-js)').html()
    expect(elHtml).contain(' JavaScript')
    expect(elHtml).contain('font-size: 2rem;')
    expect(elHtml).contain('color: red;')
    expect(elHtml).contain('class="bi-filetype-js"')
  })
})
