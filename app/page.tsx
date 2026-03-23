import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ReserveTableSection from "../components/ReserveTableSection";
import ServiceCards from "../components/ServiceCards";
import MenuSection from "../components/MenuSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FDFDFD]">
      <TopBanner />
      <Navbar />
      <HeroSection />
      
      {/* Reservation Section */}
      <ReserveTableSection />
      
      {/* Service Category Highlights */}
      <ServiceCards />
      
      {/* About Heritage Section */}
      <AboutSection />
      
      {/* Main Menu Highlights */}
      <MenuSection />
      
      {/* Dynamic Trust/Feature Section */}
      <section className="py-24 bg-white text-[#333] border-t border-[#F0F0F0]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-[#F0F0F0] hover:border-[#FF7A00] transition-all duration-500 group shadow-sm hover:shadow-xl rounded-lg bg-[#FAFAFA]">
              <div className="text-[#FF7A00] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">✧</div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Fine Dining</h3>
              <p className="text-gray-500 leading-relaxed font-light italic">Experience culinary excellence with our Maharaja-inspired menus.</p>
            </div>
            <div className="p-8 border border-[#F0F0F0] hover:border-[#FF7A00] transition-all duration-500 group shadow-sm hover:shadow-xl rounded-lg bg-[#FAFAFA]">
              <div className="text-[#FF7A00] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">✧</div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Wine Selection</h3>
              <p className="text-gray-500 leading-relaxed font-light italic">An exquisite collection of rare vintages from around the world.</p>
            </div>
            <div className="p-8 border border-[#F0F0F0] hover:border-[#FF7A00] transition-all duration-500 group shadow-sm hover:shadow-xl rounded-lg bg-[#FAFAFA]">
              <div className="text-[#FF7A00] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">✧</div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Private Events</h3>
              <p className="text-gray-500 leading-relaxed font-light italic">Bespoke luxury experiences for your most cherished celebrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <Footer />
    </main>
  );
}
