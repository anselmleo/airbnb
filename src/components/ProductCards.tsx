import ImageProps from '../interfaces/ImageProps'

const ProductCards: React.FC<ImageProps> = ({
  Image,
  ImageClasses = 'rounded-xl w-full h-full mb-3 object-cover',
  Title,
  TitleClasses,
  Owner,
  OwnerClasses = 'text-gray-500',
  Status,
  StatusClasses
}) => {
  return (
    <div className="mb-10 mr-10">
      <div className="mb-3 w-72 h-72 overflow-hidden">
        <img src={Image} alt="" className={ImageClasses} />
      </div>
      <div className={TitleClasses}>{Title}</div>
      <div className={OwnerClasses}>{Owner}</div>
      <div className={StatusClasses}>{Status}</div>
    </div>
  )
}

export default ProductCards
