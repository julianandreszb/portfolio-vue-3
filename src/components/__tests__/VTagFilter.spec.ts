import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VTagFilter from '@/components/VTagFilter.vue'

describe('VTagFilter', () => {
  it('checks that VTagFilter component renders all VTags', () => {
    const wrapper = mount(VTagFilter, {
      props: {
        tags: [
          {
            id: 'html',
            label: 'HTML',
            icon: { class: 'bi-filetype-html' }
          },
          {
            id: 'javascript',
            label: 'JavaScript',
            icon: { class: 'bi-filetype-js' }
          },
          {
            id: 'git',
            label: 'Git',
            icon: { class: 'bi-github' }
          }
        ]
      }
    })
    const elHtml = wrapper.find('[data-testid="html"]').html()
    expect(elHtml).contain(' HTML')
    expect(elHtml).contain('class="bi-filetype-html"')

    const elJs = wrapper.find('[data-testid="javascript"]').html()
    expect(elJs).contain(' JavaScript')
    expect(elJs).contain('class="bi-filetype-js"')

    const elGit = wrapper.find('[data-testid="git"]').html()
    expect(elGit).contain(' Git')
    expect(elGit).contain('class="bi-github"')
  })
})
