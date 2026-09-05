import { useMemo, useState } from 'react'

const products = [
  {
    id: 'halo-lamp',
    name: 'Halo table lamp',
    type: 'Hand-finished stoneware',
    price: 148,
    category: 'Lighting',
    tag: 'AURA PICK',
    color: 'from-[#E4D5C5] via-[#B88A69] to-[#765443]',
    image: 'lamp',
  },
  {
    id: 'moss-throw',
    name: 'Moss linen throw',
    type: 'European flax linen',
    price: 96,
    category: 'Textiles',
    tag: 'MOST LOVED',
    color: 'from-[#C8C0A5] via-[#8B8E70] to-[#575746]',
    image: 'throw',
  },
  {
    id: 'quiet-mug',
    name: 'Quiet morning mug',
    type: 'Speckled ceramic',
    price: 42,
    category: 'Tableware',
    tag: 'NEW ARRIVAL',
    color: 'from-[#EAD8C5] via-[#B78968] to-[#735143]',
    image: 'mug',
  },
]

function Icon({ name, className = 'h-5 w-5' }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    bag: <><path d="M5 8.5h14l-1 11H6l-1-11Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    send: <><path d="m21 3-7.4 18-3.8-7.8L2 9.4 21 3Z" /><path d="m9.7 13.3 4-4" /></>,
    sparkles: <><path d="m12 3-1.3 5.1L6 9.5l4.7 1.4L12 16l1.3-5.1L18 9.5l-4.7-1.4L12 3ZM19 14l-.7 2.3L16 17l2.3.7L19 20l.7-2.3L22 17l-2.3-.7L19 14ZM5 15l-.6 1.8L2.5 17l1.9.6L5 19.5l.6-1.9 1.9-.6-1.9-.2L5 15Z" /></>,
    check: <path d="m5 12 4.2 4L19 6.5" />,
    leaf: <path d="M20 4C11 4 5 8.2 5 15.8c0 1.5.5 2.9 1.2 4.2C14.3 20 20 13.6 20 4ZM4 20c2.9-4.1 7.1-7.1 12.4-9" />,
    user: <><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c.8-3.4 3-5.1 6.5-5.1s5.7 1.7 6.5 5.1" /></>,
    cash: <><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="12" cy="12" r="2.2" /><path d="M7 9.5h.01M17 14.5h.01" /></>,
    shield: <><path d="M12 3 19 6v5c0 4.8-2.9 8.2-7 10-4.1-1.8-7-5.2-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{paths[name]}</svg>
}

