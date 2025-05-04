import { Product } from '../types/product';
import { categories } from './categories';

// Find categories by ID
const getCategoryById = (id: string) => categories.find(c => c.id === id) || categories[0];

export const products: Product[] = [
  // Beauty Category
  {
    id: 'beauty-led-facial',
    name: 'Advanced LED Facial Device',
    brand: 'BeautyTech Pro',
    category: getCategoryById('beauty'),
    price: 129.99,
    rating: 4.7,
    description: 'LED facial device for home use. Helps with skin issues.',
    optimizedDescription: 'Professional-grade LED facial device with 5 light therapy modes for anti-aging, acne treatment, and skin rejuvenation. Clinically tested to reduce wrinkles by up to 25% in 8 weeks and improve skin texture and tone with regular use.',
    shortDescription: 'LED facial device for home use.',
    optimizedShortDescription: 'Professional LED facial device with 5 light therapy modes clinically proven to reduce wrinkles and treat acne.',
    metaDescription: 'LED facial device to improve skin.',
    optimizedMetaDescription: 'Advanced LED Facial Device with 5 light therapy modes for anti-aging, acne treatment & skin rejuvenation. FDA-approved, clinically tested to reduce wrinkles by 25% in 8 weeks.',
    features: [
      'LED lights',
      'Rechargeable',
      'Multiple modes',
      'Timer function'
    ],
    optimizedFeatures: [
      '5 light therapy modes: Red (anti-aging), Blue (acne), Yellow (inflammation), Green (pigmentation), Purple (cell regeneration)',
      'Clinically tested and shown to reduce wrinkles by up to 25% in 8 weeks of regular use',
      'Rechargeable lithium-ion battery with 60-minute runtime per charge',
      'FDA-approved for home use with built-in safety timer and eye protection',
      'Waterproof design (IPX6 rated) for use during your skincare routine'
    ],
    specs: {
      'Dimensions': '6.5 x 3.2 x 1.1 inches',
      'Weight': '8.5 oz',
      'Battery': 'Rechargeable lithium-ion, 1200mAh',
      'Charging Time': '3 hours',
      'Usage Time': '60 minutes per charge',
      'Wavelengths': 'Red (630nm), Blue (415nm), Yellow (590nm), Green (520nm), Purple (combination)',
      'Warranty': '2-year manufacturer warranty'
    },
    faqs: [
      {
        question: 'How does it work?',
        answer: 'It uses LED light to help skin.'
      },
      {
        question: 'How often should I use it?',
        answer: 'A few times a week.'
      },
      {
        question: 'Is it safe?',
        answer: 'Yes, but avoid looking directly at the light.'
      }
    ],
    optimizedFaqs: [
      {
        question: 'How does LED light therapy work for skin improvement?',
        answer: 'LED light therapy works by emitting specific wavelengths of light that penetrate the skin at varying depths. Each color targets different skin concerns: red light (630nm) stimulates collagen production and reduces wrinkles, blue light (415nm) kills acne-causing bacteria, yellow light (590nm) reduces inflammation and redness, green light (520nm) helps with pigmentation, and purple combines benefits for overall skin rejuvenation.'
      },
      {
        question: 'How often should I use the Advanced LED Facial Device for best results?',
        answer: 'For optimal results, we recommend using the device 3-5 times per week for the first 8 weeks, with each session lasting 10-15 minutes. After achieving your initial results, maintenance sessions of 1-2 times per week will help sustain the improvements. Consistency is key for maximum benefits.'
      },
      {
        question: 'Is the Advanced LED Facial Device safe for all skin types?',
        answer: 'Yes, the device is FDA-approved and safe for all skin types and tones. The LED technology is non-invasive and doesn\'t use harmful UV rays. However, if you have a specific skin condition or are using photosensitizing medications, we recommend consulting with a dermatologist before use. Always avoid looking directly at the lights and use the included eye protection.'
      },
      {
        question: 'Can I use the LED device with my regular skincare products?',
        answer: 'For best results, use the device on clean, dry skin before applying serums or moisturizers. This allows the light to penetrate without barriers. After your treatment, you can apply your regular skincare products. Some ingredients like retinol or acids may cause sensitivity when used immediately before or after LED therapy, so we recommend waiting at least 10 minutes between application.'
      },
      {
        question: 'How soon will I see results from using the LED facial device?',
        answer: 'Most users report seeing initial improvements within 2-4 weeks of consistent use, with significant results becoming visible after 8 weeks. For acne concerns, you may notice improvement sooner, sometimes within the first week. Anti-aging benefits like collagen stimulation and wrinkle reduction take longer as they involve structural changes in the skin.'
      }
    ],
    images: [
      'https://images.pexels.com/photos/3851868/pexels-photo-3851868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4047362/pexels-photo-4047362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    imageAlts: [
      'LED facial device',
      'Device in use',
      'Device showing different light modes'
    ],
    optimizedImageAlts: [
      'Advanced LED Facial Device with 5 light therapy modes and ergonomic handle for anti-aging and skin rejuvenation',
      'Woman using the Advanced LED Facial Device with red light mode to target wrinkles and stimulate collagen production',
      'Advanced LED Facial Device displaying its 5 different colored light therapy modes: red for anti-aging, blue for acne, yellow for inflammation, green for pigmentation, and purple for cell regeneration'
    ],
    optimizedImageAlt: 'Advanced LED Facial Device with 5 light therapy modes (red, blue, yellow, green, purple) for anti-aging, acne treatment, and skin rejuvenation'
  },
  {
    id: 'beauty-vitamin-serum',
    name: 'Vitamin C Brightening Serum',
    brand: 'NaturGlow',
    category: getCategoryById('beauty'),
    price: 42.99,
    rating: 4.5,
    description: 'Vitamin C serum for face. Helps brighten skin.',
    optimizedDescription: 'Potent 20% Vitamin C Brightening Serum with Hyaluronic Acid and Ferulic Acid that visibly brightens skin tone, reduces dark spots, and boosts collagen production for a more radiant complexion. Our stable, non-oxidizing formula ensures maximum efficacy with each application.',
    shortDescription: 'Vitamin C serum for brightening.',
    optimizedShortDescription: '20% Vitamin C Brightening Serum with Hyaluronic Acid & Ferulic Acid to reduce dark spots and boost collagen production.',
    metaDescription: 'Vitamin C serum to brighten skin.',
    optimizedMetaDescription: '20% Vitamin C Brightening Serum with Hyaluronic Acid & Ferulic Acid. Reduces dark spots by 33% in 4 weeks, boosts collagen, and provides antioxidant protection. Dermatologist tested.',
    features: [
      'Vitamin C',
      'Brightens skin',
      'Reduces spots',
      'Hydrating'
    ],
    optimizedFeatures: [
      'Potent 20% L-Ascorbic Acid (pure Vitamin C) for maximum brightening and collagen stimulation',
      'Enhanced with 0.5% Ferulic Acid to stabilize Vitamin C and boost antioxidant protection by 8x',
      'Hyaluronic Acid provides deep hydration while allowing the active ingredients to penetrate',
      'Airless pump packaging prevents oxidation, ensuring freshness with every use',
      'Clinically proven to reduce dark spots by 33% in 4 weeks of regular use'
    ],
    specs: {
      'Size': '1 fl oz / 30ml',
      'pH Level': '3.5 (optimal for Vitamin C absorption)',
      'Texture': 'Lightweight serum',
      'Scent': 'Subtle citrus',
      'Key Ingredients': '20% L-Ascorbic Acid, 0.5% Ferulic Acid, Sodium Hyaluronate, Vitamin E',
      'Free From': 'Parabens, Sulfates, Phthalates, Synthetic Fragrances',
      'Shelf Life': '12 months unopened, 3 months after opening'
    },
    faqs: [
      {
        question: 'When should I apply this?',
        answer: 'In the morning.'
      },
      {
        question: 'Will it irritate sensitive skin?',
        answer: 'It might, do a patch test first.'
      },
      {
        question: 'How long does it last?',
        answer: 'About 3 months with daily use.'
      }
    ],
    optimizedFaqs: [
      {
        question: 'When is the best time to apply Vitamin C Brightening Serum in my skincare routine?',
        answer: 'For optimal results, apply our Vitamin C Brightening Serum in the morning after cleansing and toning, but before moisturizer and sunscreen. Morning application is ideal because Vitamin C provides antioxidant protection against environmental stressors throughout the day. Allow the serum to fully absorb for 60-90 seconds before applying your next product. If you\'re using other active ingredients like retinol, we recommend using those in your evening routine to avoid potential interactions.'
      },
      {
        question: 'Is the Vitamin C Brightening Serum suitable for sensitive skin types?',
        answer: 'While our Vitamin C Brightening Serum is formulated to minimize irritation with a pH-balanced formula, those with very sensitive skin should introduce it gradually. We recommend performing a patch test on your inner arm for 24 hours before facial application. Start by using the serum every other day for the first week, then increase to daily use as your skin adjusts. The hyaluronic acid in our formula helps offset potential irritation from the active Vitamin C component.'
      },
      {
        question: 'How should I store the Vitamin C Brightening Serum to maintain its effectiveness?',
        answer: 'To preserve the potency of the Vitamin C Brightening Serum, store it in a cool, dark place away from direct sunlight and heat, which can accelerate oxidation. Our airless pump packaging significantly reduces oxygen exposure, but for maximum efficacy, avoid leaving the product in humid environments like bathrooms. The serum should remain clear to slightly yellow; if it turns dark orange or brown, this indicates oxidation and reduced effectiveness.'
      },
      {
        question: 'How long will one bottle of Vitamin C Brightening Serum last with regular use?',
        answer: 'One 30ml bottle of our Vitamin C Brightening Serum typically lasts approximately 2-3 months with daily application. The airless pump dispenser is designed to deliver the optimal amount (about 3-4 drops) for each application while preventing product waste. For best results and to maximize the lifespan of the active ingredients, we recommend using the serum within 3 months after opening.'
      },
      {
        question: 'Can I use the Vitamin C Brightening Serum if I\'m pregnant or breastfeeding?',
        answer: 'Vitamin C is generally considered safe during pregnancy and breastfeeding, unlike some other skincare ingredients like retinoids. However, as every pregnancy is different, we always recommend consulting with your healthcare provider before introducing any new skincare products during pregnancy or while breastfeeding. Our formula is free from parabens, artificial fragrances, and other potentially concerning ingredients, but your doctor can provide personalized advice for your situation.'
      }
    ],
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    imageAlts: [
      'Vitamin C serum bottle',
      'Applying serum to face',
      'Product texture'
    ],
    optimizedImageAlts: [
      'NaturGlow 20% Vitamin C Brightening Serum in airless pump bottle with dropper, containing stabilized L-ascorbic acid and hyaluronic acid for skin brightening',
      'Woman applying NaturGlow Vitamin C Brightening Serum to her face, demonstrating the lightweight texture that absorbs quickly without residue',
      'Close-up of NaturGlow Vitamin C Brightening Serum texture, showing the clear, slightly viscous formula with active ingredients that reduce dark spots and provide antioxidant protection'
    ],
    optimizedImageAlt: 'NaturGlow 20% Vitamin C Brightening Serum with Hyaluronic Acid and Ferulic Acid in airless pump dispenser for dark spot reduction and collagen production'
  }
];
