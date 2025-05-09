import React from 'react';
import DiscordWidget from '../components/DiscordWidget';

const Support = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        {/* Support Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Need help with our products? Contact our support team or join our Discord community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Support Options */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Can We Help?</h2>
              
              {/* Support Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Discord Support */}
                <div className="card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Discord Support</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join our Discord community for real-time support, tips, and discussions with other users.
                  </p>
                  <a 
                    href="#discord" 
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Join our Discord
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                
                {/* Email Support */}
                <div className="card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Email Support</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Have a specific question or issue? Contact our support team directly via email.
                  </p>
                  <a 
                    href="mailto:support@fjx-development.com" 
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Email Support
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {/* FAQ Item */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">How do I install your plugins?</h3>
                    <p className="text-gray-600">
                      Our plugins come with detailed installation instructions. Generally, you'll need to download the files, place them in your server's plugins folder, and restart your server. Specific requirements and configurations are provided in the documentation included with each product.
                    </p>
                  </div>
                  
                  {/* FAQ Item */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Do you offer refunds?</h3>
                    <p className="text-gray-600">
                      Yes, we offer refunds within 7 days of purchase if the product doesn't work as advertised or if you experience technical issues that our support team cannot resolve. Please contact our support team to request a refund.
                    </p>
                  </div>
                  
                  {/* FAQ Item */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">How do I get updates for my purchased products?</h3>
                    <p className="text-gray-600">
                      All updates are available through your Tebex account. Log in to your account, navigate to your purchases, and download the latest version. We also announce updates in our Discord community.
                    </p>
                  </div>
                  
                  {/* FAQ Item */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Do you offer custom development?</h3>
                    <p className="text-gray-600">
                      Yes, we offer custom development services for specific needs. You can purchase our development packages in the shop or contact us directly for larger projects that require custom quotes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Discord Widget */}
          <div className="lg:col-span-1">
            <DiscordWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
