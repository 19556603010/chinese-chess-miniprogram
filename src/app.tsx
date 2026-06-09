import React, { useEffect } from 'react';
import { useDidShow, useDidHide } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import './app.scss';

function App(props) {
  useEffect(() => {
    if (Taro.cloud) {
      Taro.cloud.init({
        env: 'cloud1-d4g6zpr0o9e622a48',
        traceUser: true,
      });
      console.log('云开发初始化成功');
    }
  }, []);

  useDidShow(() => {});

  useDidHide(() => {});

  return props.children;
}

export default App;