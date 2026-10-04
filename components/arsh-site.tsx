'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, Mail, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'

const whatsappMessage = 'Hello Arsh Textiles, I am interested in your khadi garments and would like to know more about wholesale/bulk orders.'
const whatsappUrl = `https://wa.me/919997429690?text=${encodeURIComponent(whatsappMessage)}`

const products = [
  [
  'Red Striped Khadi Long Kurta',
  'A refined full-sleeve Khadi long kurta in rich red',
  'red-striped-khadi-kurta.png'
],
[
  'Men’s Khadi Kurta Collection',
  'A stylish Men’s Khadi Kurta collection',
  'mens-khadi-kurta-collection.png'
],
  ['Full Sleeves Khadi Shirt', 'A dependable everyday classic in breathable khadi.', 'half-Seelevs-1.png'],
  ['Cotton Khadi Shirts', 'Different types of cotton khadi.', 'cotton-khadi.png'],
  [
  'Janmashtami Festive Khadi Collection',
  'A festive Khadi collection , temple artwork and an ARSH TEXTILES festive presentation.',
  'janmashtami-khadi.png'
],
[
  'Striped Khadi Cotton Shirts',
  'Premium striped cotton Khadi shirts',
  'striped-khadi-shirts.png'
],

[
  'Full Sleeves Khadi Kurta Collection',
  'A versatile collection of full-sleeve Khadi kurtas',
  'full-sleeves-khadi-kurta.png'
],
[
  'Striped Khadi Kurta Collection',
  'A timeless Khadi collection',
  'striped-khadi-kurta-collection.png'
],
  ['Full Sleeves Khadi Shirt', 'A dependable everyday classic in breathable khadi.', 'full-Seelevs-1.png'],
  
]

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="section-intro"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{body && <p className="section-lede">{body}</p>}</div>
}

function WhatsAppLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <a className={className} href={whatsappUrl} target="_blank" rel="noreferrer">{children}</a>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Products', '#products'], ['Our Process', '#process'], ['Wholesale', '#wholesale'], ['FAQ', '#faq'], ['Contact', '#contact']]
  return <header className="site-header"><div className="nav-wrap"><a className="brand" href="#top" aria-label="Arsh Textiles home"><Image className="brand-logo" src="/arsh-logo-black.png" alt="Arsh Textiles logo" width={96} height={96} priority /></a><nav className={`desktop-nav ${open ? 'mobile-open' : ''}`}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<WhatsAppLink className="nav-cta">Enquire Now <ArrowRight size={15} /></WhatsAppLink></nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button></div></header>
}

function ProductCard({ product }: { product: string[] }) {
  return <article className="product-card"><div className="product-image"><Image
  src={`/${product[2]}`}
  alt={product[0]}
  fill
  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 33vw, 25vw"
  style={{
    objectFit: 'contain',
    objectPosition: 'center',
  }}
/>
</div><div className="product-copy"><h3>{product[0]}</h3><p>{product[1]}</p><WhatsAppLink className="text-link">Enquire <ArrowRight size={14} /></WhatsAppLink></div></article>
}

function ContactForm() {
  const [sent, setSent] = useState(false)
  return <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>{sent ? <div className="form-success"><Check size={22} /><h3>Dhanyavaad — your enquiry is noted.</h3><p>This frontend form is ready to connect with your preferred enquiry inbox.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Send another message <ArrowRight size={14} /></button></div> : <><div className="form-grid"><label>Name<input required name="name" placeholder="Your name" /></label><label>Phone<input required name="phone" type="tel" placeholder="+91" /></label><label>Email<input name="email" type="email" placeholder="you@example.com" /></label><label>Requirement<select name="requirement" defaultValue=""><option value="" disabled>Select one</option><option>Wholesale enquiry</option><option>Bulk order</option><option>Product catalogue</option><option>Availability & pricing</option></select></label></div><label>Message<textarea required name="message" rows={4} placeholder="Tell us what you are looking for..." /></label><button className="button button-dark" type="submit">Send Enquiry <ArrowRight size={16} /></button></>}</form>
}

