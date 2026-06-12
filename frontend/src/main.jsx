import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ShoppingCart, User, Menu, Star, ShieldCheck, Truck, RotateCcw, Leaf, Upload, Settings, Package, Newspaper, Gift, Tag, Image as ImageIcon } from 'lucide-react';
import ProductScrollShowcase from './ProductScrollShowcase.jsx';
import './styles.css';

const api = (path, options = {}, token = null) => fetch(path, {
  ...options,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  }
});
const asset = (path) => {
  if (!path) return `${import.meta.env.BASE_URL}assets/product-stand.svg`;
  if (/^(https?:|\/api\/|\/storage\/|data:)/.test(path)) return path;
  const clean = path?.startsWith('/assets') ? path.slice(1) : 'assets/product-stand.svg';
  return `${import.meta.env.BASE_URL}${clean}`;
};
const money = (value) => `£${Number(value || 0).toFixed(2)}`;
const currentPrice = (product) => Number(product?.sale_price || product?.price || 0);
const primaryVariant = (product) => product?.variants?.[0] || { id: 'default', name: 'Default', colour_name: 'Default' };
const linesToList = (value) => Array.isArray(value) ? value : String(value || '').split('\n').map((line) => line.trim()).filter(Boolean);
const listToLines = (value) => Array.isArray(value) ? value.join('\n') : String(value || '');
const specsToText = (value = {}) => Object.entries(value || {}).map(([key, item]) => `${key}: ${item}`).join('\n');
const textToSpecs = (value) => Object.fromEntries(String(value || '').split('\n').map((line) => line.split(':')).filter(([key, item]) => key?.trim() && item?.trim()).map(([key, ...rest]) => [key.trim(), rest.join(':').trim()]));
const productImages = [
  '/assets/products/frame-desert-tan-1.jpg',
  '/assets/products/frame-barlow-1.jpg',
  '/assets/products/frame-barlow-kit-1.jpg',
  '/assets/products/frame-desert-kit-1.jpg'
];
const secretFields = [
  ['stripe_secret_key', 'Stripe Secret Key'],
  ['smtp2go_api_key', 'SMTP2GO API Key'],
  ['smtp2go_password', 'SMTP2GO Password'],
  ['mailchimp_api_key', 'Mailchimp API Key'],
  ['mailchimp_list_id', 'Mailchimp List ID'],
  ['tree_nation_api_key', 'Tree-Nation API Key'],
  ['shiptheory_api_key', 'Shiptheory API Key']
];

const demoProducts = [
  product('FRAME III - Desert Tan', 'frame-iii-desert-tan', 69.99, 'Desert Tan', '#A6936F', productImages[0]),
  product('FRAME III - Barlow', 'frame-iii-barlow', 69.99, 'Barlow', '#B9A678', productImages[1]),
  product('FRAME III - Barlow Kit', 'frame-iii-barlow-kit', 79.99, 'Black/Gold', '#A6936F', productImages[2]),
  product('FRAME III - Desert Kit', 'frame-iii-desert-kit', 79.99, 'Desert Tan', '#A6936F', productImages[3])
];

function product(name, slug, price, colour, accent, image) {
  return {
    id: slug,
    name,
    slug,
    price,
    category: { name: 'Helmet Stands', slug: 'helmet-stands' },
    hero_image: image,
    gallery: [image, ...productImages.filter((item) => item !== image)],
    short_description: 'Premium modular wall-mounted helmet stand engineered for protection and precision.',
    description: 'Premium wall-mounted helmet stand engineered from carbon fibre infused plastic for exceptional durability and strength. Designed to protect and display your valuable helmets while maximizing garage space.',
    features: ['Carbon fibre infused construction', 'Holds all helmet sizes and types', 'Precision-cut mounting holes', 'Included 4-inch mounting screws', 'Supports up to 15kg per stand', 'Weather-resistant materials'],
    specifications: { Material: 'Carbon Fibre Infused Plastic', Dimensions: '8" x 6" x 4"', Weight: '0.5kg', Mounting: 'Wall-mounted with included hardware', Finish: 'Matte with accent details' },
    variants: [
      { id: `${slug}-gold`, name: 'Black/Gold', colour_name: 'Black/Gold', accent_hex: '#A6936F', image },
      { id: `${slug}-silver`, name: 'Black/Silver', colour_name: 'Black/Silver', accent_hex: '#C5C5C5', image },
      { id: `${slug}-accent`, name: colour, colour_name: colour, accent_hex: accent, image }
    ],
    reviews: [
      { id: 1, rating: 5, user: { name: 'Alex Thompson' }, body: 'Exceptional build quality. The installation was straightforward and the stand looks premium on my garage wall.' },
      { id: 2, rating: 5, user: { name: 'Maria Garcia' }, body: 'Perfect for my collection. Holds helmets securely and the gold accent is a nice touch.' }
    ]
  };
}

function App() {
  const [path, setPath] = useState(location.pathname);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  const [auth, setAuth] = useState(() => JSON.parse(localStorage.getItem('auth') || 'null'));
  const [siteStatus, setSiteStatus] = useState({ maintenance_mode: true });

  const nav = (to) => {
    history.pushState(null, '', to);
    setPath(to);
    scrollTo(0, 0);
  };
  window.onpopstate = () => setPath(location.pathname);

  const addToCart = (product, variant, quantity = 1) => {
    const next = [...cart, { product, variant, quantity }];
    setCart(next);
    localStorage.setItem('cart', JSON.stringify(next));
  };

  const refreshSiteStatus = () => api('/api/site-status').then((r) => r.json()).then(setSiteStatus).catch(() => {});

  useEffect(() => {
    refreshSiteStatus();
  }, []);

  const isAdmin = auth?.user?.role === 'admin';
  const authPath = path === '/account' || path === '/admin';
  const common = { nav, cart, setCart, auth, setAuth, addToCart, refreshSiteStatus };
  let page = <Home {...common} />;
  if (path.startsWith('/shop')) page = <Shop {...common} />;
  if (path.startsWith('/product/')) page = <ProductPage {...common} slug={path.split('/').pop()} />;
  if (path === '/basket') page = <Basket {...common} />;
  if (path === '/checkout') page = <Checkout {...common} />;
  if (path === '/showcase') page = <Showcase {...common} />;
  if (path === '/blog') page = <Blog {...common} />;
  if (path.startsWith('/blog/')) page = <BlogPost {...common} />;
  if (path === '/account') page = <Account {...common} />;
  if (path === '/admin') page = <Admin {...common} />;
  if (['/about', '/our-story', '/contact', '/privacy-policy', '/terms', '/shipping-returns'].includes(path)) page = <ContentPage path={path} {...common} />;

  if (siteStatus.maintenance_mode && !isAdmin && !authPath) {
    return <MaintenancePage nav={nav} />;
  }

  return <><Header nav={nav} cart={cart} auth={auth} /><main>{page}</main><Footer nav={nav} /></>;
}

