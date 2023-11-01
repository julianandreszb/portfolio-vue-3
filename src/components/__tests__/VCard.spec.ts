import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VCard from '@/components/VCard.vue'

describe('VCard', () => {
  const wrapper = mount(VCard, {
    props: {
      card: {
        isActive: true,
        id: 'custom-id-1',
        title: 'Binary To Decimal',
        description: 'Description description description description description',
        linkIcons: [
          {
            id: 'git',
            label: '',
            style: {
              'background-color': 'transparent'
            },
            icon: {
              class: 'bi-github'
            },
            isActive: false
          },
          {
            id: 'demo',
            label: '',
            style: {
              'background-color': 'transparent'
            },
            icon: {
              class: 'bi-box-arrow-up-right'
            },
            isActive: false
          }
        ],
        tags: [
          {
            id: 'typescript',
            label: 'Typescript',
            isActive: false
          },
          {
            id: 'vue',
            label: 'Vue 3.x',
            isActive: false
          },
          {
            id: 'mongo_db',
            label: 'MongoDB',
            isActive: false
          }
        ]
      }
    }
  })

  it('checks that title renders properly', () => {
    expect(wrapper.find('h3').text()).toBe('Binary To Decimal')
  })
  it('checks that description renders properly', () => {
    expect(wrapper.find('p').text()).toBe(
      'Description description description description description'
    )
  })
  it('checks that tags are rendered properly', () => {
    expect(wrapper.find('[data-testid="typescript"]').text()).toBe('Typescript')
    expect(wrapper.find('[data-testid="vue"]').text()).toBe('Vue 3.x')
    expect(wrapper.find('[data-testid="mongo_db"]').text()).toBe('MongoDB')
  })
  it('checks that project link icons render properly', () => {
    expect(wrapper.find('.link-icon-container > span[data-testid="git"]').html()).contain(
      'class="bi-github"'
    )
    expect(wrapper.find('.link-icon-container > span[data-testid="demo"]').html()).contain(
      'class="bi-box-arrow-up-right"'
    )
  })
})
