
<template>
  <li class="member-item">
    <div class="member-item__stats">
      <img class="member-item__stats__image" src="/static/media/melle-wynia.jpg" aria-hidden="true"/>
    </div>
    <p class="member-item__since-when">
      Oprichter
    </p>
    <div class="member-item__title">
      <h3 class="member-item__title__name">
        {{ member.firstName }} {{ member.tussenvoegsel }} {{ member.lastName }}
      </h3>
      <p class="member-item__title__years-of-experience">
        <span class=""></span>7+
      </p>
      <p class="member-item__title__tag">
        Freelance
      </p>
    </div>
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
  padding: 0;
  font-size: 1rem;
  border-radius: 0.2rem;
  font-family: 'Open Sans', sans-serif;
}

.member-item__since-when {
  margin: 0;
  padding: 0 2rem;
  color: #999;
}

.member-item__stats {
  position: relative;
}

.member-item__stats:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(180deg, hsla(308, 66%, 33%, 0.2), #fff);
}

.member-item__stats__image {
  display: block;
  width: 100%;
  height: auto;
  filter: grayscale(84%) brightness(162%);
}

.member-item__title {
  padding: 0 2rem;
  display: flex;
}

.member-item__title__name {
  margin: 0;
  font-weight: 400;
  font-size: 1.8rem;
}

.member-item__title__years-of-experience {
  align-self: flex-start;
  margin: 3px 5px 0 5px;
  border-bottom: 2px solid #000;
  color: #8A1C7C;
  font-weight: bold;
}

.member-item__title__tag {
  align-self: flex-start;
  margin: 3px 5px 0 0;
  padding: 0 2px;
  border: 2px solid #eee;
  border-radius: 0.3rem;
}

</style>
