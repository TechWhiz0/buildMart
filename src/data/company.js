export const COMPANY = {
  name: 'BuildMart',
  tagline: 'Sand, Stone & Bricks Supplier — Prayagraj',
  phone: '+91 93351 54007',
  phoneHref: 'tel:+919335154007',
  whatsapp: '918318153991',
  whatsappDisplay: '+91 83181 53991',
  email: 'yashnishad.hamptons@gmail.com',
  address: 'Manoj Ballo Business, Azad Nagar, Prayagraj, Uttar Pradesh 211016',
  hours: 'Mon – Sat: 8:00 AM – 8:00 PM',
  mapLink: 'https://maps.app.goo.gl/g7zmk31me4YTULLs7?g_st=ac',
  mapEmbed:
    'https://www.google.com/maps?q=25.4159489,81.8172836&hl=en&z=16&output=embed',
}

export const whatsappLink = (message = 'Hi, I would like a quote for sand, stone or bricks.') =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`