function MaintenancePage({ nav }) {
  return <main className="maintenance-page">
    <section className="maintenance-panel">
      <button className="maintenance-logo" onClick={() => nav('/account')}>9SIXTY</button>
      <p className="eyebrow">Private Preview</p>
      <h1>Maintenance In Progress</h1>
      <p>We are preparing the 9SIXTY launch experience. The storefront is temporarily offline while the final product and checkout setup is completed.</p>
      <button className="gold" onClick={() => nav('/account')}>Admin Login</button>
    </section>
  </main>;
}

function Header({ nav, cart, auth }) {
  const [open, setOpen] = useState(false);
  const links = [['/', 'Home'], ['/shop', 'Shop'], ['/about', 'About'], ['/our-story', 'Our Story']];
  const go = (to) => {
    nav(to);
    setOpen(false);
  };
  return <>
    <header className="site-header">
      <button className="mobile-icon" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}><Menu size={22} /></button>
      <button className="brand" onClick={() => go('/')} aria-label="9SIXTY home"><img src={asset('/assets/9sixty-header-logo.svg')} alt="9SIXTY" /></button>
      <nav className={open ? 'open' : ''}>{links.map(([to, label]) => <button key={to} onClick={() => go(to)}>{label}</button>)}<button onClick={() => go('/showcase')}>Showcase</button><button onClick={() => go('/blog')}>Blog</button></nav>
      <div className="header-actions"><button onClick={() => go('/account')} aria-label="Account"><User size={20} /></button><button onClick={() => go('/basket')} aria-label="Basket"><ShoppingCart size={22} /><span>{cart.length}</span></button></div>
    </header>
    {open && <button className="menu-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />}
  </>;
}

function Home({ nav, addToCart }) {
  const [homeData, setHomeData] = useState({ featured_products: demoProducts.slice(0, 3), reviews: demoProducts[0].reviews });

  useEffect(() => {
    api('/api/home')
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => setHomeData({
        featured_products: data.featured_products?.length ? data.featured_products : demoProducts.slice(0, 3),
        reviews: data.reviews?.length ? data.reviews : demoProducts[0].reviews
      }))
      .catch(() => {});
  }, []);

  return <>
    <section className="hero">
      <div className="hero-copy"><h1>Engineered<br /><span>For Excellence</span></h1><p>Premium modular wall-mounted stands designed to protect and preserve your valuable gear.</p><div><button onClick={() => nav('/shop')} className="gold">Shop Now</button><button onClick={() => nav('/showcase')}>Learn More</button></div></div>
    </section>
    <Section title="Featured Products">
      <div className="product-grid featured">{homeData.featured_products.slice(0, 3).map((p) => <ProductCard key={p.slug} product={p} nav={nav} addToCart={addToCart} />)}</div>
    </Section>
    <section className="band"><h2>Why Choose 9SIXTY</h2><p>Precision engineering meets premium material.</p><div className="benefits">{[[ShieldCheck, 'Premium Materials'], [Truck, 'Easy Installation'], [Package, 'Modular Design'], [Star, 'Built to Last']].map(([Icon, title]) => <article key={title}><Icon size={24}/><h3>{title}</h3><p>Crafted for refined garage and display environments.</p></article>)}</div></section>
    <Section title="What Our Customers Say"><div className="reviews">{homeData.reviews.concat(homeData.reviews.length < 3 ? [{ id: 'fallback-review', rating: 5, user: { name: 'Mike Johnson' }, body: 'Worth every penny. These stands are engineered to perfection.' }] : []).slice(0, 3).map((r) => <ReviewCard key={r.id} review={r} />)}</div></Section>
    <section className="cta"><h2>Ready To Upgrade Your Garage?</h2><p>Join thousands of satisfied customers who trust 9SIXTY for their gear storage.</p><button onClick={() => nav('/shop')}>Browse Collection</button></section>
  </>;
}

