<template>
  <div class="home">
    <!--
    Test Sven
    <h1>{{ msg }}</h1>
    -->
    <ul class="members">
      <member-item
        v-for="(member, index) of members"
        :key="index"
        :member="member"
      ></member-item>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import MemberItem from './MemberItem.vue'

export default {
  name: 'home',
  components: {
    MemberItem
  },
  data () {
    return {
      msg: 'Front Core FTW'
    }
  },
  computed: {
    // mapGetters([])
    ...mapState([
      'members'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.members {
  display: flex;
  flex-wrap: true;
  list-style: none;
}

.members > * {
  margin: 0 0 2rem 2rem;
  min-width: 26rem;
  max-width: 30rem;
}
</style>
