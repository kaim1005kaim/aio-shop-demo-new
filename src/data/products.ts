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
        answer: 'For optimal results, apply our Vitamin C Brightening Serum in the morning after cleansing and toning, but before moisturizer and sunscreen. Morning application is ideal because Vitamin C provides antioxidant protection against environmental stressors throughout the day. Allow the serum to fully absorb for 60-90 seconds before applying your next product. If you\\'re using other active ingredients like retinol, we recommend using those in your evening routine to avoid potential interactions.'
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
        question: 'Can I use the Vitamin C Brightening Serum if I\\'m pregnant or breastfeeding?',
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
  },
  
  // Electronics Category
  {
    id: 'electronics-smart-speaker',
    name: 'VoicePro Smart Speaker',
    brand: 'TechSonic',
    category: getCategoryById('electronics'),
    price: 79.99,
    rating: 4.6,
    description: 'Smart speaker with voice assistant. Works with smart home devices.',
    optimizedDescription: 'The VoicePro Smart Speaker features advanced far-field voice recognition with 7 precision microphones that can hear you from across the room even while music is playing. With compatibility for over 10,000 smart home devices, high-fidelity sound with dual 2.5\" woofers, and built-in privacy controls including a physical microphone off button.',
    shortDescription: 'Smart speaker with assistant.',
    optimizedShortDescription: 'Premium smart speaker with 7-mic far-field voice recognition, high-fidelity sound, and compatibility with 10,000+ smart home devices.',
    metaDescription: 'Smart speaker for home.',
    optimizedMetaDescription: 'VoicePro Smart Speaker with 7-mic far-field voice recognition, dual 2.5\" woofers for immersive sound, works with 10,000+ smart home devices, and features advanced privacy controls.',
    features: [
      'Voice assistant',
      'Plays music',
      'Controls smart home',
      'Answers questions'
    ],
    optimizedFeatures: [
      'Advanced far-field voice recognition with array of 7 precision microphones that can hear you from 30 feet away even while music is playing',
      'Immersive, room-filling sound with dual 2.5\" woofers, 1\" tweeter, and passive bass radiator for rich, detailed audio across all frequencies',
      'Compatible with over 10,000 smart home devices including lights, thermostats, locks, cameras, and entertainment systems',
      'Built-in privacy controls including physical microphone disconnect switch and the ability to delete voice recordings',
      'Multi-room audio synchronization allows playback across multiple speakers with less than 10ms latency'
    ],
    specs: {
      'Dimensions': '5.8\" x 5.8\" x 6.9\"',
      'Weight': '2.5 lbs',
      'Speakers': 'Dual 2.5\" woofers, 1\" tweeter, passive radiator',
      'Microphones': '7-microphone array with beamforming',
      'Connectivity': 'Dual-band Wi-Fi (802.11 a/b/g/n/ac), Bluetooth 5.0',
      'Power': '15W power adapter (included)',
      'Audio Formats': 'MP3, AAC, FLAC, Apple Lossless',
      'Voice Assistant': 'Built-in AI assistant with continuous updates'
    },
    faqs: [
      {
        question: 'Can it control my lights?',
        answer: 'Yes, if they\\'re compatible smart lights.'
      },
      {
        question: 'Does it work without internet?',
        answer: 'Basic functions only.'
      },
      {
        question: 'Can I use it for calls?',
        answer: 'Yes, voice calls are supported.'
      }
    ],
    optimizedFaqs: [
      {
        question: 'What types of smart home devices is the VoicePro Smart Speaker compatible with?',
        answer: 'The VoicePro Smart Speaker works with over 10,000 smart home devices across major ecosystems including SmartThings, HomeKit, ZigBee, and Z-Wave protocols. This includes popular brands of smart lights (Philips Hue, LIFX, Nanoleaf), thermostats (Nest, Ecobee), door locks (August, Schlage), security cameras (Ring, Arlo), entertainment systems (Sonos, Roku), and kitchen appliances. New device compatibility is added regularly through automatic software updates.'
      },
      {
        question: 'How does the VoicePro Smart Speaker protect my privacy and security?',
        answer: 'The VoicePro was built with privacy as a cornerstone feature. It includes a physical microphone disconnect switch that electrically cuts the microphone connection when activated (indicated by a red LED). All voice processing is performed with edge computing when possible, minimizing cloud transmission. You can delete your voice history at any time through the companion app or by voice command. Additionally, all cloud communications are encrypted with AES-256, and we conduct regular security audits by third-party firms to ensure your data remains protected.'
      },
      {
        question: 'What's the range of the voice recognition in the VoicePro Smart Speaker?',
        answer: 'The VoicePro features our most advanced far-field voice recognition technology with 7 precision microphones arranged in a circular array with beamforming and acoustic echo cancellation. It can reliably detect the wake word and commands from up to 30 feet away, even when music is playing at moderate volumes or in rooms with ambient noise. The speaker uses AI algorithms to distinguish between commands and background conversations, reducing false activations by 43% compared to previous models.'
      },
      {
        question: 'How do I set up multi-room audio with multiple VoicePro speakers?',
        answer: 'Setting up multi-room audio is simple with the VoicePro app. After connecting all your speakers to the same WiFi network, open the app and select \"Create Speaker Group.\" Choose which speakers to include and optionally assign them to specific rooms. Once configured, you can play synchronized audio across all speakers with less than 10ms latency between devices. You can control volume individually for each speaker or adjust the group volume simultaneously. Simply say \"Play [content] everywhere\" or \"Play [content] in the [room name]\" for voice control.'
      },
      {
        question: 'What music services and audio formats does the VoicePro Smart Speaker support?',
        answer: 'The VoicePro supports all major music streaming services including Spotify, Apple Music, Amazon Music, YouTube Music, Pandora, Tidal, and Deezer. It can also play local music via Bluetooth or from media servers using DLNA protocols. For audio formats, the speaker supports MP3, AAC, FLAC, WAV, ALAC (Apple Lossless), Ogg Vorbis, and high-resolution audio up to 24-bit/192kHz. The dual woofers, dedicated tweeter, and passive radiator work together to deliver room-filling sound with crisp highs and deep bass across all audio formats.'
      }
    ],
    images: [
      'https://images.pexels.com/photos/14595756/pexels-photo-14595756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    imageAlts: [
      'Smart speaker',
      'Speaker in living room',
      'Speaker controls'
    ],
    optimizedImageAlts: [
      'TechSonic VoicePro Smart Speaker with cylindrical design, fabric covering, and LED status ring, designed for 360-degree sound projection and far-field voice recognition',
      'VoicePro Smart Speaker in modern living room setting, showing how it integrates with smart home ecosystem to control lights, thermostat, and entertainment',
      'Close-up of VoicePro Smart Speaker top control panel with physical microphone off button, touch-sensitive volume controls, and action button for privacy-focused operation'
    ],
    optimizedImageAlt: 'TechSonic VoicePro Smart Speaker with 7-microphone array, dual 2.5\" woofers for immersive sound, and compatibility with over 10,000 smart home devices'
  },
  {
    id: 'electronics-fitness-tracker',
    name: 'HealthSync Fitness Tracker',
    brand: 'LifeWell',
    category: getCategoryById('electronics'),
    price: 89.99,
    rating: 4.4,
    description: 'Tracks steps, heart rate, and sleep. Waterproof design.',
    optimizedDescription: 'The HealthSync Fitness Tracker features 24/7 heart rate monitoring with medical-grade PPG sensors, 14-day battery life, and advanced sleep tracking that identifies sleep stages with 91% accuracy compared to lab studies. Its waterproof design (5ATM rated) and built-in GPS make it perfect for all activities from swimming to trail running.',
    shortDescription: 'Fitness tracker with health features.',
    optimizedShortDescription: 'Advanced fitness tracker with medical-grade heart monitoring, 14-day battery, 5ATM waterproofing, and AI-powered health insights.',
    metaDescription: 'Fitness tracker for health monitoring.',
    optimizedMetaDescription: 'HealthSync Fitness Tracker with 24/7 heart monitoring (medical-grade PPG sensors), 14-day battery life, 5ATM waterproof rating, built-in GPS, and AI health coach for personalized fitness guidance.',
    features: [
      'Tracks steps',
      'Heart rate monitor',
      'Sleep tracking',
      'Waterproof'
    ],
    optimizedFeatures: [
      '24/7 heart rate monitoring with medical-grade PPG sensors that scan 120 times per second for exceptional accuracy',
      'Advanced sleep tracking identifies REM, deep, and light sleep stages with 91% accuracy compared to sleep lab studies',
      'Exceptional 14-day battery life with rapid charging (full charge in 45 minutes)',
      'Built-in GPS and 5ATM waterproof rating (up to 50 meters) for tracking all activities from swimming to trail running',
      'AI-powered health insights that learn your patterns and provide personalized recommendations'
    ],
    specs: {
      'Display': '1.39\" AMOLED, 454 x 454 resolution',
      'Battery': '14 days typical use, 45-minute full charge',
      'Sensors': 'PPG heart rate, 3-axis accelerometer, gyroscope, SpO2, temperature',
      'Connectivity': 'Bluetooth 5.0, GPS/GLONASS',
      'Water Resistance': '5ATM (50 meters)',
      'Compatibility': 'iOS 12.0+, Android 7.0+',
      'Materials': 'Anodized aluminum case, silicone strap',
      'Dimensions': '43mm x 36mm x 11.8mm, 32g'
    },
    faqs: [
      {
        question: 'Is it waterproof?',
        answer: 'Yes, you can swim with it.'
      },
      {
        question: 'How long does the battery last?',
        answer: 'About 5-7 days with normal use.'
      },
      {
        question: 'Does it track calories?',
        answer: 'Yes, it estimates calories burned.'
      }
    ],
    optimizedFaqs: [
      {
        question: 'How accurate is the HealthSync Fitness Tracker's heart rate monitoring compared to medical devices?',
        answer: 'The HealthSync Fitness Tracker uses medical-grade PPG (photoplethysmography) sensors that scan 120 times per second, providing accuracy within ±3 BPM compared to EKG readings in clinical testing. Our proprietary PreciseHeart™ algorithm has been validated in studies with over 10,000 participants across diverse demographics. For resting heart rate, the accuracy increases to ±1 BPM. While not a replacement for medical devices, the tracker\\'s continuous monitoring can help identify patterns and anomalies worth discussing with healthcare providers.'
      },
      {
        question: 'What makes the HealthSync's sleep tracking more advanced than other fitness trackers?',
        answer: 'Our sleep tracking technology combines multiple sensors (heart rate variability, micro-movements, body temperature, and blood oxygen) with our AI algorithm that was trained on over 1 million hours of polysomnography-validated sleep data. This allows the HealthSync to identify REM, deep, and light sleep stages with 91% accuracy compared to sleep lab studies. The tracker also measures sleep quality factors like restlessness, breathing disturbances, and environmental factors. Each morning, you receive a detailed sleep score with actionable insights to improve your rest.'
      },
      {
        question: 'How waterproof is the HealthSync Fitness Tracker and what water activities can I use it for?',
        answer: 'The HealthSync is rated 5ATM (50 meters water-resistant), meaning it\\'s suitable for swimming in pools and open water, snorkeling, and showering. It can track swim metrics including laps, stroke type, SWOLF score, and calories burned. The touchscreen is designed to work even when wet, and the tracker automatically locks during water activities to prevent accidental inputs. After exposure to salt water, we recommend rinsing with fresh water. Note that while suitable for recreational swimming, the tracker is not rated for high-pressure water activities like jet skiing or scuba diving below 30 meters.'
      },
      {
        question: 'How does the HealthSync's battery last 14 days when other trackers need charging every few days?',
        answer: 'The HealthSync\\'s exceptional 14-day battery life results from three key innovations: (1) our custom AMOLED display with pixel-adaptive brightness that uses 40% less power than standard displays, (2) a hybrid processor architecture with separate low-power and high-performance cores that intelligently switches based on tasks, and (3) advanced power optimization algorithms that adjust sensor sampling frequencies based on activity. Even with 24/7 heart rate monitoring, sleep tracking, and 3 hours of GPS usage per week, you\\'ll get a full 14 days. When needed, our fast-charging technology provides a full charge in just 45 minutes.'
      },
      {
        question: 'What kind of personalized insights does the AI health coach provide?',
        answer: 'The AI health coach analyzes your activity, sleep, heart rate, and other metrics to identify patterns and provide personalized recommendations. After collecting 2 weeks of baseline data, it begins offering insights like optimal workout times based on your body\\'s readiness, recovery recommendations after detecting signs of overtraining, and sleep schedule adjustments to align with your natural circadian rhythm. The insights become more personalized over time as the AI learns your unique patterns. Premium subscribers receive additional insights including stress management techniques, nutrition timing suggestions, and comparative analysis with similar users.'
      }
    ],
    images: [
      'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4498475/pexels-photo-4498475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    imageAlts: [
      'Fitness tracker',
      'Tracker on wrist',
      'Tracker app screen'
    ],
    optimizedImageAlts: [
      'HealthSync Fitness Tracker with 1.39\" AMOLED display showing heart rate monitoring screen, featuring slim anodized aluminum case and comfortable silicone strap',
      'Person wearing HealthSync Fitness Tracker during outdoor run, demonstrating how the 5ATM waterproof device tracks activities with built-in GPS and continuous heart rate monitoring',
      'HealthSync companion app dashboard displaying comprehensive health metrics including sleep analysis, heart rate zones, activity summary, and personalized AI health insights'
    ],
    optimizedImageAlt: 'HealthSync Fitness Tracker with medical-grade heart monitoring, 1.39\" AMOLED display, 5ATM waterproof rating, and 14-day battery life for comprehensive health tracking'
  },
  
  // Fashion Category
  {
    id: 'fashion-eco-sneakers',
    name: 'EcoStep Recycled Sneakers',
    brand: 'GreenThread',
    category: getCategoryById('fashion'),
    price: 89`
    }
  ]
}
