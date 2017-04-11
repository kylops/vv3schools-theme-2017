<template>
<div class="container">
    <div class="tile is-ancestor" v-if="posts && posts.length">
        <div class="tile is-4 is-vertical is-parent" v-for="post of posts">
            <div class="tile is-child box">
                <p><strong>{{post.title.rendered}}</strong></p>
                <p>{{post.body}}</p>

            </div>
        </div>
      </div>
  </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    posts: [],
    errors: []
  }),

  // Fetches posts when the component is created.
  created() {
    axios.get(`/wp-json/wp/v2/posts?per_page=8`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>
