import { defineConfig } from 'umi';
const { UMI_ENV } = process.env

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '@': './src/',
  },
  routes: [
    { path: '/', component: '@/views/index' },
  ],
  fastRefresh: {},
});
