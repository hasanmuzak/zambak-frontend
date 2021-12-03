<template>
  <div class="tw-bg-white">
    <div>
      <div class="tw-mb-4">
          <a-button class="tw-w-full" type="primary"> Ask Question </a-button>
      </div>
      <a-menu mode="inline" :default-selected-keys="['1']" style="width: 100%">
        <a-menu-item key="1">
          <div class="tw-flex tw-items-center">
            <span class="tw-flex tw-items-center" style="width: 38px">
              <svg
                height="21"
                viewBox="0 0 21 21"
                width="21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(1 1)"
                >
                  <path d="m.5 9.5 9-9 9 9" />
                  <path
                    d="m2.5 10.5v4c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4"
                  />
                </g>
              </svg>
            </span>
            <span> Home </span>
          </div>
        </a-menu-item>
        <a-menu-item key="2">
          <nuxt-link to="/friends">
          <div class="tw-flex tw-items-center">
 <span class="tw-flex tw-items-center" style="width: 38px">
              <svg
                height="21"
                viewBox="0 0 21 21"
                width="21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(1 2)"
                >
                  <path
                    d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z"
                  />
                  <path
                    d="m11.5199327.67783074c1.1547685.41741154 1.9800673 1.52341097 1.9800673 2.82216926v1c0 1.29707884-.8475766 2.5813505-2 3 .6742649-.91876977 1.0109204-2.0857069 1.0099664-3.50081137s-.3309652-2.52222377-.9900337-3.32135789zm4.9800673 14.82216926h1c.5522847 0 1-.4477153 1-1 0-.2427251 0-.4854502 0-.7281753 0-2.1698712-1.7094418-3.82917861-3.8465775-4.66705336 0 0 2.8465775 2.39522866 1.8465775 6.39522866z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </span>
            <span> Friends </span>
          </div>
           
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="3">
          <div class="tw-flex tw-items-center">
            <span class="tw-flex tw-items-center" style="width: 38px">
              <svg
                height="21"
                viewBox="0 0 21 21"
                width="21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(1 1)"
                >
                  <path
                    d="m8.5 4.5c-1.65685425 0-3 1.34314575-3 3v5c0 1.6568542 1.34314575 3 3 3l2.468-.001 1.7152977 2.4298518c.1639804.2320786.4176379.3818336.6960544.4156462l.1206479.0072945c.5128358 0 .9355072-.3860402.9932723-.8833789l.0067277-.1166211.001-1.8527925.999.001c1.6568542 0 3-1.3431458 3-3v-5c0-1.65685425-1.3431458-3-3-3z"
                  />
                  <path
                    d="m5.5 12.5-2 2v-4h-.90625561c-1.09544195 0-1.98704628-.88123276-1.9998631-1.97659973l-.07020561-6c-.01292361-1.10449389.87196894-2.01033976 1.97646283-2.02326337.00779976-.00009127.01559998-.0001369.02340027-.0001369h8.97646122c1.1045695 0 2 .8954305 2 2v2"
                  />
                </g>
              </svg>
            </span>
            <span> Messages </span>
          </div>
        </a-menu-item>
        <a-menu-item key="4">
          <div class="tw-flex tw-items-center">
            <span class="tw-flex tw-items-center" style="width: 38px">
              <svg
                height="21"
                viewBox="0 0 21 21"
                width="21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m13.5 5.5-2 10" />
                  <path d="m9.5 5.5-2 10" />
                  <path d="m6.5 8.5h9" />
                  <path d="m5.5 12.5h9" />
                </g>
              </svg>
            </span>
            <span> Discover </span>
          </div>
        </a-menu-item>
        <a-menu-item key="5">
          <div class="tw-flex tw-items-center">
            <span class="tw-flex tw-items-center" style="width: 38px">
              <svg
                height="21"
                viewBox="0 0 21 21"
                width="21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
                  <path
                    d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="m.5 4.5h16"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g fill="currentColor">
                    <circle cx="8.5" cy="8.5" r="1" />
                    <circle cx="4.5" cy="8.5" r="1" />
                    <circle cx="12.5" cy="8.5" r="1" />
                    <circle cx="8.5" cy="12.5" r="1" />
                    <circle cx="4.5" cy="12.5" r="1" />
                    <circle cx="12.5" cy="12.5" r="1" />
                  </g>
                </g>
              </svg>
            </span>
            <span> Events </span>
          </div>
        </a-menu-item>
        <a-menu-item key="6">
          <div class="tw-flex tw-items-center">
            <span class="tw-flex tw-items-center" style="width: 38px">
              <svg
                height="21"
                viewBox="0 0 21 21"
                width="21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m7.24264069 2.24264069c.5-2.5 4.34314571-2.65685425 6.00000001-1 1.6034073 1.60340734 1.4999617 4.3343931 0 6l-6.00000001 6.00000001-6-6.00000001c-1.65685425-1.65685425-1.65685425-4.34314575 0-6 1.54996042-1.54996043 5.5-1.5 6 1z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(3.257 4.257)"
                />
              </svg>
            </span>
            <span> Favourites </span>
          </div>
        </a-menu-item>
        <a-menu-item key="7">
          <div class="tw-flex tw-items-center">
            <span class="tw-flex tw-items-center" style="width: 38px">
              <svg
                height="21"
                viewBox="0 0 21 21"
                width="21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1.5.5h6c.55228475 0 1 .44771525 1 1v12l-4-4-4 4v-12c0-.55228475.44771525-1 1-1z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(6 4)"
                />
              </svg>
            </span>
            <span> Saved </span>
          </div>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
/deep/ .ant-menu-inline{
    border-right: 0 !important;
}
/deep/ .ant-menu-item {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

</style>
