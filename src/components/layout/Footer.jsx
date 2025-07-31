"use client";

import React from 'react';

// 页面底部组件 - 包含版权信息和链接
const Footer = () => {
  return (
    <footer className="
      bg-gray-50        /* 背景颜色 */
      border-t          /* 顶部边框 */
      border-gray-200   /* 边框颜色 */
      mt-16            /* 顶部外边距 */
    ">
      <div className="
        max-w-7xl       /* 最大宽度 */
        mx-auto         /* 水平居中 */
        px-4            /* 水平内边距 */
        sm:px-6         /* 小屏幕水平内边距 */
        lg:px-8         /* 大屏幕水平内边距 */
        py-12           /* 垂直内边距 */
      ">
        <div className="
          grid          /* 网格布局 */
          grid-cols-1   /* 单列 */
          md:grid-cols-4 /* 中等屏幕四列 */
          gap-8         /* 间距 */
        ">
          {/* 品牌信息 */}
          <div className="
            col-span-1   /* 跨列数 */
            md:col-span-2 /* 中等屏幕跨列数 */
          ">
            <div className="
              flex      /* 弹性布局 */
              items-center /* 垂直居中 */
              space-x-3 /* 间距 */
              mb-4      /* 底部外边距 */
            ">
              <div className="
                w-8      /* 宽度 */
                h-8      /* 高度 */
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
                  text-sm     /* 字体大小 */
                  font-bold   /* 字体粗细 */
                ">
                  🤖
                </span>
              </div>
              <span className="
                text-lg     /* 字体大小 */
                font-bold   /* 字体粗细 */
                text-gray-900 /* 字体颜色 */
              ">
                AI工具库
              </span>
            </div>
            <p className="
              text-gray-600   /* 字体颜色 */
              text-sm         /* 字体大小 */
              leading-relaxed /* 行高 */
              max-w-md        /* 最大宽度 */
            ">
              发现和探索最优秀的AI工具，帮助您提高工作效率，创造更多价值。
              我们致力于为用户提供最新、最实用的AI工具推荐。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="
              text-sm     /* 字体大小 */
              font-semibold /* 字体粗细 */
              text-gray-900 /* 字体颜色 */
              uppercase   /* 大写 */
              tracking-wider /* 字母间距 */
              mb-4        /* 底部外边距 */
            ">
              快速链接
            </h3>
            <ul className="
              space-y-2   /* 间距 */
            ">
              <li>
                <a href="#" className="
                  text-gray-600   /* 字体颜色 */
                  hover:text-blue-600 /* 悬停时颜色 */
                  transition-colors /* 颜色过渡 */
                  duration-200    /* 动画时长 */
                  text-sm         /* 字体大小 */
                ">
                  首页
                </a>
              </li>
              <li>
                <a href="#" className="
                  text-gray-600   /* 字体颜色 */
                  hover:text-blue-600 /* 悬停时颜色 */
                  transition-colors /* 颜色过渡 */
                  duration-200    /* 动画时长 */
                  text-sm         /* 字体大小 */
                ">
                  工具分类
                </a>
              </li>
              <li>
                <a href="#" className="
                  text-gray-600   /* 字体颜色 */
                  hover:text-blue-600 /* 悬停时颜色 */
                  transition-colors /* 颜色过渡 */
                  duration-200    /* 动画时长 */
                  text-sm         /* 字体大小 */
                ">
                  热门工具
                </a>
              </li>
              <li>
                <a href="#" className="
                  text-gray-600   /* 字体颜色 */
                  hover:text-blue-600 /* 悬停时颜色 */
                  transition-colors /* 颜色过渡 */
                  duration-200    /* 动画时长 */
                  text-sm         /* 字体大小 */
                ">
                  关于我们
                </a>
              </li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="
              text-sm     /* 字体大小 */
              font-semibold /* 字体粗细 */
              text-gray-900 /* 字体颜色 */
              uppercase   /* 大写 */
              tracking-wider /* 字母间距 */
              mb-4        /* 底部外边距 */
            ">
              联系我们
            </h3>
            <ul className="
              space-y-2   /* 间距 */
            ">
              <li>
                <a href="#" className="
                  text-gray-600   /* 字体颜色 */
                  hover:text-blue-600 /* 悬停时颜色 */
                  transition-colors /* 颜色过渡 */
                  duration-200    /* 动画时长 */
                  text-sm         /* 字体大小 */
                ">
                  意见反馈
                </a>
              </li>
              <li>
                <a href="#" className="
                  text-gray-600   /* 字体颜色 */
                  hover:text-blue-600 /* 悬停时颜色 */
                  transition-colors /* 颜色过渡 */
                  duration-200    /* 动画时长 */
                  text-sm         /* 字体大小 */
                ">
                  提交工具
                </a>
              </li>
              <li>
                <a href="#" className="
                  text-gray-600   /* 字体颜色 */
                  hover:text-blue-600 /* 悬停时颜色 */
                  transition-colors /* 颜色过渡 */
                  duration-200    /* 动画时长 */
                  text-sm         /* 字体大小 */
                ">
                  合作伙伴
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="
          border-t      /* 顶部边框 */
          border-gray-200 /* 边框颜色 */
          mt-8          /* 顶部外边距 */
          pt-8          /* 顶部内边距 */
          flex          /* 弹性布局 */
          flex-col      /* 垂直排列 */
          md:flex-row   /* 中等屏幕水平排列 */
          justify-between /* 两端对齐 */
          items-center  /* 垂直居中 */
          space-y-4     /* 间距 */
          md:space-y-0  /* 中等屏幕无间距 */
        ">
          <p className="
            text-gray-500   /* 字体颜色 */
            text-sm         /* 字体大小 */
          ">
            © 2024 AI工具库. 保留所有权利.
          </p>
          
          <div className="
            flex          /* 弹性布局 */
            space-x-6     /* 间距 */
          ">
            <a href="#" className="
              text-gray-400   /* 字体颜色 */
              hover:text-gray-600 /* 悬停时颜色 */
              transition-colors /* 颜色过渡 */
              duration-200    /* 动画时长 */
            ">
              <span className="sr-only">隐私政策</span>
              <svg className="
                w-5      /* 宽度 */
                h-5      /* 高度 */
              " fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="
              text-gray-400   /* 字体颜色 */
              hover:text-gray-600 /* 悬停时颜色 */
              transition-colors /* 颜色过渡 */
              duration-200    /* 动画时长 */
            ">
              <span className="sr-only">服务条款</span>
              <svg className="
                w-5      /* 宽度 */
                h-5      /* 高度 */
              " fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 