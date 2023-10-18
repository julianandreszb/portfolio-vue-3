import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VRatingBarItem from '@/components/VRatingBarItem.vue'

describe('VRatingBarItem', () => {
  it('checks that number of rating bar items is equal to maxRating property', () => {
    const wrapper = mount(VRatingBarItem, {
      props: {
        item: {
          id: 'item_1',
          label: 'Item #1',
          currentRating: 5,
          maxRating: 5
        }
      }
    })
    expect(wrapper.findAll('.rating-bar-item').length).toBe(5)
  })
  it('checks that number of active rating bar items is equal to currentRating property', () => {
    const wrapper = mount(VRatingBarItem, {
      props: {
        item: {
          id: 'item_1',
          label: 'Item #1',
          currentRating: 2,
          maxRating: 5
        }
      }
    })
    expect(wrapper.findAll('.rating-bar-item.active').length).toBe(2)
  })
})
