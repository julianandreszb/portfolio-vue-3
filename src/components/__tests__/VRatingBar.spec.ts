import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VRatingBar from '@/components/VRatingBar.vue'

describe('VRatingBar', () => {
  it('checks that rating bar items are displayed according to received ratingBarMap property', () => {
    const wrapper = mount(VRatingBar, {
      props: {
        items: [
          { id: 'item_1', label: 'Item #1', currentRating: 5, maxRating: 5 },
          { id: 'item_2', label: 'Item #2', currentRating: 0, maxRating: 5 },
          { id: 'item_3', label: 'Item #3', currentRating: 3, maxRating: 5 }
        ]
      }
    })

    expect(wrapper.html()).contain('data-testid="item_1"')
    expect(wrapper.html()).contain('data-testid="item_2"')
    expect(wrapper.html()).contain('data-testid="item_3"')
  })
})
