import footerLogo from '../../assets/logo-footer.png';
import './footer.css'

const Footer = () => {
    return (
        <div className='bg-[#06091A] pt-60 pb-8'>

            <div className='flex justify-center'>
                <img src={footerLogo} alt="" />
            </div>

            <div className='flex justify-between px-36 pt-16 pb-[72px]'>
                <div>
                    <h1 className='footer-title'>About Us</h1>
                    <p className='footer-details w-60 mt-4'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>

                <div>
                    <h1 className='footer-title'>Quick Links</h1>
                    <ul className='space-y-1 mt-4'>
                        <li className='footer-details'>Home</li>
                        <li className='footer-details'>Service</li>
                        <li className='footer-details'>About</li>
                        <li className='footer-details'>Contact</li>
                    </ul>
                </div>

                <div>
                    <h1 className='footer-title'>Subscribe</h1>
                    <p className='footer-details mt-4'>Subscribe to our newsletter for the <br /> latest updates.</p>
                    <div>
                        <input className='footer-input' type="text" placeholder='Enter Your email' />
                        <button className=' footer-button bg-orange-400 mt-5'>Subscribe</button>
                    </div>
                </div>

            </div>
            <hr className='text-slate-600' />
            <div className='text-center mt-8'>
                <p className='footer-details'>@2025 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;