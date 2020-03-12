<template lang='pug'>
  div#app(:class="{'dark': themeDark}")
    div.wrapper
      nav
        ul
          li
            router-link(to="/") Главная
          li
            router-link(to="/about") Обо мне
          li
            router-link(to="/portfolio") Портфолио
      main.main
        router-view
    footer.footer
      div
        label(for="theme") {{ changeThemeText() }} 
        input#theme(type="checkbox" v-model="themeDark" @click="themeDark = !themeDark")
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      themeDark: false,
    }
  },
  methods: {
    changeThemeText() {
      return this.themeDark ? 'White' : 'Dark'
    }
  }
}
</script>

<style lang="stylus">
*
  padding 0
  margin 0

body
  float: left;
  min-width: 100%;

body, html
  height 100%

ul
  list-style-type none
  padding: 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

img
  max-width 100%
  height auto

html
  box-sizing border-box

*,
*:before,
*:after
  box-sizing inherit

a
  text-decoration none

#app
  display flex
  flex-direction column
  min-height 100%
  
  padding-top 60px
  font-family Avenir, Helvetica, Arial, sans-serif
  text-align center

.wrapper
  flex 1 0 auto
  width 960px
  margin 0 auto

.main
  width 960px
  margin 0 auto
  padding 50px 20px

.footer
  flex 0 0 auto
  height 80px
  padding 20px
  background-color #2f2f2f
  color #ffffff

#theme {
  display none
}

.dark
  background #201c2b
  color #ffffff

  .footer
    background #392e5c;
  .wrapper
    nav a
      color #ffffff
  .contacts__btn,
  .contacts__phone
    color #ffffff


</style>
