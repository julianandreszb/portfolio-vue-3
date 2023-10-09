import { describe, it, expect } from 'vitest'
import { EnumHeaders } from '@/utils/typeScriptDefinitions/enumHeaders'
import { mount } from '@vue/test-utils'
import VSection from '@/components/VSection.vue'

describe('VSection', () => {
  it('checks that section tag has the id attribute provided via property', () => {
    const wrapper = mount(VSection, { props: { sectionId: 'custom-id' } })
    expect(wrapper.find(`[id="custom-id"]`).exists()).toBe(true)
  })
  it('checks that opening-tag and closing-tag tags are displayed if headerTag.tagContent and headerTag.tagName properties are provided', () => {
    const wrapper = mount(VSection, {
      props: {
        sectionId: 'custom-id',
        headerTag: { tagName: EnumHeaders.h1, tagContent: 'Content Tag' }
      }
    })
    expect(wrapper.find(`.opening-tag`).exists()).toBe(true)
    expect(wrapper.find(`.opening-tag`).text()).contain('Content Tag')

    expect(wrapper.find(`.closing-tag`).exists()).toBe(true)
    expect(wrapper.find(`.closing-tag`).text()).contain('Content Tag')
  })
  it('checks that opening-tag and closing-tag tags are NOT displayed if headerTag.tagContent and headerTag.tagName properties are NOT provided', () => {
    const wrapper = mount(VSection, {
      props: {
        sectionId: 'custom-id',
        headerTag: { tagName: EnumHeaders.h1, tagContent: '' }
      }
    })
    expect(wrapper.find(`.opening-tag`).exists()).toBe(false)
    expect(wrapper.find(`.closing-tag`).exists()).toBe(false)
  })
})
