
<template>
  <li class="member-item">
    <div class="member-item__image">
      <img class="" aria-hidden="true"/>
    </div>
    <h3 class="member-item__name">
      {{ member.firstName }} {{ member.tussenvoegsel }} {{ member.lastName }}
    </h3>
    <p class="member-item__batch">
      Oprichter
    </p>
    <ul class="member-item__contact">
      <li v-if="member.phone">
        <a :href="'tel: ' + member.phone">
          {{ member.phone }}
        </a>
      </li>
      <li v-if="'mailto:' + member.email">
        <a :href="member.email">
          Mail
        </a>
      </li>
      <li v-if="member.url">
        <a :href="member.url">
          Website
        </a>
      </li>
      <li v-if="member.github">
        <a :href="member.github">
          GitHub
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'member-item',
  props: ['member']
}
</script>

<style scoped>
.member-item {
  background: #fff;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  font-family: 'Raleway', sans-serif;
}
</style>
