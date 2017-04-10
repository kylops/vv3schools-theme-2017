<template>
    <nav class="nav">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <a class="nav-item">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/posts">Bolg</router-link>
        <router-link class="nav-item" to="/tools">Inspiration</router-link>

        <!-- <a class="nav-item">Documentation</a> -->

        <span class="nav-item">
            <a class="button" >
                <span class="icon">
                    <i class="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
            </a>
            <a class="button is-primary">
                <span class="icon">
                    <i class="fa fa-download"></i>
                </span>
                <span>Download</span>
            </a>
        </span>
    </div>
  </nav>

</template>

<script>
export default {
}
</script>

<style lang="css">
.nav{
    background-color: #F7F7F7;
    padding: 2px;
}
</style>
