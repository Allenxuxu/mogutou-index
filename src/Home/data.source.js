import React from 'react';
export const Nav01DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'http://pr4mi6im8.bkt.clouddn.com/logo.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '蘑菇头', href: '' } },
      {
        name: 'item1',
        a: {
          children: '注册',
          href: 'https://a.mogutou.xyz/register',
          target: '_black',
        },
      },
      {
        name: 'item2',
        a: {
          children: '登录',
          href: 'https://a.mogutou.xyz/login',
          target: '_black',
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner41DataSource = {
  wrapper: { className: 'home-page-wrapper banner4' },
  page: { className: 'home-page banner4-page' },
  titleWrapper: {
    className: 'banner4-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>蘑菇头 进存销 管理系统</p>
          </>
        ),
        className: 'banner4-title',
      },
      {
        name: 'content',
        className: 'banner4-content',
        children: (
          <>
            <p>专为中小商铺打造</p>
          </>
        ),
      },
      {
        name: 'button',
        children: {
          href: 'https://a.mogutou.xyz/login',
          type: 'primary',
          children: '开始使用',
          target: '_blank',
        },
      },
    ],
  },
  image: {
    className: 'banner4-image',
    children: 'http://pr4mi6im8.bkt.clouddn.com/kucun.png',
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>功能与服务</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>专为中小商铺打造 简单 快捷 高效</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>财务报表</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  自动生成财务报表，实时查看，营业额，利润，订单量一网打尽。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>采购/销售订单</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  采购订单、销售订单随时创建，随时查看。支持导出excel表格下载。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>商品管理</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>商品随时添加，随时修改。实时库存查看，缺货自动报警提示。</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>无需下载安装</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>浏览器登录使用，无需下载安装。手机，平板，PC页面自适应。</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>无限员工账号</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  员工账号无限制，每个店员一个账号。普通员工账号，无法看看财务报表，商品进价等敏感信息。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>云端存储</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>所有数据，云端存储，冗余备份。无需担心，用完即走。</p>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>定价 | 咨询</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: 'http://pr4mi6im8.bkt.clouddn.com/ogutou%20%283%29.png',
            },
            {
              name: 'title',
              className: 'teams1-title jvdq8s57blo-editor_css',
              children: (
                <>
                  <p>注册 免费使用3个月</p>
                </>
              ),
            },
            {
              name: 'title~jvdqz83o48',
              className: '',
              children: (
                <>
                  <p>员工数量不限</p>
                </>
              ),
            },
            {
              name: 'title~jvdr1trotgl',
              className: '',
              children: (
                <>
                  <p>¥49/月</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image jvdraznhjw-editor_css',
              children: 'http://pr4mi6im8.bkt.clouddn.com/wx.jpeg',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: 'http://pr4mi6im8.bkt.clouddn.com/qq.jpg',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <>
                  <p>咨询QQ</p>
                </>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <>
                  <p>如有疑问，可以添加qq咨询</p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <>
            <p>不想注册，想先使用试试？</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <>
            <p>体验账号</p>
            <p>账号： 15815815866</p>
            <p>密码：15815815866</p>
          </>
        ),
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: {
      a: {
        className: 'button',
        href: 'https://a.mogutou.xyz/login',
        children: (
          <>
            <p>登录</p>
          </>
        ),
        target: '_blank',
      },
    },
  },
};