function Shop({ nav, addToCart }) {
  const [category, setCategory] = useState('All');
  const [colour, setColour] = useState('All');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [products, setProducts] = useState(demoProducts);
  const [categories, setCategories] = useState([{ name: 'Helmet Stands', slug: 'helmet-stands' }, { name: 'Kit Hangers', slug: 'kit-hangers' }, { name: 'Accessories', slug: 'accessories' }]);
  const categorySlug = category === 'All' ? '' : categories.find((item) => item.name === category)?.slug || '';
  const colours = ['All', ...Array.from(new Set(products.flatMap((p) => (p.variants || []).map((v) => v.colour_name)).filter(Boolean)))];
  const selectCategory = (value) => {
    setCategory(value);
    setFiltersOpen(false);
  };
  const selectColour = (value) => {
    setColour(value);
    setFiltersOpen(false);
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (categorySlug) params.set('category', categorySlug);
    if (colour !== 'All') params.set('colour', colour);
    api(`/api/products${params.toString() ? `?${params}` : ''}`)
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => {
        setProducts(data.products?.data?.length ? data.products.data : []);
        if (data.categories?.length) setCategories(data.categories);
      })
      .catch(() => {});
  }, [categorySlug, colour]);

  return <section className="shop-page page-wrap"><div className="shop-mobile-head"><h1>Shop Collection</h1><button className="filter-toggle" onClick={() => setFiltersOpen(!filtersOpen)} aria-expanded={filtersOpen}>Filters</button></div><aside className={`filters ${filtersOpen ? 'open' : ''}`}><h4>Category</h4>{['All', ...categories.map((item) => item.name)].map((x) => <button className={category === x ? 'active' : ''} onClick={() => selectCategory(x)} key={x}>{x}</button>)}<h4>Color</h4>{colours.map((x) => <button className={colour === x ? 'active' : ''} onClick={() => selectColour(x)} key={x}>{x}</button>)}<h4>Price Range</h4>{['All', 'Under £50', '£50 - £100', 'Over £100'].map((x) => <button onClick={() => setFiltersOpen(false)} key={x}>{x}</button>)}</aside><div className="shop-results"><h1>Shop Collection</h1><div className="product-grid shop-grid">{products.map((p) => <ProductCard key={p.slug} product={p} nav={nav} addToCart={addToCart} />)}{!products.length && <p className="muted">No products match those filters.</p>}</div></div></section>;
}

function ProductCard({ product: p, nav }) {
  const outOfStock = p.stock_status === 'out_of_stock' || (p.manage_stock && Number(p.stock_quantity || 0) <= 0);
  return <article className="product-card"><button className="image-button" onClick={() => nav(`/product/${p.slug}`)}><img src={asset(p.hero_image)} alt={p.name} /></button><div className="card-body"><div className="card-title-row"><h3>{p.name}</h3><strong className="card-price">{p.sale_price ? <><s>{money(p.price)}</s> {money(p.sale_price)}</> : money(p.price)}</strong></div>{outOfStock && <p className="stock-note">Out of stock</p>}<div className="card-actions"><button className="gold" disabled={outOfStock} onClick={() => nav(`/product/${p.slug}`)}>Highlights</button><button onClick={() => nav(`/product/${p.slug}`)}>View Details</button></div></div></article>;
}

function ProductPage({ slug, addToCart }) {
  const [p, setProduct] = useState(demoProducts.find((item) => item.slug === slug) || demoProducts[0]);
  const [image, setImage] = useState((p.gallery || [p.hero_image])[0]);
  const [variant, setVariant] = useState(primaryVariant(p));
  const [qty, setQty] = useState(1);
  const gallery = p.gallery?.length ? p.gallery : [p.hero_image].filter(Boolean);
  const outOfStock = p.stock_status === 'out_of_stock' || (p.manage_stock && Number(p.stock_quantity || 0) <= 0);

  useEffect(() => {
    api(`/api/products/${slug}`)
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => {
        setProduct(data.product);
        setImage((data.product.gallery?.length ? data.product.gallery : [data.product.hero_image])[0]);
        setVariant(primaryVariant(data.product));
      })
      .catch(() => {});
  }, [slug]);

  return <section className="product-detail page-wrap"><div className="gallery"><img className="main-img" src={asset(image)} alt={p.name} /><div className="thumbs">{gallery.map((img) => <button className={image === img ? 'active' : ''} onClick={() => setImage(img)} key={img}><img src={asset(img)} alt="" /></button>)}</div></div><div className="buy-panel"><h1>{p.name}</h1><Stars /> <span className="muted">4.9 ({p.reviews?.length || 0} reviews)</span><p className="product-price">{p.sale_price ? <><s>{money(p.price)}</s> {money(p.sale_price)}</> : money(p.price)}</p>{p.short_description && <p>{p.short_description}</p>}<h4>Select Variant</h4><div className="variant-row">{(p.variants || []).map((v) => <button className={variant.id === v.id ? 'active' : ''} style={{ '--variant-colour': v.colour_hex || v.accent_hex || '#303030', '--variant-accent': v.accent_hex || v.colour_hex || '#A6936F' }} onClick={() => setVariant(v)} key={v.id}>{v.name}</button>)}</div><h4>Quantity</h4><div className="qty"><button onClick={() => setQty(Math.max(1, qty - 1))}>-</button><strong>{qty}</strong><button onClick={() => setQty(qty + 1)}>+</button></div>{outOfStock && <p className="stock-note">Out of stock</p>}<div className="purchase"><button className="gold" disabled={outOfStock} onClick={() => addToCart(p, variant, qty)}>Add To Cart</button><button disabled={outOfStock}>Buy Now</button></div><div className="promise"><span><Truck />Free Shipping</span><span><ShieldCheck />2 Year Warranty</span><span><RotateCcw />30 Day Returns</span></div><article className="description"><h3>Product Description</h3><p>{p.description}</p><h4>Key Features</h4>{(p.features || []).map((f) => <p className="check" key={f}>✓ {f}</p>)}</article></div><div className="wide"><h2>Specifications</h2><table><tbody>{Object.entries(p.specifications || {}).map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table><h2>Customer Reviews</h2>{(p.reviews || []).map((r) => <ReviewCard key={r.id} review={r} />)}</div></section>;
}

function Basket({ cart, setCart, nav }) {
  const subtotal = cart.reduce((sum, item) => sum + currentPrice(item.product) * item.quantity, 0);
  const shipping = subtotal >= 70 || subtotal === 0 ? 0 : 5.99;
  return <section className="page-wrap narrow"><h1>Basket</h1>{cart.length === 0 && <p className="muted">Your basket is empty.</p>}{cart.map((item, index) => <div className="basket-line" key={`${item.product.slug}-${index}`}><img src={asset(item.product.hero_image)} alt="" /><div><h3>{item.product.name}</h3><p>{item.variant.name} x {item.quantity}</p></div><strong>{money(currentPrice(item.product) * item.quantity)}</strong></div>)}<div className="summary"><p>Subtotal <strong>{money(subtotal)}</strong></p><p>Shipping <strong>{shipping ? money(shipping) : 'Free'}</strong></p><p>Trees planted <strong>{Math.floor(subtotal / 50)}</strong></p><h2>Total {money(subtotal + shipping)}</h2><button className="gold" onClick={() => nav('/checkout')}>Checkout</button><button className="clear-basket" onClick={() => { setCart([]); localStorage.removeItem('cart'); }}>Clear Basket</button></div></section>;
}

