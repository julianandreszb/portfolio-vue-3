import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheNavBar from '@/components/TheNavBar.vue'
import { routes } from '../../utils/routes'

describe('TheNavBar', () => {
  it('checks that navigation bar items exist', () => {
    const wrapper = mount(TheNavBar, { props: { routes } })

    expect(wrapper.find(`[data-testid="nav-item-about"]`).exists()).toBe(true)
    expect(wrapper.find(`[data-testid="nav-item-skills"]`).exists()).toBe(true)
    expect(wrapper.find(`[data-testid="nav-item-portfolio"]`).exists()).toBe(true)
    expect(wrapper.find(`[data-testid="nav-item-career"]`).exists()).toBe(true)
    expect(wrapper.find(`[data-testid="nav-item-contact"]`).exists()).toBe(true)
  })

  it('checks that navigation bar items have the right text', () => {
    const wrapper = mount(TheNavBar, { props: { routes } })

    expect(wrapper.find(`[data-testid="nav-item-about"]`).text()).toBe('About Me')
    expect(wrapper.find(`[data-testid="nav-item-skills"]`).text()).toBe('Skills')
    expect(wrapper.find(`[data-testid="nav-item-portfolio"]`).text()).toBe('Portfolio')
    expect(wrapper.find(`[data-testid="nav-item-career"]`).text()).toBe('Career')
    expect(wrapper.find(`[data-testid="nav-item-contact"]`).text()).toBe('Contact')
  })
})
