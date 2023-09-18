 import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
 const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-purple-200 text-black text-center my-4 rounded-lg p-4 flex flex-col'>
            <h2 className=' my-4 text-center'>
            <h2 className="text-7xl font-bold">{price}</h2>
            <span className='text-3xl font-semibold'>/mon</span>
            </h2>
            <h2 className='text-3xl text-red-500 font-bold'>{name}</h2>
           <div className='pl-6 flex-grow'>
           {
                features.map((feature, index) => <Feature key={index} feature={feature}> </Feature>)
            }
           </div>
            <button className='bg-green-600 p-4 font-bold w-full rounded-lg'>Buy Now</button>
        </div>
    );
};
 PriceOption.propTypes = {
    option: PropTypes.object
 }
export default PriceOption;