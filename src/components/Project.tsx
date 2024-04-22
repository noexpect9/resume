const Project = () => {
  return (
    <>
      <h2 className="text-xl font-bold pt-5">项目经历</h2>
      <section className="mt-2 flex justify-between items-center">
        <h3 className="text-base font-bold">问卷设计器(low-code)</h3>
        <p className="text-sm">2024.01-2024.02</p>
      </section>
      <article>
        项目描述: 为用户提供一套创建、分析和处理调查问卷数据的工具。
        <div>技术栈: React18 / Redux / TypeScript / Antd</div>
        <div className="font-bold">主要贡献:</div>
        <li>封装可复用列表组件, 抽离公共逻辑封装为Hooks函数, 实现可复用, 用于快速构建问卷内容</li>
        <li>负责开发问卷表单设计器主要功能:</li>
        <div className="ml-4">
          <p>1.拆分设计器页面的组件</p>
          <p>2.头部操作栏、右侧组件库、左侧组件属性、画布主体展示区</p>
          <p>3.提供可拖拽的组件设计</p>
          <p>4.封装设计器中的基础组件, 使用Redux进行表单数据管理, 用于构建问卷内容, 支持表单组件的增删改查功 能, 支持组件自定义属性和样式</p>
        </div>
        <span className="font-bold">项目成果:</span>
        这个系统经过实践证明，在人工调查过程中，能够将所需时间缩短约50%。用户对系统的效果和效率给予了积 极的反馈。通过减少用户在数据采集上的时间消耗，用户能够将更多的精力投入到数据分析上，从而提升整体 工作效率和数据分析的质量。这个系统的引入为用户带来了明显的益处，使他们能够更好地利用时间和资源， 实现更好的数据驱动决策。
      </article>
      <section className="mt-2 flex justify-between items-center">
        <h3 className="text-base font-bold">销售管理平台</h3>
        <p className="text-sm">2023.07-2023.10</p>
      </section>
      <article>
        项目描述: 一个统一且可定制的平台，帮助企业全面管理销售过程，从潜在客户的开发到交易的闭合。它将提供准确的销售预测、客户关系管理、销售团队协作等功能，以帮助企业实现更高的销售效率、增加销售额。
        <div>技术栈: Vue3 / TypeScript / Tailwindcss / Element-Plus / Vite / Uniapp 。</div>
        <div className="font-bold">主要贡献:</div>
        <li>从 0 到 1 负责项目开发工作, 主导前端开发流程, 助力项目开发到上线</li>
        <li>采用多种方式实现权限控制，通过组件、指令和函数等方式实现菜单/按钮级别的权限控制，以保证系统安全性</li>
        <li>对业务组件封装，包括数据字典选择组件、图片上传、文件上传组件、图表组件等，以提高开发效率和代码复用性</li>
        <li>封装扩展组件，对 Element-Plus 中的 ElForm 和 ElTable 进行功能扩展, 利用配置的方式，使表单页和列表页更加便捷, 节省了25%的开发时间，并为后续项目提供了可复用的组件</li>
        <li>完成从路由懒加载到引用CDN等优化技术, 提升前端访问速度, 减少了包体积和页面加载时间</li>
        <span className="font-bold">项目成果:</span>
        平台上线一个月内，有效助力企业实现月营业额超过 50 万元
      </article>
      <section className="mt-2 flex justify-between items-center">
        <h3 className="text-base font-bold">智慧党建管理端</h3>
        <p className="text-sm">2023.10-2023.12</p>
      </section>
      <article>
        项目描述: 为党群建设提供一套智慧党建管理系统，作为乡镇党组织的关键工具，提升党组织管理效率、加强党员信息管理和党建工作监督。通过信息化手段，实现对党组织、党员和党建活动的全面管理和监控。
        <div>技术栈: Vue3 / Element-Plus / TypeScript / Sass</div>
        <div className="font-bold">主要贡献:</div>
        <li>负责系统基础信息管理数据操作功能代码编写</li>
        <li>实现大文件上传，通过利用切片上传技术，将大文件分块上传，提高文件上传效率；支持断点续传</li>
      </article>
      <section className="mt-2 flex justify-between items-center">
        <h3 className="text-base font-bold">医药ERP系统</h3>
        <p className="text-sm">2022.10-2022.12</p>
      </section>
      <article>
        <div>技术栈: Vue2 / Element-UI </div>
        <div className="font-bold">主要贡献:</div>
        <li>负责ERP系统 采购、销售、入库等进销存模块功能开发，根据设计图95%还原前端页面，完成页面的开发</li>
        <li>实现多级菜单的展开和收起功能，实现侧边栏的折叠和展开</li>
        <li>封装系统中常用的公共组件, 编写复杂的表单提交页</li>
      </article>
    </>
  )
}

export default Project