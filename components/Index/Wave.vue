<template>
  <div>
    <svg width="0" height="0" viewBox="0 0 0 0" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="path">
          <path d="M287.323 80.3182C185.832 -65.1458 53.4865 19.7082 0 80.3182L0 352.38C26.4758 269.804 124.022 268.756 169.485 278.554C234.004 343.038 403.656 410.483 580.162 314.783C800.794 195.158 1023.43 452.865 1152.3 352.38C1281.57 251.58 1529.88 212.248 1608.61 352.38C1671.59 464.486 1842.44 399.091 1920 352.38V47.5069C1841.27 43.4055 1814.2 134.321 1732.46 158.929C1650.73 183.538 1354.88 -117.234 1237.04 80.3182C1119.21 277.87 916.124 171.233 837.9 80.3182C775.321 7.58611 664.403 50.0132 616.767 80.3182C549.24 140.928 388.814 225.782 287.323 80.3182Z"/>
        </clipPath>
      </defs>
    </svg>

    <canvas id="gradient" data-js-darken data-transition-in></canvas>
  </div>
</template>

<script>
import { Gradient } from '@/composables/Gradient'

export default {
  name: 'App',
  mounted () {
    const gradient = new Gradient()
    gradient.initGradient('#gradient')
  }
}
</script>

<style scoped>
#gradient {
  position: absolute;
  bottom: -300px;
  left: 0;
  right: 0;
  margin-top: 50px;
  height: 500px;
  width: 100%;
  --gradient-color-1: #cc4add;
  --gradient-color-2: #3ab8ff;
  --gradient-color-3: #3cf9f9;
  --gradient-color-4: #ffffff;
  clip-path: url('#path');
}
</style>
