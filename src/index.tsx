/*
 * @Author: taojinbo1990 taojinbo1990@qq.com
 * @Date: 2022-06-27 14:56:32
 * @LastEditors: taojinbo1990 taojinbo1990@qq.com
 * @LastEditTime: 2022-06-27 15:09:27
 * @FilePath: /jlb-datav/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import '@/style/index.less'
import Routes from './cmponents/routes';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Routes></Routes>);
