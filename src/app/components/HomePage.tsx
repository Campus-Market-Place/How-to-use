import { ShoppingBag, UserPlus, LayoutDashboard } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export default function HomePage() {
  // Replace this with your actual Telegram bot link
  const TELEGRAM_BOT_LINK = 'https://t.me/your_bot_username';

  const handleExploreMarketplace = () => {
    window.open(TELEGRAM_BOT_LINK, '_blank');
  };

  // Use reliable placeholder images or your actual local images
  const images = {
    step1: '/images/User.png', // Make sure this file exists in public/images/
    step2: '/images/BeS.png',
    step3: '/images/Seller.png',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6">
            Welcome to the AASTU Campus Marketplace
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Buy, sell, and connect with fellow students on campus
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            onClick={handleExploreMarketplace}
          >
            Explore Marketplace
          </Button>
        </div>

        {/* How It Works Section */}
        <div className="mt-20">
          <h2 className="text-3xl text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Getting started is easy. Follow these simple steps to buy or sell on the AASTU Campus Marketplace.
          </p>

          <div className="max-w-3xl mx-auto space-y-12">
            {/* Step 1 */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="mb-2">Step 1</CardTitle>
                    <CardTitle className="mb-2">Explore Marketplace</CardTitle>
                    <CardDescription className="text-base">
                      Browse items and contact sellers directly. Find everything from textbooks to electronics.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ImageWithFallback
                  src={images.step1}
                  alt="Explore Marketplace"
                  className="w-140 h-135 object-cover rounded-lg"
                 
                />
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserPlus className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="mb-2">Step 2</CardTitle>
                    <CardTitle className="mb-2">Become a Seller</CardTitle>
                    <CardDescription className="text-base">
                      Fill out a simple form to gain seller access and start listing your items.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ImageWithFallback
                  src={images.step2}
                  alt="Become a Seller"
                  className="w-140 h-145 object-cover rounded-lg"
                 
                />
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <LayoutDashboard className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="mb-2">Step 3</CardTitle>
                    <CardTitle className="mb-2">Seller Dashboard</CardTitle>
                    <CardDescription className="text-base">
                      Manage your items, view messages, and track sales all in one place.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ImageWithFallback
                  src={images.step3}
                  alt="Seller Dashboard"
                  className="w-140 h-135 object-cover rounded-lg"
                  
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}