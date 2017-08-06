import Vuex from 'vuex'
import Vue from 'vue'

import members from '../../index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    members: members
  }
})
