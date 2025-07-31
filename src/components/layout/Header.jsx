"use client";

import React from 'react';
import Link from 'next/link';

// 页面头部组件 - 包含导航和标题
const Header = () => {
  return (
    <header className="
      bg-white          /* 背景颜色 */
      shadow-sm         /* 阴影效果 */
      border-b          /* 底部边框 */
      border-gray-200   /* 边框颜色 */
      sticky           /* 粘性定位 */
      top-0            /* 顶部对齐 */
      z-50             /* 层级 */
    ">
      <div className="
        max-w-7xl       /* 最大宽度 */
        mx-auto         /* 水平居中 */
        px-4            /* 水平内边距 */
        sm:px-6         /* 小屏幕水平内边距 */
        lg:px-8         /* 大屏幕水平内边距 */
      ">
        <div className="
          flex          /* 弹性布局 */
          justify-between /* 两端对齐 */
          items-center  /* 垂直居中 */
          h-16          /* 高度 */
        ">
          {/* Logo和标题 */}
          <div className="
            flex        /* 弹性布局 */
            items-center /* 垂直居中 */
            space-x-3   /* 间距 */
          ">
            <div className="
              w-10      /* 宽度 */
              h-10      /* 高度 */
              bg-gradient-to-r /* 渐变背景 */
              from-blue-500   /* 起始颜色 */
              to-purple-600   /* 结束颜色 */
              rounded-lg      /* 圆角 */
              flex           /* 弹性布局 */
              items-center   /* 垂直居中 */
              justify-center /* 水平居中 */
            ">
              <span className="
                text-white   /* 字体颜色 */
                text-xl     /* 字体大小 */
                font-bold   /* 字体粗细 */
              ">
                🤖
              </span>
            </div>
            
            <div>
              <h1 className="
                text-xl     /* 字体大小 */
                font-bold   /* 字体粗细 */
                text-gray-900 /* 字体颜色 */
              ">
                AI工具库
              </h1>
              <p className="
                text-sm     /* 字体大小 */
                text-gray-500 /* 字体颜色 */
              ">
                发现最佳AI工具
              </p>
            </div>
          </div>

          {/* 导航菜单 */}
          <nav className="
            hidden      /* 默认隐藏 */
            md:flex     /* 中等屏幕显示 */
            items-center /* 垂直居中 */
            space-x-8   /* 间距 */
          ">
            <Link href="/" className="
              text-gray-700   /* 字体颜色 */
              hover:text-blue-600 /* 悬停时颜色 */
              transition-colors /* 颜色过渡 */
              duration-200    /* 动画时长 */
              font-medium     /* 字体粗细 */
            ">
              首页
            </Link>
            <Link href="/categories" className="
              text-gray-700   /* 字体颜色 */
              hover:text-blue-600 /* 悬停时颜色 */
              transition-colors /* 颜色过渡 */
              duration-200    /* 动画时长 */
              font-medium     /* 字体粗细 */
            ">
              分类
            </Link>
            <Link href="/popular" className="
              text-gray-700   /* 字体颜色 */
              hover:text-blue-600 /* 悬停时颜色 */
              transition-colors /* 颜色过渡 */
              duration-200    /* 动画时长 */
              font-medium     /* 字体粗细 */
            ">
              热门
            </Link>
            <Link href="/about" className="
              text-gray-700   /* 字体颜色 */
              hover:text-blue-600 /* 悬停时颜色 */
              transition-colors /* 颜色过渡 */
              duration-200    /* 动画时长 */
              font-medium     /* 字体粗细 */
            ">
              关于
            </Link>
          </nav>

          {/* 移动端菜单按钮 */}
          <div className="
            md:hidden   /* 中等屏幕隐藏 */
          ">
            <button className="
              p-2       /* 内边距 */
              text-gray-700 /* 字体颜色 */
              hover:text-blue-600 /* 悬停时颜色 */
              transition-colors /* 颜色过渡 */
              duration-200 /* 动画时长 */
            ">
              <svg className="
                w-6      /* 宽度 */
                h-6      /* 高度 */
              " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 