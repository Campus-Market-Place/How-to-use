import { useState } from 'react';
import { ArrowLeft, Search, MessageCircle, Package, Store, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

type Step = 'explore' | 'seller-menu' | 'seller-form' | 'seller-success';

export default function MarketplacePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('explore');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentId: '',
    description: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('seller-success');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Explore Market Step */}
        {currentStep === 'explore' && (
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl mb-3 text-center">
              First-Time Users / Buyers
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Explore the marketplace and find great deals from fellow students
            </p>

            {/* Browse Products Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-6 h-6 text-blue-600" />
                  Explore Market
                </CardTitle>
                <CardDescription>
                  Browse through available items from students on campus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Sample Product 1 */}
                  <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop"
                      alt="Books"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="mb-2">Engineering Textbooks</h3>
                      <p className="text-sm text-gray-600 mb-2">$45.00</p>
                      <p className="text-xs text-gray-500">Physics & Calculus books in good condition</p>
                    </div>
                  </div>

                  {/* Sample Product 2 */}
                  <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop"
                      alt="Laptop"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="mb-2">Laptop - Dell XPS</h3>
                      <p className="text-sm text-gray-600 mb-2">$450.00</p>
                      <p className="text-xs text-gray-500">Perfect for students, includes charger</p>
                    </div>
                  </div>

                  {/* Sample Product 3 */}
                  <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=400&h=300&fit=crop"
                      alt="Calculator"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="mb-2">Scientific Calculator</h3>
                      <p className="text-sm text-gray-600 mb-2">$25.00</p>
                      <p className="text-xs text-gray-500">TI-84 Plus, rarely used</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* More Products Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
                <CardDescription>
                  Find what you need quickly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=200&fit=crop"
                      alt="Books Category"
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-center">Books</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=200&fit=crop"
                      alt="Electronics Category"
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-center">Electronics</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=200&fit=crop"
                      alt="Furniture Category"
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-center">Furniture</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=200&fit=crop"
                      alt="Clothing Category"
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-center">Clothing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Become a Seller CTA */}
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Want to Become a Seller?</CardTitle>
                <CardDescription className="text-blue-100">
                  Start selling your items to fellow students today
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="mb-4">
                      Click the button below to access the seller registration menu and start your journey as a campus seller.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => setCurrentStep('seller-menu')}
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    Become a Seller
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Seller Menu Step */}
        {currentStep === 'seller-menu' && (
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => setCurrentStep('explore')}
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Marketplace
            </Button>

            <h1 className="text-4xl mb-8 text-center">
              Seller Registration
            </h1>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-6 h-6 text-green-600" />
                  Ready to Start Selling?
                </CardTitle>
                <CardDescription>
                  Follow the steps below to become a verified seller on AASTU Campus Marketplace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">Fill Out Registration Form</h3>
                      <p className="text-sm text-gray-600">
                        Provide your basic information and student details to get verified
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
                      alt="Registration Process"
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">Get Verified</h3>
                      <p className="text-sm text-gray-600">
                        We'll verify your student status and create your seller account
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"
                      alt="Verification Process"
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button
                      size="lg"
                      onClick={() => setCurrentStep('seller-form')}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Fill Registration Form
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Seller Form Step */}
        {currentStep === 'seller-form' && (
          <div className="max-w-2xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => setCurrentStep('seller-menu')}
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <h1 className="text-4xl mb-8 text-center">
              Seller Registration Form
            </h1>

            <Card>
              <CardHeader>
                <CardTitle>Fill Out the Form Below</CardTitle>
                <CardDescription>
                  All fields are required to complete your registration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=300&fit=crop"
                    alt="Registration Form"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your.email@aastu.edu.et"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+251 9XX XXX XXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input
                      id="studentId"
                      name="studentId"
                      type="text"
                      required
                      value={formData.studentId}
                      onChange={handleFormChange}
                      placeholder="Enter your student ID"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Why do you want to become a seller?</Label>
                    <Textarea
                      id="description"
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleFormChange}
                      placeholder="Tell us briefly about what you plan to sell..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Submit Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Seller Success Step */}
        {currentStep === 'seller-success' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-4xl mb-4">
                Congratulations! You Are Now a Seller
              </h1>
              {/*<p className="text-xl text-gray-600">
                Welcome to the AASTU Campus Marketplace seller community
              </p>*/}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Your Shop */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Store className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-center">Explore Your Shop</CardTitle>
                  <CardDescription className="text-center">
                    Manage your products and track your sales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop"
                    alt="Your Shop Dashboard"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Access your seller dashboard to add products, update inventory, and view analytics
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Go to Your Shop
                  </Button>
                </CardContent>
              </Card>

              {/* Browse Marketplace */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Search className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-center">Browse Marketplace</CardTitle>
                  <CardDescription className="text-center">
                    You can still buy products from other sellers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=300&fit=crop"
                    alt="Marketplace"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Continue exploring the marketplace and discover great deals from fellow students
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setCurrentStep('explore')}
                  >
                    Browse Products
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Seller Info */}
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  How to Buy Products
                </CardTitle>
                <CardDescription>
                  Contact sellers directly to arrange purchases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-3">Contact the Seller</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      When you find a product you want to buy, click on it to view seller contact information. You can reach out via:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                      <li>Email or phone number</li>
                      <li>Built-in messaging system</li>
                      <li>Meet on campus for pickup</li>
                    </ul>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=300&fit=crop"
                    alt="Contact Seller"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
