import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import VExperience from '@/components/VExperience.vue'

describe('VExperience', () => {
  it('should the experience list items', () => {
    const wrapper = mount(VExperience, {
      props: {
        experience: [
          {
            id: 'lifefile',
            title: 'Software Engineer',
            company: 'LIFE-FILE',
            startDate: '2013',
            endDate: '2013'
          }
        ]
      }
    })

    expect(wrapper.find('[data-testid="lifefile"] h3').text()).toBe('Software Engineer')
    expect(wrapper.find('[data-testid="lifefile"]').text()).toBe('@LIFE-FILE')
    expect(wrapper.find('[data-testid="lifefile"]').text()).toBe('2013')
    expect(wrapper.find('[data-testid="lifefile"]').text()).toBe('Present')
  })
})
