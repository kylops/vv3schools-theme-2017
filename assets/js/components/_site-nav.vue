<template lang="html">
    <nav class="uk-navbar-container uk-navbar" uk-navbar uk-sticky>
      <div class="uk-navbar-left uk-visible@s">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#">
              <span uk-icon="icon: nut; ratio: 3"></span>
            </a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
           <li class="active"><a href="#">Home</a></li>
           <li><a href="#">About</a>
             <div uk-dropdown>
               <ul class="uk-nav uk-navbar-dropdown-nav">
                 <li><a href="#">Contact</a></li>
                 <li><a href="#">Call</a></li>
                 <li><a href="#">Location</a></li>
               </ul>
             </div>
           </li>
           <li><a href="#">Blog</a></li>
           <li><a href="#">
           <div>
              <form class="uk-search uk-search-default">
                <span uk-search-icon></span>
                <input class="uk-search-input" type="search" placeholder="Search...">
              </form>
           </div>
           </a></li>
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
