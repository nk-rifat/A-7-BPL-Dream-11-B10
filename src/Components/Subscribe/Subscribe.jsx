import './Subscribe.css';
const Subscribe = () => {
    return (
        <div className='absolute right-[315px] top-[3360px]'>
            <div className='border'>
                <div className="background-img bg-white py-[88px] space-y-6">
                    <h1 className='title'>Subscribe to our Newsletter</h1>
                    <p className='details'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex flex-row justify-center items-center space-x-3'>
                        <input className='input' type="text" placeholder='Enter Your email'/>
                        <button className='button  bg-orange-400'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;