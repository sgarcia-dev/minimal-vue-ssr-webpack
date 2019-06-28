import Vue from 'vue';
import { createApp } from './main.js';

export default context => new Promise((resolve, reject) => {
  const { app } = createApp(context);
  resolve(app);
});