function ProductArtwork({ product }) {
  return (
    <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${product.color}`}>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#2C2825]/10" />
      {product.image === 'lamp' && <><div className="absolute left-1/2 top-14 h-24 w-24 -translate-x-1/2 rounded-[50%_50%_42%_42%] border-[7px] border-[#EADBCB]/85 bg-[#C18B68] shadow-[0_22px_30px_rgba(49,30,20,.24)]" /><div className="absolute left-1/2 top-[145px] h-20 w-3 -translate-x-1/2 bg-[#714B3C]" /><div className="absolute bottom-8 left-1/2 h-3 w-20 -translate-x-1/2 rounded-full bg-[#5E3D31]" /></>}
      {product.image === 'throw' && <><div className="absolute -bottom-5 left-5 h-40 w-72 rotate-[-10deg] rounded-[44%_48%_12%_16%] border border-[#F2ECDC]/25 bg-[#B3B58E]/70 shadow-[0_20px_25px_rgba(38,47,29,.22)]" /><div className="absolute bottom-4 left-11 h-2 w-44 rotate-[-10deg] border-t border-dashed border-[#F2ECDC]/50" /></>}
      {product.image === 'mug' && <><div className="absolute left-1/2 top-16 h-28 w-28 -translate-x-1/2 rounded-[18%_18%_32%_32%] bg-[#E2C4A8] shadow-[0_20px_25px_rgba(80,43,28,.22)]" /><div className="absolute left-[64%] top-[91px] h-12 w-10 rounded-r-full border-[10px] border-[#E2C4A8]" /><div className="absolute left-[42%] top-[83px] h-1 w-2 rounded-full bg-[#A6755B] shadow-[12px_11px_0_#A6755B,-9px_23px_0_#A6755B,17px_32px_0_#A6755B]" /></>}
      {product.image === 'custom' && <><div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[28%] border border-[#FDFBF7]/50 bg-[#FDFBF7]/25 shadow-[0_20px_25px_rgba(80,43,28,.18)]" /><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-4xl text-[#FDFBF7]">S</div></>}
      <span className="absolute left-4 top-4 rounded-full bg-[#FDFBF7]/90 px-3 py-1 text-[10px] font-bold tracking-[.16em] text-[#6B6158]">{product.tag}</span>
    </div>
  )
}

function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi, I’m Aura. Tell me who you’re shopping for, and I’ll find a thoughtful fit.' },
  ])
  const [menuOpen, setMenuOpen] = useState(false)
  const [checkoutState, setCheckoutState] = useState('idle')
  const [user, setUser] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem('serein-user')) } catch { return null }
  })
  const [loginOpen, setLoginOpen] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [adminOpen, setAdminOpen] = useState(false)
  const [adminPanelOpen, setAdminPanelOpen] = useState(false)
  const [adminEmail, setAdminEmail] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const [adminError, setAdminError] = useState('')
  const [admin, setAdmin] = useState(() => window.sessionStorage.getItem('serein-admin') === 'true')
  const [sellerOpen, setSellerOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [customProducts, setCustomProducts] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem('serein-admin-products')) || [] } catch { return [] }
  })
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', category: 'Decor' })
  const [customerEmail, setCustomerEmail] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem('serein-user'))?.email || '' } catch { return '' }
  })

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart])
  const catalog = useMemo(() => [...products, ...customProducts], [customProducts])
  const categories = useMemo(() => ['All', ...new Set(catalog.map((product) => product.category))], [catalog])
  const visibleProducts = activeCategory === 'All' ? catalog : catalog.filter((product) => product.category === activeCategory)

  function addToCart(product) {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id)
      return existing ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }]
    })
  }

  function signIn(event) {
    event.preventDefault()
    const email = loginEmail.trim().toLowerCase()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    const account = { email }
    window.localStorage.setItem('serein-user', JSON.stringify(account))
    setUser(account)
    setCustomerEmail(email)
    setLoginOpen(false)
    setLoginEmail('')
  }

  function signOut() {
    window.localStorage.removeItem('serein-user')
    setUser(null)
  }

  async function adminSignIn(event) {
    event.preventDefault()
    setAdminError('')
    try {
      const response = await fetch('/api/admin-login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: adminEmail, password: adminPassword }) })
      if (!response.ok) throw new Error('Invalid credentials')
      window.sessionStorage.setItem('serein-admin', 'true')
      setAdmin(true)
      setAdminOpen(false)
      setAdminPanelOpen(true)
      setAdminEmail('')
      setAdminPassword('')
    } catch {
      setAdminError('Admin email or password is incorrect.')
    }
  }

  function adminSignOut() {
    window.sessionStorage.removeItem('serein-admin')
    setAdmin(false)
    setAdminPanelOpen(false)
  }

  function createProduct(event) {
    event.preventDefault()
    const price = Number(newProduct.price)
    if (!newProduct.name.trim() || !newProduct.description.trim() || !Number.isFinite(price) || price <= 0) return
    const product = { id: `admin-${Date.now()}`, name: newProduct.name.trim(), type: newProduct.description.trim(), price, category: newProduct.category, tag: 'NEW FROM SEREIN', color: 'from-[#E9DDD0] via-[#C59B7B] to-[#896451]', image: 'custom' }
    setCustomProducts((items) => {
      const next = [product, ...items]
      window.localStorage.setItem('serein-admin-products', JSON.stringify(next))
      return next
    })
    setNewProduct({ name: '', description: '', price: '', category: 'Decor' })
    setActiveCategory(product.category)
  }

  function sendMessage(event) {
    event.preventDefault()
    const text = message.trim()
    if (!text) return
    setMessage('')
    setMessages((items) => [...items, { role: 'user', text }])
    fetch('/api/assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text }) })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then(({ reply }) => setMessages((items) => [...items, { role: 'assistant', text: reply }]))
      .catch(() => setMessages((items) => [...items, { role: 'assistant', text: 'Based on that, I’d begin with the Halo lamp for a warm, calm focal point. I’ve surfaced it above for you.' }]))
  }

  async function checkout() {
    if (!cart.length) return
    if (!user) { setLoginOpen(true); return }
    setCheckoutState('loading')
    try {
      const response = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: cart, subtotal, customerEmail, paymentMethod: 'cash_on_delivery' }) })
      if (!response.ok) throw new Error('Checkout request failed')
      setCheckoutState('success')
      setCart([])
    } catch {
      // Allows the UI to be explored before the order-email endpoint is deployed.
      setCheckoutState('demo')
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FDFBF7] text-[#2C2825]">
      <header className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
        <nav aria-label="Main navigation" className="flex items-center justify-between">
          <a href="#top" className="font-display text-2xl tracking-tight" aria-label="Serein home">serein<span className="text-[#B87D5C]">.</span></a>
          <div className="hidden items-center gap-8 text-sm text-[#6B6158] md:flex">
            <a href="#shop" className="transition hover:text-[#B87D5C]">Shop</a><a href="#how-it-works" className="transition hover:text-[#B87D5C]">How Aura works</a><a href="#story" className="transition hover:text-[#B87D5C]">Our story</a>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setCartOpen(true)} className="relative grid h-10 w-10 place-items-center rounded-full border border-[#E0DAD1] text-[#2C2825] transition hover:border-[#B87D5C] hover:text-[#B87D5C]" aria-label={`Open cart, ${cartCount} items`}><Icon name="bag" className="h-[18px] w-[18px]" />{cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#B87D5C] px-1 text-[9px] font-bold text-white">{cartCount}</span>}</button>
            <button type="button" onClick={() => user ? signOut() : setLoginOpen(true)} className="hidden items-center gap-2 rounded-full bg-[#B87D5C] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9F674B] sm:inline-flex" aria-label={user ? 'Sign out' : 'Sign in'}><Icon name="user" className="h-4 w-4" />{user ? 'Sign out' : 'Sign in'}</button>
            <button type="button" onClick={() => admin ? setAdminPanelOpen(true) : setAdminOpen(true)} className="hidden items-center gap-2 rounded-full border border-[#C2A688] px-4 py-2.5 text-sm font-semibold text-[#6B6158] transition hover:border-[#B87D5C] hover:text-[#B87D5C] lg:inline-flex"><Icon name="shield" className="h-4 w-4" />{admin ? 'Admin panel' : 'Admin login'}</button>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-[#E0DAD1] md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
          </div>
        </nav>
        {menuOpen && <div className="mt-4 grid rounded-2xl border border-[#E0DAD1] bg-[#EFECE6] p-4 text-sm text-[#6B6158] md:hidden"><a href="#shop" className="rounded-lg px-3 py-2 hover:bg-white/60">Shop</a><a href="#how-it-works" className="rounded-lg px-3 py-2 hover:bg-white/60">How Aura works</a><a href="#story" className="rounded-lg px-3 py-2 hover:bg-white/60">Our story</a><button type="button" onClick={() => { setMenuOpen(false); user ? signOut() : setLoginOpen(true) }} className="rounded-lg px-3 py-2 text-left hover:bg-white/60">{user ? 'Sign out' : 'Sign in to order'}</button><button type="button" onClick={() => { setMenuOpen(false); admin ? setAdminPanelOpen(true) : setAdminOpen(true) }} className="rounded-lg px-3 py-2 text-left hover:bg-white/60">{admin ? 'Admin panel' : 'Admin login'}</button></div>}
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[#B87D5C]"><span className="h-px w-7 bg-[#B87D5C]" /> Intentional objects, intelligently found</p>
          <h1 className="font-display text-5xl leading-[.98] tracking-tight sm:text-6xl lg:text-7xl">Things that feel<br /><em className="font-normal text-[#B87D5C]">just right.</em></h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#6B6158] sm:text-lg">A quieter way to shop for your home. Meet Aura, the personal shopping assistant that turns your feeling into a considered space.</p>
          <div className="mt-8 flex flex-wrap gap-3"><button type="button" onClick={() => setChatOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-[#B87D5C] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#9F674B]"><Icon name="sparkles" className="h-4 w-4" /> Ask Aura</button><a href="#shop" className="inline-flex items-center gap-2 rounded-full border border-[#C2A688] px-6 py-3.5 text-sm font-semibold text-[#2C2825] transition hover:border-[#B87D5C]">Explore the edit <Icon name="arrow" className="h-4 w-4" /></a></div>
          <div className="mt-11 flex items-center gap-8 border-t border-[#E0DAD1] pt-6 text-xs text-[#6B6158]"><span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#B87D5C]" /> 30-day thoughtful returns</span><span className="flex items-center gap-2"><Icon name="leaf" className="h-4 w-4 text-[#B87D5C]" /> Made to last</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-xl"><div className="absolute -inset-5 -z-10 rounded-[3rem] bg-[#EFECE6]" /><div className="relative aspect-[5/4] overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-[#E4D4C2] via-[#C18D69] to-[#6E4D3E] shadow-soft"><div className="absolute -right-5 bottom-0 h-3/4 w-2/3 rounded-t-[50%] bg-[#AA7658]/75" /><div className="absolute bottom-0 left-[17%] h-[66%] w-[43%] rounded-t-[48%] border-[18px] border-[#EBDDCB]/80 bg-[#9E6D53] shadow-2xl" /><div className="absolute bottom-[13%] left-[30%] h-[43%] w-3 bg-[#6D4739]" /><div className="absolute bottom-[9%] left-[22%] h-4 w-[38%] rounded-full bg-[#6D4739]" /><div className="absolute left-5 top-5 rounded-full bg-[#FDFBF7]/90 px-4 py-2 text-xs font-semibold text-[#6B6158]">Curated for slow mornings</div><div className="absolute bottom-5 right-5 rounded-2xl bg-[#FDFBF7]/90 p-3 backdrop-blur"><p className="text-[10px] font-bold tracking-[.12em] text-[#B87D5C]">AURA SAYS</p><p className="mt-1 text-xs text-[#6B6158]">Warmth, without the clutter.</p></div></div></div>
      </section>

      <section id="shop" className="border-y border-[#E0DAD1] bg-[#EFECE6]/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#B87D5C]">Aura’s current edit</p><h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">A little more you.</h2></div><button type="button" onClick={() => setChatOpen(true)} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B6158] transition hover:text-[#B87D5C]">Personalize this edit <Icon name="arrow" className="h-4 w-4" /></button></div>
          <div className="mb-9 flex flex-wrap gap-2" aria-label="Product categories">{categories.map((category) => <button type="button" key={category} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`rounded-full px-4 py-2 text-sm transition ${activeCategory === category ? 'bg-[#B87D5C] text-white' : 'border border-[#C2A688] bg-[#FDFBF7] text-[#6B6158] hover:border-[#B87D5C]'}`}>{category}</button>)}</div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visibleProducts.map((product) => <article key={product.id} className="group overflow-hidden rounded-3xl bg-[#FDFBF7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"><ProductArtwork product={product} /><div className="p-5"><div className="flex items-start justify-between gap-4"><div><p className="mb-1 text-[10px] font-bold uppercase tracking-[.14em] text-[#B87D5C]">{product.category}</p><h3 className="font-display text-xl">{product.name}</h3><p className="mt-1 text-sm text-[#6B6158]">{product.type}</p></div><p className="text-sm font-semibold">${product.price}</p></div><button type="button" onClick={() => addToCart(product)} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#C2A688] py-3 text-sm font-semibold transition group-hover:border-[#B87D5C] group-hover:bg-[#B87D5C] group-hover:text-white"><Icon name="plus" className="h-4 w-4" /> Add to cart</button></div></article>)}</div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"><div className="rounded-[2rem] bg-[#2C2825] px-6 py-12 text-[#FDFBF7] sm:px-10 lg:grid lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-16 lg:py-16"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#D9AF91]">Shopping, with a point of view</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Your taste, made tangible.</h2><p className="mt-5 max-w-md leading-7 text-[#D9D1C8]">Aura listens for the details that matter—your room, your rituals, your budget—then builds an edit you can trust.</p></div><ol className="mt-10 grid gap-7 sm:grid-cols-3 lg:mt-0">{[['01', 'Tell Aura', 'Share a feeling, space, or person.'], ['02', 'See your edit', 'Considered choices, with reasons.'], ['03', 'Make it yours', 'Add what speaks to you.']].map(([number, title, text]) => <li key={number} className="border-t border-[#6B6158] pt-4"><span className="text-xs font-bold tracking-[.14em] text-[#D9AF91]">{number}</span><h3 className="mt-4 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-[#D9D1C8]">{text}</p></li>)}</ol></div></section>

      <footer id="story" className="border-t border-[#E0DAD1] px-5 py-8 text-sm text-[#6B6158]"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row"><span>© 2026 Serein. Curated with care.</span><button type="button" onClick={() => setSellerOpen(true)} className="font-semibold text-[#B87D5C] transition hover:text-[#9F674B]">Become a seller <span aria-hidden="true">→</span></button></div></footer>

      <button type="button" onClick={() => setChatOpen(true)} className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-[#EFECE6] px-4 py-3 text-sm font-semibold text-[#2C2825] shadow-[0_10px_30px_rgba(44,40,37,.18)] ring-1 ring-[#C2A688]/60 transition hover:-translate-y-0.5" aria-label="Open Aura shopping assistant"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#B87D5C] text-white"><Icon name="sparkles" className="h-4 w-4" /></span><span className="hidden sm:inline">Ask Aura</span></button>

      {chatOpen && <aside className="fixed bottom-5 right-5 z-40 flex h-[min(600px,calc(100vh-40px))] w-[calc(100%-2.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl bg-[#FDFBF7] shadow-[0_20px_70px_rgba(44,40,37,.26)] ring-1 ring-[#C2A688]/60" aria-label="Aura shopping assistant" role="dialog" aria-modal="true"><div className="flex items-center justify-between bg-[#EFECE6] p-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#B87D5C] text-white"><Icon name="sparkles" /></span><div><h2 className="font-display text-xl">Aura</h2><p className="text-xs text-[#6B6158]"><span className="mr-1 inline-block h-2 w-2 rounded-full bg-[#71916C]" /> Here to help you choose</p></div></div><button type="button" onClick={() => setChatOpen(false)} className="rounded-full p-2 text-[#6B6158] hover:bg-white/70" aria-label="Close assistant"><Icon name="close" className="h-5 w-5" /></button></div><div className="flex-1 space-y-4 overflow-y-auto p-5">{messages.map((item, index) => <p key={`${item.role}-${index}`} className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${item.role === 'assistant' ? 'rounded-tl-sm bg-[#EFECE6] text-[#2C2825]' : 'ml-auto rounded-tr-sm bg-[#B87D5C] text-white'}`}>{item.text}</p>)}<button type="button" onClick={() => { addToCart(products[0]); setMessages((items) => [...items, { role: 'assistant', text: 'The Halo lamp is in your cart. It’s a beautiful starting point.' }]) }} className="w-full rounded-xl border border-[#C2A688] p-3 text-left text-sm text-[#6B6158] hover:border-[#B87D5C]"><span className="block text-xs font-bold uppercase tracking-[.12em] text-[#B87D5C]">Quick recommendation</span><span className="mt-1 block font-semibold text-[#2C2825]">Add the Halo table lamp · $148</span></button></div><form onSubmit={sendMessage} className="border-t border-[#E0DAD1] p-4"><label htmlFor="aura-message" className="sr-only">Ask Aura a question</label><div className="flex items-center gap-2 rounded-xl bg-[#EFECE6] p-1.5"><input id="aura-message" value={message} onChange={(event) => setMessage(event.target.value)} className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[#8D8278]" placeholder="Describe what you’re looking for…" /><button type="submit" className="grid h-9 w-9 place-items-center rounded-lg bg-[#B87D5C] text-white transition hover:bg-[#9F674B]" aria-label="Send message"><Icon name="send" className="h-4 w-4" /></button></div></form></aside>}

      {adminOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-[#2C2825]/35 px-5" role="dialog" aria-modal="true" aria-labelledby="admin-login-title"><button type="button" className="absolute inset-0 cursor-default" onClick={() => setAdminOpen(false)} aria-label="Close admin login" /><form onSubmit={adminSignIn} className="relative w-full max-w-sm rounded-3xl bg-[#FDFBF7] p-7 shadow-2xl"><button type="button" onClick={() => setAdminOpen(false)} className="absolute right-5 top-5 rounded-full p-2 hover:bg-[#EFECE6]" aria-label="Close admin login"><Icon name="close" /></button><span className="grid h-11 w-11 place-items-center rounded-full bg-[#2C2825] text-[#FDFBF7]"><Icon name="shield" /></span><p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-[#B87D5C]">Restricted access</p><h2 id="admin-login-title" className="mt-2 font-display text-3xl">Admin login.</h2><p className="mt-2 text-sm leading-6 text-[#6B6158]">Only the Serein administrator can manage the product edit.</p><label htmlFor="admin-email" className="mt-6 mb-2 block text-sm font-medium">Admin email</label><input id="admin-email" type="email" autoComplete="username" value={adminEmail} onChange={(event) => setAdminEmail(event.target.value)} required className="w-full rounded-xl border border-[#E0DAD1] bg-[#EFECE6]/50 px-3 py-3 text-sm outline-none transition focus:border-[#B87D5C]" placeholder="admin@example.com" /><label htmlFor="admin-password" className="mt-4 mb-2 block text-sm font-medium">Password</label><input id="admin-password" type="password" autoComplete="current-password" value={adminPassword} onChange={(event) => setAdminPassword(event.target.value)} required className="w-full rounded-xl border border-[#E0DAD1] bg-[#EFECE6]/50 px-3 py-3 text-sm outline-none transition focus:border-[#B87D5C]" placeholder="••••••••" />{adminError && <p className="mt-3 text-sm text-[#9F4B45]" role="alert">{adminError}</p>}<button type="submit" className="mt-5 w-full rounded-xl bg-[#2C2825] py-3.5 text-sm font-semibold text-white transition hover:bg-[#4A423D]">Open admin panel</button></form></div>}

      {adminPanelOpen && admin && <div className="fixed inset-0 z-50 grid place-items-center bg-[#2C2825]/35 px-5 py-5" role="dialog" aria-modal="true" aria-labelledby="admin-panel-title"><button type="button" className="absolute inset-0 cursor-default" onClick={() => setAdminPanelOpen(false)} aria-label="Close admin panel" /><section className="relative max-h-full w-full max-w-lg overflow-y-auto rounded-3xl bg-[#FDFBF7] p-7 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#B87D5C]">Serein inventory</p><h2 id="admin-panel-title" className="mt-2 font-display text-3xl">Add a product.</h2></div><button type="button" onClick={() => setAdminPanelOpen(false)} className="rounded-full p-2 hover:bg-[#EFECE6]" aria-label="Close admin panel"><Icon name="close" /></button></div><form onSubmit={createProduct} className="mt-6"><label htmlFor="product-name" className="mb-2 block text-sm font-medium">Product name</label><input id="product-name" value={newProduct.name} onChange={(event) => setNewProduct((product) => ({ ...product, name: event.target.value }))} required className="w-full rounded-xl border border-[#E0DAD1] bg-[#EFECE6]/50 px-3 py-3 text-sm outline-none focus:border-[#B87D5C]" placeholder="e.g. Dusk vase" /><label htmlFor="product-description" className="mt-4 mb-2 block text-sm font-medium">Description</label><textarea id="product-description" value={newProduct.description} onChange={(event) => setNewProduct((product) => ({ ...product, description: event.target.value }))} required rows="3" className="w-full resize-none rounded-xl border border-[#E0DAD1] bg-[#EFECE6]/50 px-3 py-3 text-sm outline-none focus:border-[#B87D5C]" placeholder="A short, considered product description." /><div className="mt-4 grid grid-cols-2 gap-4"><div><label htmlFor="product-price" className="mb-2 block text-sm font-medium">Price (USD)</label><input id="product-price" type="number" min="1" step="0.01" value={newProduct.price} onChange={(event) => setNewProduct((product) => ({ ...product, price: event.target.value }))} required className="w-full rounded-xl border border-[#E0DAD1] bg-[#EFECE6]/50 px-3 py-3 text-sm outline-none focus:border-[#B87D5C]" placeholder="68" /></div><div><label htmlFor="product-category" className="mb-2 block text-sm font-medium">Category</label><select id="product-category" value={newProduct.category} onChange={(event) => setNewProduct((product) => ({ ...product, category: event.target.value }))} className="w-full rounded-xl border border-[#E0DAD1] bg-[#EFECE6]/50 px-3 py-3 text-sm outline-none focus:border-[#B87D5C]"><option>Decor</option><option>Lighting</option><option>Textiles</option><option>Tableware</option><option>Gifts</option></select></div></div><button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B87D5C] py-3.5 text-sm font-semibold text-white transition hover:bg-[#9F674B]"><Icon name="plus" className="h-4 w-4" /> Add product to store</button></form><div className="mt-6 flex items-center justify-between border-t border-[#E0DAD1] pt-5 text-sm"><span className="text-[#6B6158]">{customProducts.length} product{customProducts.length === 1 ? '' : 's'} added in this browser</span><button type="button" onClick={adminSignOut} className="font-semibold text-[#B87D5C]">Sign out admin</button></div></section></div>}

      {sellerOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-[#2C2825]/35 px-5" role="dialog" aria-modal="true" aria-labelledby="seller-title"><button type="button" className="absolute inset-0 cursor-default" onClick={() => setSellerOpen(false)} aria-label="Close seller invitation" /><section className="relative w-full max-w-md rounded-3xl bg-[#FDFBF7] p-7 shadow-2xl"><button type="button" onClick={() => setSellerOpen(false)} className="absolute right-5 top-5 rounded-full p-2 hover:bg-[#EFECE6]" aria-label="Close seller invitation"><Icon name="close" /></button><p className="text-xs font-bold uppercase tracking-[.16em] text-[#B87D5C]">Sell with Serein</p><h2 id="seller-title" className="mt-2 font-display text-3xl">Made with care?</h2><p className="mt-3 max-w-sm text-sm leading-6 text-[#6B6158]">We’re always looking for considered objects and small makers to add to the edit.</p><a href="mailto:hello@serein.example?subject=Serein%20seller%20application" className="mt-6 inline-flex rounded-xl bg-[#B87D5C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9F674B]">Tell us about your work</a></section></div>}

      {loginOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-[#2C2825]/35 px-5" role="dialog" aria-modal="true" aria-labelledby="sign-in-title">
        <button type="button" className="absolute inset-0 cursor-default" onClick={() => setLoginOpen(false)} aria-label="Close sign in" />
        <form onSubmit={signIn} className="relative w-full max-w-sm rounded-3xl bg-[#FDFBF7] p-7 shadow-2xl"><button type="button" onClick={() => setLoginOpen(false)} className="absolute right-5 top-5 rounded-full p-2 hover:bg-[#EFECE6]" aria-label="Close sign in"><Icon name="close" /></button><span className="grid h-11 w-11 place-items-center rounded-full bg-[#EFECE6] text-[#B87D5C]"><Icon name="user" /></span><p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-[#B87D5C]">Your Serein account</p><h2 id="sign-in-title" className="mt-2 font-display text-3xl">Welcome in.</h2><p className="mt-2 text-sm leading-6 text-[#6B6158]">Sign in with your email to keep your shopping details ready at checkout.</p><label htmlFor="sign-in-email" className="mt-6 mb-2 block text-sm font-medium">Email address</label><input id="sign-in-email" type="email" autoComplete="email" value={loginEmail} onChange={(event) => setLoginEmail(event.target.value)} required autoFocus className="w-full rounded-xl border border-[#E0DAD1] bg-[#EFECE6]/50 px-3 py-3 text-sm outline-none transition focus:border-[#B87D5C]" placeholder="you@example.com" /><button type="submit" className="mt-4 w-full rounded-xl bg-[#B87D5C] py-3.5 text-sm font-semibold text-white transition hover:bg-[#9F674B]">Continue with email</button><p className="mt-4 text-center text-xs leading-5 text-[#6B6158]">This starter stores your session in this browser. Connect a secure identity provider before launch.</p></form>
      </div>}

      {cartOpen && <aside className="fixed inset-0 z-50 flex justify-end bg-[#2C2825]/30" role="dialog" aria-modal="true" aria-label="Shopping cart">
        <button type="button" onClick={() => setCartOpen(false)} className="absolute inset-0 cursor-default" aria-label="Close cart" />
        <section className="relative flex h-full w-full max-w-md flex-col bg-[#FDFBF7] p-6 shadow-2xl">
          <div className="flex items-center justify-between"><h2 className="font-display text-3xl">Your cart <span className="text-[#B87D5C]">({cartCount})</span></h2><button type="button" onClick={() => setCartOpen(false)} className="rounded-full p-2 hover:bg-[#EFECE6]" aria-label="Close cart"><Icon name="close" /></button></div>
          {checkoutState === 'success' || checkoutState === 'demo' ? <div className="my-auto text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#EFECE6] text-[#B87D5C]"><Icon name="check" /></span><h3 className="mt-5 font-display text-3xl">COD order received.</h3><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#6B6158]">{checkoutState === 'success' ? 'Your order confirmation, invoice, and tracking link are on their way. Please pay when your order arrives.' : 'Your cash-on-delivery checkout preview is complete. Connect the order API to send invoice and tracking emails.'}</p></div> : cart.length ? <>
            <div className="mt-8 flex-1 space-y-5 overflow-y-auto">{cart.map((item) => <div key={item.id} className="flex gap-4"><div className={`h-20 w-20 shrink-0 rounded-2xl bg-gradient-to-br ${item.color}`} /><div className="flex-1"><div className="flex justify-between gap-3"><div><h3 className="font-semibold">{item.name}</h3><p className="mt-1 text-sm text-[#6B6158]">${item.price}</p></div><button type="button" onClick={() => setCart((items) => items.filter((entry) => entry.id !== item.id))} className="text-xs text-[#6B6158] underline hover:text-[#B87D5C]">Remove</button></div><div className="mt-3 flex items-center gap-3"><button type="button" onClick={() => setCart((items) => items.map((entry) => entry.id === item.id ? { ...entry, quantity: Math.max(1, entry.quantity - 1) } : entry))} className="grid h-6 w-6 place-items-center rounded-md border border-[#E0DAD1]" aria-label={`Reduce ${item.name} quantity`}>−</button><span className="text-sm">{item.quantity}</span><button type="button" onClick={() => addToCart(item)} className="grid h-6 w-6 place-items-center rounded-md border border-[#E0DAD1]" aria-label={`Increase ${item.name} quantity`}>+</button></div></div></div>)}</div>
            <div className="border-t border-[#E0DAD1] pt-5">
              <label htmlFor="receipt-email" className="mb-2 block text-sm font-medium">Email for your invoice & tracking</label>
              <input id="receipt-email" type="email" autoComplete="email" value={customerEmail} onChange={(event) => setCustomerEmail(event.target.value)} required className="mb-4 w-full rounded-xl border border-[#E0DAD1] bg-[#EFECE6]/50 px-3 py-3 text-sm outline-none transition focus:border-[#B87D5C]" placeholder="you@example.com" />
              <div className="mb-4 rounded-xl border border-[#C2A688] bg-[#EFECE6]/70 p-4"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#FDFBF7] text-[#B87D5C]"><Icon name="cash" className="h-5 w-5" /></span><div><p className="text-sm font-semibold">Cash on delivery</p><p className="mt-0.5 text-xs text-[#6B6158]">Pay with cash when your order arrives.</p></div><span className="ml-auto h-4 w-4 rounded-full border-[5px] border-[#B87D5C]" aria-label="Cash on delivery selected" /></div></div>
              <div className="mb-5 flex justify-between font-semibold"><span>Order total</span><span>${subtotal}</span></div>
              <button type="button" onClick={() => user ? checkout() : setLoginOpen(true)} disabled={checkoutState === 'loading' || (user && !customerEmail)} className="w-full rounded-xl bg-[#B87D5C] py-3.5 text-sm font-semibold text-white transition hover:bg-[#9F674B] disabled:cursor-not-allowed disabled:opacity-70">{checkoutState === 'loading' ? 'Placing COD order…' : user ? 'Place cash-on-delivery order' : 'Sign in to place your order'}</button>
              <p className="mt-3 text-center text-xs leading-5 text-[#6B6158]">{user ? 'No online payment is required. Your invoice and tracking details will be emailed after you order.' : 'Please sign in before placing a cash-on-delivery order.'}</p>
            </div>
          </> : <div className="my-auto text-center"><p className="font-display text-2xl">Your cart is waiting.</p><button type="button" onClick={() => { setCartOpen(false); document.querySelector('#shop')?.scrollIntoView() }} className="mt-4 text-sm font-semibold text-[#B87D5C]">Browse the edit</button></div>}
        </section>
      </aside>}
    </main>
  )
}

export default App
