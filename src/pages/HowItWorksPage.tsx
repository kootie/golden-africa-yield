
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              How GoldFund Africa Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how our blockchain-powered platform connects investors to verified gold mining projects with transparent tracking.
            </p>
          </div>
          
          <HowItWorks />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
