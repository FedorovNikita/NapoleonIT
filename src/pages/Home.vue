<template lang='pug'>
    header.about-me__header
        .about-me__pict
            picture
                source(type="image/webp" srcset="../assets/photo.webp 1x, ../assets/photo@2x.webp 2x")
                img.works-item__image(src="../assets/photo.jpg" srcset="../assets/photo@2x.jpg 2x" alt="Фото")
        h2.about-me__name Nikita Fedorov
        .about-me__contacts
            ul.contacts__list
                li.contacts__item
                    a.contacts__link(href="https://vk.com/id50172231")
                        svg.social__link-icon.social__link-icon--vk(width="50" height="50")
                            use(xlink:href="../assets/svg/symbol/sprite.svg#vk")
                        | В вконтакте

                li.contacts__item
                    a.contacts__link(href="https://github.com/FedorovNikita")
                        svg.social__link-icon.social__link-icon--vk(width="50" height="50")
                            use(xlink:href="../assets/svg/symbol/sprite.svg#github")
                        | На GitHub

            a.contacts__phone(href="tel:+79193059567" v-show="isActivePhone") 8 (919) 305-95-67
            button.contacts__btn(@click="isActivePhone = !isActivePhone") {{ addPhone() }}
</template>

<script>
export default {
    data() {
        return {
            isActivePhone: false,
        }
    },
    methods: {
        addPhone() {
            return this.isActivePhone ? 'Скрыть телефон' : 'Показать телефон'
        }
    }
}
</script>

<style lang="stylus">
.about-me__header
    display flex
    margin-bottom 20px
    align-items center

.about-me__pict 
    width 100px
    img 
        border-radius 10px

.about-me__name
    margin-left 10px
    font-size 44px

.about-me__contacts
    margin-left auto

.contacts__list
    display flex
    justify-content flex-end
    margin 0
    padding 0
    list-style none

.contacts__item
    margin-right 10px

.contacts__link
    font-size 0


.contacts__phone
    font-weight bold
    color #000000
    &--active
        display inline-block

.contacts__btn
    min-width 180px
    margin-left 10px
    padding 10px
    font-size 18px
    background-color transparent
    border 2px solid #4e4e4e
    border-radius 20px
    cursor pointer
    transition all 0.4s
    &:hover
        background-color #ebebeb
</style>