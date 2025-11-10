// BLOC Food Mock Data - Heritage Dishes and Community Impact

export const heritageDishes = [
  {
    id: 1,
    name: "Ancestral Bison Bowl",
    description: "Grass-fed bison over three sisters vegetables (corn, beans, squash) with sage-infused quinoa and traditional berry sauce",
    culturalOrigin: "Native American & Soul Fusion",
    ingredients: ["Bison", "Corn", "Beans", "Squash", "Quinoa", "Berries"],
    price: "$24",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
    nutritionalBenefits: "High protein, rich in omega-3, traditional superfoods"
  },
  {
    id: 2,
    name: "Soul Fusion Salmon",
    description: "Wild-caught salmon with black-eyed pea succotash, collard greens, and sweet potato mash",
    culturalOrigin: "Southern Soul Tradition",
    ingredients: ["Wild Salmon", "Black-Eyed Peas", "Collard Greens", "Sweet Potato"],
    price: "$26",
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
    nutritionalBenefits: "Heart-healthy omega-3, fiber-rich legumes, vitamin-packed greens"
  },
  {
    id: 3,
    name: "Heritage Cornbread Bowl",
    description: "Traditional cornbread topped with slow-cooked turkey chili, local vegetables, and sage honey butter",
    culturalOrigin: "Cross-Cultural Heritage",
    ingredients: ["Turkey", "Cornmeal", "Local Vegetables", "Sage Honey"],
    price: "$18",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    nutritionalBenefits: "Lean protein, whole grains, locally sourced produce"
  },
  {
    id: 4,
    name: "Three Sisters Stew",
    description: "Traditional Indigenous recipe featuring corn, beans, and squash in a savory herb broth with wild rice",
    culturalOrigin: "Native American Tradition",
    ingredients: ["Corn", "Beans", "Squash", "Wild Rice", "Herbs"],
    price: "$16",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
    nutritionalBenefits: "Complete plant protein, fiber-rich, vitamin-packed"
  },
  {
    id: 5,
    name: "Unity Fried Chicken",
    description: "Heritage-spiced crispy chicken with maple-sweetened yams and sautéed mustard greens",
    culturalOrigin: "Southern Soul Classic",
    ingredients: ["Free-Range Chicken", "Sweet Yams", "Mustard Greens", "Heritage Spices"],
    price: "$22",
    imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=600&fit=crop",
    nutritionalBenefits: "Locally raised poultry, nutrient-dense vegetables"
  },
  {
    id: 6,
    name: "Empowerment Bowl",
    description: "Grilled chicken or tofu over ancient grains with roasted root vegetables and tahini-herb dressing",
    culturalOrigin: "Modern Wellness Fusion",
    ingredients: ["Chicken/Tofu", "Ancient Grains", "Root Vegetables", "Tahini"],
    price: "$20",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    nutritionalBenefits: "Balanced macros, ancient superfoods, plant-forward"
  },
];

export const impactMetrics = [
  {
    value: "$125K+",
    label: "Local Supplier Support",
    description: "Invested annually in minority-owned farms and suppliers",
    icon: "DollarSign"
  },
  {
    value: "45+",
    label: "Community Events",
    description: "Catered monthly gatherings bringing people together",
    icon: "Users"
  },
  {
    value: "500+",
    label: "Cultural Education Hours",
    description: "Cooking classes and workshops teaching heritage cuisine",
    icon: "BookOpen"
  },
  {
    value: "15",
    label: "Minority Suppliers",
    description: "Local farmers and producers we partner with directly",
    icon: "Heart"
  },
];

export const supplierSpotlights = [
  {
    name: "Johnson Family Farms",
    description: "Third-generation Black-owned farm providing our organic greens and root vegetables",
    location: "Central Valley, CA",
    products: ["Collard Greens", "Sweet Potatoes", "Mustard Greens"]
  },
  {
    name: "Red Cedar Indigenous Foods",
    description: "Native American cooperative supplying traditional ingredients and wild-harvested goods",
    location: "Northern California",
    products: ["Wild Rice", "Sage", "Berry Preserves"]
  },
  {
    name: "Heritage Grains Collective",
    description: "Minority-owned cooperative growing ancient grains and traditional corn varieties",
    location: "Sacramento Region",
    products: ["Ancient Grains", "Heritage Corn", "Quinoa"]
  },
];

export const cateringPackages = [
  {
    name: "Intimate Gathering",
    description: "Perfect for family reunions, small celebrations, and community meetings",
    guestRange: "10-20 guests",
    priceRange: "$350-$600",
    features: [
      "Choice of 2 heritage main dishes",
      "2 traditional side dishes",
      "Heritage cornbread and butter",
      "Locally sourced ingredients guaranteed",
      "Cultural story cards for each dish",
      "Basic setup and cleanup included"
    ],
    highlighted: false
  },
  {
    name: "Community Celebration",
    description: "Ideal for organizational events, cultural gatherings, and medium-sized parties",
    guestRange: "50-100 guests",
    priceRange: "$1,800-$3,200",
    features: [
      "Choice of 3 heritage main dishes",
      "4 traditional side dishes",
      "Heritage dessert selection",
      "Signature sauce and seasoning station",
      "Cultural storytelling presentation",
      "Professional setup and full-service staff",
      "10% proceeds to community fund"
    ],
    highlighted: true
  },
  {
    name: "Large-Scale Impact Event",
    description: "For major community gatherings, festivals, and organizational celebrations",
    guestRange: "100-500 guests",
    priceRange: "$5,000-$18,000",
    features: [
      "Full heritage menu customization",
      "Unlimited side dish options",
      "Live cooking demonstration station",
      "Cultural educator on-site",
      "Custom branded materials",
      "Complete event coordination",
      "Food truck option available",
      "15% proceeds to community initiatives"
    ],
    highlighted: false
  },
];

export const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Community Center Director",
    quote: "BLOC Food didn't just cater our Juneteenth celebration - they elevated it into a transformative cultural experience. Every dish told a story.",
    rating: 5
  },
  {
    name: "Sarah Running Deer",
    role: "Cultural Program Coordinator",
    quote: "Finally, a food service that honors both Black and Native American culinary traditions with authenticity and respect. The quality and care are evident in every bite.",
    rating: 5
  },
  {
    name: "Dr. Jamal Washington",
    role: "University Diversity Officer",
    quote: "We've used BLOC Food for multiple campus events. The educational component about ingredient sourcing and cultural heritage adds incredible value beyond just the meal.",
    rating: 5
  },
];

export const cookingClasses = [
  {
    title: "Heritage Cooking Fundamentals",
    description: "Learn traditional techniques passed down through generations",
    duration: "3 hours",
    price: "$85 per person",
    maxParticipants: 12
  },
  {
    title: "Soul Food Mastery",
    description: "Master classic soul food dishes with modern health-conscious approaches",
    duration: "4 hours",
    price: "$110 per person",
    maxParticipants: 10
  },
  {
    title: "Indigenous Ingredients Workshop",
    description: "Explore traditional Native American ingredients and cooking methods",
    duration: "2.5 hours",
    price: "$75 per person",
    maxParticipants: 15
  },
];