export function ArshSite() {
  return <div id="top"><Navbar /><main>
    <section className="hero"><div className="hero-text"><p className="eyebrow">Meerut · Uttar Pradesh · India</p><h1>Khadi Jo<br /><em>Andaz</em> Banaye</h1><p className="hero-sub">Parampara, Swadeshi aur Khadi ki Pehchaan.</p><p className="hero-body">Shudh Khadi aur traditional Indian garments, taiyaar kiye jaate hain quality, comfort aur bharose ke saath.</p><div className="hero-actions"><a className="button button-dark" href="#products">View Collection <ArrowRight size={16} /></a><WhatsAppLink className="button button-outline">Wholesale Enquiry <MessageCircle size={16} /></WhatsAppLink></div></div><div className="hero-image"><Image src="/khadi-hero.png" alt="Natural khadi fabric and a traditional charkha" fill priority sizes="(max-width: 800px) 100vw, 50vw" /><span className="image-stamp">Shudh<br />Khadi</span></div></section>
    <div className="marquee"><span>Hand-spun spirit</span><span>·</span><span>Indian craftsmanship</span><span>·</span><span>Wholesale supply</span><span>·</span><span>Hand-spun spirit</span></div>
    <section className="section about" id="about"><div className="about-image"><Image src="/about.png" alt="Craftsperson working with cotton yarn and a charkha" fill sizes="(max-width: 800px) 100vw, 42vw" /><div className="vertical-note">Parampara · Swavalamban · Hunar</div></div><div className="about-copy"><SectionIntro eyebrow="Our Story" title="Khadi — Parampara, Swavalamban aur Hunar" body="ARSH TEXTILES is a Khadi garments manufacturer and wholesaler from Meerut, bringing together traditional Indian clothing, thoughtful production and dependable wholesale supply." /><p>From shirts and kurtas to payjamas, pants, sadri and kidswear, our collection is made for retailers, resellers and people who value the quiet character of Indian textiles.</p><div className="signature">ARSH TEXTILES <span>Meerut, India</span></div></div></section>
    <section className="section products-section" id="products"><SectionIntro eyebrow="The Collection" title="Hamari Khadi Collection" body="A considered range of traditional Indian garments for everyday wear, retail shelves and bulk requirements." /><div className="product-grid">{products.map((product, index) => <ProductCard key={`${product[0]}-${index}`} product={product} />)}</div></section>
    <section className="featured section"><div className="featured-image"><Image src="/khadi-featured.png" alt="Off-white khadi long kurta" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="featured-copy"><p className="eyebrow">Featured garment</p><h2>Shudh Khadi.<br /><em>Parampara se Judi Pehchaan.</em></h2><p>Natural comfort, Indian styling and the enduring appeal of cloth that feels honest. Made for a wardrobe that keeps its roots close.</p><ul><li><Check size={17} /> Traditional craftsmanship</li><li><Check size={17} /> Comfortable natural fabric</li><li><Check size={17} /> Suitable for wholesale requirements</li></ul><WhatsAppLink className="button button-dark">Enquire About This Product <ArrowRight size={16} /></WhatsAppLink></div></section>
    <section className="section values"><SectionIntro eyebrow="Why Arsh Textiles" title="Kapde se zyada — ek bharosa" /><div className="value-grid">{[['01','Khadi Focus','Traditional Khadi garments and Indian clothing.'],['02','Manufacturer & Wholesaler','Suitable for retailers, resellers and bulk buyers.'],['03','Traditional Craft','Inspired by India’s long textile and handloom tradition.'],['04','Product Variety','Shirts, kurtas, payjamas, pants, sadri and kidswear.'],['05','Bulk Orders','Wholesale and bulk enquiry support.'],['06','Direct Enquiry','Easy WhatsApp and contact communication.']].map(([num,title,body]) => <div className="value" key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></div>)}</div></section>
    <section className="process" id="process"><div className="section process-inner"><SectionIntro eyebrow="Our Process" title="Khadi Se Taiyaar Libas Tak — Hunar Ka Safar" body="A steady, thoughtful journey from fabric selection to wholesale packing and supply." /><div className="process-line">{['Fabric Selection','Khadi / Cotton Preparation','Cutting','Stitching','Finishing','Quality Check','Wholesale Packing & Supply'].map((step, i) => <div className="process-step" key={step}><span>{String(i+1).padStart(2,'0')}</span><p>{step}</p></div>)}</div></div></section>
    <section className="heritage"><div className="heritage-inner"><div className="heritage-wheel" aria-hidden="true">✳</div><p className="eyebrow">The Khadi Spirit</p><h2>Khadi Sirf Kapda Nahi —<br /><em>Ek Parampara Hai</em></h2><p>Parampara se juda kapda, rozmarra ke andaaz ke saath.</p></div></section>
    <section className="wholesale section" id="wholesale"><div><p className="eyebrow">For business</p><h2>Wholesale &<br /><em>Bulk Orders</em></h2></div><div><p>Retailers, resellers aur bulk buyers ke liye Khadi garments ki wholesale supply ke sambandh mein humse seedha sampark karein.</p><div className="wholesale-list"><span><Check size={16}/> Wholesale enquiry</span><span><Check size={16}/> Bulk order enquiry</span><span><Check size={16}/> Product catalogue enquiry</span><span><Check size={16}/> Availability & pricing enquiry</span></div><WhatsAppLink className="button button-dark">WhatsApp Wholesale Enquiry <MessageCircle size={16} /></WhatsAppLink></div></section>
    <section className="faq section" id="faq"><SectionIntro eyebrow="Frequently Asked Questions" title="Aapke sawaalon ke jawaab" body="Arsh Textiles ke products, wholesale supply aur ordering ke baare mein kuch zaroori jaankari." /><div className="faq-grid">{[['Kya aap wholesale aur bulk orders lete hain?','Haan, hum retailers, resellers aur bulk buyers ke liye wholesale supply aur bulk order enquiries handle karte hain.'],['Aapke garments kis fabric mein available hain?','Hamari range mein Shudh Khadi Cotton, cotton khadi aur white linen garments available hain.'],['Kaun-kaun se products milte hain?','Half aur full sleeve shirts, kurtas, payjamas, pants, sadri / waistcoat aur kids kurta payjama milte hain.'],['Order ya catalogue ke liye kaise sampark karein?','WhatsApp par enquiry bhejiye ya neeche diye gaye phone aur email par seedha sampark kijiye.'],['Aapka address kya hai?','H No. 187, Kidwai Nagar, Hapur Road, Meerut, Uttar Pradesh, India — Pincode 250002.']].map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="contact section" id="contact"><div className="contact-info"><SectionIntro eyebrow="Come say namaste" title="Sampark Karein" body="Aapke sawaalon, wholesale requirements aur product enquiries ke liye humse seedha baat karein." /><div className="contact-details"><a href="tel:+919997429690"><Phone size={17}/> +91 9997429690</a><a href="mailto:arshtextiles1@gmail.com"><Mail size={17}/> arshtextiles1@gmail.com</a><span><MapPin size={17}/> H No. 187, Kidwai Nagar, Hapur Road,<br /> Meerut, Uttar Pradesh – 250002</span></div><div className="socials"><a href="https://www.instagram.com/arsh_textiles?stkn=OWl6MXZ4bjZmcTNu" target="_blank" rel="noreferrer">Instagram <ArrowRight size={14}/></a><a href="https://www.facebook.com/share/1HTkQTrw5M/" target="_blank" rel="noreferrer">Facebook <ArrowRight size={14}/></a><a href="https://share.google/bIzQ3FboYzC9DmkkF" target="_blank" rel="noreferrer">Google <ArrowRight size={14}/></a></div></div><ContactForm /></section>
  </main><a className="floating-wa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Arsh Textiles on WhatsApp"><MessageCircle size={23} /></a><footer><div className="footer-main"><div><a className="footer-brand" href="#top" aria-label="Arsh Textiles home"><Image className="footer-logo" src="/arsh-logo-black.png" alt="Arsh Textiles logo" width={82} height={82} /></a><p>Authentic Indian Khadi garments<br />from Meerut, Uttar Pradesh.</p></div><div className="footer-links"><p className="eyebrow">Explore</p><a href="#about">About</a><a href="#products">Products</a><a href="#process">Our Process</a><a href="#wholesale">Wholesale</a><a href="#contact">Contact</a></div><div className="footer-links"><p className="eyebrow">Contact</p><a href="tel:+919997429690">+91 9997429690</a><a href="mailto:arshtextiles1@gmail.com">arshtextiles1@gmail.com</a><span>H No. 187, Kidwai Nagar,<br />Hapur Road, Meerut</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ARSH TEXTILES</span><span>Made with respect for Indian craftsmanship.</span></div></footer></div>
}

export { whatsappUrl }
