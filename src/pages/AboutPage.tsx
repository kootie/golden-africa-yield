
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { GoldIcon } from "@/components/icons/GoldIcon";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              About GoldFund Africa
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing gold mining investments through blockchain technology and transparent operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                GoldFund Africa is dedicated to transforming the gold mining industry in Africa by creating 
                a transparent, equitable, and sustainable investment ecosystem that benefits both investors 
                and local communities.
              </p>
              <p className="text-gray-700 mb-4">
                Through our blockchain-powered platform, we connect global investors with vetted gold mining 
                operations, providing unprecedented levels of transparency and accountability while ensuring 
                fair revenue distribution to all stakeholders.
              </p>
              <p className="text-gray-700">
                We believe in responsible mining practices that respect both the environment and local 
                communities, driving economic growth and development across the African continent.
              </p>
            </div>
            <div>
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gold/20 flex items-center justify-center">
                  <GoldIcon className="h-32 w-32 text-gold-dark" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Technology-Driven Transparency</h3>
                  <p className="text-gray-600">
                    Our IoT sensors and blockchain technology provide real-time data from mining operations, 
                    ensuring complete transparency and accountability for all investments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-dark mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-navy">Transparency</h3>
                <p className="text-gray-600">
                  We provide complete visibility into all mining operations and investment flows through 
                  blockchain technology and real-time data.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-navy">Sustainability</h3>
                <p className="text-gray-600">
                  We support environmentally responsible mining practices and ensure operations benefit 
                  local communities and ecosystems.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-navy">Inclusion</h3>
                <p className="text-gray-600">
                  We democratize access to investment opportunities, allowing investors of all sizes to 
                  participate in Africa's gold mining industry.
                </p>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-dark mb-6 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-[4/3] bg-navy-light/10"></div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-1">Executive Name</h3>
                    <p className="text-gold-dark mb-3">Position Title</p>
                    <p className="text-gray-600 text-sm">
                      Executive with extensive experience in mining operations and blockchain technology.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
