/* eslint-disable react/no-array-index-key */
import {
  Award,
  Calendar,
  Clock,
  Droplets,
  HelpCircle,
  Leaf,
  Scissors,
  Sprout,
  TreePine,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Hero } from './landing/Hero';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/* <section className="relative h-[700px]">
        <Image
          src="/assets/images/hero.jpg?height=600&width=1920"
          alt="Lawn care background"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 text-5xl font-bold">
              Get Professional Lawn Care Services
              <br />
              in Just Two Minutes
            </h1>
            <p className="mb-8 text-xl">
              Expert lawn care and landscaping services for your home
            </p>
            <Button size="lg" className="bg-[#a4be4c] hover:bg-[#8ca441]">
              Get Started
            </Button>
          </div>
        </div>
      </section> */}
      <Hero />

      {/* Stats Section */}

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Innovation in Landscape Design, Exceptional Results
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                icon: Users,
                title: 'Expert Craftsmanship',
                description: 'Skilled professionals delivering quality results',
              },
              {
                icon: Award,
                title: 'Quality Materials',
                description: 'Premium supplies for lasting beauty',
              },
              {
                icon: Clock,
                title: 'Timely Completion',
                description: 'Projects delivered on schedule',
              },
              {
                icon: Leaf,
                title: 'Sustainable Practices',
                description: 'Eco-friendly landscaping solutions',
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#a4be4c]/10">
                    <feature.icon className="size-6 text-[#a4be4c]" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#a4be4c] py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">
                Our Passion for Landscaping Excellence
              </h2>
              <p className="mb-8 text-white/90">
                We bring your outdoor vision to life with expert design and maintenance services
              </p>
              <Button variant="secondary">Learn More</Button>
            </div>
            <div className="grid gap-4">
              <Image
                src="/assets/images/potflower.jpg"
                alt="Landscaping project"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/assets/images/potflower.jpg"
                alt="Garden project"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Tailored Landscape Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: TreePine,
                title: 'Complete Landscaping',
                description: 'Full-service landscape design and installation',
              },
              {
                icon: Scissors,
                title: 'Lawn Maintenance',
                description: 'Regular mowing and lawn care services',
              },
              {
                icon: Sprout,
                title: 'Garden Care',
                description: 'Professional garden maintenance and planting',
              },
              {
                icon: Calendar,
                title: 'Seasonal Services',
                description: 'Year-round landscape maintenance programs',
              },
              {
                icon: Droplets,
                title: 'Irrigation Systems',
                description: 'Installation and maintenance of watering systems',
              },
              {
                icon: Leaf,
                title: 'Tree Services',
                description: 'Tree trimming, removal, and maintenance',
              },
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#a4be4c]/10">
                    <service.icon className="size-6 text-[#a4be4c]" />
                  </div>
                  <h3 className="mb-2 font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-slate-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold">Recent Landscaping Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Image
              src="/assets/images/potflower.jpg"
              alt="Recent project"
              width={600}
              height={400}
              className="rounded-lg"
            />
            {/* <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Project</TableHead>
                  <TableHead className="text-white">Duration</TableHead>
                  <TableHead className="text-white">Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Garden Renovation</TableCell>
                  <TableCell>2 weeks</TableCell>
                  <TableCell>$8,500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lawn Installation</TableCell>
                  <TableCell>1 week</TableCell>
                  <TableCell>$4,500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Patio Design</TableCell>
                  <TableCell>3 weeks</TableCell>
                  <TableCell>$12,000</TableCell>
                </TableRow>
              </TableBody>
            </Table> */}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#a4be4c] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Take back control of your lawn
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Basic Package',
                price: '$149',
                features: [
                  'Lawn Mowing',
                  'Edge Trimming',
                  'Debris Cleanup',
                  'Monthly Service',
                ],
              },
              {
                title: 'Standard Package',
                price: '$249',
                features: [
                  'All Basic Features',
                  'Fertilization',
                  'Weed Control',
                  'Bi-weekly Service',
                ],
              },
              {
                title: 'Premium Package',
                price: '$349',
                features: [
                  'All Standard Features',
                  'Pest Control',
                  'Aeration',
                  'Weekly Service',
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">{plan.title}</h3>
                  <div className="mb-6 text-3xl font-bold">
                    {plan.price}
                    <span className="text-sm font-normal">/month</span>
                  </div>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Leaf className="size-4 text-[#a4be4c]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#a4be4c] hover:bg-[#8ca441]">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              Gardening Guide
              <span className="block text-lg font-normal text-muted-foreground">
                Common Questions and Expert Answers
              </span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {[
                {
                  question: 'When is the best time to water my lawn?',
                  answer: 'Early morning is ideal, between 6 AM and 10 AM.',
                },
                {
                  question: 'How often should I mow my lawn?',
                  answer: 'Weekly during growing season, adjusting to growth rate.',
                },
                {
                  question: 'What\'s the best fertilizer for my garden?',
                  answer: 'It depends on your soil type and plants. We can test and recommend.',
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <HelpCircle className="size-6 text-[#a4be4c]" />
                      <div>
                        <h3 className="mb-2 font-semibold">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="relative h-full min-h-[400px]">
              <Image
                src="/assets/images/potflower.jpg"
                alt="Gardening guide illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              Latest Trends in Landscaping
            </h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Sustainable Garden Designs',
                image: '/placeholder.svg?height=200&width=300',
                date: 'March 15, 2024',
              },
              {
                title: 'Water-Wise Landscaping Tips',
                image: '/placeholder.svg?height=200&width=300',
                date: 'March 12, 2024',
              },
              {
                title: 'Native Plants for Your Garden',
                image: '/placeholder.svg?height=200&width=300',
                date: 'March 10, 2024',
              },
            ].map((post, index) => (
              <Card key={index}>
                <Image
                  src={'/assets/images/potflower.jpg'}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full"
                />
                <CardContent className="p-6">
                  <p className="mb-2 text-sm text-muted-foreground">
                    {post.date}
                  </p
                  >
                  <h3 className="mb-2 font-semibold">{post.title}</h3>
                  <Button variant="link" className="p-0 text-[#a4be4c]">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
