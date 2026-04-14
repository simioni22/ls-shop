"use client";

import { useState, useMemo, useRef } from 'react';
import { 
  Menu, X, ChevronRight, Cpu, MousePointer2, Monitor, 
  MonitorSmartphone, Laptop, Briefcase, LayoutGrid, 
  Zap, Star, Search, ArrowUpDown, MessageCircle, 
  ShieldCheck, Truck, CreditCard, HeadphonesIcon
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState("padrao");
  
  const produtosRef = useRef<HTMLDivElement>(null);

  const produtosOriginal = [
    // --- PERIFÉRICOS ---
    { id: 1, categoria: "Periféricos", nome: "Mousepad Gamer Rise Mode Speed", preco: 21.99, precoExibicao: "21,99", loja: "MAGALU", imagem: "/mouse pad.webp", linkAfiliado: "https://divulgador.magalu.com/sKvJ31Uv", avaliacao: 5, vendas: 300 },
    { id: 2, categoria: "Periféricos", nome: "Teclado Mecânico Gamer Redragon APS", preco: 399.99, precoExibicao: "399,99", loja: "MAGALU", imagem: "/image_c42901.png", linkAfiliado: "https://divulgador.magalu.com/FzShnCcl", avaliacao: 5, vendas: 85 },
    { id: 3, categoria: "Periféricos", nome: "PlayStation VR 2 PS5 Headset", preco: 2488.00, precoExibicao: "2.488,00", loja: "MERCADO LIVRE", imagem: "/image_12.png", linkAfiliado: "https://meli.la/2SzAyYh", avaliacao: 5, vendas: 45 },
    
    // --- MONITORES ---
    { id: 4, categoria: "Monitores", nome: "Monitor Gamer Curvo LG UltraGear 34", preco: 2406.09, precoExibicao: "2.406,09", loja: "MAGALU", imagem: "/Monitor Gamer.webp", linkAfiliado: "https://divulgador.magalu.com/Jp28XT6A", avaliacao: 5, vendas: 22 },
    { id: 5, categoria: "Monitores", nome: "Monitor Gamer LG 24 Polegadas 100Hz IPS", preco: 505.08, precoExibicao: "505,08", loja: "MERCADO LIVRE", imagem: "/Monitor Gamer.webp", linkAfiliado: "https://meli.la/15GATj9", avaliacao: 4.8, vendas: 120 },

    // --- HARDWARE ---
    { id: 6, categoria: "Hardware", nome: "Placa de Vídeo XFX Swift RX 9070 XT", preco: 5334.99, precoExibicao: "5.334,99", loja: "MAGALU", imagem: "/Placa de Vídeo RX.webp", linkAfiliado: "https://divulgador.magalu.com/ocL-au2v", avaliacao: 5, vendas: 12 },
    { id: 7, categoria: "Hardware", nome: "GPU RX 7600 GAMING OC 8G Gigabyte", preco: 1704.99, precoExibicao: "1.704,99", loja: "MAGALU", imagem: "/Placa de Vídeo RX.webp", linkAfiliado: "https://divulgador.magalu.com/lvWXu7KC", avaliacao: 4.9, vendas: 67 },
    { id: 8, categoria: "Hardware", nome: "Processador AMD Ryzen 5 4500, 3.6GHz", preco: 659.99, precoExibicao: "659,99", loja: "MAGALU", imagem: "/Processador AMD Ryzen 5 4500.webp", linkAfiliado: "https://divulgador.magalu.com/df53Kr7F", avaliacao: 4.8, vendas: 210 },
    { id: 9, categoria: "Hardware", nome: "Processador AMD Ryzen 3 3200G", preco: 474.10, precoExibicao: "474,10", loja: "MAGALU", imagem: "/Processador AMD Ryzen 5 4500.webp", linkAfiliado: "https://divulgador.magalu.com/2xzZnLN8", avaliacao: 4.7, vendas: 156 },
    { id: 10, categoria: "Hardware", nome: "Placa-Mãe MSI A520M-A PRO", preco: 439.99, precoExibicao: "439,99", loja: "MAGALU", imagem: "/Placa-mãe Asus.webp", linkAfiliado: "https://divulgador.magalu.com/xz_zl6=N", avaliacao: 4.8, vendas: 98 },
    { id: 11, categoria: "Hardware", nome: "Placa-Mãe MSI B550M Pro-VDH WiFi", preco: 799.99, precoExibicao: "799,99", loja: "MAGALU", imagem: "/Placa-mãe Asus.webp", linkAfiliado: "https://divulgador.magalu.com/Ust90D6O", avaliacao: 4.9, vendas: 112 },
    { id: 12, categoria: "Hardware", nome: "Placa-Mãe Asus TUF Gaming B550M-Plus", preco: 738.63, precoExibicao: "738,63", loja: "MERCADO LIVRE", imagem: "/Placa-mãe Asus.webp", linkAfiliado: "https://meli.la/1RL2qy1", avaliacao: 4.9, vendas: 89 },
    { id: 13, categoria: "Hardware", nome: "Processador AMD Ryzen 7 5700X, 3.4GHz", preco: 1429.99, precoExibicao: "1.429,99", loja: "MAGALU", imagem: "/Processador AMD Ryzen 7 5700X, 3.4GHz.webp", linkAfiliado: "https://divulgador.magalu.com/arUJ-7VQ", avaliacao: 5, vendas: 110 },
    { id: 14, categoria: "Hardware", nome: "Processador Intel Core i5-12400F", preco: 879.99, precoExibicao: "879,99", loja: "MAGALU", imagem: "/Processador Intel Core i5-12400F, 2.5GHz (4.4GHz Max Turbo), Cache 18MB, LGA 1700 - BX8071512400F.webp", linkAfiliado: "https://divulgador.magalu.com/fkXKOBlZ", avaliacao: 4.9, vendas: 140 },

    // --- COMPUTADORES ---
    { id: 15, categoria: "Computadores", nome: "PC Gamer Completo TOB i5 + Monitor 23", preco: 1933.20, precoExibicao: "1.933,20", loja: "MAGALU", imagem: "/pc gamer 1.webp", linkAfiliado: "https://divulgador.magalu.com/C3W5Hic2", avaliacao: 4.6, vendas: 34 },
    { id: 16, categoria: "Computadores", nome: "PC Gamer Completo TOB i5 + Monitor 19", preco: 1787.40, precoExibicao: "1.787,40", loja: "MAGALU", imagem: "/Computador PC Gamer Completo TOB Intel Core i5 SSD 480GB 16GB Teclado Mouse Mouse Pad e Headset Gamer Monitor 19 Windows 11 Pro Trial - TOB COMPUTERS.webp", linkAfiliado: "https://divulgador.magalu.com/EJMzDHVU", avaliacao: 4.5, vendas: 56 },
    { id: 17, categoria: "Computadores", nome: "PC Gamer Entrada TOB i5 + Monitor 19", preco: 1323.00, precoExibicao: "1.323,00", loja: "MAGALU", imagem: "/Computador PC Gamer Completo TOB Intel Core i5 SSD 240GB 8GB Teclado Mouse Mouse Pad e Headset Gamer Monitor 19 Windows 11 Pro Trial - TOB COMPUTERS.webp", linkAfiliado: "https://divulgador.magalu.com/owILJ_d_", avaliacao: 4.4, vendas: 92 },
    { id: 18, categoria: "Computadores", nome: "PC Gamer TOB i7 + GeForce 4GB + Monitor 21.5", preco: 1890.00, precoExibicao: "1.890,00", loja: "MAGALU", imagem: "/Computador PC Gamer Completo TOB Intel Core i7 16GB de Memória SSD 240GB Placa de Video Geforce 4GB Monitor 21.5 com Teclado, Mouse, Mouse Pad e Heads - TOB COMPUTERS.webp", linkAfiliado: "https://wa.me/5566996292993", avaliacao: 4.7, vendas: 28 },
    { id: 19, categoria: "Computadores", nome: "PC Gamer Chroma i7 + SSD 1TB + Monitor 23", preco: 5299.00, precoExibicao: "5.299,00", loja: "MAGALU", imagem: "/Computador Gamer Completo 2Eletro Chroma, Intel Core i7, 16GB.webp", linkAfiliado: "https://divulgador.magalu.com/uAVXZ3F2", avaliacao: 5, vendas: 12 },
    
    // --- NOTEBOOKS ---
    { id: 20, categoria: "Notebooks", nome: "Notebook ASUS Vivobook 15 i5", preco: 2499.00, precoExibicao: "2.499,00", loja: "MAGALU", imagem: "/Notebook ASUS Vivobook 15 X1504VA Intel Core i5 1334U 4GB Ram 256Gb SSD.webp", linkAfiliado: "https://divulgador.magalu.com/_=2TLvyU", avaliacao: 4.8, vendas: 75 },

    // --- CADEIRAS ---
    { id: 21, categoria: "Cadeiras e Mesas", nome: "Cadeira Gamer TGT Heron TC2", preco: 378.86, precoExibicao: "378,86", loja: "MERCADO LIVRE", imagem: "/Cadeira Gamer Tgt Heron Tc2.webp", linkAfiliado: "https://meli.la/2ZQ9hjb", avaliacao: 5, vendas: 150 },
  ];

  const categoriasMenu = [
    { id: "Todos", nome: "Todos os Produtos", icon: <LayoutGrid size={18} /> },
    { id: "Hardware", nome: "Hardware", icon: <Cpu size={18} /> },
    { id: "Computadores", nome: "Computadores", icon: <Monitor size={18} /> },
    { id: "Periféricos", nome: "Periféricos", icon: <MousePointer2 size={18} /> },
    { id: "Monitores", nome: "Monitores", icon: <MonitorSmartphone size={18} /> },
    { id: "Notebooks", nome: "Notebooks", icon: <Laptop size={18} /> },
    { id: "Cadeiras e Mesas", nome: "Cadeiras e Mesas", icon: <Briefcase size={18} /> },
  ];

  const scrollToProducts = () => {
    produtosRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const voltarHome = () => {
    setCategoriaAtiva("Todos");
    setBusca("");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const irParaLoja = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      scrollToProducts();
    }
  };

  const produtosFiltrados = useMemo(() => {
    let filtrados = produtosOriginal.filter(p => {
      const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase());
      const matchCategoria = categoriaAtiva === "Todos" || p.categoria === categoriaAtiva;
      return matchBusca && matchCategoria;
    });
    if (ordenacao === "maior-preco") filtrados.sort((a, b) => b.preco - a.preco);
    if (ordenacao === "menor-preco") filtrados.sort((a, b) => a.preco - b.preco);
    if (ordenacao === "mais-vendidos") filtrados.sort((a, b) => b.vendas - a.vendas);
    return filtrados;
  }, [busca, categoriaAtiva, ordenacao]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] relative overflow-x-hidden font-sans text-slate-900">
      
      {/* Sidebar Overlay */}
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsMenuOpen(false)} />
      
      {/* Sidebar Lateral */}
      <aside className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[101] shadow-2xl transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white text-slate-900">
          <div className="flex items-center gap-2">
            <Zap size={22} className="text-blue-600" fill="currentColor" />
            <span className="font-black text-xl tracking-tighter uppercase italic">Menu</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={24} /></button>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100%-80px)]">
          <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Departamentos</p>
          {categoriasMenu.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => { 
                setCategoriaAtiva(cat.id); 
                setIsMenuOpen(false);
                setTimeout(scrollToProducts, 300);
              }} 
              className={`w-full flex items-center justify-between p-4 rounded-2xl mb-1 transition-all group ${categoriaAtiva === cat.id ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "hover:bg-slate-50 text-slate-600"}`}
            >
              <div className="flex items-center gap-4 font-bold text-sm tracking-tight">{cat.icon} {cat.nome}</div>
              <ChevronRight size={16} className={categoriaAtiva === cat.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"} />
            </button>
          ))}
        </nav>
      </aside>

      {/* Navbar Premium */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-8">
            <button onClick={() => setIsMenuOpen(true)} className="p-2.5 hover:bg-slate-100 rounded-xl text-slate-700 transition-colors"><Menu size={26} /></button>
            <button onClick={voltarHome} className="flex items-center gap-2 outline-none group">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200"><Zap className="text-white" size={20} fill="currentColor" /></div>
              <span className="text-slate-900 font-black italic text-2xl tracking-tighter hidden sm:block">LS SHOP</span>
            </button>
          </div>
          
          <div className="flex-grow max-w-2xl relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="O que você está procurando hoje?" 
              className="w-full bg-slate-100 border-2 border-transparent focus:border-blue-500/20 focus:bg-white rounded-full py-3.5 pl-14 pr-6 font-semibold text-slate-700 outline-none transition-all shadow-inner" 
              value={busca} 
              onChange={(e) => setBusca(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="hidden lg:flex items-center gap-6 text-slate-400">
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <ShieldCheck size={18} className="text-green-500" /> Compra Segura
             </div>
          </div>
        </div>
      </nav>

      {/* Banner Hero Redesenhado */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div 
            className="relative aspect-[16/9] md:aspect-[25/8] w-full overflow-hidden rounded-[32px] md:rounded-[48px] shadow-2xl shadow-blue-900/10 cursor-pointer group" 
            onClick={() => { setCategoriaAtiva("Hardware"); scrollToProducts(); }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent z-10" />
            <div className="absolute bottom-10 left-10 z-20 hidden md:block">
               <h1 className="text-white text-5xl font-black italic tracking-tighter mb-4 leading-none uppercase">Upgrade <br/> Profissional</h1>
               <p className="text-white/80 font-bold text-lg mb-6">As melhores peças para o seu setup gamer.</p>
               <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase italic tracking-widest hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl">Ver Ofertas</button>
            </div>
            <img src="/banner-principal.jpg" alt="Banner LS SHOP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Truck className="text-blue-600" />, title: "Entrega Rápida", desc: "Todo o Brasil" },
            { icon: <ShieldCheck className="text-blue-600" />, title: "Compra Garantida", desc: "Sua segurança em 1º lugar" },
            { icon: <CreditCard className="text-blue-600" />, title: "Melhores Preços", desc: "Ofertas imbatíveis" },
            { icon: <HeadphonesIcon className="text-blue-600" />, title: "Suporte 24h", desc: "Pelo nosso WhatsApp" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-3xl border border-slate-100 flex items-center gap-4 shadow-sm">
               <div className="bg-blue-50 p-3 rounded-2xl">{item.icon}</div>
               <div>
                  <h4 className="font-black text-xs uppercase italic tracking-tighter">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 font-bold">{item.desc}</p>
               </div>
            </div>
          ))}
      </section>

      <div ref={produtosRef} className="scroll-mt-24">
        <header className="max-w-7xl mx-auto pt-10 px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-slate-100 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-600 w-12 h-1.5 rounded-full" />
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Ofertas Selecionadas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">{categoriaAtiva}</h2>
            </div>
            <div className="flex items-center gap-3 bg-slate-100 p-2 rounded-2xl border border-slate-200 text-[10px] font-black uppercase shadow-inner">
              <ArrowUpDown size={18} className="text-slate-400 ml-2" />
              <select className="bg-transparent outline-none cursor-pointer pr-4" value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
                <option value="padrao">Destaques</option>
                <option value="menor-preco">Preço: Menor ao Maior</option>
                <option value="maior-preco">Preço: Maior ao Menor</option>
                <option value="mais-vendidos">Mais Populares</option>
              </select>
            </div>
          </div>
        </header>

        {/* GRID DE PRODUTOS PREMIUM */}
        <section className="max-w-7xl mx-auto py-12 px-6">
          {produtosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {produtosFiltrados.map((p) => (
                <div 
                  key={p.id} 
                  className="group bg-white rounded-[40px] border border-slate-100 flex flex-col hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 relative overflow-hidden cursor-pointer"
                  onClick={() => irParaLoja(p.linkAfiliado)}
                >
                  {/* Badge de Loja */}
                  <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${p.loja === "MERCADO LIVRE" ? "bg-[#FFE600] text-slate-900" : "bg-blue-600 text-white"}`}>
                      {p.loja}
                    </span>
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-bold text-slate-500 flex items-center gap-1 border border-slate-100 shadow-sm uppercase">
                       <ShieldCheck size={10} className="text-green-500" /> Oficial
                    </div>
                  </div>

                  {/* Imagem do Produto */}
                  <div className="h-64 flex items-center justify-center p-12 relative">
                    <div className="absolute inset-0 bg-radial-gradient from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img src={p.imagem} alt={p.nome} className="max-h-full w-auto object-contain transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 z-10" />
                  </div>

                  {/* Conteúdo */}
                  <div className="px-8 pb-8 flex flex-col flex-grow">
                    <div className="text-[10px] font-black text-blue-600/60 uppercase tracking-widest mb-2">{p.categoria}</div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight mb-3 uppercase italic line-clamp-2 h-12 tracking-tighter">
                      {p.nome}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                      </div>
                      <span className="text-[10px] font-black text-slate-400">({p.vendas}+ vendas)</span>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-col gap-0.5 mb-6">
                        <span className="text-[10px] font-bold text-slate-400 uppercase italic">Por apenas</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-blue-600 font-black text-lg italic">R$</span>
                          <div className="text-4xl font-black text-slate-900 tracking-tighter drop-shadow-sm">{p.precoExibicao}</div>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 uppercase">Em estoque no parceiro</span>
                      </div>
                      
                      <button 
                        onClick={(e) => { e.stopPropagation(); irParaLoja(p.linkAfiliado); }}
                        className="w-full bg-slate-900 text-white py-5 rounded-[24px] font-black text-xs tracking-widest uppercase flex items-center justify-center gap-3 group-hover:bg-blue-600 transition-all transform group-hover:translate-y-[-4px] shadow-lg hover:shadow-blue-200"
                      >
                        Ver na Loja Oficial <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-slate-200">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Search size={32} className="text-slate-300" />
              </div>
              <h3 className="text-slate-400 font-black uppercase italic text-xl">Ops! Nenhum produto encontrado...</h3>
              <button onClick={voltarHome} className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">Limpar busca e ver tudo</button>
            </div>
          )}
        </section>
      </div>

      {/* Footer Profissional */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
               <div className="flex items-center gap-2 mb-6">
                  <div className="bg-blue-600 p-2 rounded-xl"><Zap className="text-white" size={18} fill="currentColor" /></div>
                  <span className="text-slate-900 font-black italic text-xl tracking-tighter">LS SHOP</span>
               </div>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Sua curadoria especializada em hardware e periféricos gamer. Selecionamos os melhores produtos das maiores lojas do Brasil para garantir o melhor preço e segurança.
               </p>
            </div>
            <div>
               <h4 className="font-black uppercase italic text-sm mb-6">Links Úteis</h4>
               <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li><button onClick={voltarHome} className="hover:text-blue-600 transition-colors">Início</button></li>
                  <li><button onClick={() => setCategoriaAtiva("Hardware")} className="hover:text-blue-600 transition-colors">Hardware</button></li>
                  <li><button onClick={() => setCategoriaAtiva("Computadores")} className="hover:text-blue-600 transition-colors">Computadores</button></li>
               </ul>
            </div>
            <div>
               <h4 className="font-black uppercase italic text-sm mb-6">Precisa de Ajuda?</h4>
               <a href="https://wa.me/5566996292993" target="_blank" className="flex items-center gap-3 bg-slate-50 p-4 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group">
                  <div className="bg-[#25D366] p-3 rounded-2xl text-white shadow-lg"><MessageCircle size={20} fill="white" /></div>
                  <div>
                     <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">WhatsApp Suporte</p>
                     <p className="text-slate-700 font-black">(66) 99629-2993</p>
                  </div>
               </a>
            </div>
         </div>
         <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">© 2026 LS SHOP - TODOS OS DIREITOS RESERVADOS. ATUAMOS COMO AFILIADOS MAGALU E MERCADO LIVRE.</p>
         </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a 
        href="https://wa.me/5566996292993" 
        target="_blank" 
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={32} fill="white" />
      </a>
    </main>
  );
}