import { defineConfig } from 'umi';
import { RouterPath } from './src/common/constants/router';
const { UMI_ENV } = process.env;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '@': './src/',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layout',
      routes: [
        { path: '/', component: '@/views/screen' },
        { path: RouterPath.setting, component: '@/pages/setting' },
      ],
    },
  ],
  fastRefresh: {},
});
