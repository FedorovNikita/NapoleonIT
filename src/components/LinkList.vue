<template lang="pug">
    ul.about-me__list
        link-item(v-for="item of aboutMe" :key="item.title" :item="item")
</template>

<script>
import LinkItem from "./LinkItem.vue"

export default {
    props: ['aboutMe'],
    components: {
        linkItem: LinkItem
    }
}
</script>

<style lang="stylus">
.about-me__list
    margin 0
    padding 0
    list-style none

.about-me__item
    margin-bottom 20px
    width 100%
    text-align left
    &:first-child
        .about-me__link
            &:before
                display none
    &:last-child
        .about-me__link
            &:after
                display none

.about-me__link
    position relative
    display block
    padding 10px
    color #000000
    background-color #ffffff
    border-radius 10px
    box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.2)
    transition all 0.4s
    &:before,
    &:after
        content ''
        position absolute
        display block
        width 1px
        left -20px
        background #4e4e4e

    &:before
        top 0
        bottom 50%
        margin-bottom 10px

    &:after
        top 50%
        bottom -20px
        margin-top 10px

    &:hover
        background-color #ebebeb
        .about-me__years
            &:after
                right -20px
                box-sizing content-box
                border 5px solid #747474

    &--active
        background-color #ebebeb

.about-me__text
    display none
    padding 10px 0

    &--active
        display block

.about-me__years
    position absolute
    top 50%
    right 100%

    min-width 70px
    margin-right 30px
    
    text-align center
    transform translateY(-50%)
    &:after
        content ''
        position absolute
        width 10px
        height 10px
        top 50%
        right -15px
        
        background #353535
        border-radius 50%
        transform translateY(-50%)

    &--active
        &:after
            right -20px
            border 5px solid #747474
            box-sizing content-box

.dark
    .about-me__link
        background #392e5c
        color #ffffff

</style>