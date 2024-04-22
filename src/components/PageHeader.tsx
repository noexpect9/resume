
import Phone from './icons/GrommetIconsPhone'
import IconParkOutlineEditName from './icons/IconParkOutlineEditName'
import IcSharpWechat from './icons/IcSharpWechat'
import MaterialSymbolsAttachEmailSharp from './icons/MaterialSymbolsAttachEmailSharp'

type LabelType = '手机' | '微信' | '邮箱' | '姓名'

type ContactItemProps = {
  icon: JSX.Element
  label: LabelType
  value: string
}

const PageHeader = () => {
  const ContactItem = (props: ContactItemProps) => {
    const { icon, label, value } = props
    return (
      <span className="w-6/12 box-border p-2 flex">
        {icon}
        <span>{label}: {value}</span>
      </span>
    );
  };
  return <>
    <h1 className='text-2xl font-bold'>前端开发工程师</h1>
    <section className='flex flex-wrap justify-between mt-2'>
      <ContactItem icon={<IconParkOutlineEditName width={24} height={24} />} label="姓名" value={import.meta.env.VITE_NAME} />
      <ContactItem icon={<Phone width={24} height={24} />} label="手机" value={import.meta.env.VITE_PHONE} />
      <ContactItem icon={<IcSharpWechat width={24} height={24} />} label="微信" value={import.meta.env.VITE_WECHAT} />
      <ContactItem icon={<MaterialSymbolsAttachEmailSharp width={24} height={24} />} label="邮箱" value={import.meta.env.VITE_EMAIL} />
    </section>
  </>
}

export default PageHeader