function Checkout({ cart, auth, nav }) {
  const subtotal = cart.reduce((sum, item) => sum + currentPrice(item.product) * item.quantity, 0);
  return <section className="page-wrap checkout"><div><h1>Checkout</h1><form className="form-grid"><input placeholder="Email" defaultValue={auth?.user?.email || ''} /><input placeholder="Full name" /><input placeholder="Phone" /><input placeholder="Address line 1" /><input placeholder="Town/City" /><input placeholder="Postcode" /><button type="button" className="gold" onClick={() => nav('/account')}>Pay With Stripe</button><p className="muted">Stripe Payment Element, Apple Pay and Google Pay hooks are prepared in the API structure.</p></form></div><aside className="summary"><h2>Order Summary</h2><p>Subtotal <strong>{money(subtotal)}</strong></p><p>Shipping <strong>{subtotal >= 70 ? 'Free' : '£5.99'}</strong></p><p><Leaf size={16}/> Trees from this order <strong>{Math.floor(subtotal / 50)}</strong></p></aside></section>;
}

function Showcase({ nav }) {
  return <ProductScrollShowcase nav={nav} />;
}

function Blog({ nav }) {
  return <Section title="Journal"><div className="product-grid">{['Designing the perfect garage wall', 'Why helmet storage matters', '9SIXTY material notes'].map((title) => <article className="content-card" key={title}><Newspaper /><h3>{title}</h3><p>Launch content placeholder with SEO metadata support.</p><button onClick={() => nav(`/blog/${title.toLowerCase().replaceAll(' ', '-')}`)}>Read</button></article>)}</div></Section>;
}

function BlogPost() { return <ContentPage path="/blog-post" />; }

function Account({ auth, setAuth, nav }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: 'customer@9sixty.test', password: 'Password123!' });
  const [error, setError] = useState('');
  const login = async () => {
    setError('');
    const endpoint = mode === 'register' ? '/api/auth/register' : '/api/auth/login';
    const body = mode === 'register' ? form : { email: form.email, password: form.password };
    const response = await api(endpoint, { method: 'POST', body: JSON.stringify(body) });
    const data = await response.json();
    if (!response.ok) {
      setError(data.message || 'Could not sign in.');
      return;
    }
    setAuth(data);
    localStorage.setItem('auth', JSON.stringify(data));
    if (data.user.role === 'admin') nav('/admin');
  };
  if (auth) return <section className="page-wrap narrow"><h1>Account</h1><p>Signed in as {auth.user.name}</p>{auth.user.role === 'admin' && <button className="gold" onClick={() => nav('/admin')}>Open Admin Dashboard</button>}<div className="content-card"><h3>Order History</h3><p>No live orders yet. Paid orders will appear here through `/api/account/orders`.</p></div><button onClick={() => { setAuth(null); localStorage.removeItem('auth'); }}>Log Out</button></section>;
  return <section className="page-wrap narrow"><h1>Customer Account</h1><div className="tabs"><button className={mode === 'login' ? 'active' : ''} onClick={() => { setMode('login'); setForm({ ...form, email: 'customer@9sixty.test' }); }}>Login</button><button className={mode === 'register' ? 'active' : ''} onClick={() => setMode('register')}>Register</button><button className={mode === 'admin' ? 'active' : ''} onClick={() => { setMode('admin'); setForm({ ...form, email: 'admin@9sixty.test' }); }}>Admin Login</button></div><form className="form-grid">{mode === 'register' && <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />}<input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />{error && <p className="form-error">{error}</p>}<button type="button" className="gold" onClick={login}>{mode === 'register' ? 'Create Account' : 'Sign In'}</button></form></section>;
}

