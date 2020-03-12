<template lang="pug">
    li.about-me__item
        a.about-me__link(href="#")
            h3.about-me__title {{item.title}}
            p.about-me__text.about-me__text--active {{item.text}}
            span.about-me__years {{item.year}}
</template>

<script>

export default {
    props: ['item'],
}
</script>