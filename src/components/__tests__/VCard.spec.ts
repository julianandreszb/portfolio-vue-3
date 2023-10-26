import { describe, it, expect, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import VCard from '@/components/VCard.vue'

describe('VCard', () => {
  let wrapper

  beforeAll(async () => {
    wrapper = await mount(VCard, {
      props: {
        card: {
          title: 'Binary To Decimal',
          description: 'Description description description description description',
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
  })

  it('checks that title renders properly', () => {
    // expect(wrapper.html()).contain('<span>Binary To Decimal</span>')
    console.log(wrapper.html())
  })
  it('checks that description renders properly', () => {})
  it('checks that tags render properly', () => {})
  it('checks that project link icons render properly', () => {})
})
