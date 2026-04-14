"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft, ShieldCheck, MessageCircle, Truck, Star } from 'lucide-react';

export default function ProdutoDetalhes() {
  const params = useParams();
  
  const produtos = [
    { id: 1, nome: "Cadeira Gamer TGT Heron TC2 - Ergonômica", preco: "378,86", link: "https://meli.la/2ZQ9hjb", loja: "MERCADO LIVRE", imagem: "/Cadeira Gamer Tgt Heron Tc2.webp", desc: "Conforto premium com ajuste de altura e inclinação. Ideal para longas jornadas de trabalho ou gameplay." },
    { id: 2, nome: "PlayStation VR 2 PS5 Headset + Horizon", preco: "2.488,00", link: "https://meli.la/2SzAyYh", loja: "MERCADO LIVRE", imagem: "/image_12.png", desc: "Imersão total em 4K HDR. Sinta cada detalhe com a tecnologia de rastreamento ocular e resposta tátil." },
    { id: 3, nome: "Placa-Mãe Asus TUF Gaming B550M-Plus", preco: "738,63", link: "https://meli.la/1RL2qy1", loja: "MERCADO LIVRE", imagem: "/Placa-mãe Asus.webp", desc: "Durabilidade de nível militar. Suporte a PCIe 4.0 e rede de 2.5 Gb para uma conexão ultra rápida." },
    { id: 4, nome: "Monitor Gamer LG 24 Polegadas 100Hz IPS Full HD", preco: "505,08", link: "https://meli.la/15GATj9", loja: "MERCADO LIVRE", imagem: "/Monitor Gamer.webp", desc: "Painel IPS com cores vibrantes e taxa de atualização de 100Hz para movimentos fluidos." },
    { id: 5, nome: "Mousepad Gamer Rise Mode Speed - Grande", preco: "21,99", link: "https://divulgador.magalu.com/sKvJ31Uv", loja: "MAGALU", imagem: "/mouse pad.webp", desc: "Bordas costuradas e base antiderrapante. O deslize perfeito para o seu mouse." },
    { id: 6, nome: "GPU RX 7600 GAMING OC 8G Gigabyte", preco: "1.704,99", link: "https://divulgador.magalu.com/lvWXu7KC", loja: "MAGALU", imagem: "/Placa de Vídeo RX.webp", desc: "Arquitetura RDNA 3 para performance incrível em 1080p e suporte a Ray Tracing." },
    { id: 7, nome: "Processador AMD Ryzen 5 4500 - 3.6GHz", preco: "659,99", link: "https://divulgador.magalu.com/df53Kr7F", loja: "MAGALU", imagem: "/Processador AMD Ryzen 5 4500.webp", desc: "6 núcleos e 12 threads de alto desempenho para multitarefas e jogos modernos." },
    { id: 8, nome: "PC Gamer Completo TOB i5 com Monitor 23 Polegadas", preco: "1.933,20", link: "https://divulgador.magalu.com/C3W5Hic2", loja: "MAGALU", imagem: "/pc gamer 1.webp", desc: "Setup completo com Core i5, 16GB RAM e SSD 480GB. Inclui kit periféricos e monitor de 23 polegadas." },
    { id: 9, nome: "PC Gamer Completo TOB i5 com Monitor 19 Polegadas", preco: "1.787,40", link: "https://divulgador.magalu.com/EJMzDHVU", loja: "MAGALU", imagem: "/Computador PC Gamer Completo TOB Intel Core i5 SSD 480GB 16GB Teclado Mouse Mouse Pad e Headset Gamer Monitor 19 Windows 11 Pro Trial - TOB COMPUTERS.webp", desc: "Equilíbrio entre preço e performance: Core i5 com 16GB de RAM e SSD de 480GB para maior agilidade." },
    { id: 10, nome: "PC Gamer Entrada TOB i5 com Monitor 19 Polegadas", preco: "1.323,00", link: "https://divulgador.magalu.com/owILJ_d_", loja: "MAGALU", imagem: "/Computador PC Gamer Completo TOB Intel Core i5 SSD 240GB 8GB Teclado Mouse Mouse Pad e Headset Gamer Monitor 19 Windows 11 Pro Trial - TOB COMPUTERS.webp", desc: "A opção mais acessível para começar no mundo gamer. Core i5, 8GB RAM e SSD de 240GB." },
    { id: 11, nome: "PC Gamer TOB i7 com GeForce 4GB", preco: "1.890,00", link: "https://divulgador.magalu.com/uAVXZ3F2", loja: "MAGALU", imagem: "/Computador PC Gamer Completo TOB Intel Core i7 16GB de Memória SSD 240GB Placa de Video Geforce 4GB Monitor 21.5 com Teclado, Mouse, Mouse Pad e Heads - TOB COMPUTERS.webp", desc: "Potência extra com processador Core i7, 16GB de RAM e placa de vídeo dedicada GeForce de 4GB." },
    { id: 12, nome: "PC Gamer 2Eletro Chroma i7 com SSD 1TB", preco: "5.299,00", link: "https://divulgador.magalu.com/uAVXZ3F2", loja: "MAGALU", imagem: "/Computador Gamer Completo 2Eletro Chroma, Intel Core i7, 16GB.webp", desc: "Máquina de alta performance com SSD de 1TB, 16GB RAM e monitor de 75Hz para gameplay fluida." },
    { id: 13, nome: "Notebook ASUS Vivobook 15 i5", preco: "2.499,00", link: "https://divulgador.magalu.com/_=2TLvyU", loja: "MAGALU", imagem: "/Notebook ASUS Vivobook 15 X1504VA Intel Core i5 1334U 4GB Ram 256Gb SSD.webp", desc: "Produtividade e estilo com processador Intel Core i5 de 13ª geração e tela Full HD de 15,6 polegadas." },
    { id: 14, nome: "Processador AMD Ryzen 7 5700X 3.4GHz", preco: "1.429,99", link: "https://divulgador.magalu.com/arUJ-7VQ", loja: "MAGALU", imagem: "/Processador AMD Ryzen 7 5700X, 3.4GHz.webp", desc: "Performance de elite para jogos e multitarefa. Tecnologia de ponta para socket AM4." },
    { id: 15, nome: "Processador Intel Core i5-12400F", preco: "879,99", link: "https://divulgador.magalu.com/fkXKOBlZ", loja: "MAGALU", imagem: "/Processador Intel Core i5-12400F, 2.5GHz (4.4GHz Max Turbo), Cache 18MB, LGA 1700 - BX8071512400F.webp", desc: "O rei do custo-benefício para games. 12ª geração Intel com Turbo Max de até 4.4GHz." }
  ];

  const produto = produtos.find(p => p.id === Number(params.id));

  if (!produto) return <div className="min-h-screen flex flex-col items-center justify-center font-black italic uppercase text-slate-400">Produto não encontrado <Link href="/" className="text-blue-500 underline mt-4">Voltar</Link></div>;

  return (
    <main className="min-h-screen bg-[#f8fafc] pb-20">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-900 font-black italic group">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> LS SHOP
          </Link>
          <div className="flex gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 flex items-center justify-center bg-white border-r border-slate-50">
            <img 
              src={produto.imagem} 
              alt={produto.nome} 
              className="max-h-[500px] w-auto object-contain hover:scale-110 transition-transform duration-700" 
            />
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase shadow-sm ${
                produto.loja === "MERCADO LIVRE" ? "bg-[#FFE600] text-slate-900" : "bg-blue-600 text-white"
              }`}>
                {produto.loja}
              </span>
              <span className="text-slate-400 font-bold text-xs uppercase flex items-center gap-1">
                <Truck size={14} /> Frete Disponível
              </span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase italic">
              {produto.nome}
            </h1>

            <p className="text-slate-500 font-bold text-lg mb-12 leading-relaxed">
              {produto.desc}
            </p>

            <div className="mt-auto">
              <div className="flex flex-col mb-10">
                <span className="text-slate-400 text-sm font-black uppercase mb-1">Preço Exclusivo</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-blue-600 font-black text-3xl italic">R$</span>
                  <span className="text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-none">
                    {produto.preco}
                  </span>
                </div>
              </div>

              <a 
                href={produto.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-8 rounded-[30px] font-black text-xl flex items-center justify-center gap-4 transition-all active:scale-95 shadow-2xl ${
                  produto.loja === "MERCADO LIVRE" 
                  ? "bg-[#FFE600] text-[#2D3277] hover:bg-[#F7D100] shadow-yellow-100" 
                  : "bg-[#007BFF] text-white hover:bg-[#0056b3] shadow-blue-100"
                }`}
              >
                <ShoppingCart size={28} /> GARANTIR NA {produto.loja}
              </a>

              <div className="mt-8 flex items-center justify-center gap-6 text-slate-400">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                    <ShieldCheck size={16} className="text-blue-500" /> Site Seguro
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                    <Star size={16} className="text-blue-500" /> Produto Original
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a 
        href="https://wa.me/5566996292993" 
        target="_blank" 
        className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50"
      >
        <MessageCircle size={35} fill="white" />
      </a>
    </main>
  );
}