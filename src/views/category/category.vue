<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li>liebiao1</li>
        <li>liebiao2</li>
        <li>liebiao3</li>
        <li>liebiao4</li>
        <li>liebiao5</li>
        <li>liebiao6</li>
        <li>liebiao7</li>
        <li>liebiao8</li>
        <li>liebiao9</li>
        <li>liebiao10</li>
        <li>liebiao11</li>
        <li>liebiao12</li>
        <li>liebiao13</li>
        <li>liebiao14</li>
        <li>liebiao15</li>
        <li>liebiao16</li>
        <li>liebiao17</li>
        <li>liebiao18</li>
        <li>liebiao19</li>
        <li>liebiao20</li>
        <li>liebiao21</li>
        <li>liebiao22</li>
        <li>liebiao23</li>
        <li>liebiao24</li>
        <li>liebiao25</li>
        <li>liebiao26</li>
        <li>liebiao27</li>
        <li>liebiao28</li>
        <li>liebiao29</li>
        <li>liebiao30</li>
        <li>liebiao31</li>
        <li>liebiao32</li>
        <li>liebiao33</li>
        <li>liebiao34</li>
        <li>liebiao35</li>
        <li>liebiao36</li>
        <li>liebiao37</li>
        <li>liebiao38</li>
        <li>liebiao39</li>
        <li>liebiao40</li>
        <li>liebiao41</li>
        <li>liebiao42</li>
        <li>liebiao43</li>
        <li>liebiao44</li>
        <li>liebiao45</li>
        <li>liebiao46</li>
        <li>liebiao47</li>
        <li>liebiao48</li>
        <li>liebiao49</li>
        <li>liebiao50</li>
        <li>liebiao51</li>
        <li>liebiao52</li>
        <li>liebiao53</li>
        <li>liebiao54</li>
        <li>liebiao55</li>
        <li>liebiao56</li>
        <li>liebiao57</li>
        <li>liebiao58</li>
        <li>liebiao59</li>
        <li>liebiao60</li>
        <li>liebiao61</li>
        <li>liebiao62</li>
        <li>liebiao63</li>
        <li>liebiao64</li>
        <li>liebiao65</li>
        <li>liebiao66</li>
        <li>liebiao67</li>
        <li>liebiao68</li>
        <li>liebiao69</li>
        <li>liebiao70</li>
        <li>liebiao71</li>
        <li>liebiao72</li>
        <li>liebiao73</li>
        <li>liebiao74</li>
        <li>liebiao75</li>
        <li>liebiao76</li>
        <li>liebiao77</li>
        <li>liebiao78</li>
        <li>liebiao79</li>
        <li>liebiao80</li>
        <li>liebiao81</li>
        <li>liebiao82</li>
        <li>liebiao83</li>
        <li>liebiao84</li>
        <li>liebiao85</li>
        <li>liebiao86</li>
        <li>liebiao87</li>
        <li>liebiao88</li>
        <li>liebiao89</li>
        <li>liebiao90</li>
        <li>liebiao91</li>
        <li>liebiao92</li>
        <li>liebiao93</li>
        <li>liebiao94</li>
        <li>liebiao95</li>
        <li>liebiao96</li>
        <li>liebiao97</li>
        <li>liebiao98</li>
        <li>liebiao99</li>
        <li>liebiao100</li>
      </ul>
    </div>
    <div
      class="bgBox"
      :class="['bgBox', { bgBox1: currentTab === 'Archive' }]"
      ref="bgBox"
    >
      <div class="blankBox">
        <div
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-control', { active: currentTab === tab }]"
          @click="change(tab)"
        >
          {{ tab }}
        </div>
      </div>
      <keep-alive>
        <component :is="currentTabComponent" class="tab"> </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import posts from "./childComponents/componentA";
import Archive from "./childComponents/componentB";
import { ctrsConfig } from "components/controller/ctrConfig.js";
export default {
  components: { posts, Archive },
  data() {
    return {
      Scroll: null,
      tabs: ["posts", "Archive"],
      currentTab: "posts",
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {});
    this.scroll.on("pullingUp", () => {
      console.log("pulling");
      this.scroll.finishPullUp();
    });
  },
  computed: {
    currentTabComponent() {
      return this.currentTab.toLowerCase();
    },
  },
  methods: {
    change(tab) {
      this.currentTab = tab;
      this.$refs.bgBox.style.backgroundImage =
        "url('~assets/images/common/top.png') center center";
      console.log();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100px;
  background-color: red;
  overflow: hidden;
}
.bgBox {
  width: 100vw;
  background: url("~assets/images/common/placeholder.png") no-repeat center
    center;
}
.bgBox1 {
  background: url("~assets/images/common/top.png") no-repeat center center;
}
.blankBox {
  width: 100vw;
  // height: 100vh;
  overflow: hidden;
}
.tab-control {
  float: left;
  width: 100px;
  height: 40px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 40px;
}
.active {
  border: 1px solid red;
  background-color: #999;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>