import tagArr from '@/static/tagArr.json'

export const state = () => ({
  tagArr: []
})

export const getters = {
  getTagArr (state) {
    return state.tagArr
  }
}

export const mutations = {
  setTagArr (state, data) {
    state.tagArr = data
  }
}

export const actions = {
  loadTagArr ({ commit }) {
    const arr = [
      {
        text: '5',
        icon: 'star-outline'
      },
      {
        text: 'Обзорная'
      },
      {
        text: 'На автобусе',
        icon: 'bus'
      },
      {
        text: '25 марта'
      },
      {
        text: '6 часов',
        icon: 'clock-time-three-outline'
      },
      {
        text: 'Популярная'
      }
    ]
    if (Array.isArray(arr)) {
      commit('setTagArr', arr)
    } else {
      return new Error('Передан не массив тегов')
    }
  }
}
