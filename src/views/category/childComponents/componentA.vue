<template>
  <div class="posts-tab" ref="postsTab">
    <ul>
      <li
        :class="['post-title', { active: selectedPost.title === post.title }]"
        v-for="post in posts"
        :key="post.id"
        @click="change(post)"
      >
        {{ post.title }}
      </li>
    </ul>
    <div class="selectedPost" v-if="selectedPost">
      <h3>{{ selectedPost.title }}</h3>
      <div v-html="selectedPost.content"></div>
    </div>
    <div v-else>Click on a blog title to the left to view it.</div>
  </div>
</template>

<script>
export default {
  name: "componentA",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Cat Ipsum",
          content:
            "<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>",
        },
        {
          id: 2,
          title: "Hipster Ipsum",
          content:
            "<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>",
        },
        {
          id: 3,
          title: "Cupcake Ipsum",
          content:
            "<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>",
        },
      ],
      selectedPost: null,
    };
  },
  created() {
    this.selectedPost = this.posts[0];
  },
  methods: {
    change(post) {
      this.selectedPost = post;
      // this.$refs.postsTab.style.background =
      //   "url('~assets/images/common/top.png') center center";
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: #999;
}
.post-title {
  margin-top: 5px;
}
.selectedPost {
  margin-top: 50px;
  // background: url("~assets/images/common/placeholder.png") center center;
}
.posts-tab {
  // background: url("~assets/images/common/placeholder.png") center center;
}
</style>