<template>
  <div class="tw-pt-5">
    <div v-for="item in comments" :key="item.id" class="tw-mb-4">
      <div
        class="tw-p-4 tw-flex tw-rounded-lg tw-transition tw-duration-200 hover:tw-bg-gray-50"
        :class="item.id === 0 ? ' solution' : ''"
      >
        <div class="avatar"></div>
        <div>
          <div class="tw-pl-4 tw-w-full">
            <div class="tw-flex tw-items-center tw-justify-between">
              <div class="tw-flex tw-items-center">
                <a-popover :mouseEnterDelay="0.5" placement="bottom">
                  <template slot="content">
                    <div class="popover-section">
                      <nuxt-link to="/user/12332" class="name tw-block tw-mb-2 tw-text-gray-600">Hasan Muzak</nuxt-link>
                      <div class="tw-flex tw-items-center tw-justify-between" style="padding-left:2px;">
                        <div class="tw-flex tw-items-center">
                          <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M2.5 12.399l.37-.336-.006-.007-.007-.007-.357.35zm1 1.101v.5H4v-.5h-.5zm3.5.982l.018-.5-.053 1 .035-.5zM7.5 7.5H7a.5.5 0 00.146.354L7.5 7.5zm6.5 0A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM2.857 12.049A6.477 6.477 0 011 7.5H0c0 2.043.818 3.897 2.143 5.249l.714-.7zm-.727.686l1 1.101.74-.672-1-1.101-.74.672zM7.5 14a6.62 6.62 0 01-.465-.016l-.07.997c.177.013.355.019.535.019v-1zm.018 0l-.5-.017-.036 1 .5.017.036-1zM7 3v4.5h1V3H7zm.146 4.854l3 3 .708-.708-3-3-.708.708zM0 14h3.5v-1H0v1zm4-.5V10H3v3.5h1z" fill="currentColor"></path></svg>
                          <span class="tw-font-semibold f-11 tw-pl-2">
                            12 minutes ago
                          </span>
                        </div>
                        <div class="tw-flex tw-items-center">
                        
                          <span class="tw-font-semibold f-11 tw-pr-2">
                          Üyelik Tarihi : Ekim 12, 2021
                          </span>
                          <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M3.5 0v5m8-5v5m-10-2.5h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z" stroke="currentColor"></path></svg>
                        </div>
                      </div>
                      <a-divider style="margin-bottom:12px;margin-top:12px;"></a-divider>
                      <div class="f-12 light-text">
                        <div class="tw-flex tw-items-center">
                          <span class="tw-flex tw-pr-2">
                            <svg
                              height="18"
                              viewBox="0 0 21 21"
                              width="18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                fill="none"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                transform="translate(4 2)"
                              >
                                <path
                                  d="m6.5 16.5407715.6311176-.7118691c.71585099-.8191184 1.36011688-1.5983525 1.93279767-2.3377022l.4733382-.6239608c1.97516433-2.6615039 2.96274653-4.77276704 2.96274653-6.33378943 0-3.33218241-2.6862915-6.03344997-6-6.03344997s-6 2.70126756-6 6.03344997c0 1.56102239.98758218 3.67228553 2.96274653 6.33378943l.4733382.6239608c.73630387.9505925 1.5909423 1.9671163 2.56391527 3.0495713z"
                                />
                                <circle cx="6.5" cy="6.5" r="2.5" />
                              </g>
                            </svg>
                          </span>
                          <span> Bursa, Turkey </span>
                        </div>
                        <div class="tw-flex tw-items-center tw-pt-2">
                          <span class="tw-flex tw-pr-2">
                            <svg height="18" viewBox="0 0 21 21" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><path d="m14 1c.8284271.82842712.8284271 2.17157288 0 3l-9.5 9.5-4 1 1-3.9436508 9.5038371-9.55252193c.7829896-.78700064 2.0312313-.82943964 2.864366-.12506788z"/><path d="m12.5 3.5 1 1"/></g></svg>
                          </span>
                          <span> Computer Scientist </span>
                        </div>
                        <div class="tw-flex tw-items-center tw-pt-2 tw-text-yellow-600">
                          <span class="tw-flex tw-pr-2">
                           <svg height="18" viewBox="0 0 21 21" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><path d="m4.5.5h6c.5522847 0 1 .44771525 1 1v5c0 2.209139-1.790861 4-4 4s-4-1.790861-4-4v-5c0-.55228475.44771525-1 1-1z"/><path d="m7.5 10.5v3"/><path d="m4.5 13.5h6c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-6c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm7-11h2c.5522847 0 1 .44771525 1 1v1c0 1.1045695-.8954305 2-2 2h-1zm-8 0h-2c-.55228475 0-1 .44771525-1 1v1c0 1.1045695.8954305 2 2 2h1z"/></g></svg>
                          </span>
                          <span> 13.3k </span>
                        </div>
                      </div>
                      <div class="tw-mt-2 f-12">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ab nemo temporibus minus debitis, ipsam blanditiis eum beatae quo ullam suscipit, hic delectus aut soluta ipsum dignissimos dicta dolore. Saepe!
                      </div>
                    </div>
                  </template>
                  <span
                    class="tw-font-semibold username hover:tw-underline tw-cursor-pointer"
                    >@oxibital</span
                  >
                </a-popover>
                <span class="tw-px-2 tw-flex">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>asked <b>3h</b> ago.</span>
              </div>
              <a-tag color="green" v-if="item.id === 0">
                <div class="tw-flex tw-items-center tw-text-green-600 f-12">
                  <span class="tw-flex tw-mr-1">
                    <svg
                      height="24"
                      viewBox="0 0 21 21"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m.5 5.5 3 3 8.028-8"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        transform="translate(5 6)"
                      />
                    </svg>
                  </span>
                  <span class="tw-font-semibold"> Solution </span>
                </div>
              </a-tag>
            </div>
            <div>
              <div class="tw-pt-2">
                <div class="dark-text f-15">
                  {{ item.message }}
                </div>
                <div class="tw-pt-2">
                  <pre
                    v-highlightjs="sourcecode"
                  ><code class="javascript"></code></pre>
                </div>
                <div class="dark-text f-15">I appreciate your help.</div>
              </div>
            </div>
            <div class="tw-flex tw-items-center tw-pt-4 tw-justify-between">
              <div class="tw-flex tw-items-center">
                <div class="tw-flex tw-items-center">
                  <svg
                    height="24"
                    viewBox="0 0 21 21"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      transform="translate(2 3)"
                    >
                      <path
                        d="m11.6427217 13.7567397-3.14377399-1.2567396h-4v-7.00000002h2l2.80105246-5.5c.57989907 0 1.07487363.2050252 1.48492373.61507546.4100508.41005058.6150761.90502516.6150755 1.48492425l-.8999994 2.40000029 4.0310597 1.34368655c.9979872.33266243 1.5591794 1.37584131 1.3086286 2.37964122l-.0684258.21997226-1.5536355 4.14302809c-.3878403 1.0342407-1.5406646 1.5582517-2.5749053 1.1704115z"
                      />
                      <path
                        d="m1.5 4.5h2c.55228475 0 1 .44771525 1 1v8c0 .5522847-.44771525 1-1 1h-2c-.55228475 0-1-.4477153-1-1v-8c0-.55228475.44771525-1 1-1z"
                      />
                    </g>
                  </svg>
                  <span
                    class="tw-transition tw-duration-200 hover:tw-underline tw-cursor-pointer tw-pl-1 tw-font-semibold f-12"
                  >
                    14
                  </span>
                </div>
              </div>
              <div class="tw-flex tw-items-center">
                <div class="tw-pr-4">
                  <span
                    class="f-12 tw-cursor-pointer hover:tw-underline tw-transition tw-duration-200 light-text light-text-hover"
                  >
                    Report
                  </span>
                </div>
                <span class="tw-font-semibold f-12"> Reply </span>
                <span class="tw-pl-1 tw-flex">
                  <svg
                    height="24"
                    viewBox="0 0 21 21"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      transform="translate(3.5 6.5)"
                    >
                      <path d="m14 8v-2c0-1.65685425-1.3431458-3-3-3h-8" />
                      <path d="m3 6-3.001-3 3.001-3" />
                      <path d="m6 6-3.001-3 3.001-3" />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          id: 0,
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, exercitationem! Autem quasi quidem suscipit, enim, reiciendis voluptates aliquam tempore non vel sequi labore ut quibusdam dolores beatae libero voluptatem minus.`,
        },
        {
          id: 1,
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, exercitationem! Autem quasi quidem suscipit, enim, reiciendis voluptates aliquam tempore non vel sequi labore ut quibusdam dolores beatae libero voluptatem minus.`,
        },
        {
          id: 2,
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, exercitationem! Autem quasi quidem suscipit, enim, reiciendis voluptates aliquam tempore non vel sequi labore ut quibusdam dolores beatae libero voluptatem minus.`,
        },
        {
          id: 3,
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, exercitationem! Autem quasi quidem suscipit, enim, reiciendis voluptates aliquam tempore non vel sequi labore ut quibusdam dolores beatae libero voluptatem minus.`,
        },
      ],
      sourcecode: `// Import Vue and vue-highlgihtjs
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/default.css' // or other highlight.js theme

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)`,
    };
  },
};
</script>

<style scoped lang="less">
.avatar {
  min-width: 60px;
  min-height: 60px;
  max-height: 60px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("http://1.bp.blogspot.com/-YHr1XjKzDjU/UUWGfJBUBSI/AAAAAAAAA3g/8MLXNhq27bU/s1600/one+piece+gold+d+roger+3.jpg");
  border-radius: 50%;
}
.solution {
  border-color: #aeeec2;
}

.popover-section {
  max-width: 295px;
  .name {
    font-size: 20px;
  }
}
</style>
