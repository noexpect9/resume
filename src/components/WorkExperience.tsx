const WorkExperience = () => {

  return (
    <>
      <h2 className="text-xl font-bold pt-5">工作经历</h2>
      <section className="mt-2 flex justify-between items-center">
        <h3 className="text-base font-bold">{import.meta.env.VITE_WORK1}</h3>
        <h4 className="text-base font-bold">前端开发工程师</h4>
        <p className="text-sm">2023.02-2024.03</p>
      </section>
      <article>
        <li>担任前端开发团队的主力成员，负责公司多个核心产品的开发和维护，积累了丰富的开发经验</li>
        <li>具备故障排除和调试的能力，能够分析和修复前端代码中的问题</li>
        <li>指导和培训实习生，帮助他们快速成长</li>
      </article>

      <section className="mt-2 flex justify-between items-center">
        <h3 className="text-base font-bold">{import.meta.env.VITE_WORK2}</h3>
        <h4 className="text-base font-bold">前端开发工程师</h4>
        <p className="text-sm">2021.02-2023.01</p>
      </section>
      <article>
        <li>参与研发公司ERP项目的前端开发工作, 负责前端页面的开发</li>
        <li>与设计团队、产品经理和后端开发人员紧密合作，与设计师合作将 UI/UX 设计转换为功能性前端组件</li>
      </article>
    </>
  )
}

export default WorkExperience