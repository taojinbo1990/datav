/*
 * @Author: taojinbo1990 taojinbo1990@qq.com
 * @Date: 2022-06-27 21:28:58
 * @LastEditors: taojinbo1990 taojinbo1990@qq.com
 * @LastEditTime: 2022-06-28 11:49:50
 * @FilePath: /jlb-datav/src/pages/home/home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
export interface HomeProps {
}

const HomeWrap = styled.div`
  position: relative;
  height: 100%;
  width:100%;
  
`
const HomeWrapImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width:100%;
  z-index: -1;
  
`
const PageHeader = styled.div`
  height:80px;
  border-bottom: 1px solid #000;
`

const PageContent = styled.div`
  height: calc(100% - 80px);
  display: grid;
  grid-template-areas: 
    'number number number'
    "t1 t2 t3"
    "t4 t4 t5";
  grid-template-columns: 300fr 400fr 300fr;
  grid-template-rows: 50px 1fr 1fr;
  grid-gap: 24px;
  padding:20px;
`

const AreaBase = styled.div<{ areaName: string }>`
  grid-area: ${({ areaName }) => areaName};
  border: 1px solid hotpink;
  color:#fff;
`

const Loading = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left:0;
  width:100%;
  height:100%;
  font-size: 30px;
  color:#fff;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.2);
`
const Home: FC<HomeProps> = (HomeProps) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const imgs = document.querySelectorAll('img');
    if (!imgs) {
      setLoading(false)
      return
    }
    let imgCount = imgs.length;
    [].forEach.call(imgs, (img: HTMLImageElement, index) => {
      img.addEventListener('load', (e) => {
        imgCount--
        if(imgCount === 0){
          setLoading(false)
        }
      })
    })

  }, [])
  return (
    <HomeWrap>
      {loading && <Loading>加载中。。。。</Loading>}
      <HomeWrapImg src={require('@/assets/img/bg01.png')}></HomeWrapImg>
      <PageHeader></PageHeader>
      <PageContent>
        <AreaBase areaName='number'>numberblock</AreaBase>
        <AreaBase areaName='t1'>t1</AreaBase>
        <AreaBase areaName='t2'>t2</AreaBase>
        <AreaBase areaName='t3'>t3</AreaBase>
        <AreaBase areaName='t4'>t4</AreaBase>
        <AreaBase areaName='t5'>t5</AreaBase>
      </PageContent>
    </HomeWrap>
  );
};

export default Home;