<template>
  <div class="question-body-section tw-p-4 tw-border-b">
    <div class="tw-flex">
      <div class="avatar"></div>
      <div class="tw-pl-4 tw-w-full">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-flex tw-items-center">
            <span class="tw-font-semibold username">@oxibital</span>
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
          <a-tooltip placement="bottom">
            <template slot="title"> Go edit history </template>
            <div
              class="tw-cursor-pointer tw-flex tw-items-center light-text light-text-hover f-12"
            >
              <span class=""> Edited </span>
            </div>
          </a-tooltip>
        </div>
        <div>
          <h1 class="tw-m-0 tw-pt-2 question-title">
            How to calculate sums and multiplications in a django formset
            without using javascript?
          </h1>
          <div class="tw-pt-4">
            <div class="alert alert-success tw-px-6 tw-py-4 tw-cursor-pointer">
              <svg
                height="32"
                viewBox="0 0 21 21"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(2 2)"
                >
                  <path
                    d="m12.8571123 1.79063546c-3.70547974-2.40636667-8.66011018-1.35322746-11.06647684 2.35225226-2.40636667 3.70547972-1.35322746 8.66011018 2.35225226 11.06647678 1.40713892.9138067 2.9944136 1.3287299 4.55387082 1.2889715 2.54712886-.0649393 5.02004606-1.3428829 6.51260596-3.6412237 1.5774991-2.4291355 1.6682799-5.39509184.4997393-7.82805117"
                  />
                  <path d="m4.5 7.5 3 3 8-8" />
                </g>
              </svg>
              <div class="tw-pl-4">
                <div class="alert-title">Solved</div>
                <p class="tw-m-0">
                  This question is solved by
                  <span class="tw-font-semibold">@riobolital</span>
                </p>
              </div>
            </div>
          </div>
          <div class="tw-pt-4">
            <div class="dark-text f-15">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              alias accusantium itaque temporibus repudiandae dolor ipsam,
              consequuntur, perspiciatis dignissimos laborum dicta molestiae
              placeat maxime. Facere officia pariatur harum esse ipsam? <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae obcaecati minima sequi blanditiis dolor adipisci labore,
              exercitationem ipsam enim totam voluptatibus eaque temporibus
              quasi quis saepe vero necessitatibus. Est, maiores.
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
            <div class="tw-flex tw-items-center tw-pl-4">
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
                  transform="translate(2 5)"
                >
                  <path
                    d="m8.5 11c3.1296136 0 5.9629469-1.83333333 8.5-5.5-2.5370531-3.66666667-5.3703864-5.5-8.5-5.5-3.12961358 0-5.96294692 1.83333333-8.5 5.5 2.53705308 3.66666667 5.37038642 5.5 8.5 5.5z"
                  />
                  <path
                    d="m8.5 2c.18463928 0 .36593924.01429736.54285316.04184538-.02850842.148891-.04285316.30184762-.04285316.45815462 0 1.38071187 1.1192881 2.5 2.5 2.5.156307 0 .3092636-.01434474.4576252-.04178957.0280774.17585033.0423748.35715029.0423748.54178957 0 1.93299662-1.5670034 3.5-3.5 3.5-1.93299662 0-3.5-1.56700338-3.5-3.5s1.56700338-3.5 3.5-3.5z"
                  />
                </g>
              </svg>
              <span
                class="tw-transition tw-duration-200 tw-pl-1 tw-font-semibold f-12"
              >
                14.3k
              </span>
            </div>
          </div>

          <a-tooltip placement="rightBottom">
            <template slot="title">
              <span>You must have 50 repulation to comment.</span>
            </template>
            <div class="tw-flex tw-items-center tw-text-gray-500 tw-cursor-not-allowed">
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
          </a-tooltip>
        </div>
      </div>
    </div>
    <div class="tw-pt-5">
      <div class="tw-text-right">
        <span
          class="f-12 tw-mr-2 tw-cursor-pointer hover:tw-underline tw-transition tw-duration-200 light-text light-text-hover"
        >
          Edit
        </span>
        <span
          class="f-12 tw-mr-2 tw-cursor-pointer hover:tw-underline tw-transition tw-duration-200 light-text light-text-hover"
        >
          Share
        </span>
        <span
          class="f-12 tw-mr-2 tw-cursor-pointer hover:tw-underline tw-transition tw-duration-200 light-text light-text-hover"
        >
          Follow
        </span>
        <span
          class="f-12 tw-cursor-pointer hover:tw-underline tw-transition tw-duration-200 light-text light-text-hover"
        >
          Report
        </span>
      </div>
    </div>

    <SubComments />
  </div>
</template>

<script>
import SubComments from "./SubComments.vue";

export default {
  data() {
    return {
      sourcecode: `// Import Vue and vue-highlgihtjs
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/default.css' // or other highlight.js theme

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)`,
    };
  },
  components: {
    SubComments,
  },
};
</script>

<style scoped lang="less">
.question-body-section {
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
  .username {
    font-size: 14px;
    color: #111;
  }
  .question-title {
    font-size: 32px;
    font-weight: 700;
  }

  code {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
}
</style>