function Admin({ auth, setAuth, nav, refreshSiteStatus }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dashboard, setDashboard] = useState(null);
  const [editing, setEditing] = useState(null);
  const [activeSection, setActiveSection] = useState('Products');
  const [categoryForm, setCategoryForm] = useState({ name: '', slug: '', description: '' });
  const [media, setMedia] = useState([]);
  const [mediaPicker, setMediaPicker] = useState(null);
  const [settingsForm, setSettingsForm] = useState({ maintenance_mode: true, shipping_fee: '5.99', free_shipping_threshold: '70', stripe_publishable_key: '' });
  const [secretForm, setSecretForm] = useState(() => Object.fromEntries(secretFields.map(([key]) => [key, ''])));
  const [secretStatus, setSecretStatus] = useState({});
  const [message, setMessage] = useState('');
  const isAdmin = auth?.user?.role === 'admin';
  const newProduct = () => ({
    category_id: categories[0]?.id || '',
    name: 'New 9SIXTY Product',
    slug: '',
    sku: '',
    short_description: '',
    description: '',
    price: '0.00',
    sale_price: '',
    hero_image: productImages[0],
    gallery: productImages,
    features: [],
    specifications: {},
    meta_title: '',
    meta_description: '',
    manage_stock: false,
    stock_quantity: '',
    stock_status: 'in_stock',
    low_stock_threshold: '',
    weight: '',
    dimensions: '',
    is_featured: false,
    is_active: true,
    variants: [{ colour_name: 'Black/Gold', name: 'Black/Gold', colour_hex: '#050505', accent_hex: '#A6936F', price_delta: 0, is_active: true }]
  });

  const loadCategories = () => {
    api('/api/admin/categories', {}, auth.token)
      .then((r) => r.json())
      .then((data) => setCategories(data.categories || []));
  };

  const loadMedia = () => {
    api('/api/admin/media', {}, auth.token)
      .then((r) => r.json())
      .then((data) => setMedia(data.media || []));
  };

  useEffect(() => {
    if (!isAdmin) return;
    api('/api/admin/dashboard', {}, auth.token).then((r) => r.json()).then(setDashboard);
    api('/api/admin/products', {}, auth.token).then((r) => r.json()).then((data) => setProducts(data.products?.data || []));
    api('/api/admin/settings', {}, auth.token).then((r) => r.json()).then((data) => {
      setSettingsForm((current) => ({ ...current, ...(data.settings || {}) }));
      setSecretStatus(data.secrets || {});
    });
    loadMedia();
    loadCategories();
  }, [isAdmin, auth?.token]);

  const uploadMedia = async (event, target = null) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    setMessage('');
    const uploaded = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('/api/admin/media', {
        method: 'POST',
        headers: { Authorization: `Bearer ${auth.token}` },
        body: formData
      });
      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message || 'Image upload failed.');
        continue;
      }
      uploaded.push(data.media);
    }
    if (uploaded.length) {
      setMedia((current) => [...uploaded, ...current]);
      if (target === 'featured') setEditing((current) => ({ ...current, hero_image: uploaded[0].path }));
      if (target === 'gallery') setEditing((current) => ({ ...current, gallery: [...linesToList(current.gallery), ...uploaded.map((item) => item.path)] }));
      setMessage(`${uploaded.length} image${uploaded.length === 1 ? '' : 's'} uploaded.`);
    }
    event.target.value = '';
  };

  const chooseMedia = (item) => {
    if (!mediaPicker) return;
    if (mediaPicker === 'featured') setEditing({ ...editing, hero_image: item.path });
    if (mediaPicker === 'gallery') setEditing({ ...editing, gallery: [...linesToList(editing.gallery), item.path] });
    setMediaPicker(null);
  };

  const downloadMedia = async (item) => {
    const response = await fetch(item.download_url, { headers: { Authorization: `Bearer ${auth.token}` } });
    if (!response.ok) {
      setMessage('Image download failed.');
      return;
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = item.name || 'image';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const deleteMedia = async (item) => {
    if (item.readonly) return;
    if (!confirm(`Delete ${item.name}? This cannot be undone.`)) return;
    const response = await fetch(`/api/admin/media/${item.filename}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${auth.token}` }
    });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.message || 'Image delete failed.');
      return;
    }
    setMedia((current) => current.filter((mediaItem) => mediaItem.path !== item.path));
    if (editing?.hero_image === item.path) setEditing({ ...editing, hero_image: '' });
    if (editing?.gallery?.includes?.(item.path)) setEditing({ ...editing, gallery: linesToList(editing.gallery).filter((image) => image !== item.path) });
    setMessage('Image deleted.');
  };

  const saveProduct = async () => {
    const payload = {
      category_id: editing.category_id ? Number(editing.category_id) : null,
      name: editing.name,
      slug: editing.slug,
      sku: editing.sku || '',
      short_description: editing.short_description || '',
      description: editing.description || '',
      price: Number(editing.price || 0),
      sale_price: editing.sale_price === '' || editing.sale_price === null || editing.sale_price === undefined ? null : Number(editing.sale_price),
      hero_image: editing.hero_image || productImages[0],
      gallery: linesToList(editing.gallery),
      specifications: editing.specifications || {},
      features: linesToList(editing.features),
      meta_title: editing.meta_title || `${editing.name} | 9SIXTY`,
      meta_description: editing.meta_description || editing.short_description || '',
      manage_stock: Boolean(editing.manage_stock),
      stock_quantity: editing.stock_quantity === '' || editing.stock_quantity === null || editing.stock_quantity === undefined ? null : Number(editing.stock_quantity),
      stock_status: editing.stock_status || 'in_stock',
      low_stock_threshold: editing.low_stock_threshold === '' || editing.low_stock_threshold === null || editing.low_stock_threshold === undefined ? null : Number(editing.low_stock_threshold),
      weight: editing.weight === '' || editing.weight === null || editing.weight === undefined ? null : Number(editing.weight),
      dimensions: editing.dimensions || '',
      is_featured: Boolean(editing.is_featured),
      is_active: Boolean(editing.is_active),
      variants: editing.variants?.length ? editing.variants : [{ colour_name: 'Black/Gold', name: 'Black/Gold', colour_hex: '#050505', accent_hex: '#A6936F' }]
    };
    const response = await api(editing.id ? `/api/admin/products/${editing.id}` : '/api/admin/products', { method: editing.id ? 'PUT' : 'POST', body: JSON.stringify(payload) }, auth.token);
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.message || 'Product could not be saved.');
      return;
    }
    setProducts(editing.id ? products.map((product) => product.id === data.product.id ? data.product : product) : [data.product, ...products]);
    setEditing(data.product);
    setMessage('Product saved.');
  };

  const deleteProduct = async () => {
    if (!editing?.id) return;
    if (!confirm(`Delete ${editing.name}? This cannot be undone.`)) return;
    setMessage('');
    const response = await api(`/api/admin/products/${editing.id}`, { method: 'DELETE' }, auth.token);
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.message || 'Product could not be deleted.');
      return;
    }
    setProducts(products.filter((product) => product.id !== editing.id));
    setEditing(null);
    setMessage(data.message || 'Product deleted.');
  };

  const createCategory = async () => {
    setMessage('');
    const response = await api('/api/admin/categories', {
      method: 'POST',
      body: JSON.stringify(categoryForm)
    }, auth.token);
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.message || 'Category could not be created.');
      return;
    }
    setCategories([...categories, data.category]);
    setCategoryForm({ name: '', slug: '', description: '' });
    setMessage('Category created.');
  };

  const saveSettings = async () => {
    setMessage('');
    const filledSecrets = Object.fromEntries(Object.entries(secretForm).filter(([, value]) => String(value || '').trim() !== ''));
    const response = await api('/api/admin/settings', {
      method: 'PUT',
      body: JSON.stringify({ ...settingsForm, ...filledSecrets })
    }, auth.token);
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.message || 'Settings could not be saved.');
      return;
    }
    setSettingsForm((current) => ({ ...current, ...(data.settings || {}) }));
    setSecretForm(Object.fromEntries(secretFields.map(([key]) => [key, ''])));
    setSecretStatus(data.secrets || {});
    refreshSiteStatus?.();
    setMessage('Settings saved.');
  };

  if (!isAdmin) {
    return <section className="page-wrap narrow"><h1>Admin Login</h1><p className="muted">Use the admin account to manage products, orders, reviews and settings.</p><div className="content-card"><p><strong>Email:</strong> admin@9sixty.test</p><p><strong>Password:</strong> Password123!</p><button className="gold" onClick={() => nav('/account')}>Go To Login</button></div></section>;
  }

  const navItems = [[Package, 'Products'], [Tag, 'Categories'], [ShoppingCart, 'Orders'], [User, 'Customers'], [Newspaper, 'Blog posts'], [Settings, 'Settings/API keys'], [Gift, 'Gift cards'], [Star, 'Reviews'], [ImageIcon, 'Media library'], [Upload, 'Discount codes']];

  return <section className="admin page-wrap">
    <h1>Admin Dashboard</h1>
    <div className="metrics"><article><strong>{dashboard?.orders ?? '-'}</strong><span>Orders</span></article><article><strong>{money(dashboard?.revenue ?? 0)}</strong><span>Revenue</span></article><article><strong>{dashboard?.pending_reviews ?? '-'}</strong><span>Pending Reviews</span></article></div>
    <div className="admin-layout">
      <aside className="admin-nav">
        {navItems.map(([Icon, label]) => <button className={label === activeSection ? 'active' : ''} key={label} onClick={() => { setActiveSection(label); setMessage(''); }}><Icon size={18} />{label}</button>)}
        <button onClick={() => { setAuth(null); localStorage.removeItem('auth'); nav('/account'); }}>Log Out</button>
      </aside>
      <section className="admin-panel">
        {activeSection === 'Products' && <>
          <div className="admin-panel-head"><h2>Products</h2><button className="gold" onClick={() => { setEditing(newProduct()); setMessage(''); }}>Add Product</button></div>
          <div className="admin-products">{products.map((product) => <button className={editing?.id === product.id ? 'active' : ''} key={product.id} onClick={() => { setEditing(product); setMessage(''); }}><img src={asset(product.hero_image)} alt="" /><span><strong>{product.name}</strong><small>{product.category?.name || 'No category'}</small></span><strong>{money(product.price)}</strong></button>)}</div>
          {editing && <div className="editor">
            <div className="editor-title"><h3>{editing.id ? 'Edit Product' : 'New Product'}</h3><div className="editor-actions">{editing.id && <button className="danger" onClick={deleteProduct}>Delete Product</button>}<button className="gold" onClick={saveProduct}>Save Product</button></div></div>
            <div className="product-editor-grid">
              <section className="editor-card wide">
                <h4>Product Content</h4>
                <label>Product name<input value={editing.name || ''} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></label>
                <label>Slug<input value={editing.slug || ''} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} placeholder="auto-generated if left blank" /></label>
                <label>Card excerpt<textarea value={editing.short_description || ''} onChange={(e) => setEditing({ ...editing, short_description: e.target.value })} placeholder="Short copy shown on product cards and summaries." /></label>
                <label>Full description<textarea value={editing.description || ''} onChange={(e) => setEditing({ ...editing, description: e.target.value })} /></label>
              </section>
              <section className="editor-card">
                <h4>Publish</h4>
                <label>Category<select value={editing.category_id || ''} onChange={(e) => setEditing({ ...editing, category_id: e.target.value ? Number(e.target.value) : null })}><option value="">No category</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
                <div className="editor-toggles"><label><input type="checkbox" checked={Boolean(editing.is_active)} onChange={(e) => setEditing({ ...editing, is_active: e.target.checked })} /> Published</label><label><input type="checkbox" checked={Boolean(editing.is_featured)} onChange={(e) => setEditing({ ...editing, is_featured: e.target.checked })} /> Featured product</label></div>
              </section>
              <section className="editor-card">
                <h4>Pricing</h4>
                <label>Regular price<input type="number" step="0.01" value={editing.price || ''} onChange={(e) => setEditing({ ...editing, price: e.target.value })} /></label>
                <label>Sale price<input type="number" step="0.01" value={editing.sale_price || ''} onChange={(e) => setEditing({ ...editing, sale_price: e.target.value })} /></label>
              </section>
              <section className="editor-card">
                <h4>Inventory</h4>
                <label>SKU<input value={editing.sku || ''} onChange={(e) => setEditing({ ...editing, sku: e.target.value })} /></label>
                <label>Stock status<select value={editing.stock_status || 'in_stock'} onChange={(e) => setEditing({ ...editing, stock_status: e.target.value })}><option value="in_stock">In stock</option><option value="out_of_stock">Out of stock</option><option value="on_backorder">On backorder</option></select></label>
                <div className="editor-toggles"><label><input type="checkbox" checked={Boolean(editing.manage_stock)} onChange={(e) => setEditing({ ...editing, manage_stock: e.target.checked })} /> Manage stock quantity</label></div>
                <label>Stock quantity<input type="number" min="0" value={editing.stock_quantity ?? ''} onChange={(e) => setEditing({ ...editing, stock_quantity: e.target.value })} /></label>
                <label>Low stock threshold<input type="number" min="0" value={editing.low_stock_threshold ?? ''} onChange={(e) => setEditing({ ...editing, low_stock_threshold: e.target.value })} /></label>
              </section>
              <section className="editor-card">
                <h4>Shipping Data</h4>
                <label>Weight<input type="number" step="0.01" value={editing.weight ?? ''} onChange={(e) => setEditing({ ...editing, weight: e.target.value })} placeholder="0.50" /></label>
                <label>Dimensions<input value={editing.dimensions || ''} onChange={(e) => setEditing({ ...editing, dimensions: e.target.value })} placeholder="8 x 6 x 4 inches" /></label>
              </section>
              <section className="editor-card wide">
                <h4>Images</h4>
                <div className="image-manager">
                  <div>
                    <h5>Featured image</h5>
                    {editing.hero_image ? <div className="selected-image"><img src={asset(editing.hero_image)} alt="" /><button type="button" onClick={() => setEditing({ ...editing, hero_image: '' })}>Remove</button></div> : <div className="empty-media">No featured image selected</div>}
                    <div className="media-actions"><label className="upload-button">Upload image<input type="file" accept="image/*" onChange={(e) => uploadMedia(e, 'featured')} /></label><button type="button" onClick={() => setMediaPicker('featured')}>Choose from media</button></div>
                    <label>Featured image URL<input value={editing.hero_image || ''} onChange={(e) => setEditing({ ...editing, hero_image: e.target.value })} placeholder="/api/media/image.jpg" /></label>
                  </div>
                  <div>
                    <h5>Product gallery</h5>
                    <div className="selected-gallery">
                      {linesToList(editing.gallery).map((image, index) => <div className="selected-image" key={`${image}-${index}`}><img src={asset(image)} alt="" /><button type="button" onClick={() => setEditing({ ...editing, gallery: linesToList(editing.gallery).filter((_, i) => i !== index) })}>Remove</button></div>)}
                      {!linesToList(editing.gallery).length && <div className="empty-media">No gallery images selected</div>}
                    </div>
                    <div className="media-actions"><label className="upload-button">Upload gallery images<input type="file" accept="image/*" multiple onChange={(e) => uploadMedia(e, 'gallery')} /></label><button type="button" onClick={() => setMediaPicker('gallery')}>Choose from media</button></div>
                    <label>Gallery image URLs<textarea value={listToLines(editing.gallery)} onChange={(e) => setEditing({ ...editing, gallery: linesToList(e.target.value) })} placeholder={'/api/media/image-1.jpg\n/api/media/image-2.jpg'} /></label>
                  </div>
                </div>
              </section>
              <section className="editor-card">
                <h4>Features</h4>
                <label>Feature bullets<textarea value={listToLines(editing.features)} onChange={(e) => setEditing({ ...editing, features: linesToList(e.target.value) })} placeholder={'Carbon fibre infused construction\nPrecision-cut mounting holes'} /></label>
              </section>
              <section className="editor-card">
                <h4>Specifications</h4>
                <label>Specification rows<textarea value={specsToText(editing.specifications)} onChange={(e) => setEditing({ ...editing, specifications: textToSpecs(e.target.value) })} placeholder={'Material: Carbon Fibre Infused Plastic\nWeight: 0.5kg'} /></label>
              </section>
              <section className="editor-card wide">
                <h4>SEO</h4>
                <label>SEO title<input value={editing.meta_title || ''} onChange={(e) => setEditing({ ...editing, meta_title: e.target.value })} placeholder={`${editing.name || 'Product'} | 9SIXTY`} /></label>
                <label>Meta description<textarea value={editing.meta_description || ''} onChange={(e) => setEditing({ ...editing, meta_description: e.target.value })} placeholder="Search result description for this product." /></label>
              </section>
              <section className="editor-card wide">
                <div className="editor-title"><h4>Colour Variants</h4><button onClick={() => setEditing({ ...editing, variants: [...(editing.variants || []), { colour_name: 'New Colour', name: 'New Colour', colour_hex: '#050505', accent_hex: '#A6936F', price_delta: 0, is_active: true }] })}>Add Variant</button></div>
                {editing.variants?.map((variant, index) => <div className="variant-editor expanded" key={variant.id || index}><input value={variant.colour_name || ''} onChange={(e) => { const variants = [...editing.variants]; variants[index] = { ...variant, colour_name: e.target.value, name: e.target.value }; setEditing({ ...editing, variants }); }} placeholder="Variant name" /><input type="color" value={variant.colour_hex || '#050505'} onChange={(e) => { const variants = [...editing.variants]; variants[index] = { ...variant, colour_hex: e.target.value }; setEditing({ ...editing, variants }); }} /><input type="color" value={variant.accent_hex || '#A6936F'} onChange={(e) => { const variants = [...editing.variants]; variants[index] = { ...variant, accent_hex: e.target.value }; setEditing({ ...editing, variants }); }} /><input type="number" step="0.01" value={variant.price_delta || 0} onChange={(e) => { const variants = [...editing.variants]; variants[index] = { ...variant, price_delta: Number(e.target.value || 0) }; setEditing({ ...editing, variants }); }} placeholder="Price delta" /><label><input type="checkbox" checked={variant.is_active !== false} onChange={(e) => { const variants = [...editing.variants]; variants[index] = { ...variant, is_active: e.target.checked }; setEditing({ ...editing, variants }); }} /> Active</label></div>)}
              </section>
            </div>
            <button className="gold" onClick={saveProduct}>Save Product</button>{message && <p className="admin-message">{message}</p>}
          </div>}
        </>}
        {activeSection === 'Categories' && <div className="category-admin">
          <div className="admin-panel-head"><h2>Categories</h2><button className="gold" onClick={createCategory}>Add Category</button></div>
          <div className="editor category-form">
            <h3>New Category</h3>
            <label>Name<input value={categoryForm.name} onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })} placeholder="Helmet Stands" /></label>
            <label>Slug<input value={categoryForm.slug} onChange={(e) => setCategoryForm({ ...categoryForm, slug: e.target.value })} placeholder="helmet-stands" /></label>
            <label>Description<textarea value={categoryForm.description} onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })} placeholder="Optional category description" /></label>
            {message && <p className="admin-message">{message}</p>}
          </div>
          <div className="category-list">{categories.map((category) => <article key={category.id}><Tag size={18} /><div><h3>{category.name}</h3><p>{category.slug}</p>{category.description && <p>{category.description}</p>}</div></article>)}</div>
        </div>}
        {activeSection === 'Settings/API keys' && <div className="settings-admin">
          <div className="admin-panel-head"><h2>Settings/API keys</h2><button className="gold" onClick={saveSettings}>Save Settings</button></div>
          <div className="editor">
            <label className="toggle-row"><span><strong>Maintenance page</strong><small>Hide every storefront page unless the visitor is logged in as an admin.</small></span><input type="checkbox" checked={Boolean(settingsForm.maintenance_mode)} onChange={(e) => setSettingsForm({ ...settingsForm, maintenance_mode: e.target.checked })} /></label>
            <label>Fixed shipping price<input type="number" step="0.01" value={settingsForm.shipping_fee || ''} onChange={(e) => setSettingsForm({ ...settingsForm, shipping_fee: e.target.value })} /></label>
            <label>Free shipping threshold<input type="number" step="0.01" value={settingsForm.free_shipping_threshold || ''} onChange={(e) => setSettingsForm({ ...settingsForm, free_shipping_threshold: e.target.value })} /></label>
            <label>Stripe publishable key<input value={settingsForm.stripe_publishable_key || ''} onChange={(e) => setSettingsForm({ ...settingsForm, stripe_publishable_key: e.target.value })} /></label>
            <div className="secret-grid">
              {secretFields.map(([key, label]) => <label className="secret-field" key={key}><span><strong>{label}</strong><small>{secretStatus[key] ? 'Configured. Leave blank to keep current value.' : 'Not set.'}</small></span><input type={key.includes('password') || key.includes('secret') || key.includes('key') ? 'password' : 'text'} value={secretForm[key] || ''} placeholder={secretStatus[key] ? 'Enter new value to replace' : 'Enter value'} onChange={(e) => setSecretForm({ ...secretForm, [key]: e.target.value })} /></label>)}
            </div>
            {message && <p className="admin-message">{message}</p>}
          </div>
        </div>}
        {activeSection === 'Media library' && <div className="media-admin">
          <div className="admin-panel-head"><h2>Media library</h2><label className="upload-button gold">Upload Images<input type="file" accept="image/*" multiple onChange={uploadMedia} /></label></div>
          <div className="media-grid">
            {media.map((item) => <article key={item.path} className="media-card"><img src={asset(item.path)} alt={item.name} /><strong>{item.name}</strong><span>{Math.round((item.size || 0) / 1024)} KB</span><div><a href={item.path} target="_blank" rel="noreferrer">View</a><button type="button" onClick={() => downloadMedia(item)}>Download</button><button type="button" className="danger" onClick={() => deleteMedia(item)}>Delete</button></div></article>)}
            {!media.length && <p className="muted">No uploaded images yet.</p>}
          </div>
          {message && <p className="admin-message">{message}</p>}
        </div>}
        {mediaPicker && <div className="media-modal">
          <div className="media-modal-panel">
            <div className="admin-panel-head"><h2>{mediaPicker === 'featured' ? 'Choose featured image' : 'Choose gallery image'}</h2><button onClick={() => setMediaPicker(null)}>Close</button></div>
            <div className="media-grid compact">
              {media.map((item) => <button className="media-select-card" key={item.path} onClick={() => chooseMedia(item)}><img src={asset(item.path)} alt={item.name} /><span>{item.name}</span></button>)}
              {!media.length && <p className="muted">Upload images in Media library first, or use the upload buttons in the product editor.</p>}
            </div>
          </div>
        </div>}
        {!['Products', 'Categories', 'Settings/API keys', 'Media library'].includes(activeSection) && <div className="content-card"><h2>{activeSection}</h2><p>This admin section is scaffolded. Products, Categories, Settings/API keys and Media library are active management areas.</p></div>}
      </section>
    </div>
  </section>;
}

