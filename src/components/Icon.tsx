import IconProps from '../interfaces/IconProps'

const Icon: React.FC<IconProps> = ({
  Icon,
  IconClasses = 'size-6 mb-2 mx-auto',
  IconText = '',
  IconTextClasses = 'text-xs'
}) => {
  return (
    <div>
      <div className="mr-10 text-gray-500 cursor-pointer">
        <Icon className={IconClasses} />
        <div className={IconTextClasses}>{IconText}</div>
      </div>
    </div>
  )
}

export default Icon
