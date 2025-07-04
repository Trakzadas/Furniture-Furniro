import Logo from '../assets/img/logo.svg';
import Input from '../components/imput';
import Button from './buttom';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="w-full border-t border-[#9F9F9F] mt-20">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    {/* Logo & Address */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center space-x-2 mb-6">
                            <img src={Logo} alt="Logo" className="w-10 h-10" />
                            <h1 className="font-bold text-2xl">Funiro.</h1>
                        </div>
                        <p className="text-[#9F9F9F] max-w-xs">
                            400 University Drive Suite 200 Coral Gables,<br />
                            FL 33134 USA
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-12">
                        <ul>
                            <li className="text-[#9F9F9F] font-bold mb-4">Links</li>
                            <Link to="/home"><li className="font-bold mb-2">Home</li></Link>
                            <Link to="/shop"><li className="font-bold mb-2">Shop</li></Link>
                            <li className="font-bold mb-2">About</li>
                            <Link to="/contact"><li className="font-bold">Contact</li></Link>
                        </ul>

                        {/* Help */}
                        <ul>
                            <li className="text-[#9F9F9F] font-bold mb-4">Help</li>
                            <li className="font-bold mb-2">Payment Options</li>
                            <li className="font-bold mb-2">Returns</li>
                            <li className="font-bold">Privacy Policies</li>
                        </ul>

                        {/* Newsletter */}
                        <div>
                            <ul>
                                <li className="text-[#9F9F9F] font-bold mb-4">Newsletter</li>
                            </ul>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <Input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="border-b border-[#9F9F9F] rounded-[2px] px-2 py-1 w-full sm:w-auto  text-[#35322d]"
                                    name=""
                                    label=""
                                />
                                <Button
                                    title="SUBSCRIBE"
                                    className="border-b border-[#9F9F9F] px-4 py-1 bg-white text-black rounded-[10px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="border-t border-[#9F9F9F] mt-10 pt-6 text-center">
                    <p className="text-sm text-[#333]">© 2023 Funiro. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