function ContentPage({ path }) {
  const title = path.replace('/', '').replaceAll('-', ' ') || 'About';
  return <section className="page-wrap narrow"><h1>{title}</h1><div className="content-card"><p>9SIXTY is a premium, product-focused ecommerce experience for modular wall-mounted helmet stands. This page is ready for final brand copy, imagery and SEO metadata.</p><p>Contact, privacy, terms, shipping and returns content can be maintained as static pages or moved into an admin-managed CMS table.</p></div></section>;
}

function Footer({ nav }) {
  return <footer><div className="footer-grid"><div><button className="footer-logo" onClick={() => nav('/')} aria-label="9SIXTY home"><img src={asset('/assets/9sixty-footer-logo.svg')} alt="9SIXTY.com" /></button><p>Premium modular wall-mounted stands engineered for protection and precision.</p></div><div><h4>Shop</h4><button onClick={() => nav('/shop')}>Helmet Stands</button><button>Kit Hangers</button><button>Accessories</button></div><div><h4>Support</h4><button onClick={() => nav('/contact')}>Contact Us</button><button onClick={() => nav('/privacy-policy')}>Privacy Policy</button><button onClick={() => nav('/shipping-returns')}>Shipping Info</button></div><div><h4>Newsletter</h4><p>Join our monthly newsletter</p><form><input placeholder="Email" /><button>Join</button></form></div></div><div className="legal">© 2026 9SIXTY. All rights reserved.</div></footer>;
}

function Section({ title, children }) { return <section className="section"><h2>{title}</h2>{children}</section>; }
function Stars() { return <span className="stars">★★★★★</span>; }
function ReviewCard({ review }) { return <article className="review"><Stars /><h4>{review.user.name}</h4><p>{review.body}</p></article>; }

createRoot(document.getElementById('root')).render(<App />);
