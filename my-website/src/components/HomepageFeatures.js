import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '主題式學習',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Leetcode 題目這麼多，要從何寫起比較好？我們挑選了一些學習演算法與資料結構常見的主題，並且提供許多搭配的練習題目。
      </>
    ),
  },
  {
    title: '利用 Follow-Ups 加深加廣',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        要如何評估自己的學習效果？利用舉一反三的 Follow-Ups 了解每一道題目與其他題目的關聯，方能更快建立自己的知識網路！
      </>
    ),
  },
  {
    title: '刷出興趣與樂趣',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        刷題如同解謎一般，不應該是痛苦的事情！希望大家看過我們刷題指南以後，可以更快樂地體驗寫程式解題的樂趣～
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
