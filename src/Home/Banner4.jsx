import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { getChildrenToRender } from './utils';

class Banner4 extends React.PureComponent {
  render() {
    const { ...tagProps } = this.props;
    const { dataSource } = tagProps;
    delete tagProps.dataSource;
    delete tagProps.isMobile;
    const animType = {
      queue: 'bottom',
      one: {
        scaleY: '+=0.3',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      },
    };
    return (
      <div {...tagProps} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <QueueAnim
            key="text"
            type={animType.queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            {...dataSource.titleWrapper}
            componentProps={{
              md: dataSource.titleWrapper.md,
              xs: dataSource.titleWrapper.xs,
            }}
          >
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </QueueAnim>
          <TweenOne animation={animType.one} key="title" {...dataSource.image}>
            <img src={dataSource.image.children} width="100%" alt="img" />
          </TweenOne>
        </div>
      </div>
    );
  }
}
export default Banner4;
