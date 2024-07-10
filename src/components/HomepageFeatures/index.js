import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Support for customizing template file of unit test scenario, 
        Give you control of what you can expected of generated file.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        testarossa lets you focus on your features, no matter what the unit test file will testarossa generated.
      </>
    ),
  },
  {
    title: 'Achieve your target task',
    Svg: require('@site/static/img/completed-task.svg').default,
    description: (
      <>
        No need to worry about the coverage code that your project is currently working on, 
        in a few seconds testarossa creates it instantly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
