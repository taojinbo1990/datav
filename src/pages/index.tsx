/*
 * @Author: taojinbo1990 taojinbo1990@qq.com
 * @Date: 2022-06-27 21:55:26
 * @LastEditors: taojinbo1990 taojinbo1990@qq.com
 * @LastEditTime: 2022-06-28 11:23:17
 * @FilePath: /jlb-datav/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
export interface PagesProps {
}

const PagesWrap = styled.div`
  width:100vw;
  height:100vh;
  /* background-color: gainsboro; */
`
const Pages: FC<PagesProps> = () => {
  return (
    <PagesWrap>
      <Outlet></Outlet>
    </PagesWrap>
  );
};

export default Pages;