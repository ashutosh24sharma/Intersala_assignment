import { useState } from "react";
import {
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineSearch,
  HiOutlineX,
  HiOutlineRefresh,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

// ── 20 Sample Products ────────────────────────
const SAMPLES = [
  {
    label: "🪥 Bamboo Toothbrush",
    category: "Personal Care",
    data: {
      productName: "Bamboo Toothbrush",
      productDescription:
        "Eco-friendly toothbrush made from sustainably harvested bamboo with charcoal-infused BPA-free nylon-4 bristles. Fully biodegradable handle with plastic-free recyclable kraft paper packaging. Perfect for a zero-waste bathroom routine.",
      material: "bamboo, nylon-4",
      brand: "EcoSmile",
    },
  },
  {
    label: "🛍️ Reusable Jute Tote Bag",
    category: "Bags & Totes",
    data: {
      productName: "Organic Jute Market Tote",
      productDescription:
        "Large capacity reusable shopping tote handwoven from 100% organic jute fibers. Features reinforced cotton handles, internal pocket, and water-resistant lining made from recycled PET bottles. Replaces 500+ single-use plastic bags over its lifetime. Fair trade certified, handmade by artisan cooperatives in Bangladesh.",
      material: "organic jute, recycled PET, cotton",
      brand: "GreenCarry",
    },
  },
  {
    label: "🧴 Solid Shampoo Bar",
    category: "Personal Care",
    data: {
      productName: "Solid Shampoo Bar - Lavender & Oat",
      productDescription:
        "Zero-waste solid shampoo bar made with organic coconut oil, shea butter, lavender essential oil, and colloidal oatmeal. Vegan formula free from sulfates, parabens, and synthetic fragrances. Each bar replaces 2-3 plastic shampoo bottles. Comes in compostable cardboard packaging with soy-based ink printing.",
      material: "organic coconut oil, shea butter, essential oils",
      brand: "BarNaturals",
    },
  },
  {
    label: "🍽️ Sugarcane Bagasse Plates",
    category: "Kitchen & Dining",
    data: {
      productName: "Sugarcane Bagasse Dinner Plates 10-inch (50 pack)",
      productDescription:
        "Heavy-duty disposable dinner plates made from sugarcane bagasse, a byproduct of sugar production. Microwave-safe, oil-resistant, and holds hot and cold foods without leaking. Fully compostable in 60-90 days in commercial composting. PFAS-free and plastic-free. Ideal for parties, catering, and food service businesses looking to eliminate styrofoam.",
      material: "sugarcane bagasse",
      brand: "LeafyPlates",
    },
  },
  {
    label: "🧹 Coconut Coir Scrub Brush",
    category: "Cleaning Supplies",
    data: {
      productName: "Natural Coconut Coir Kitchen Scrub Brush",
      productDescription:
        "Durable kitchen cleaning brush with stiff coconut coir bristles and a sustainably sourced beechwood handle. Naturally antibacterial, perfect for scrubbing pots, pans, and vegetables. Fully biodegradable and compostable at end of life. Replaces plastic dish brushes. Comes with two replaceable heads. Packaged in recycled cardboard.",
      material: "coconut coir, beechwood",
      brand: "CleanEarth",
    },
  },
  {
    label: "🌿 Beeswax Food Wraps",
    category: "Kitchen & Dining",
    data: {
      productName: "Organic Beeswax Food Wraps - Variety Pack (3 sizes)",
      productDescription:
        "Reusable food wraps made from organic cotton infused with sustainably sourced beeswax, jojoba oil, and tree resin. Naturally antibacterial and self-adhesive — sticks to bowls, plates, and itself. Replaces plastic cling wrap entirely. Lasts 6-12 months with proper care. Washable in cool water. Pack includes small, medium, and large sizes in botanical print designs.",
      material: "organic cotton, beeswax, jojoba oil, tree resin",
      brand: "WrapNatural",
    },
  },
  {
    label: "📓 Recycled Paper Notebook",
    category: "Office & Stationery",
    data: {
      productName: "100% Recycled Paper Spiral Notebook - A5",
      productDescription:
        "Professional A5 notebook made entirely from 100% post-consumer recycled paper. Features 200 lined pages, recycled cardboard cover with water-based ink printing, and a spiral binding made from recycled steel wire. Acid-free pages suitable for fountain pens. FSC certified. Carbon-neutral manufacturing process with verified offsets.",
      material: "recycled paper, recycled cardboard, recycled steel wire",
      brand: "ReWrite",
    },
  },
  {
    label: "🧽 Plant-Based Kitchen Sponges",
    category: "Cleaning Supplies",
    data: {
      productName: "Biodegradable Cellulose Kitchen Sponges (4-pack)",
      productDescription:
        "Natural kitchen sponges made from plant-based cellulose derived from wood pulp and cotton fibers. Dual-sided with a walnut shell scrubbing layer for tough stains. Zero synthetic materials — fully biodegradable and compostable. Absorbs 20x its weight in water. Each sponge lasts 4-6 weeks. Plastic-free packaging with compostable sleeve.",
      material: "cellulose, wood pulp, cotton, walnut shell",
      brand: "SpongeCo",
    },
  },
  {
    label: "🕯️ Soy Wax Candle",
    category: "Home & Living",
    data: {
      productName: "Hand-Poured Soy Wax Candle - Eucalyptus & Mint (8oz)",
      productDescription:
        "Clean-burning candle made from 100% natural soy wax with a pure cotton wick and scented with therapeutic-grade eucalyptus and peppermint essential oils. No paraffin, synthetic fragrances, or dyes. Burns for approximately 45 hours. Poured into a reusable amber glass jar with a bamboo lid. Vegan and cruelty-free. Handmade in small batches.",
      material: "soy wax, cotton wick, essential oils, glass",
      brand: "GlowGreen",
    },
  },
  {
    label: "🧻 Bamboo Toilet Paper",
    category: "Personal Care",
    data: {
      productName: "Bamboo Toilet Paper - 24 Roll Box",
      productDescription:
        "Ultra-soft 3-ply toilet paper made from 100% FSC-certified bamboo fiber. Bamboo grows 30x faster than trees making it a highly renewable resource. No chlorine bleaching, no BPA, no inks or dyes. Strong yet septic-safe and rapidly biodegradable. Plastic-free packaging — delivered in a recyclable cardboard box with individually paper-wrapped rolls. Carbon-neutral shipping.",
      material: "bamboo fiber",
      brand: "BamBath",
    },
  },
  {
    label: "🥤 Stainless Steel Water Bottle",
    category: "Travel & On-the-Go",
    data: {
      productName: "Insulated Stainless Steel Water Bottle - 750ml",
      productDescription:
        "Double-wall vacuum insulated water bottle made from food-grade 18/8 stainless steel. Keeps drinks cold 24 hours or hot 12 hours. BPA-free, toxin-free, and plastic-free — including the lid which uses silicone seals. Powder-coated exterior in ocean blue finish using non-toxic paint. Wide mouth for easy cleaning and ice cubes. Replaces 1400+ single-use plastic bottles over its lifetime.",
      material: "18/8 stainless steel, silicone, non-toxic powder coat",
      brand: "HydroEarth",
    },
  },
  {
    label: "🧥 Organic Cotton T-Shirt",
    category: "Fashion & Accessories",
    data: {
      productName: "Unisex Organic Cotton Essential T-Shirt",
      productDescription:
        "Classic fit unisex t-shirt made from 100% GOTS-certified organic cotton grown without pesticides or synthetic fertilizers. Dyed using low-impact reactive dyes with wastewater treatment. Fair trade certified manufacturing facility in Portugal. Pre-shrunk, 180 GSM medium weight fabric. Available in 8 earth-tone colors. Plastic-free packaging with compostable garment bag.",
      material: "100% GOTS certified organic cotton",
      brand: "EarthThreads",
    },
  },
  {
    label: "🌱 Compostable Trash Bags",
    category: "Home & Living",
    data: {
      productName: "Certified Compostable Trash Bags 13-Gallon (50 count)",
      productDescription:
        "Kitchen trash bags made from plant-based PLA (polylactic acid) derived from corn starch. BPI certified compostable in commercial composting facilities — breaks down in 90-180 days. Leak-proof with reinforced bottom seam and drawstring closure. Holds up to 30 lbs. No conventional plastics, polyethylene, or microplastics. Roll packaged in recycled cardboard box.",
      material: "PLA (corn starch based), plant-based polymers",
      brand: "BioBag",
    },
  },
  {
    label: "🐕 Hemp Dog Collar",
    category: "Pet Supplies",
    data: {
      productName: "Adjustable Hemp Dog Collar - Medium",
      productDescription:
        "Durable and naturally odor-resistant dog collar made from organic hemp fiber webbing with a recycled aluminum D-ring and buckle. Hemp is naturally antibacterial and gets softer with each wash without weakening. Hypoallergenic — perfect for dogs with sensitive skin. Adjustable from 14-20 inches. Handmade with reinforced double stitching. Comes in natural, sage green, and rust colors. Packaged in a compostable cotton drawstring bag.",
      material: "organic hemp, recycled aluminum",
      brand: "PawPlanet",
    },
  },
  {
    label: "🧸 Organic Cotton Baby Blanket",
    category: "Baby & Kids",
    data: {
      productName: "Organic Muslin Baby Swaddle Blanket - 2 Pack",
      productDescription:
        "Ultra-soft muslin swaddle blankets made from 100% GOTS certified organic cotton. Pre-washed for extra softness, breathable weave regulates baby's temperature naturally. Free from harmful chemicals — OEKO-TEX Standard 100 Class I certified (safe for babies). Generous 47x47 inch size. Machine washable and becomes softer with every wash. Printed with water-based non-toxic botanical inks. Packaged in a reusable organic cotton drawstring bag.",
      material: "GOTS organic cotton muslin",
      brand: "TinyLeaf",
    },
  },
  {
    label: "🌻 Biodegradable Plant Pots",
    category: "Garden & Outdoor",
    data: {
      productName: "Biodegradable Seedling Plant Pots - 100 Pack (3 inch)",
      productDescription:
        "Round seedling starter pots made from compressed peat-free coconut coir and natural latex binder. Simply plant the entire pot directly into soil — it biodegrades within 8-12 weeks while enriching the surrounding soil. Eliminates transplant shock since roots grow right through the pot walls. Perfect for herbs, vegetables, and flowers. Excellent water retention and drainage. Zero plastic. Bulk packed in a recycled kraft paper bag.",
      material: "coconut coir, natural latex binder",
      brand: "GrowGreen",
    },
  },
  {
    label: "🍵 Organic Matcha Powder",
    category: "Food & Beverages",
    data: {
      productName: "Ceremonial Grade Organic Matcha Powder - 100g Tin",
      productDescription:
        "Premium Japanese ceremonial-grade matcha green tea powder sourced from shade-grown organic tea farms in Uji, Kyoto. USDA Organic and JAS certified. Stone-ground to a fine 5-micron powder for smooth, umami-rich taste. Rich in antioxidants, L-theanine, and natural caffeine. Packaged in a reusable steel tin with an airtight seal to preserve freshness. Inner pouch is compostable plant-based film. Carbon-neutral shipping from origin. Fair trade partnership with family-owned farms.",
      material: "organic tea leaves",
      brand: "ZenLeaf",
    },
  },
  {
    label: "🩴 Cork Yoga Mat",
    category: "Health & Wellness",
    data: {
      productName: "Natural Cork & Rubber Yoga Mat - 5mm",
      productDescription:
        "Premium yoga mat with a sustainably harvested Portuguese cork surface bonded to a natural tree rubber base. Cork provides natural antimicrobial properties and grip that improves with moisture — perfect for hot yoga. No PVC, TPE, or toxic foaming agents. 72x24 inches, 5mm thick for optimal cushioning. Cork is harvested without harming the tree — the bark regenerates every 9 years. Comes with an organic cotton carrying strap. Packaged in recycled cardboard tube.",
      material: "Portuguese cork, natural tree rubber, organic cotton",
      brand: "AsanaEarth",
    },
  },
  {
    label: "📦 Compostable Mailer Bags",
    category: "Packaging & Wrapping",
    data: {
      productName: "Compostable Shipping Mailer Bags 12x15 inch (100 pack)",
      productDescription:
        "E-commerce shipping mailers made from PBAT and PLA plant-based polymers. Certified home-compostable (OK Compost HOME) — breaks down in backyard compost within 180 days. Self-sealing adhesive strip for easy packing. Opaque for privacy, waterproof for transit protection. Printed with soy-based inks. Strength-tested to hold up to 5 lbs per bag. Direct replacement for poly mailer bags. Flat-packed in recycled kraft cardboard box.",
      material: "PBAT, PLA, plant-based polymers, soy ink",
      brand: "ShipGreen",
    },
  },
  {
    label: "🧴 Refillable Glass Soap Dispenser",
    category: "Home & Living",
    data: {
      productName: "Amber Glass Soap Dispenser with Stainless Steel Pump - 500ml",
      productDescription:
        "Elegant refillable soap dispenser crafted from thick amber glass with a rust-proof 304 stainless steel pump mechanism. Designed to replace single-use plastic soap bottles permanently. Amber glass protects contents from UV degradation. Compatible with liquid hand soap, dish soap, lotion, or shampoo. Wide mouth for easy refilling. Silicone gasket seal prevents leaks. Includes waterproof vinyl label and chalk pen for customization. Comes with a starter pack of concentrated castile soap tablet (makes 500ml). Packaged in molded recycled paper pulp.",
      material: "amber glass, 304 stainless steel, silicone gasket",
      brand: "BottleRevolution",
    },
  },
];

// Group samples by category
const groupedSamples = SAMPLES.reduce((acc, sample) => {
  if (!acc[sample.category]) {
    acc[sample.category] = [];
  }
  acc[sample.category].push(sample);
  return acc;
}, {});

const initialFormState = {
  productName: "",
  productDescription: "",
  material: "",
  brand: "",
};

function CategoryForm({ onSubmit, isLoading }) {
  const [form, setForm] = useState(initialFormState);
  const [showSamples, setShowSamples] = useState(false);
  const [sampleSearch, setSampleSearch] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const loadSample = (sample) => {
    setForm(sample.data);
    setShowSamples(false);
    setSampleSearch("");
    setExpandedCategory(null);
  };

  // Filter samples by search text
  const filteredSamples = SAMPLES.filter(
    (s) =>
      s.label.toLowerCase().includes(sampleSearch.toLowerCase()) ||
      s.category.toLowerCase().includes(sampleSearch.toLowerCase()) ||
      s.data.productName.toLowerCase().includes(sampleSearch.toLowerCase()) ||
      s.data.material?.toLowerCase().includes(sampleSearch.toLowerCase())
  );

  const isFormValid = form.productName.trim() && form.productDescription.length >= 10;
  const characterCount = form.productDescription.length;
  const characterPercentage = Math.min((characterCount / 5000) * 100, 100);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header with Sample Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
            <FaLeaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              Product Details
            </h3>
            <p className="text-xs text-slate-500">Fill in the fields below or load a sample</p>
          </div>
        </div>

        {/* Sample Selector Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowSamples(!showSamples)}
            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-emerald-50 hover:to-teal-50 text-slate-700 hover:text-emerald-700 text-sm font-medium rounded-xl border border-slate-200 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <HiOutlineBeaker className="w-4 h-4 group-hover:text-emerald-600 transition-colors" />
            <span>Load Sample</span>
            <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full shadow-sm">
              {SAMPLES.length}
            </span>
            <HiOutlineChevronDown className={`w-4 h-4 transition-transform duration-300 ${showSamples ? 'rotate-180' : ''}`} />
          </button>

          {/* Sample Dropdown */}
          {showSamples && (
            <>
              <div
                className="fixed inset-0 z-10 bg-black/10 backdrop-blur-sm"
                onClick={() => {
                  setShowSamples(false);
                  setSampleSearch("");
                  setExpandedCategory(null);
                }}
              />
              <div className="absolute right-0 sm:right-0 left-0 sm:left-auto mt-2 w-full sm:w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {/* Header with search */}
                <div className="p-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-b border-emerald-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                        <HiOutlineBeaker className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          Sample Products
                        </p>
                        <p className="text-xs text-slate-500">
                          {filteredSamples.length} of {SAMPLES.length} available
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setShowSamples(false);
                        setSampleSearch("");
                      }}
                      className="p-1.5 rounded-lg hover:bg-white/60 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <HiOutlineX className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search by name, category, or material..."
                      value={sampleSearch}
                      onChange={(e) => setSampleSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl 
                                 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Sample list */}
                <div className="max-h-[400px] overflow-y-auto">
                  {filteredSamples.length === 0 ? (
                    <div className="px-6 py-12 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                        <HiOutlineSearch className="w-8 h-8 text-slate-300" />
                      </div>
                      <p className="text-sm font-medium text-slate-600">No samples found</p>
                      <p className="text-xs text-slate-400 mt-1">Try a different search term</p>
                    </div>
                  ) : (
                    <div className="p-2">
                      {filteredSamples.map((sample, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => loadSample(sample)}
                          className="w-full text-left p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 
                                     transition-all duration-200 group mb-1 last:mb-0 border border-transparent hover:border-emerald-200"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-emerald-100 group-hover:to-teal-100 flex items-center justify-center text-lg transition-colors">
                              {sample.label.split(' ')[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="font-medium text-slate-800 group-hover:text-emerald-700 text-sm truncate transition-colors">
                                  {sample.label.split(' ').slice(1).join(' ')}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200 transition-colors">
                                  {sample.category}
                                </span>
                                <p className="text-xs text-slate-400 truncate">
                                  {sample.data.material || "Various materials"}
                                </p>
                              </div>
                            </div>
                            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-lg">
                                Load
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 bg-slate-50 border-t border-slate-100">
                  <p className="text-xs text-center text-slate-400">
                    Click on any sample to auto-fill the form
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-5">
        {/* Product Name */}
        <div className="group">
          <label htmlFor="productName" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Product Name
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="productName"
              name="productName"
              type="text"
              value={form.productName}
              onChange={handleChange}
              placeholder="e.g. Bamboo Toothbrush"
              className="w-full px-4 py-3 text-sm sm:text-base bg-white border-2 border-slate-200 rounded-xl 
                         focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all
                         placeholder:text-slate-400 hover:border-slate-300"
              required
              minLength={2}
              maxLength={255}
            />
            {form.productName && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Product Description */}
        <div className="group">
          <label htmlFor="productDescription" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Product Description
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <textarea
              id="productDescription"
              name="productDescription"
              value={form.productDescription}
              onChange={handleChange}
              placeholder="Detailed description of the product including materials, features, and sustainability attributes..."
              className="w-full px-4 py-3 text-sm sm:text-base bg-white border-2 border-slate-200 rounded-xl 
                         focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all
                         placeholder:text-slate-400 hover:border-slate-300 min-h-[140px] sm:min-h-[160px] resize-y"
              required
              minLength={10}
              maxLength={5000}
            />
          </div>
          
          {/* Character counter with progress bar */}
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className={`font-medium ${characterCount >= 10 ? 'text-emerald-600' : 'text-slate-400'}`}>
                {characterCount >= 10 ? '✓ Minimum reached' : `${10 - characterCount} more characters needed`}
              </span>
              <span className="text-slate-400">
                {characterCount.toLocaleString()}/5,000
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  characterCount >= 10 
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500' 
                    : 'bg-slate-300'
                }`}
                style={{ width: `${characterPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Material & Brand Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div className="group">
            <label htmlFor="material" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              Material(s)
              <span className="text-xs text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              id="material"
              name="material"
              type="text"
              value={form.material}
              onChange={handleChange}
              placeholder="e.g. bamboo, organic cotton"
              className="w-full px-4 py-3 text-sm sm:text-base bg-white border-2 border-slate-200 rounded-xl 
                         focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all
                         placeholder:text-slate-400 hover:border-slate-300"
            />
          </div>
          <div className="group">
            <label htmlFor="brand" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              Brand
              <span className="text-xs text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              id="brand"
              name="brand"
              type="text"
              value={form.brand}
              onChange={handleChange}
              placeholder="e.g. EcoSmile"
              className="w-full px-4 py-3 text-sm sm:text-base bg-white border-2 border-slate-200 rounded-xl 
                         focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all
                         placeholder:text-slate-400 hover:border-slate-300"
            />
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-100">
        <button
          type="submit"
          disabled={isLoading || !isFormValid}
          className={`relative flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-lg
            ${isFormValid && !isLoading
              ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <HiOutlineSparkles className="w-5 h-5" />
              <span>Generate Categories & Tags</span>
            </>
          )}
        </button>
        
        <button
          type="button"
          onClick={() => setForm(initialFormState)}
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <HiOutlineRefresh className="w-4 h-4" />
          <span>Clear Form</span>
        </button>
      </div>

      {/* Validation helper text */}
      {!isFormValid && (
        <div className="flex items-center gap-2 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl">
          <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-amber-700">
            Please fill in the <strong>product name</strong> and provide at least <strong>10 characters</strong> of description to continue.
          </p>
        </div>
      )}
    </form>
  );
}

export default CategoryForm;