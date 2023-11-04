import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import VExperience from '@/components/VExperience.vue'

describe('VExperience', () => {
  it('should the experience list items', () => {
    const wrapper = mount(VExperience, {
      props: {
        experience: {
          id: 'lifefile',
          title: 'Software Engineer',
          company: 'LIFE-FILE',
          startDate: '2012',
          endDate: '2013',
          description: 'Job description',
          tags: ['HTML', 'Javascript']
        }
      }
    })

    expect(wrapper.find('[data-testid="job-title"]').text()).toBe('Software Engineer')
    expect(wrapper.find('[data-testid="company-name"]').text()).toBe('LIFE-FILE')
    expect(wrapper.find('[data-testid="time-in-company"]').text()).toBe('2012 - 2013')
    expect(wrapper.find('[data-testid="job-description"]').text()).toBe('Job description')
    expect(wrapper.find('.skill-list').html()).contain('HTML')
    expect(wrapper.find('.skill-list').html()).contain('Javascript')
  })
})
