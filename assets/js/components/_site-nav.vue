<template lang="html">
    <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="">title1</a></li>
            <li class="uk-parent"><a href="">title2</a></li>
            <li><a href="">title3</a></li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    name: 'site-nav'
}
</script>

<style lang="css">
nav{
    position:fixed;
}
</style>
